import  express  from 'express'

import cors from 'cors'

const app = express()
const PORT = 8787

const DB = []

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))


app.post("/", (req, res) => {
    const data = req.body
    DB.push(data)
    console.log(DB)
    res.end()
})

app.get("/api/v1/guestbook", (req,res) => {
    
    const data = DB
    res.json(data)
})



















app.listen(PORT, () => console.log("Server läuft auf PORT:" + PORT))