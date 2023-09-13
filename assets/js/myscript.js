const { createApp } = Vue

createApp({
    data() {
        return {
            inputValue: "",
            todoList: [
                {
                    text: "Preparare la postazione di lavoro",
                    done: false,
                },
                {
                    text: "Aprire un ticket in caso di necessità",
                    done: false,
                },
                {
                    text: "Leggere la documentazione",
                    done: false,
                },
                {
                    text: "Sperare che tutto vada bene altrimenti...",
                    done: false,
                },
            ],
        }
    },

    methods: {
        doneItem(justDone) {
            justDone.done = !justDone.done;
        },

        addItem() {
            if (this.todoList.length > 0) {
                this.todoList.push({text:this.inputValue, done: false})
                this.inputValue = "";
            }
        },

        deleteItem(canceledIndex) {
            this.todoList.splice(canceledIndex, 1)
        }
    } 
}).mount('#app')












