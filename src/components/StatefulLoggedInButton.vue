<template>
  <button class="login-button" @click="toggleLogIn" v-if:="store.isLoggedIn">Logged In</button>
  <button class="logout-button" @click="toggleLogIn" v-else>Logged Out</button>
</template>

<script>
import {useLoggedInStore} from "@/stores/loggedInStore";

export default {
  data() {
    return {
      store: useLoggedInStore(),
      title: 'My Title',
      description: 'My Description',
      count: 0
    }
  },
  methods: {
    toggleLogIn() {
      this.store.toggle()
    },
  }
}
</script>

<style scoped>
.login-button {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  background-color: #4CAF50; /* Green */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px;
}

.login-button:hover {
  background-color: #3e8e41;
}

.login-button:active {
  background-color: #3e8e41;
  transform: scale(0.99);
}

.logout-button {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  background-color: #f44336; /* Red */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 20px;
}

.logout-button:hover {
  background-color: #cc0000;
}

.logout-button:active {
  background-color: #cc0000;
  transform: scale(0.99);
}
</style>
