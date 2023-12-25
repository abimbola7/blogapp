import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from 'next-auth/providers/google'
import User from "@/app/(models)/user";


export const handler = NextAuth({
  providers : [
    Credentials({
      name : "credentials",
      credentials : {},
      async authorize(credentials) {
        const { firstName, email } = credentials
        console.log(firstName, email)

        try {
          const user = await User.findOne({email})
          console.log(user)
          if (!user) return null;
          return user
        }catch(error) {
          console.log(error, "Error in auth")
        }
      }
    })
  ],
  session : {
    strategy : "jwt"
  },
  secret : process.env.NEXTAUTH_SECRET,
  pages : {
    signIn : "/auth/signin"
  },
  callbacks : {
    async session({ session, token, user }) {
      const sessionUser = await User.findOne({ email : session.user.email })
      if (sessionUser) {
        console.log(sessionUser, "SESSSSSIONSUSSSSER")
        session.user.id = sessionUser._id.toString()
        session.user.name = sessionUser.firstName
        return session;
      }
    }
  }
})

export { handler as GET, handler as POST };