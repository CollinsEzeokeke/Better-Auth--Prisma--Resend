import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";
import  SendEmail  from "@/email";
import prisma from "@/prisma";

export const auth = betterAuth({
  advanced: {
    disableCSRFCheck: true,
  },
  plugins: [
    username()
  ],
  database: prismaAdapter(prisma, {
    provider: "sqlite", // or "mysql", "postgresql", ...etc
  }),
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async (user, url, token) => {
      await SendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: url,
      });
    },
    sendResetPassword: async (user: { email: any; }, url: any, token: any) => {
      await SendEmail({
          to: user.email,
          subject: 'Reset your password',
          text: url
      })
  },
  },
  emailAndPassword: {
    requireEmailVerification: true,
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
