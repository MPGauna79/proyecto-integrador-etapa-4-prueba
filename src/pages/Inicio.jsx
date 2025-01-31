import { useContext } from 'react'

import './Inicio.scss'
import useTitulo from '../hooks/useTitulo'
import Card from '../components/Card'
import ProductosContext from '../context/ProductosContext'

const Inicio = () => {

  const { productos } = useContext(ProductosContext)

  useTitulo('Inicio')
  
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Aquí encontrarás la mas variada oferta para todos los gustos</h1>
          <p></p>
        </header>
      
      
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
           
  
          
        </div>

      </section> 
    </main>
  )
}

export default Inicio