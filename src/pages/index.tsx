import { GetStaticProps } from 'next';
import { useState } from 'react';
import firebase from '../services/firebaseConnection'
import Head from 'next/head';
import Image from 'next/image'
import boardUser from '../../public/images/board-user.svg'

import styles from '../styles/style.module.scss'

type Data = {
  id: string;
  donate: boolean;
  lastDonate: Date;
  image: string;
}

interface HomeProps{
  data: string;
}

export default function Home({ data }: HomeProps) {

  const [donaters, setDonaters] = useState<Data[]>(JSON.parse(data));

  return (
    <>

      <Head>
        <title>Home Title</title>
      </Head>

      <main className={styles.contentContainer}>
        <Image src={boardUser} alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>Uma ferramenta para seu dia a dia, Escreva, planeje e organize-se.</h1>
          <p>
            <span>100% Gratuita </span> e online.
          </p>
        </section>
        {donaters.length > 0 && <h3>Apoiadores:</h3>}
        <div className={styles.donaters}>
          {donaters.map( item => (
            <Image width={65} height={65} key={item.image} src={item.image} alt="foto de perfil do usuário" />
          ))}
        </div>

      </main>

    </>
  )
}

// Págiuna estática que é gerada novamente a cada 1 hora
export const getStaticProps: GetStaticProps = async () => {

  const donaters = await firebase.firestore().collection('users').get();

  const data = JSON.stringify(donaters.docs.map(donate => {
    return {
      id: donate.id,
      ...donate.data()
    }
  }))

  return{
    props: {
      data
    },
    revalidate: 60 * 60 // Atualiza a cada 60 minutos
  }

}