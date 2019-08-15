<template>
    <div class="users">
        <div class="block-h1">
            <h1>Пользователи</h1>
        </div>
        <div class="block2-content">
            <div v-if="warningCat" class="alert-block">
                <div class="alert-content">
                    <h3>Удаление пользователя<span @click="warningCat=false" class="alert-exit"><i class="fas fa-times"></i></span></h3>
                    <div class="alert-warning">
                        <i class="fas fa-exclamation-triangle"></i> Пользователь будет удален без возможности восстановления. Это действие нельзя будет отменить.
                    </div>
                    <div>
                        <small>Пользователь</small>
                    </div>
                    <div class="alert-name">
                        Ағабек
                    </div>
                    <div>
                        <button @click="warningCat=false">Отменить</button>
                        <button @click="warningCat=false, deleteItemFunc()">Удалить</button>
                    </div>
                </div>
            </div>
            <div v-if="deleteItem" class="alert-box">
                <span><i class="fas fa-check"></i></span> Пользователь Арсен удален!
            </div>
            <div class="content-grid">
                <div class="c-grid-head">
                    <form>
                        <label>
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Название каталога">
                        </label>
                        <button @click.prevent="newItem=true">Добавить пользователя</button>
                    </form>
                </div>
                <div class="c-grid-header">
                    <div>Картинка</div>
                    <div>ФИО</div>
                    <div>Пароль</div>
                    <div>Время создания</div>
                    <div>&nbsp;</div>
                </div>
                <div v-if="newItem" class="c-grid-body-new">
                    <div><strong>Добавьте нового пользователя</strong></div>
                    <div>
                        <label>ФИО</label><br>
                        <input v-model="newItemInputTextName" type="text">
                        <br>
                        <label>Пароль</label><br>
                        <input v-model="newItemInputTextPasword" type="text">
                    </div>
                    <div>
                        <button @click="newItem=false">Отмена</button>
                        <button :disabled="newItemInputText===null">Добавить категорию</button>
                    </div>
                </div>
                <div class="c-grid-body">
                    <div>Картинка</div>
                    <div>Наруто Узумаки</div>
                    <div>naruto_Hakage</div>
                    <div>08.09.19</div>
                    <div v-if="editItem" class="c-grid-body-edit">
                        <p>Изменить</p>
                        <p @click="warningCat=true">Удалить</p>
                    </div>
                    <div>
                        <i @click="editItemFunc()" class="fas fa-ellipsis-v"></i>
                    </div>
                </div>
                <div v-for="(item, index) in AUTH" :key="index" class="c-grid-body">
                    <div>{{item.thumb}}</div>
                    <div>{{item.title}}</div>
                    <div>{{item.id}}</div>
                    <div>{{item.status}}</div>
                    <div>{{item.address}}</div>
                    <div><i class="fas fa-ellipsis-v"></i></div>
                </div>
                <div class="c-grid-footer">
                    <div class="c-grid-footer-flex">
                        <small>Количество строк на странице: </small>
                        <div>
                            <select>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>
                        <small>1-из 2</small>
                        <div>
                            <button>&lt;</button>
                            <button>&gt;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p>{{AUTH}}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import editDeleteFunc from '../mixin/editDeleteFunc'
    export default {
        mixins: [editDeleteFunc],
        data() {
            return {
                store_get_actions: 'GET_AUTH',
                store_save_actions: 'SAVE_AUTH',
                newItemInputTextName: '',
                newItemInputTextPasword: ''
            }
        },
        computed : {
            ...mapGetters(['AUTH']),
        },
    }
</script>

<style scoped>

</style>