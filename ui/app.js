import { question } from "readline-sync"
import { deleteById, findById, getAll, insertOne } from "../DAL/users.js";

const menu = ["Get all users", "Insert user", "Search user by id", "Delete user by id", "Exit"]

async function app() {
    let choice = 1  
    while (choice !== 5) {
        menu.forEach((option, i) => {
            console.log(`\n${i + 1}. ${option}`);        
        });
        let choice = Number(question(`\nyour choice: `))
        switch (choice) {
            case 1:
                console.log(await (getAll()))
                break;
            case 2:
                const username = question(`\nname: `)
                console.log(await insertOne({username: username}));
                break;
            case 3:
                const id_to_search = question(`\nid: `)
                console.log(await findById(id_to_search));
                break;
            case 4:
                const id_to_delete = question(`\nid: `)
                console.log(await deleteById(id_to_delete));
                break;
            case 5:
                return 
        }
    }
}

app()