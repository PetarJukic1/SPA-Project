import { defineStore } from "pinia";
export const useLoggedInStore = defineStore({
    id: "login",
    state: () => ({
        loggedIn: Boolean(false),
    }),
    getters: {
        isLoggedIn: (state) => state.loggedIn,
    },
    actions: {
        toggle() {
            this.loggedIn = !this.loggedIn;
        },
    },
});