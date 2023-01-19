import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "@/views/ProjectView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "projects",
      component: ProjectView,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectDetailsView
    },
    {
      path: "/:catchAll(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
