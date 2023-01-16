// import { v4 as uuidv4 } from 'uuid';


// let users = []


//     export const getUsers = (req, res) => {
//         // console.log(users);
//         res.send(users)
//     }

//     export const getUser = (req, res) => {
//         //retrieve the user's id 
//         // const id = req.params.id
//         //but we can destructure the object
    
//         const { id } = req.params
//         //  res.send(req.params)
    
//          //find user with specific id
//          const foundUser = users.find( (user) => user.id === id)
//          res.send(foundUser)
//     }
//     export const deleteUser = (req, res) => {
//         const { id } = req.params
    
//         users = users.filter( (user) => user.id !== id)
//         res.send(`deleted user with id ${id} `)
//     }
//     export const updateUser = (req, res) => {
//         const { id } = req.params
//         //find user to be updated, whether its their first name, last name, age
//         const { firstName, lastName, age } = req.body
//         const userToUpdate = users.find( (user) => user.id ==id)
//         if(firstName) userToUpdate.firstName = firstName
//         if(lastName) userToUpdate.lastName = lastName
//         if(age) userToUpdate.age = age
    
//         res.send(`user with the id ${id} has been updated`)
        
    
//     }