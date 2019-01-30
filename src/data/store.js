import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       authenticated: false,
       loggedIn: false,
       exists: false,
       functioning: "",
       currentUser: {
           email: "",
           password: "",
           authentication: ""
       },
       rooms: [
           {
               number: 1,
               image: "../../placholder1.png",
               description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing."
           },

           {
                number: 2,
                image: "../../public/placeholder2.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive."
            },

            {
                number: 3,
                image: "placeholder3.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore."
            },
       ]

    },
    mutations: {
        register(state, payload){
            axios.post("/checkuser", {email: payload.email} ).then((response) => {
                    if(response) {
                    state.currentUser.email = payload.email;
                    state.currentUser.password = payload.password;
                    state.currentUser.authentication = "cheeseburger";
                    }
                    else {
                        state.functioning = "nope";
                    }
              }).catch((error) => {
               throw error;
              });
        }
    },
    actions: {

    },
});