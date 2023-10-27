import express from "express"
import cors from "cors"
import routes from "./routes"

const app = express()

app.use(cors())
app.use(express.json())

routes(app)

app.listen(3333, () => console.log("Start API in port 3333"))