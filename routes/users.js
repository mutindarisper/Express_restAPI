import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = []
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


users.push({...user, id: uuidv4() })

res.send(`User with the name ${user.firstName} added to the database`)
})


router.get('/:id', (req, res) => {
    //retrieve the user's id 
    // const id = req.params.id
    //but we can destructure the object

    const { id } = req.params
    //  res.send(req.params)

     //find user with specific id
     const foundUser = users.find( (user) => user.id === id)
     res.send(foundUser)
})

//route to delete users with specific id
router.delete('/:id', (req, res) => {
    const { id } = req.params

    users = users.filter( (user) => user.id !== id)
    res.send(`deleted user with id ${id} `)
})

//update a user, partially modify sth
router.patch('/:id', (req, res) => {
    const { id } = req.params
    //find user to be updated, whether its their first name, last name, age
    const { firstName, lastName, age } = req.body
    const userToUpdate = users.find( (user) => user.id === id)
    if(firstName) userToUpdate.firstName = firstName
    if(lastName) userToUpdate.lastName = lastName
    if(age) userToUpdate.age = age

    res.send(`user with the id ${id} has been updated`)
    

})
export default router;