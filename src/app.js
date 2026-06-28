import express from 'express';
import cors from 'cors'
import githubRoutes from "./routes/github.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        success: true,
        message: "Github profile analyzer api running",
    })
})

app.use("/api/github", githubRoutes);

export default app;