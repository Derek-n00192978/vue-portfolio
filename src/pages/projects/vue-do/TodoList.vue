<!--30-09-2021 today's work --> 
<template>
    <div>
        <b-card            
            header="TodoList"
            header-tag="header"
            >
            <b-list-group column>
                <!--this below created the text in the todolist--> 
                <TodoItem
                 v-for="item in list" 
                 :key="item.id"
                 :todo="item"     
                 v-on:todo-completed="completeTodo"
                /> 
            </b-list-group>

            <template v-slot:footer>
                <input type="text" v-model="todoText" placeholder="Add todo item here!" v-on:keyup.enter="addNewTodo()" />
                <b-button class="float-end" variant="primary" @click="addNewTodo()">Add</b-button>
            </template>
        </b-card>        
    </div>    
</template>
<script>
import TodoItem from '@/pages/projects/vue-do/TodoItem.vue'

export default {
    name: 'TodoList',
    components: {
        TodoItem
    },
    data(){
        return {
           list: [ //array
               { 
                   id: 1, text: "clean the house", done: true //object
               },
               {
                   id: 2, text: "study", done: false //object
               },
               {
                   id: 3, text: "Go Cycling", done: false //object
               }
           ],
           todoText: ""
        }
    },
    //04-10 retreve list from localStorage
    mounted() {
        if(localStorage.savedList){
            this.list = JSON.parse(localStorage.getItem("savedList"));
        }
    },
    methods: {
        addNewTodo() {
            if(!this.todoText){
                alert("Please enter some text");
                return;
            }
            const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1; 
                                                //array method   
            this.list.push({
                id: newId,
                text: this.todoText,
                done: false
            }); 
            this.todoText = ""; 
            //04-10 add item to localStorage
            localStorage.setItem("savedList", JSON.stringify(this.list));
        },
        completeTodo(todo){
            const todoIndex = this.list.indexOf(todo);
            this.list[todoIndex].done=true;
        }
    }
}
</script>
