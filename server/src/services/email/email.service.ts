import { Resend } from "resend";
import { welcomeEmailTemplate } from "../../templates/welcome-email";
import { verificationEmailTemplate } from "../../templates/verification-email";
import { forgotPasswordEmailTemplate } from "../../templates/forgot-password-email";
import type { EmailTemplateProps } from "../../types/emailTemplateTypes";

interface SendEmailProps {
  email: string;
  username: string;
  verificationUrl: string;
  subject: string;
  emailType: "welcome" | "verify" | "forgotPassword";
}

interface EmailTemplateTypes {
  welcome: ({ username, verificationUrl }: EmailTemplateProps) => string;
  verify: ({ username, verificationUrl }: EmailTemplateProps) => string;
  forgotPassword: ({ username, verificationUrl }: EmailTemplateProps) => string;
}

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is not defined");
}

const resend = new Resend(apiKey);

const emailTemplates: EmailTemplateTypes = {
  welcome: welcomeEmailTemplate,
  verify: verificationEmailTemplate,
  forgotPassword: forgotPasswordEmailTemplate,
};

export const sendEmail = async ({
  email,
  username,
  verificationUrl,
  subject,
  emailType,
}: SendEmailProps) => {
  const html = emailTemplates[emailType]({
    username,
    verificationUrl,
  });

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [email],
    subject: subject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error("Failed to send verification email");
  }

  return data;
};
