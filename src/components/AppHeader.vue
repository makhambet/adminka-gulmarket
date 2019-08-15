<template>
    <header ref="header">
        <div class="header-block" :class="{'header-scroll' : scrollActive, 'min-menu': minMenu}">
            <div class="header-block1">
                <p>Gulmarket</p>
            </div>
            <div class="header-block2">
                <i class="fas fa-bell"></i>
                <i @click="logout=true" class="fas fa-user-circle"></i>
                <div v-if="logout" class="logout">
                    <p @click="logout=false">Выйти</p>
                </div>
            </div>
        </div>
        {{min_menu()}}
        <!-- <div class="notification">
            <div class="notification-block">
                
            </div>
        </div> -->
    </header>
</template>

<script>
    import help from '../help/help';
    export default {
        data() {
            return {
                logout: false,
                scrollActive: false,
                minMenu: false
            }
        },
        methods: {
            headerScroll() {
                if(window.scrollY > 10){
                    this.scrollActive = true
                }
                else{
                    this.scrollActive = false
                }
            },
            min_menu(){
                if(help.minMenu === true){
                    this.minMenu = true
                }
                else if(help.minMenu === false){
                    this.minMenu = false
                }
            }
        },
        mounted () {
            this.min_menu()
            window.addEventListener('scroll', this.headerScroll)
        },
        created () {
            this.min_menu();
        },
    }
</script>

<style scoped>

</style>