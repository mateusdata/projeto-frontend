import React from 'react'

const Banner = () => {
    const arrayCards = [
        {value:"150", order:"Novas ordens", iconn:"nada", cor:"#1591A5" },
        {value:"53%", order:"Taxa de rejeição", iconn:"nada", cor:"#28A745"},
        {value:"44", order:"Registro de Users", iconn:"nada", cor:"#FFC107"},
        {value:"65", order:"Visitantes únicos", iconn:"nada", cor:"#DC3545"},
    ]
  return (
    <div className='flex flex-wrap gap-4'>
      {arrayCards.map((item, index)=>(
        <div key={index} style={{backgroundColor:item.cor}} className={'border rounded-md p-5 border-red-900 mb-11 w-72 text-white'}>
        <h1>150</h1>
        <span>Novas ordens</span>
        <div>Mais informações</div>
      </div>
      ))}
        
    </div>
  )
}

export default Banner