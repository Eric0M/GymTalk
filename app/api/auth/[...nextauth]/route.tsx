import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectToDB } from "@/utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session }) {
      return session;
    },

    async signIn({ account, profile, user, credentials }: any) {
      console.log("about to try to connect to db");
      try {
        await connectToDB();
        const userExists = await User.findOne({
          email: user.email,
        });
        if (userExists.length === 0) {
          await User.create({
            name: user.name,
            email: user.email,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
