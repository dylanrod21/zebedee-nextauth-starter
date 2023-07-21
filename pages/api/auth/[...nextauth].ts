import NextAuth, { NextAuthOptions } from "next-auth"
// import ZeebedeeProvider from "next-auth/providers/zeebedee" 


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    {
      id: "zebedee",
      name: "Zebedee",
      type: "oauth",
      version: "2.0",
      authorization: "https://api.zebedee.io/v1/oauth2/authorize",
      token: "https://api.zebedee.io/v1/oauth2/token",
      userinfo: "https://api.zebedee.io/v1/oauth2/user",
      profile(profile) {
        return {
          id: profile.id,
          name: profile?.name,
          email: profile?.email,
        }
      },
      clientId: "",
      clientSecret: ""
    }
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
