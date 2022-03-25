import React from 'react'
import GlobalStyles from './global/GlobalStyles'




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
    <div>
      OPA
    </div>
    </>
  )
}

export default App
