import axios from  '../axios/axios'

const userService={
    fetchUsers:()=>
    {
        return axios.get('/api/users')
    },
    fetchUser:(id)=>
    {
        return axios.get(`api/users/${id}/id`)
    },
    deleteUser:(id)=>
    {

        return axios.patch(`api/users/${id}`)
    },
    createNewUser:(username,password,id,email)=>{

        const User={
            username:username,
            password:password,
            email:email,
            id:id
        };

        alert(username);
        return axios.post("/api/users",User,{
           headers: {'Content-Type': 'application/json'}})
    }

};


export default userService;


// ,
// createNewUser:(username,password,email)=>
// {
//     const data={
//         username:username,
//         password:password,
//         email:email
//     }
//     return axios.post("/users/create",data,{
//         headers: {'Content-Type': 'application/json'}
//     })
// }