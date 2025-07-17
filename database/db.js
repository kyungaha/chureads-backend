
import { MongoClient } from 'mongodb';

let db = null;

export const connectDB = async () => {
    try {
        // 이미 DB가 있는 경우 db반환 
        if (db) return db;

        // DB 연결 후 해당 DB반환
        // 1. 클라이언트 객체생성 (URI 호출)
        // 2. 생성한 클라이언트 connect
        // 3. 클라이언트에 db이름 부여
        const MONGODB_URI=process.env.MONGODB_URI_LOCAL;
        console.log("🚀 ~ connectDB ~ MONGODB_URI:", MONGODB_URI);
    
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        console.log("💕 Mongo DB 연결 성공!!");
        
        db = client.db(process.env.DB_NAME);

        return db; 
    } catch (error) {
        console.log("💢 MongoDB 연결실패:", error)
        process.exit(1); // 프로그램 강제종료 하는 코드
    }

    
}