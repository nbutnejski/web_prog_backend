import axios from  '../axios/axios'

const adsService={
    fetchAds:()=>
    {
        return axios.get('/api/ads')
    },
     fetchAd:(id)=>
    {
        return axios.get(`api/ads/${id}/id`)
    },
};


export default adsService;


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