import express from "express";
import dotenv from "dotenv";
import { testTagGenerate } from "./services/tagService.js"

// 환경변수 로드 : 각 파일별로 해야함. 전역X
// 전역으로 로드해서 모든 node.js모듈에서 사용 가능
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.listen(PORT, () => {
    console.log("Server Running at...", PORT);
    console.log("OPENAI_API", process.env.OPENAI_API_KEY);
    testTagGenerate();
})