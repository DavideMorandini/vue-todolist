const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                // {done: false},
            ],
            inputText: "",
        }
    },

    methods: {
        addText() {
            this.todoList.push(this.inputText)
        }
    }


    
}).mount('#app')