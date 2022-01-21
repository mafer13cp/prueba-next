import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Saludo from '../components/Saludo';
import Link from 'next/link';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open&&<p>hola</p>}
      <button onClick={()=> {setOpen(!open)}}>push me</button>
      <Saludo/>
    </div>
  )
}
