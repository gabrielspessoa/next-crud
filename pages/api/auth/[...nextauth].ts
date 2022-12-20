import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { firebaseConfig } from '../../../lib/firebase';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],

  adapter: FirestoreAdapter(firebaseConfig),

  callbacks: {
    session({ session, token, user }) {
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
