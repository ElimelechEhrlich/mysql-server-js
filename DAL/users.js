import dotenv from "dotenv";
import pool from "../db.js";
dotenv.config()

async function getAll() {
    try {
        const [res] = await pool.execute("select * from users")
        return res;
    } catch (error) {
        console.error({ error });
    }
}

async function insertOne(data = {}) {
    try {
        const [res] = await pool.execute(`insert into users (user_name) values(?)`, [data.username])
        if (res.affectedRows === 1) {
            return { insertId: res.insertId }
        }
    } catch (error) {
        console.error({ error });
    }
}

async function findById(id) {
    try {
        const [res] = await pool.execute(`select * from users where id like ?`, [id])       
        return res[0]
    } catch (error) {
        console.error({ error });
    }
}

async function updateUsernameById(id, new_username) {
    try {
        const [res] = await pool.execute(`
            update users
            set user_name = ?
            where id like ?`,
            [new_username, id]
        )
        if (res.affectedRows === 1) {
            return { "Updated user": await findById(id) }
        }
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
    deleteById,
    updateUsernameById
}