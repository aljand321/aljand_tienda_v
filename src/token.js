import Url from './url.js'
class Token {
    static async verifyToken(path) {
        localStorage.setItem('route', path )
        const token = await JSON.parse(localStorage.getItem('UserDATA'));
        if (!token) {            
            if (path !== '/login') window.location = Url.UrlFronEnd + "/login"
        }

    }
}

export default Token;