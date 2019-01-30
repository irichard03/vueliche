import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: true,
        loggedIn: true,
        exists: false,
        functioning: "yes",
        currentRoom: 0,
        hasKey: false,
        messager: "",
        currentUser: {
            email: "",
            password: "",
            authentication: ""
        },
        rooms: [
            {
                number: 0,
                coords: [0, 0],
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
                coords: [1, 0],
                image: "placeholder2.png",
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
                coords: [2, 0],
                image: "placeholder3.png",
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
                coords: [0, 1],
                image: "placeholder4.png",
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
                coords: [1, 1],
                image: "placeholder5.png",
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
                coords: [2, 1],
                image: "placeholder6.png",
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
                coords: [2, 0],
                image: "placeholder7.png",
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
                coords: [2, 1],
                image: "placeholder8.png",
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
                coords: [2, 2],
                image: "placeholder9.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: false,
                North: false,
                West: false,
                South: true,
                requiresKey: false,
                locked: false
            },
        ],

    

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

        getRoom(state, position) {
            for (let i = 0; i < state.rooms.length; i++) {
                if (state.rooms[i] === position) {
                    return i;
                }
            }
        },

        addX(state, sign) {
            let temp;
            if (sign > 0) {
                temp = state.rooms[state.currentRoom].coords[0] + 1;
                return temp;
            }
            else
                temp = state.rooms[state.currentRoom].coords[0] - 1;
            return temp;
        },

        addY(state, sign) {
            let temp;
            if (sign > 0) {
                temp = state.rooms[state.currentRoom].coords[1] + 1;
                return temp;
            }
            else
                temp = state.rooms[state.currentRoom].coords[1] - 1;
            return temp;
        }
    },

    nextRoom(state, direction) {
        if (direction === "North") {
            let playerPosition = this.addY(state, 1);
            let intendedRoom = this.getRoom(state, playerPosition);
            if (state.rooms[intendedRoom].requiresKey) {
                if (state.hasKey) {
                    this.removeKey(state);
                    return state.currentRoom = state.rooms[intendedRoom].number;
                }
                else {
                    return state.messager = "You need a Key to go this direction.";
                }
            }
            else {
                return state.currentRoom = state.rooms[intendedRoom].number;
            }
        }
        else if (direction === "South") {
            let playerPosition = this.addY(state, -1);
            let intendedRoom = this.getRoom(state, playerPosition);
            if (state.rooms[intendedRoom].requiresKey) {
                if (state.hasKey) {
                    this.removeKey(state);
                    return state.currentRoom = state.rooms[intendedRoom].number;
                }
                else {
                    return state.messager = "You need a Key to go this direction.";
                }
            }
            else {
                return state.currentRoom = state.rooms[intendedRoom].number;
            }
        }
        else if (direction === "East") {
            let playerPosition = this.addX(state, 1);
            let intendedRoom = this.getRoom(state, playerPosition);
            if (state.rooms[intendedRoom].requiresKey) {
                if (state.hasKey) {
                    this.removeKey(state);
                    return state.currentRoom = state.rooms[intendedRoom].number;
                }
                else {
                    return state.messager = "You need a Key to go this direction.";
                }
            }
            else {
                return state.currentRoom = state.rooms[intendedRoom].number;
            }
        }
        else if (direction === "West") {
            let playerPosition = this.addX(state, -1);
            let intendedRoom = this.getRoom(state, playerPosition);
            if (state.rooms[intendedRoom].requiresKey) {
                if (state.hasKey) {
                    this.removeKey(state);
                    return state.currentRoom = state.rooms[intendedRoom].number;
                }
                else {
                    return state.messager = "You need a Key to go this direction.";
                }
            }
            else {
                return state.currentRoom = state.rooms[intendedRoom].number;
            }
        }
    },

    removeKey(state) {
        return state.hasKey = false;
    },

    addkey(state) {
        return state.hasKey = true;
    }
});