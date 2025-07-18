import express from "express";
import dotenv from "dotenv";
import { testTagGenerate } from "./services/tagService.js"
import postRouter, { init } from "./routes/posts.js";
import { connectDB } from "./database/db.js";
import cors from "cors";
import { handleSSEConnection } from "./sse/sseManager.js";

// 환경변수 로드 : 각 파일별로 해야함. 전역X
// 전역으로 로드해서 모든 node.js모듈에서 사용 가능
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// CORS 설정
app.use(cors()); // 함수 인자값이 없는 경우 : 모든 도메인 허용

// JSON 파싱 설정
app.use(express.json())
app.use(express.urlencoded({extended:true}));

// SSE 연결 라우트
app.get("/events", handleSSEConnection)

// router 미들웨어 등록 = use 메소드
app.use("/posts", postRouter)

app.listen(PORT, async () => {
    console.log("Server Running at...", PORT);
    const db = await connectDB();
    init(db);
    // testTagGenerate();
})