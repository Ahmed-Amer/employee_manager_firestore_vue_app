import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewEmployee from '../views/NewEmployee.vue'
import EditEmployee from '../views/EditEmployee.vue'
import ViewEmployee from '../views/ViewEmployee.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { getAuth , onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/new-employee',
      name: 'new-employee',
      component: NewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/edit-employee/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true
      }
    },
    
  ]
})

//Solution for reloading app lose auth
const getCurrentUser = () => {
  return new Promise((resolve , reject) => {
    const removeListener =  onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}



// Nav Guard for pages Auth
router.beforeEach(async(to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if logged user
    if (await getCurrentUser()) {
       // Proceed to route
       next();
    } else {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if logged user
    if (await getCurrentUser()) {
      // Go to dashboard
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});



export default router
