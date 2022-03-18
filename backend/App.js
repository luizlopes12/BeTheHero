const express = require('express')
const App = express()
const cors = require('cors')
const port = 3000

App.use(cors())
App.use(express.json())

App.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log('Funcionando')
})