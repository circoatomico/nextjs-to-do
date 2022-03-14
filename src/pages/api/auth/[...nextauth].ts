import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import firebase from '../../../services/firebaseConnection'

export default NextAuth({

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),

  ],

  callbacks:{
    async session(session, profile) {
      try{

        const lastDonate = await firebase.firestore().collection('users')
        .doc(String(profile.sub))
        .get()
        .then((snapshot) => {

          if (snapshot.exists) {
            return snapshot.data().lastDonate.toDate() // user apoiador
          } else {
            return null; // nao apoiador
          }

        })

        return{
          ...session,
          id: profile.sub,
          vip: lastDonate ? true : false,
          lastDonate: lastDonate
        }

      } catch {

        return {
          ...session,
          id: null,
          vip: false,
          lastDonate: null
        }
      }
    },

    async signIn(users, account, profile) {
      const {email} = users;

      try {
        return true;
      } catch (err) {
        console.log('erro', err);
        return false;
      }
    }
  }


})