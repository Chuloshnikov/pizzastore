import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Slider from './components/Slider';
import PizzaList from './components/PizzaList';

import { Roboto } from '@next/font/google';
import axios from 'axios';


const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
})

export default function Home({ pizzaList }) {
  return (
    <div className={roboto.className}>
      <Head>
        <title>MCH Pizza</title>
        <meta name="description" content="Best pizza shop in this corner of the earch" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

export const  getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    }
  }
}