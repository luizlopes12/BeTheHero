import React from 'react'
import GlobalStyles from './global/GlobalStyles'
import Login from './pages/Login'
// import { database } from './services/firebase'


// const testGetDb = () => {
//   database.ref('cases').on('value', item =>{
//   console.log(item.val())
// })}
// const testInsertDb = () =>{
//   database.ref('cases').push({
//     id: 2,
//     title:'Titulo 2',
//     description: 'Descrição 2',
//     price: '22',
//     contact: {
//       ongEmail: 'luiz@luiz.com',
//       ongWhatsapp: '999999999'
//     }
//   })
// }
const App = () => {
  return (
    <>
    <GlobalStyles/>
    <Login/>
    </>
  )
}

export default App
