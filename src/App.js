import React from 'react'
import GlobalStyles from './global/GlobalStyles'
import { Provider } from 'react-redux'
import Footer from './components/Footer'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesManager from './RoutesManager'
const App = () => {
  // 


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

  return (
    <Provider store={store}>
    <Router>
    <GlobalStyles/>
    <RoutesManager/>
    </Router>
    <Footer/>
    </Provider>
  )
}

export default App

/* Testes Firebase */

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
