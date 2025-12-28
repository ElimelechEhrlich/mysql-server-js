import dotenv from "dotenv";
import mysql from "mysql2/promise"
dotenv.config()

const pool = mysql.createPool({
    host: process.env.HOST || "localhost",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "rootpass123",
        database: process.env.DATABASE || "mysqldb"
})

export default pool