import axios from "axios";

const axoisClient = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/'
})
axoisClient.interceptors.request.use((config)=>{
    config.headers.Accept ='application/json'
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWNjZjhlMzE5MDA0MzI3ZDZjNTE0MDQ0ZjE3NzIxMSIsInN1YiI6IjY1MWRiZmNjYzUwYWQyMDBhZDgyZDk3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p8mJQt2eX2S4WXellnQEoaxQYgAMoM5B3aHkO9oToTA'
    return config
})
axoisClient.interceptors.response.use((res)=>{
    return res
},(error)=>{
    try {
        const{response} = error
        if(response.status === 401){
            console.log(response)
        }   
    } catch (error) {
        console.log(error)
    }
    throw error
})
export default axoisClient