const express = require('express')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to JSD12 (Backend Assessment) - 14_Manit (Arm/อาม) (O_o)i')
})

const port = 1414;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})