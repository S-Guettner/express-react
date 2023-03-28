import  express  from 'express'

import cors from 'cors'

const app = express()
const PORT = 8787

app.use(express.json())


app.use(cors({ origin: "http://localhost:5173" }))


app.post("/", (req, res) => {
    const data = req.body
    console.log(data)
})




















app.listen(PORT, () => console.log("Server läuft auf PORT:" + PORT))