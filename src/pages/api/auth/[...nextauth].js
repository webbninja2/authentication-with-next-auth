import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
            console.log("credentials", credentials)
          const userDetails = { id: 12, email: "test1@yopmail.com", password: "password" };
          if (credentials?.email === userDetails.email && credentials?.password === userDetails.password) {
            return userDetails;
          }
          return null;
        },
      }),  /// call api  strucher https://next-auth.js.org/providers/credentials
   
  ],
  pages: {
    signIn: '/auth/',
  },
  callbacks: {

    /// this code is used to if user logged then which page do you want to redirect because we can't handle the google promise
    // async signIn(user) {
    //     if (user) {
    //       return '/profile/'; 
    //     }
    //     return false;
    //   },
    async session({ session }) {
      session.user.id = 23;
      return session;
    },
  },
}

export default NextAuth(authOptions)