import axios from 'axios';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Providers.Credentials({
      name: 'Credentials',
      authorize: async (credentials) => {
        const res = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/auth/signin`,
          credentials,
        );

        const user = res.data;

        if (user) {
          return user;
        }
        throw '/auth/signin?i=1';
      },
    }),
  ],

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },

  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.uid = user.id;
      }

      return Promise.resolve(token);
    },

    session: async (session, user) => {
      session.userId = user.uid;
      return session;
    },
  },

  database: process.env.MONGODB_URI,
});
