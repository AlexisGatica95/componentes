import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <header>
        <nav>
          <a href="inicio.html">Inicio</a>
          <a href="contacto.html">Contacto</a>
          <a href="about.html">About</a>
          <a href="registro.html">registro</a>
          <a href="info.html">info</a>
        </nav>
      </header>

      <main>
        <article>
          <h2>Artículo 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero vitae neque commodo tristique.</p>
        </article>

        <article>
          <h2>Artículo 2</h2>
          <p>Integer id justo ac est consectetur fermentum id non ligula. Proin vitae ante nec justo rutrum bibendum.</p>
        </article>

        <article>
          <h2>Artículo 3</h2>
          <p>Curabitur et justo vel lectus scelerisque rhoncus ac a est. Etiam aliquet est nec justo fermentum, sit amet bibendum nisi varius.</p>
        </article>
      </main>

      <footer>
        <p>&copy; 2023 - Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
