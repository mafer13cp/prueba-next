import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps(){
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const characters = await res.json()

    return {
        props:{
            characters: characters.results
        }
    }

}

export default function index({characters}) {
  return <div>
        <Head>
            <title>All characters</title>
            <meta content='all characters from Rick and Morty'></meta>
        </Head>
        <Link href={"/"}>Go back</Link>
        <br/>
      {characters.map(character=>(
        <Link href={"/characters/"+character.id} key={character.id}>
            <div>
                <p>{character.name}</p>
                <Image src={character.image} width={200} height={200}></Image>
            </div>
        </Link>
        ))}
  </div>;
}