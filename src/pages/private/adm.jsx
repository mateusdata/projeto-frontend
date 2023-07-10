import React, { useContext, useEffect } from 'react'
import { Contexto } from '../../context/context'

const Adm = () => {
    const {user} = useContext(Contexto);
    useEffect(()=>{
        console.log(user)
    },[])
  return (
    <div>
        administração
    </div>
  )
}

export default Adm