<template>
	<main id="cart">
		<h1 class="cart-header">Your cart</h1>
		<ul class="cart-list-name">
			<li>
				<figure class="icon"></figure>
				<div>Item name</div>
				<div>Price</div>
				<div>Quantity</div>
				<div>Size</div>
				<div>Total price</div>
			</li>
		</ul>
		<h3 v-if="!cartItemsNum" class="cart-empty">Your cart is empty</h3>
		<ul v-if="cartItemsNum" class="cart-items-list">
			<li v-for="item in cartItems" :key="item.id" class="cart-item">
				<figure class="icon" @click="delItem(item.id)">
					<img src="../assets/close.png" alt="close">
				</figure>
				<div>{{item.name}}</div>
				<div>${{item.price}}</div>
				<div>{{item.quant}}</div>
				<div>{{item.size}}</div>
				<div>${{item.price*item.quant}}</div>
			</li>
		</ul>
		<p class="total">Total price: ${{totalprice}}</p>
		<button class="btn-cart-conf" @click="confirmPurchase()">Purchase</button>
		<div :class="cont">
            <p>Thc for ur purchase:3</p>
            <figure class="icon" @click="closeConf()">
                <img src="../assets/close.png" alt="close">
            </figure>
        </div>
        <div :class="error">
            <p>You dont have anything in ur cart u dumb dumb</p>
            <figure class="icon" @click="closeConf()">
                <img src="../assets/close.png" alt="close">
            </figure>
        </div>
	</main>
</template>

<script>
export default {
	data(){
		return{
			cartItemsNum: 0,
			cartItems: [],
			totalprice: 0,
			cont: 'contact-conf disabled',
			error: 'error-msg disabled',
			timeout: null
		}
	},
	beforeMount(){
		this.$root.$on('CartAdded', (x) => {
			this.cartItemsNum = x
			for(let i=0;i<=x-1;i++){
				this.cartItems[i] = {name: 'item_name', price: 12, quant: 1, size: 'small', id: i}
				this.totalprice += 12
			}
		})
	},
	mounted(){
		window.scrollTo(top)
	},
	methods: {
		delItem(x){
			for(let i=0; i<=this.cartItems.length; i++){
				if(this.cartItems[i].id == x){
					this.totalprice -= this.cartItems[i].price*this.cartItems[i].quant
					this.cartItems.splice(i, 1)
				}
			}
		},
		confirmPurchase(){
			if(this.cartItemsNum){
				this.cont = 'contact-conf enabled'
				this.cartItems = []
				this.cartItemsNum = 0
				this.totalprice = 0
				this.$root.$emit('CartEmpty', 0)
                this.timeout = setTimeout(() => {
                    this.cont = 'contact-conf disabled'
                }, 5000)
			} else {
				this.error = 'error-msg enabled'
                this.timeout = setTimeout(() => {
                    this.error = 'error-msg disabled'
                }, 5000)
			}
		},
		closeConf(){
            this.cont = 'contact-conf disabled'
            this.error = 'error-msg disabled'
            clearTimeout(this.timeout)
        }
	}
}
</script>

<style lang="scss" scoped>
#cart{
	width: 60%;
	margin: 6em auto;
	margin-bottom: 14em;
	h1{
		text-align: left;
		font-size: 1.5em;
		font-family: 'Raleway', sans-serif;
		font-weight: 100;
	}
	h3{
		font-family: 'Raleway', sans-serif;
		font-size: 1.3em;
		font-weight: 100;
		text-align: center;
		padding: 2em;
	}
	ul{
		margin-top: 2em;
		list-style: none;
		display: block;
		li{
			border-bottom: 1px solid #707070;
			padding: .5em 0;
			display: flex;
			justify-content: space-between;
			.icon{
				flex-basis: 5%;
				display: block;
				max-height: 16px;
				img{
					display: block;
					max-height: 16px;
					&:hover{
						cursor: pointer;
					}
				}
				
			}
			div{
				font-family: 'Montserrat', sans-serif;
				flex-basis: 20%;
				text-align: center;
				&:last-of-type{
					text-align: right;
				}
			}
		}
	}
	.total{
		margin: 2em 0;
		font-size: 1.1em;
		font-family: 'Raleway', sans-serif;
		text-align: right;
	}
	.btn-cart-conf{
		padding: .5em;
		background: none;
		border: none;
		border-left: 1px solid #707070;
		border-right: 1px solid #707070;
		font-family: 'Raleway', sans-serif;
		font-size: 1.2em;
		margin-left: 90%;
		&:hover{
			cursor: pointer;
		}
	}
	.contact-conf, .error-msg{
        position: absolute;
        width: 60%;
        top: 3em;
        margin: auto;
        background-color: #EBD270;
        height: 10em;
        border-radius: 1em;
        padding: 3em;
        p{
            font-family: 'Raleway', sans-serif;
            font-size: 1.5em;
        }
        figure{
            position: absolute;
            top: 1em;
            right: 1em;
            max-height: 16px;
            &:hover{
                cursor: pointer;
            }
            img{
                max-height: 16px;
            }
        }
    }
    .error-msg{
        background-color: #FE6645;
    }
    .disabled{
        display: none;
    }
    .enabled{
        display: block;
    }
}
</style>