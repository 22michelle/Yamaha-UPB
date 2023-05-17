import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Tienes preguntas?</h1>
              <p>Te ayudaremos a tener un gran servicio técnico.</p>
            </div>
            <button className='btn5'>Contactate con nosotros hoy</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo-light.png' alt='' />
              <h2>Necesitas ayuda con algo?</h2>
              <p>Reciba actualizaciones, ofertas especiales, tutoriales, descuentos enviados directamente en su bandeja de entrada todos los meses</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribete</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Yamaha. Designd By UPB.</span>
      </div>
    </>
  )
}

export default Footer
