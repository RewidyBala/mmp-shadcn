import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

export const authConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await fetch(`${process.env.API_PROXY_URL}/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userName: credentials?.username,
              password: credentials?.password,
            }),
          });

          if (!response.ok) {
            return null;
          }

          const user = await response.json();

          if (user) {
            return user;
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.name = user.name;
        token.accessToken = (user as any).response;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.name = token.name;
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt" as const,
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
