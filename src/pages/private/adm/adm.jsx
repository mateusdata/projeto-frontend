import React, { useContext, useEffect } from 'react'
import { Contexto } from '../../../context/context'
import Table from '../../../components/tables/table';
import GlobalLayout from '../../home/globalLayout';
import Banner from '../../../components/banner/banner';
import Modal from '../../../components/modal/modal';
import addUser from "../../../components/form/addUser"
import Formulario from '../../../components/form/addUser';


const Adm = () => {
  const { user } = useContext(Contexto);
  useEffect(() => {
    console.log(user)
  }, [])
  return (
   <>
   <GlobalLayout>
    <Modal>
    <div className=''>
      <Formulario/>
    </div>
    </Modal>
    <Banner/>
    <Table/>
   </GlobalLayout>
   </>
  )
}

export default Adm