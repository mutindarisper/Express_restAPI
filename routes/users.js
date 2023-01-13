import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

const users = [
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 25
    // },
    // {
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     age: 24
    // }
]
router.get('/', (req, res) => {
    // console.log(users);
    res.send(users)
});

router.post('/', (req, res) => {
// console.log('post route reached')
const user = req.body

// const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// const userWithId = {...user, id:uuidv4()}
 /*created a user with id and assigned  it all the properties
 of a user, i.e firstName, lastName and age, and then added another property of id, which is the userId*/


users.push({...user, id:uuidv4()})

res.send(`User with the name ${user.firstName} added to the database`)
})
export default router;