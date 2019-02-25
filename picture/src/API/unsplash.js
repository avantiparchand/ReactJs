import axios from 'axios';
 export default axios.create({
        baseURL :'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID 23918de2101988a93919045347a2a00a17bdde4da72cd425ac9ad781f92d01ed'
        }
    }

)

