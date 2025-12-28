import { question } from "readline-sync"
import { findById, getAll, insertOne } from "../DAL/users";

const nenu = ["get all users", "insert user", "search user by id", "delete user by id"]

function app() {
    let choice = 1  
    while (choice !== 5) {
        menu.forEach((option, i) => {
            console.log(`${i + 1}. ${option}`);        
        });
        let choice = Number(question(`your choice: `))
        switch (choice) {
            case 1:
                console.log(getAll())
                break;
            case 2:
                const username = question(`name: `)
                console.log(insertOne({username: username}));
                break;
            case 3:
                let id = question(`id: `)
                console.log(findById(id));
                break;
            case 4:
                id = question(`id: `)
                console.log(findById(id));
                break;
            case 5:
                return 
        }
    }
}

app()