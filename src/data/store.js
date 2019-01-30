import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: false,
        loggedIn: false,
        exists: false,
        functioning: "yes",
        currentRoom: 0,
        currentPosition: [0,0],
        currentUser: {
            email: "",
            password: "",
            authentication: ""
        },
        rooms: [
            {
                number: 0,
                coords: [0,0],
                image: "placeholder1.png",
                description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing.",
                East: true,
                North: false,
                West: false,
                South: false,
                requiresKey: false,
                locked: false

            },

            {
                number: 1,
                coords: [1,0],
                image: "../../public/placeholder2.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive.",
                East: true,
                North: true,
                West: true,
                South: false,
                requiresKey: false,
                locked: false

            },

            {
                number: 2,
                coords: [2,0],
                image: "../../public/placeholder3.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: false,
                North: false,
                West: true,
                South: false,
                requiresKey: false,
                locked: false
            },

            {
                number: 3,
                coords: [0,1],
                image: "../../public/placeholder4.png",
                description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing.",
                East: false,
                North: true,
                West: false,
                South: false,
                requiresKey: false,
                locked: false

            },

            {
                number: 4,
                coords: [1,1],
                image: "../../public/placeholder5.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive.",
                East: true,
                North: false,
                West: true,
                South: true,
                requiresKey: true,
                locked: true
            },

            {
                number: 5,
                coords: [2,1],
                image: "../../public/placeholder6.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: false,
                North: true,
                West: true,
                South: false,
                requiresKey: false,
                locked: false
            },

            {
                number: 6,
                coords: [2,0],
                image: "../../public/placeholder7.png",
                description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing.",
                East: true,
                North: false,
                West: false,
                South: true,
                requiresKey: true,
                locked: true
            },

            {
                number: 7,
                coords: [2,1],
                image: "../../public/placeholder8.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive.",
                East: false,
                North: false,
                West: false,
                South: false,
                requiresKey: false,
                locked: false
            },

            {
                number: 8,
                coords: [2,2],
                image: "../../public/placeholder9.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: false,
                North: false,
                West: false,
                South: true,
                requiresKey: false,
                locked: false
            },
        ]

    },
    mutations: {
        register(state, payload) {
            axios.post("/checkuser", { email: payload.email }).then((response) => {
                if (response) {
                    state.currentUser.email = payload.email;
                    state.currentUser.password = payload.password;
                    state.currentUser.authentication = "cheeseburger";
                }
                else {
                    state.functioning = "no";
                }
            }).catch((error) => {
                throw error;
            });
        },

        addX(state, sign){
            if(sign > 0){
                return state.rooms[state.currentRoom].coords[0] +=1;
            }
            else
                return state.rooms[state.currentRoom].coords[0] -=1;
        },
        
        addY(state, sign){
            if(sign > 0){
                return state.rooms[state.currentRoom].coords[1] +=1;
            }
            else
                return state.rooms[state.currentRoom].coords[1] -=1;
        }
    },
    actions: {

    },
});