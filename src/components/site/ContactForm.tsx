"use client";

import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

/**
 * Deliberately loose: it rejects the obvious typos (missing @, missing dot,
 * trailing spaces) without pretending to know which addresses exist. Anything
 * stricter starts refusing valid addresses, and only a confirmation email can
 * actually prove one works.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(
  values: Record<Field, string>,
  messages: Dictionary["contact"]["form"]["errors"],
): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = messages.name;
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = messages.email;
  }
  if (values.message.trim().length < 10) {
    errors.message = messages.message;
  }

  return errors;
}

/*
 * EmailJS credentials. All three are public by design — the send happens in the
 * browser, so they end up in the bundle no matter where they are stored. The
 * protection that matters is on the EmailJS side: Account → Security, where the
 * allowed origins and the rate limit live.
 */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/**
 * Sends the form through EmailJS.
 *
 * The keys below are the template variables, so they have to match the
 * `{{placeholders}}` in the EmailJS template exactly:
 *
 *   {{name}}     who wrote in            → the form's Name field
 *   {{email}}    their address           → the form's Email field, also Reply To
 *   {{message}}  what they wrote         → the form's Message field
 *   {{title}}    subject line            → filled in here, not by the visitor
 *   {{time}}     when it was sent        → the visitor's local time
 *
 * Rename a variable in the dashboard and it has to be renamed here too, or that
 * line arrives blank.
 *
 * Throwing on missing config is deliberate: a silent success toast on a form
 * that quietly sent nothing is the worst possible failure for a contact page.
 */
async function submitMessage(values: Record<Field, string>): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS is not configured — set NEXT_PUBLIC_EMAILJS_SERVICE_ID, " +
        "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.",
    );
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
      title: `New message from ${values.name.trim()}`,
      time: new Date().toLocaleString(),
    },
    { publicKey: PUBLIC_KEY },
  );
}

const EMPTY = { name: "", email: "", message: "" };

export function ContactForm({ dict }: { dict: Dictionary["contact"]["form"] }) {
  const [values, setValues] = useState<Record<Field, string>>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [pending, setPending] = useState(false);
  // Fields only start showing errors after their first blur or a failed
  // submit — validating while someone is still typing their address is noise.
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});

  const setField = (field: Field, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    // Once a field is showing an error, re-check on every keystroke so the
    // message clears as soon as the input becomes valid.
    if (touched[field]) {
      setErrors(validate(next, dict.errors));
    }
  };

  const handleBlur = (field: Field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values, dict.errors));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(values, dict.errors);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so a keyboard or screen-reader user is
      // taken to it rather than left guessing why nothing happened.
      const firstInvalid = (["name", "email", "message"] as const).find(
        (field) => found[field],
      );
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setPending(true);
    try {
      await submitMessage(values);
      toast.success(dict.successTitle, { description: dict.successBody });
      setValues(EMPTY);
      setTouched({});
      setErrors({});
    } catch {
      toast.error(dict.errorTitle, { description: dict.errorBody });
    } finally {
      setPending(false);
    }
  };

  const showError = (field: Field) =>
    touched[field] && errors[field] ? errors[field] : undefined;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          field="name"
          label={dict.name}
          error={showError("name")}
        >
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder={dict.namePlaceholder}
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={Boolean(showError("name"))}
            aria-describedby={showError("name") ? "contact-name-error" : undefined}
          />
        </FormField>

        <FormField field="email" label={dict.email} error={showError("email")}>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={dict.emailPlaceholder}
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={Boolean(showError("email"))}
            aria-describedby={showError("email") ? "contact-email-error" : undefined}
          />
        </FormField>
      </div>

      <FormField field="message" label={dict.message} error={showError("message")}>
        <Textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder={dict.messagePlaceholder}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(showError("message"))}
          aria-describedby={
            showError("message") ? "contact-message-error" : undefined
          }
          className="resize-y"
        />
      </FormField>

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="group h-12 w-full text-base sm:h-11 sm:w-auto sm:self-start sm:px-5 sm:text-[0.95rem]"
      >
        {pending ? (
          <>
            <Loader2 className="animate-spin" aria-hidden />
            {dict.sending}
          </>
        ) : (
          <>
            {dict.send}
            <Send className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}

/** Label + control + error message, wired together by a shared id stem. */
function FormField({
  field,
  label,
  error,
  children,
}: {
  field: Field;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={`contact-${field}`}>{label}</Label>
      {children}
      {/* Always rendered as a live region so the message is announced when it
          appears, rather than only being there for sighted users. */}
      <p
        id={`contact-${field}-error`}
        role="alert"
        className={cn(
          "text-xs text-destructive transition-opacity",
          error ? "opacity-100" : "sr-only opacity-0",
        )}
      >
        {error}
      </p>
    </div>
  );
}
