<template>
    <header class="header">
        <figure class="header-figure"><router-link to="/"><img class="header-logo" src="../assets/logo.png" alt="logo"></router-link></figure>
        <nav class="header-nav">
            <ul class="header-nav-list">
                <li class="header-nav-list-item"><router-link to="/">Home</router-link></li>
                <li class="header-nav-list-item"><router-link to="/dogs">Dogs</router-link></li>
                <li class="header-nav-list-item"><router-link to="/cats">Cats</router-link></li>
                <li class="header-nav-list-item"><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
        <div class="header-cart">
            <div class="search-box">
                <input type="text" placeholder="search" v-model="search"><figure class="search" @click="searchGo()"><img src="../assets/search.png" alt="search"></figure>
            </div>
            <router-link to="/cart" class="header-cart-text">Cart ({{numInCart}})</router-link>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return{
            search: '',
            numInCart: 0,
            items: [],
            i: 0
        }
    },
    methods: {
        searchGo(){
            this.$router.push({name: 'Search'})
        }
    },
    mounted(){
        this.$root.$on('AddingCart', (x) => {
            this.items[this.numInCart] = {size: x.size, quant: x.quant, id: this.i}
            this.numInCart += 1
            this.i++
        })
        this.$root.$on('CartEmpty', (x) => {
            this.numInCart = x
        })
        this.$root.$on('ItemDeleted', (x) => {
            this.numInCart -= 1
            for(let i=0; i<=this.items.length-1; i++){
                if(this.items[i].id == x){
                    this.items.splice(i, 1)
                }
            }
        })
    },
    updated(){
        this.$root.$emit('CartAdded', {number: this.numInCart, items: this.items})
    }
}
</script>

<style lang="scss" scoped>
/* 
font-family: 'Montserrat', sans-serif;
font-family: 'Raleway', sans-serif;
*/
.header{
    background-color: #eee;
    display: flex;
    max-height: 6em;
    .header-figure{
        margin-left: 2em;
        flex-basis: 25%;
        max-height: 100%;
        .header-logo{
            max-height: 100%;
        }
    }
    .header-nav{
        flex-basis: 50%;
        .header-nav-list{
            list-style: none;
            height: 100%;
            display: flex;
            justify-content: space-evenly;
            .header-nav-list-item{
                margin-left: .5em;
                align-self: center;
                a{
                    font-family: 'Montserrat', sans-serif;
                    text-decoration: none;
                    color: #707070;
                    display: block;
                    padding: .3em .8em;
                    border-bottom: 2px solid #eee;
                    transition: .5s;
                    &:hover{
                        border-color: #EDB270;
                    }
                }
            }
        }
    }
    .header-cart{
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        .search-box{
            display: flex;
            &:hover{
                cursor: pointer;
            }
            input{
                width: 60%;
                padding: .2em;
                border: none;
                border-bottom: 1px solid #707070;
                background: none;
                outline: none;
                &::placeholder{
                    color: #707070;
                }
            }
            figure{
                margin-left: .5em;
                height: 100%;
                img{
                    display: block;
                    max-height: 22px;
                }
            }
        }
        .header-cart-text{
            text-decoration: none;
            padding: .3em .8em;
            border-bottom: 2px solid #eee;
            text-align: center;
            color: #707070;
            font-family: 'Montserrat', sans-serif;
        }
    }
}
</style>