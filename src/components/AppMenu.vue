<template>
    <div class="app-menu" :class="{'min-menu-h2': minimum}">
        <h2 class="min-menu">{{user}}</h2>
        <div class="menu-header">
            <nav>
                <ul>
                    <li>
                        <div class="home-menu-li menu-header-home min-menu-home">
                            <div class="h-home-block1">
                                <router-link tag="span" to="/" class="home-menu"><i class="fas fa-home"></i> <span class="min-menu"> Обзор проекта</span></router-link>
                            </div>
                            <div class="h-home-block2">
                                <i class="fas fa-cog"></i>
                            </div>
                        </div>
                    </li>
                    <li class="menu-li">
                        <div style="color:#fff;" class="home-menu-li"><span class="min-menu">Разработка</span></div>
                        <ul>
                            <router-link 
                                v-for="(item, index) in menuItems" 
                                :key="index" tag="li" 
                                :to="item.route"
                            >
                                <i class="fas" :class="item.icon"></i><span class="min-menu">{{item.title}}</span>
                            </router-link>
                        </ul>
                    </li>
                    <li @click="min_menu()" class="menu-li-swipe-right"><i class="fas fa-angle-left"></i></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    import help from '../help/help'
    export default {
        data() {
            return {
                menuItems: [
                    {
                        title: 'Каталог',
                        route: 'catalog',
                        icon: 'fa-folder-open'
                    },
                    {
                        title: 'Товар',
                        route: 'goods',
                        icon: 'fa-box-open'
                    },
                    {
                        title: 'Скидки',
                        route: 'discount',
                        icon: 'fa-tags'
                    },
                    {
                        title: 'Заказ',
                        route: 'order',
                        icon: 'fa-barcode'
                    },
                    {
                        title: 'Пользователи',
                        route: 'users',
                        icon: 'fa-address-card'
                    },
                ],
                minimum: false,
                user: 'Администратор'
            }
        },
        methods: {
            name() {
                // this.$store.state.min_menu = true
                // console.log(this.$store.state);
                this.minimum = true
            },
            min_menu(){
                this.minimum = !this.minimum
                help.min_menu = this.minimum
            }
        },
    }
</script>

<style scoped>

</style>