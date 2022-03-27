import React from 'react'
import GlobalStyles from './global/GlobalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Provider } from 'react-redux'
import store from './store'
const App = () => {
  return (
    // <Provider store={store}>
    <Router>
    <GlobalStyles/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </Router>
    // </Provider>
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
