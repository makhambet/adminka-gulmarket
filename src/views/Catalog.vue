<template>
    <div class="catalog">
        <div class="block-h1">
            <h1>Каталог</h1>
        </div>
        <div class="block2-content">
            <div v-if="warningCat" class="alert-block">
                <div class="alert-content">
                    <h3>Удаление категории <span @click="warningCat=false" class="alert-exit"><i class="fas fa-times"></i></span></h3>
                    <div class="alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> Категория будет удален без возможности восстановления. Это действие нельзя будет отменить.
                    </div>
                    <div>
                        <small>Название категории</small>
                    </div>
                    <div class="alert-name">
                        {{detItemName}}
                    </div>
                    <div>
                        <button @click="warningCat=false">Отменить</button>
                        <button @click="delCat(), deleteItemFunc()">Удалить</button>
                    </div>
                </div>
            </div>
            <div v-if="deleteItem" class="alert-box">
                <span><i class="fas fa-check"></i></span> Категория Носки удален!
            </div>
            <div id="newItem" class="content-grid">
                <div class="c-grid-head">
                    <form :class="{ 'c-grid-head-form' : c_grid_form }">
                        <label>
                            <i class="fas fa-search"></i>
                            <input ref="input" v-model="inputSearch" type="text" placeholder="Название каталога">
                        </label>
                        <button @click.prevent="createCat()">Добавить категорию</button>
                    </form>
                </div>
                <div class="c-grid-header">
                    <div>Картинка</div>
                    <div>Название</div>
                    <div>Время создания</div>
                    <div>&nbsp;</div>
                </div>
                <div v-if="newItem" class="c-grid-body-new">
                    <div><strong>{{changeName}} категорию</strong></div>
                    <div>
                        Название <br>
                        <input v-model="newItemInputText" type="text"><br>
                        <label>
                            <div v-if="!image">
                                <h3>Выбрать фотографию</h3>
                                <input type="file" @change="onFileChange">
                            </div>
                            <div v-else>
                                <img :src="image" /><br>
                                <button @click="removeImage">Удалить фотографию</button>
                            </div>
                        </label>
                    </div>
                    <div>
                        <button @click="newItem=false">Отмена</button>
                        <button @click="postPost()">{{changeName}} категорию</button>
                    </div>
                </div>
                <div v-for="(item, index) in filteredPagination" :key="index" class="c-grid-body c-grid-body-img">
                    <div
                        class="c-grid-body-img"
                        :style="{ backgroundImage: 'url(' + item.thumb + ')', 
                        backgroundSize: '100% 100%', 
                        backgroundPosition: 'center'}"
                    ></div>
                    <div>{{item.title}}</div>
                    <div>{{item.id}}</div>
                    <div v-if="editItem" class="c-grid-body-edit">
                        <p @click="edit(index, item.id)"><a href="#newItem">Изменить</a></p>
                        <p @click="deleteCat(index, item.id)">Удалить</p>
                    </div>
                    <div>
                        <i @click="editItemFunc()" class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div class="c-grid-footer">
                    <div class="c-grid-footer-flex">
                        <small>Количество строк на странице: </small>
                        <div>
                            <select v-model="size">
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>
                        <small>{{pageNumber+1}}-из {{pageCount}}</small>
                        <div>
                            <button :disabled="pageNumber === 0" @click="prevPage()">&lt;</button>
                            <button :disabled="pageNumber >= pageCount -1" @click="nextPage()">&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import editDeleteFunc from '../mixin/editDeleteFunc'
    import pagination from '../mixin/pagination'
    import axios from 'axios'
    export default {
        mixins: [editDeleteFunc, pagination],
        data() {
            return {
                store_get_actions: 'GET_CATEGORY',
                store_save_actions: 'SAVE_CATEGORY',
                searchForm: false,
                inputSearch: '',
                paginationName: 'CATEGORY',
                pageNumber: 0,
                pageCount: 0,
                currentPage: 0,
                size: 25,
                length: 0,
                image: '',
                c_grid_form: false,
                edits: false,
                id: 0,
                detId: 0,
                detItemName: ''
            }
        },
        computed: {
            changeName(){
                if(this.edits) return 'Изменить'
                else if(!this.edits) return 'Добавить'
            }
        },
        methods: {
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                var image = new Image();
                var reader = new FileReader();
                var vm = this;

                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            deleteCat(index, id){
                this.warningCat = true
                this.editItem = false
                this.detId = id
                this.detItemName = this.order.data[index].title
            },
            delCat(){
                let name = 'http://localhost:8080/api/v1/cats/delete' + this.detId
                axios.get(name)
                .then(response => {
                    console.log(response)
                    if(response.status === 200)
                        this.retry()
                })
                .catch(e => {
                    console.log(e)
                })
                this.warningCat = false
            },
            createCat(){
                this.newItem=true
                this.edits = false
                this.image = ''
                this.newItemInputText = ''
            },
            removeImage: function (e) {
                this.image = '';
            },
            retry(){
                this.$store.dispatch('GET_CATEGORY')
            },
            edit(index, id){
                this.editItem = false
                this.newItem = true
                this.edits = true
                this.id = id
                let order = this.order.data[index]
                this.newItemInputText = order.title
                this.image = order.thumb
            },
            postPost(){
                this.newItem=false
                if(this.edits)
                {
                    let count = this.id
                    let title = this.newItemInputText
                    let name = 'http://localhost:8080/api/v1/cats/edit/' + count
                    axios.post(name, {
                        title: title
                    })
                    .then(response => {
                        console.log(response)
                        if(response.status === 200)
                            this.retry()
                    })
                    .catch(e => {
                        console.log(e)
                    })
                }
                else if(!this.edits){
                    axios.post('http://localhost:8080/api/v1/cats/create', {
                        title: this.newItemInputText,
                    })
                    .then(responce => {
                        this.retry()
                    })
                    .catch(e => {
                        console.log(e)
                    })
                }
            },
            label(e){
                if(e.target === this.$refs.input){
                    this.c_grid_form = true;
                }
                else{
                    this.c_grid_form = false
                }
            }

        },
        mounted () {
            let input = this.$refs.input
            window.addEventListener('click', this.label)
        },
        watch: {
        '$route'(){
            this.filteredPagination
        }
}
    }
</script>

<style scoped>

</style>