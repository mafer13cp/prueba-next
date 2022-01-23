import React from 'react';
import axios from 'axios'
export async function getServerSideProps(){
    // Lunes: Una solución a este problema
    const {data:products} = await axios.get("http://localhost:3000/api/productos")

    return {
        props:{
            products
        }
    }
}


export default function index({products}) {
  return <section>
      {products.map(product=><article key={product.id}>
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
      </article>)}
  </section>;
}