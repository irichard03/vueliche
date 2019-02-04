import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        authenticated: false,
        loggedIn: false,
        currentRoom: 0,
        hasKey: false,
        token: null,
        notStarted: true,
        inventory: {
           hat: "nothing.png",
           staff: "nothing.png",
           cape: "nothing.png",
           image: "skeleton.png"

        },
        messenger: "Already registered? Please sign in.",
        spellbook: {
            image: "spellbook.png"
        },
        currentUser: {
            email: "",
            password: "",
            authentication: ""
        },
        rooms: [
            {
                number: 0,
                coords: [0, 0],
                image: "back1.png",
                description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing.",
                East: 1,
                North: -1,
                West: -1,
                South: -1,
                requiresKey: false,
                locked: false,
                cleard: false,
                monster: "Monk.png",
                monster2: "Rogue.png",
                treasure: "redchest.png"
            },

            {
                number: 1,
                coords: [1, 0],
                image: "back2.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive.",
                East: 1,
                North: 1,
                West: 1,
                South: -1,
                requiresKey: false,
                locked: false,
                monster: "Mage.png",
                monster2: "Rogue.png",
                treasure: "skullCoin.png"

            },

            {
                number: 2,
                coords: [2, 0],
                image: "back3.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: -1,
                North: -1,
                West: 1,
                South: -1,
                requiresKey: false,
                locked: false,
                monster: "Rogue.png",
                monster2: "Monk.png",
                treasure: "downSkull.png"
            },

            {
                number: 3,
                coords: [0, 1],
                image: "back5.png",
                description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing.",
                East: -1,
                North: 1,
                West: -1,
                South: -1,
                requiresKey: false,
                locked: false,
                monster: "Monk.png",
                monster2: "Monk.png",
                treasure: "greenchest.png"

            },

            {
                number: 4,
                coords: [1, 1],
                image: "back4.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive.",
                East: 1,
                North: -1,
                West: 1,
                South: 1,
                requiresKey: true,
                monster: "Rogue.png",
                monster2: "Rogue.png",
                treasure: "downSkull.png"
                
            },

            {
                number: 5,
                coords: [2, 1],
                image: "back6.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: -1,
                North: 1,
                West: 1,
                South: -1,
                requiresKey: false,
                locked: false,
                monster: "Mage.png",
                monster2: "Mage.png",
                treasure: "downSkull.png"
            },

            {
                number: 6,
                coords: [0, 2],
                image: "back7.png",
                description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing.",
                East: 1,
                North: -1,
                West: -1,
                South: 1,
                requiresKey: true,
                locked: true,
                monster: "Monk.png",
                monster2: "Skeleton.png",
                treasure: "downSkull.png"
            },

            {
                number: 7,
                coords: [1, 2],
                image: "back8.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive.",
                East: -1,
                North: -1,
                West: -1,
                South: -1,
                requiresKey: false,
                locked: false,
                monster: "Mage.png",
                monster2: "Skeleton.png",
                treasure: "downSkull.png"
            },

            {
                number: 8,
                coords: [2, 2],
                image: "back9.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore.",
                East: -1,
                North: -1,
                West: -1,
                South: 1,
                requiresKey: false,
                locked: false,
                monster: "Skeleton.png",
                monster2: "Skeleton.png",
                treasure: "downSkull.png"
            },
        ],
    },
    mutations: {
        

        changeRoom(state, currentRoom) {
            this.state.currentRoom = currentRoom;
        },

        updateMessengerState(state, message){
            this.state.messenger = message;
        },

        updateAuthState(state, truthiness){
            this.state.authenticated = truthiness;
        },

        updateLoggedInState(state, truthiness){
            this.state.loggedIn = truthiness;
        },

        updateGameState(state, truthiness) {
            this.state.notStarted = truthiness;
        }

    },
    actions: {

        userLogin( context, user) {
            axios.post( "/login", user ).then( (response) => {
                if (response.data === null) {
                    context.commit( "updateMessengerState", "User not found, please try again or register." );
                }

                else {
                    context.commit( "updateLoggedInState", true );
                    context.commit( "updateMessengerState", "Logged in as:" + response.data.email );
                }
            }).catch( (error) => {
                throw error;
            });  
        },

        nextRoom( context, direction ) {
            if ( direction === "North" ) {
                let myRoom = context.state.currentRoom;
                let myNextRoom = context.state.rooms[myRoom].coords;
                if ( context.state.rooms[myRoom].coords[1] < 2 ) {
                    let y = context.state.rooms[myRoom].coords[1] + 1;
                    context.state.rooms.forEach( (element) => {
                        if ( element.coords[0] === myNextRoom[0] && element.coords[1] === y ) {      
                            context.commit( "changeRoom", element.number );
                        }
                    });

                }

            }
            else if ( direction === "South" ) {
                let myRoom = context.state.currentRoom;
                let myNextRoom = context.state.rooms[myRoom].coords;
                if ( context.state.rooms[myRoom].coords[1] > 0 ) {
                    let y = context.state.rooms[myRoom].coords[1] - 1;
                    context.state.rooms.forEach( (element) => {
                        if ( element.coords[0] === myNextRoom[0] && element.coords[1] === y ) {      
                            context.commit( "changeRoom", element.number );
                        }
                    });
                }
            }

            else if ( direction === "East" ) {
                let myRoom = context.state.currentRoom;
                let myNextRoom = context.state.rooms[myRoom].coords;
                if ( context.state.rooms[myRoom].coords[0] < 2 ) {
                    let x = context.state.rooms[myRoom].coords[0] + 1;
                    context.state.rooms.forEach( (element) => {
                        if ( element.coords[1] === myNextRoom[1] && element.coords[0] === x ) {      
                            context.commit( "changeRoom", element.number );
                        }
                    });
                }
            }

            else if ( direction === "West" ) {
                let myRoom = context.state.currentRoom;
                let myNextRoom = context.state.rooms[myRoom].coords;
                if ( context.state.rooms[myRoom].coords[0] > 0 ) {
                    let x = context.state.rooms[myRoom].coords[0] - 1;
                    context.state.rooms.forEach( (element) => {
                        if ( element.coords[1] === myNextRoom[1] && element.coords[0] === x ) {      
                            context.commit( "changeRoom", element.number );
                        }
                    });
                }
            }
        },

        register( context, payload ) {
            axios.post( "/checkuser", { email: payload.email } ).then( (response) => {
                if (response.data === null) {
                    axios.post( "/register", payload ).then( (response) => {
                        if( response.data === null ) {
                            context.commit( "updateMessengerState", "There was a problem registering, please try again later." );
                        }
                        else {
                            context.commit( "updateAuthState", true );
                            context.commit( "updateMessengerState", "Successfully registered please sign in." );
                        }
                    });
                }
                else {
                    context.commit( "updateAuthState", true );
                    context.commit( "updateMessengerState", "A user with that email address already exists, please sig n in." );
                }
            }).catch( (error) => {
                throw error;
            });
        },

        updateMessenger( context, payload) {
            context.commit( "updateMessengerState", payload);
        },

        updateAuthState(context, payload) {
            context.commit("updateAuthState", payload);
        },

        updateLoggedInState(context, payload) {
            context.commit("updateLoggedInState", payload);
        },

        updateGameState(context, payload) {
            context.commit("updateGameState", payload);
        }
    }
});