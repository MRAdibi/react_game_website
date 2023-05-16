import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: '172cab6a5f80405f86fbe3d760818621'
    }
})