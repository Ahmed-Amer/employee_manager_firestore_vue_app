<template>
   <div id="new-employee">
      <h3>New Employee</h3>
      <div class="row">
         <form @submit.prevent="updateEmployee" class="col s12">
            <div class="row">
               <div class="input-field col s12">
                  <input type="text" disabled v-model="employee_id" required>
                  <label class="active">Employee ID#</label>

               </div>

            </div>
            <div class="row">
               <div class="input-field col s12">
                  <input type="text" v-model="name" required>
                  <label>Name</label>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s12">
                  <input type="text" v-model="dept" required>
                  <label>Department</label>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s12">
                  <input type="text" v-model="position" required>
                  <label>Position</label>
               </div>
            </div>
            <button type="submit" class="btn">Update</button>
            <router-link to="/" class="btn grey">Cancel</router-link>
         </form>
      </div>
   </div>
</template>
 
<script>
import { db } from '../config/firebaseInit'
import { collection, doc, updateDoc, query, where, getDocs } from "firebase/firestore";
export default {
   name: 'new-employee',
   data() {
      return {
         employee_id: null,
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

      updateEmployee() {

         // Update a new document with a known id.
         updateDoc(doc(db, "employees", this.doc_id), {
            employee_id: this.employee_id,
            name: this.name,
            dept: this.dept,
            position: this.position
         })
            .then(() => {
               this.$router.push({ name: 'view-employee', params: { employee_id: this.employee_id } })
            });

      },
   },



}
</script>