import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await res.json();


    return {
        props: {
            characters: characters.results
        }
    }
}

export default function index({characters}) {
  return <div>
      {characters.map(character => <p key={character.id}>{character.name}</p>)}
  </div>;
}
