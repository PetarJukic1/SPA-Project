<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>
<template>
  <!-- scoped style -->
  <div class="main-container">
    <div class="top-bar">
      <StatelessComponentTitle :title="title"></StatelessComponentTitle>
      <!--methods -->
      <form class="search-form" @submit.prevent="searchProjects">
        <label>
          <!--two way biding-->
          <input class="search-input" v-model="searchTerm" type="text" placeholder="Search by name">
        </label>
      </form>
      <StatefulLoggedInButton></StatefulLoggedInButton>
    </div>
    <div class="card-grid">
      <div v-for="project in filteredProjects" :key="project.id" class="card">
        <!--interpolation-->
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <div>
          <!--methods -->
          <!--emit event -->
          <button class="more-info-button" @click="goToProject(project.id)">More</button>
          <button class="delete-button" @click="deleteProject(project.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useLoggedInStore} from "@/stores/loggedInStore";
import StatelessComponentTitle from "@/components/StatelessComponentTitle.vue";
import StatefulLoggedInButton from "@/components/StatefulLoggedInButton.vue";
import router from "@/router";

export default {
  data() {
    //using pinia
    return {
      title: "Projects",
      store: useLoggedInStore(),
      searchTerm: '',
      projects: []
    }
  },
  //lifecycle hook
  created() {
    //async local memory fetching
    setTimeout(() => {
      this.projects = [
        {id: 1, name: 'Project 1', description: 'description 1'},
        {id: 2, name: 'Project 2', description: 'description 2'},
        {id: 3, name: 'Project 3', description: 'description 3'},
        {id: 4, name: 'Project 4', description: 'description 4'},
        {id: 5, name: 'Project 5', description: 'description 5'},
        {id: 6, name: 'Project 6', description: 'description 6'},
        {id: 7, name: 'Project 7', description: 'description 7'},
        {id: 8, name: 'Project 8', description: 'description 8'},
        {id: 9, name: 'Project 9', description: 'description 9'},
        {id: 10, name: 'Project 10', description: 'description 10'},
      ]
    }, 2000)
  },
  // computed properties
  computed: {
    filteredProjects() {
      return this.projects.filter(project => project.name.includes(this.searchTerm))
    },
  },
  methods: {
    // methods
    goToProject(id) {
      router.push({name: 'project', params: {id}})
    },
    toggleLogIn() {
      this.store.toggle()
    },
    searchProjects() {
      this.filteredProjects = this.projects.filter(project => {
        return project.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    },
    emitEvent(projectId) {
      //emit event
      this.$emit('editProject', projectId);
    },
    deleteProject: function (projectId) {
      this.emitEvent(projectId)
      this.projects = this.projects.filter(project => project.id !== projectId);
      this.filteredProjects = this.filteredProjects.filter(project => project.id !== projectId);
    }
  },
  components: {
    StatelessComponentTitle: StatelessComponentTitle,
    StatefulLoggedInButton: StatefulLoggedInButton,
  }
}
</script>


<style scoped>
/*scopedStyle*/
.main-container {
  height: 100%;
  width: 200%;
  display: flex;
  align-items: center;
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 0;
  z-index: 1;
}

.title {
  margin-right: 20px;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 16px 24px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
}

.card-grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
}


.card {
  flex: 1 0 200px;
  margin: 10px;
  padding: 50px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  align-content: center;
}

.delete-button {
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  background-color: #de180a; /* Red */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #cc0000;
}

.delete-button:active {
  background-color: #cc0000;
  transform: scale(0.99);
}

.more-info-button {
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  background-color: rgba(6, 173, 73, 0.99); /* Green */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.more-info-button:hover {
  background-color: rgba(6, 173, 73, 0.99);
}

.more-info-button:active {
  background-color: rgba(6, 173, 73, 0.99);
  transform: scale(0.99);
}
</style>

