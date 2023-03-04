<template>
   <div id="new-employee">
      <h3>New Employee</h3>
      <div class="row">
         <form @submit.prevent="saveEmployee" class="col s12">
            <div class="row">
               <div class="input-field col s12">
                  <input type="text" @blur="idExists" v-model="employee_id" required>
                  <label v-if="!errorFlag">Employee ID#</label>
                  <p class="secondary-content"  style="color:red" v-else>{{ employee_id_error }}</p>

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
            <button type="submit" class="btn" :disabled="errorFlag">Submit</button>
            <router-link to="/" class="btn grey">Cancel</router-link>
         </form>
      </div>
   </div>
</template>
 
<script>
import { db } from '../config/firebaseInit'
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
export default {
   name: 'new-employee',
   data() {
      return {
         employee_id_error: "error",
         errorFlag: false,
         employee_id: null,
         name: null,
         dept: null,
         position: null
      }
   },
   methods: {
      saveEmployee() {

         // Add a new document with a generated id. [method1 with then and error]
         const docRef = addDoc(collection(db, 'employees'), {
            employee_id: this.employee_id,
            name: this.name,
            dept: this.dept,
            position: this.position
         })
            .then(docRef => {
               console.log('Client added: ', docRef.id)
               this.$router.push('/')
            })
            .catch(error => {
               console.error('Error adding employee: ', error)
            })


         // Add a new document with a generated id. [method2 with wait that need async function]
         // const docRef = wait addDoc(collection(db, 'employees'), {
         //    employee_id: this.employee_id,
         //    name: this.name,
         //    dept: this.dept,
         //    position: this.position
         // })
         // console.log("Document written with ID: ", docRef.id);
         // this.$router.push('/')


      },
      idExists() {
         const q = query(collection(db, 'employees'), where('employee_id', "==", this.employee_id));
         const querySnapshot = getDocs(q).then(querySnapshot => {
            querySnapshot.forEach((doc) => {
               if (this.employee_id == doc.data().employee_id) {
                  this.employee_id_error = "Employee Id Exists";
                  this.errorFlag = true;
                  return;
               }
               
            });
         })
         this.errorFlag = false;
      }
   },



}
</script>