import resend from "@/resend";
import EmailVerification from "@/emails/index"

// emailService.ts
interface SendEmailProps {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async ({ to, subject, text }: SendEmailProps) => {
  // Your email sending logic here
  try {
    // Add your email sending implementation
  const { data, error } = await resend.emails.send({
    from: "Chiflex <onboarding@resend.dev>",
       to: to,
      subject: subject,
       react: EmailVerification({text}),
  });
  if(data){
    console.log(data)
  }
  if (error){
    console.error(error)
  }
    console.log('Sending email to:', to);
    // Return success or some result
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;