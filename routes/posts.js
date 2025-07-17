import express from 'express';

// 게시물 관련 모든 API 엔드포인트를 관리하는 라우터
const router = express.Router();

// GET/posts - 모든 게시물 조회
router.get("/", async(req, res) => {
    try {
        // DB에서 데이터 불러오기
    
        res.status(200).json({message: "GET요청 성공했습니다."})
        console.log("GET요청성공");
    } catch (error) {
        console.log(`GET요청에러: ${error}`);
    }

})

// GET /posts/:id  -- 특정 게시물 조회
router.get("/", (req,res) => {

})

// POST /posts -- 새 게시물 추가
router.post("/", (req, res) => {

})

// PUT /post/:id
router.put("/", (req, res) => {

})

// DELETE /post/:id
router.delete("/", (req, res) => {

})



export default router // 많은 router가 작성이 될텐데 모두 하나로 합쳐서 반환하겠다.