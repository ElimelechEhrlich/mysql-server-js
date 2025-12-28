import dotenv from "dotenv";
import pool from "../db.js";
dotenv.config()

async function getAll() {
    try {
        const [rows] = await pool.execute("select * from users")
        return rows;
    } catch (error) {
        console.error({ error });
    }
}

async function insertOne(data = {}) {
    try {
        const [rows] = await pool.execute(`insert into users (user_name) values(?)`, [data.username])
        if (rows.affectedRows === 1) {
            return { insertId: rows.insertId }
        }
    } catch (error) {
        console.error({ error });
    }
}


async function findById(id) {
    try {
        const res = await pool.execute(`select * from users where id like ?`, [id])       
        return res[0]
    } catch (error) {
        console.error({ error });
    }
}

async function deleteById(id) {
    try {
        const [res] = await pool.execute(`delete from users where id = ?`, [id])
        return res
    } catch (error) {
        console.error({ error });
    }
}


export {
    getAll,
    insertOne,
    findById,
    deleteById
}