import { isArray } from "util";

export default({
    computed: {
        order() {
            return this.$store.getters[this.paginationName]
        },
        filteredPagination(){
            var order = this.order.data
            let start = this.pageNumber * this.size,
                end = start*1.0 + this.size*1.0;
            if(isArray (order))
                this.max_length = order.length
            this.pageCount = Math.ceil(this.max_length/this.size)
            this.currentPage = Math.ceil(this.max_length/this.size)
            if(this.inputSearch)
            {
                order = order.filter(b => 
                b.title.toLowerCase().indexOf(this.inputSearch.toLowerCase()) >= 0)
                this.pageNumber = 0
            }
            if(isArray (order))
                return order.slice(start, end)
        },
    },
    methods: {
        prevPage(){
            return this.pageNumber--
        },
        nextPage(){
            return this.pageNumber++
        },
    },
    mounted () {
        this.filteredPagination;
    },
    
})