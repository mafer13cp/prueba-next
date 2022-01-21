import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const getServerSideProps = async ({params})=>{
    const res = await fetch("https://rickandmortyapi.com/api/character/"+params.id)
    const character = await res.json()

    return {
        props:{
            character
        }
    }
}
export default function personaje({character}) {
  return <div>
      <Head>
            <title>Character</title>
            <meta content='Rick and Morty'></meta>
        </Head>
    <h1>Personaje: {character.name}</h1>
    <Image src={character.image} width={200} height={200}></Image>
    <br/>
    <Link href={"/charactersSSR/"}>Go back</Link>
</div>;
}