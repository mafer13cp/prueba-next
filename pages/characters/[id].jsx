import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticPaths(){
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const {results:characters} = await res.json()

    const rutas = characters.map(character=>({
      params:{
        id:""+character.id
      }
    }))    

    console.log(rutas)

    return {
        paths:rutas,
        fallback:false // Hace que si no existe la ruta se muestre 404
    }
}

export async function getStaticProps({params}){
  const res = await fetch("https://rickandmortyapi.com/api/character/"+params.id)
  const character = await res.json()

  return {
      props:{
          character
      }
  }

}

export default function Usuario({character}) {
    const router = useRouter()
    const {id} = router.query

    return <div>
        <Head>
            <title>Character</title>
            <meta content='Rick and Morty'></meta>
        </Head>
        <h1>Personaje: {character.name}</h1>
        <Image src={character.image} width={200} height={200}></Image>
        <br/>
        <Link href={"/characters/"}>Go back</Link>
    </div>;
}
