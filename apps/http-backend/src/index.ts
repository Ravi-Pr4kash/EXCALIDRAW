import express from "express"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";

const app = express();

app.use(express.json())

app.post('/signup', (req,res) => {
    const {username, firstname, lastname, password} = req.body;

})

app.post('/signin', (req,res) => {
    const {username, password} = req.body;

    if(!password) {

    }
    const userId = 1;
    jwt.sign({
        userId
    },JWT_SECRET)
})

app.post("/room", middleware,(req,res) => {

})

app.listen(3001)