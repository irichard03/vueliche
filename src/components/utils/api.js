import axios from "axios";

export default {
    checkUser: function(user) {
        axios.get("/users", user).then((response) => {
            response.json() ;
        });   
    }
};