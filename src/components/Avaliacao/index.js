import React from 'react'
import './index.css'

const Avaliacao = () => {

  return (
    <div>
      <div className='container-fluid'>
        <div className='left-container'>
          <img 
            src='https://images.uncyc.org/pt/thumb/3/34/AlanzokaVesgo.jpeg/300px-AlanzokaVesgo.jpeg' 
            alt='Alanzoka' 
            className='left-img' 
          />
          <div className='redfilter'>.</div>
        </div>
        <div className='right-container'>
          <h3>Em uma escala de 1 a 5, o quanto você apreciou o nosso serviço?</h3>
          <ul className='stars-container mt-4'>
            <li className='star'><img src='star.png' alt='Star 1'/></li>
            <li className='star'><img src='star.png' alt='Star 2'/></li>
            <li className='star'><img src='star.png' alt='Star 3'/></li>
            <li className='star'><img src='star.png' alt='Star 4'/></li>
            <li className='star'><img src='star.png' alt='Star 5'/></li>
          </ul>
          <h5 className='text-suggestion mt-4'>Alguma sugestão para melhorarmos nosso serviço?</h5>
          <textarea className='mt-4' placeholder='Nos dê alguma dica'></textarea>
          <button className='mt-4'>Enviar</button>
        </div>
      </div>
    </div>
  )
}

export default Avaliacao
