import axios from 'axios';
import Url from './url.js'
//const url = "http://192.168.1.80:3000";

class Rutes {
     static async login(body){
        try {
            const data = await axios.post(Url.urlBackEnd+'/login/api/',body)
            return data.data
        } catch (error) {
            console.log(error);
            return { success:false, msg:"Error al mandar los datos" }
        }
    }
}

export default Rutes;