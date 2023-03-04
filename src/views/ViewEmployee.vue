<template>
   <div id="view-employee">
      <ul class="collection with-header">
         <li class="collection-header">
            <h4>{{ name }}</h4>
            <p>id : {{ $route.params.employee_id }}</p>
         </li>
         <li class="collection-item">Employee ID#: {{ employee_id }}</li>
         <li class="collection-item">Department: {{ dept }}</li>
         <li class="collection-item">Position: {{ position }}</li>
      </ul>
      <router-link to="/" class="btn grey">Back</router-link>
      <button @click="deleteEmployee" class="btn red">Delete</button>

      <div class="fixed-action-btn">
         <router-link v-bind:to="{ name: 'edit-employee', params: { employee_id: employee_id } }"
            class="btn-floating btn-large red">
            <i class="fa fa-pencil"></i>
         </router-link>
      </div>
   </div>
</template>
 
<script>
import { db } from '../config/firebaseInit'
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

export default {
   name: 'view-employee',
   data() {
      return {
         doc_id : null,
         employee_id: this.$route.params.employee_id,
         name: null,
         dept: null,
         position: null
      }
   },
   async beforeRouteEnter(to, from, next) {
      const q = query(collection(db, 'employees'), where('employee_id', "==", to.params.employee_id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
         next(vm => {
            vm.doc_id = doc.id
            vm.employee_id = doc.data().employee_id
            vm.name = doc.data().name
            vm.dept = doc.data().dept
            vm.position = doc.data().position
         })
      });
   },
   watch: {
      '$route'() {
         this.employee_id = this.$route.params.employee_id;
         this.fetchData();
      }
   },
   methods: {
      async fetchData() {

         const q = query(collection(db, 'employees'), where('employee_id', "==", this.$route.params.employee_id));
         const querySnapshot = await getDocs(q);
         querySnapshot.forEach((doc) => {
            this.doc_id = doc.id
            this.employee_id = doc.data().employee_id
            this.name = doc.data().name
            this.dept = doc.data().dept
            this.position = doc.data().position
         });


      },
      async deleteEmployee() {
         if (confirm('Are you sure?')) {
         await deleteDoc(doc(db, "employees", this.doc_id));
         this.$router.push('/')
      }
   }
}
}
</script>
 