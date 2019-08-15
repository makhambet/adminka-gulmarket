import axios from 'axios'
export default({
    data() {
        return {
            newItem: false,
            newItemInputText: null,
            editItem: false,
            warningCat: false,
            deleteItem: false,
            count: 0,
        }
    },
    methods: {
        editItemFunc() {
            this.editItem = true
            this.count++
            if(this.count === 1){
                setInterval(() => {
                    this.editItem = false
                }, 4000);
            }
            this.count = 0
        },
        deleteItemFunc(){
            setTimeout(() => {
                this.deleteItem = true
                setInterval(() => {
                    this.deleteItem = false
                }, 2000);
            }, 1000);
            this.deleteItem = false
        }
    },
})