import express from "express";
import dotenv from "dotenv";
import { testTagGenerate } from "./services/tagService.js"
import postRouter from "./routes/posts.js";

// 환경변수 로드 : 각 파일별로 해야함. 전역X
// 전역으로 로드해서 모든 node.js모듈에서 사용 가능
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// JSON 파싱 설정
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// router 미들웨어 등록 = use 메소드
app.use("/posts", postRouter)

app.listen(PORT, () => {
    console.log("Server Running at...", PORT);
    // testTagGenerate();
})