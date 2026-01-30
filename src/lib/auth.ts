import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        if (!user) {
          return null;
        }
        const isValid = verifyPassword(credentials.password, user.passwordHash);
        if (!isValid) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          employeeId: user.employeeId
        };
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role;
        token.employeeId = (user as { employeeId?: string | null }).employeeId ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.employeeId = token.employeeId as string | null;
      }
      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
};
