import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
       authenticated: false,
       loggedIn: true,
       rooms: [
           {
               number: 1,
               image: "@/../public/placeholder1.png",
               description: "You awake from the darkness, cold...so very cold.  You feel a great emptiness inside you, like a hunger, only worse.  Before you lies a black phylactery, a grim looking thing."
           },

           {
                number: 2,
                image: "@/../public/placeholder2.png",
                description: "Before you stands Grimaldo, you probably should have paid him back while you were alive."
            },

            {
                number: 3,
                image: "@/../public/placeholder3.png",
                description: "A holy man stands before you, a divine light radiates from his hands as he signs the cross in the air before him.  It's really bright, and you don't have eyelids anymore."
            },
       ]

    },
    mutations: {
        //NOTHING YET
    },
    actions: {
        //NOTHING YET
    },
});