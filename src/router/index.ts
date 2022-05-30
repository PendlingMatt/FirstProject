import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import JobView from '../views/JobView.vue'
import ApplicantsView from '../views/ApplicantsView.vue'
import CompanyView from '../views/CompanyView.vue'
import ApplicantDetailsView from '../views/ApplicantDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/jobs',
      name: 'job',
      component: JobView
    },
    {
      path: '/applicants',
      name: 'applicants',
      component: ApplicantsView
    },
    {
      path: '/applicants/:id',
      name: 'applicantDetails',
      
      component: ApplicantDetailsView
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView
    },
  ]
})

export default router
