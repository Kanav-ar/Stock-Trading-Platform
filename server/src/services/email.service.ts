import { Resend } from "resend";
import { verificationEmailTemplate } from "../templates/verification-email";
import { welcomeEmailTemplate } from "../templates/welcome-email";
import { forgotPasswordEmailTemplate } from "../templates/forgot-password-email";
import type { EmailTemplateProps } from "../types/emailTemplateTypes";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is not defined");
}

const resend = new Resend(apiKey);

interface EmailTemplateTypes {
  welcome: ({ username, verificationUrl }: EmailTemplateProps) => string;
  verify: ({ username, verificationUrl }: EmailTemplateProps) => string;
  forgotPassword: ({ username, verificationUrl }: EmailTemplateProps) => string;
}

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
}: {
  email: string;
  username: string;
  verificationUrl: string;
  subject: string;
  emailType: "welcome" | "verify" | "forgotPassword";
}) => {
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
