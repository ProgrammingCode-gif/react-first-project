import axios from "axios";

class UsersAPI {
    static async getUsers() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default UsersAPI