<template>
    <main id="product">
        <section class="main-item">
            <figure class="main-item-img">
                <img src="../assets/1.png" alt="item picture">
            </figure>
            <div class="main-item-details">
                <h3 class="main-item-name">Item_name</h3>
                <p class="main-item-price">$12</p>
                <p class="main-item-desc">Ye ye cool doggo u got here!<br>
                Imagine having a doggo like this lmao</p>
                <div class="item-shopping">
                    <div class="size">
                        <label for="size-sel">size</label>
                        <select name="size-sel" id="size-sel" v-model="size">
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                    </div>
                    <div class="quant">
                        <label for="quantity">quantity</label>
                        <input type="number" name="quantity" id="quantity" v-model="quant" min="1">
                    </div>
                    <button class="add-btn" @click="goToCart()">Add to cart</button>
                </div>
            </div>
        </section>
        <section class="recommendations">
			<p class="recommendations-para">Here are some recommendations for you :)</p>
			<div class="recommendations-items">
				<div class="item">
					<router-link to="/product">
						<figure class="item-img">
							<img src="../assets/1.png" alt="">
						</figure>
						<div class="item-name">
							<p class="name">Helo</p>
							<p class="price">$12</p>
						</div>
					</router-link>
				</div>
				<div class="item">
					<router-link to="/product">
						<figure class="item-img">
							<img src="../assets/1.png" alt="">
						</figure>
						<div class="item-name">
							<p class="name">Helo</p>
							<p class="price">$12</p>
						</div>
					</router-link>
				</div>
				<div class="item">
					<router-link to="/product">
						<figure class="item-img">
							<img src="../assets/1.png" alt="">
						</figure>
						<div class="item-name">
							<p class="name">Helo</p>
							<p class="price">$12</p>
						</div>
					</router-link>
				</div>
			</div>
		</section>
    </main>
</template>

<script>
export default {
    data(){
        return{
            size: 'small',
            quant: 1
        }
    },
    methods: {
        goToCart(){
            this.$router.push({name: 'Cart'})
            this.$root.$emit('AddingCart', {size: this.size, quant: parseInt(this.quant)})
        }
    },
    mounted(){
		window.scrollTo(top)
	}
}
</script>

<style lang="scss" scoped>
#product{
    width: 80%;
    margin: auto;
    padding: 2em;
    .main-item{
        display: flex;
        justify-content: space-between;
        .main-item-img{
            flex-basis: 40%;
            img{
                max-width: 100%;
            }
        }
        .main-item-details{
            padding: 3em 0;
            padding-left: 10em;
            flex-basis: 50%;
            h3, p, label, input, button, option, select{
                font-family: 'Raleway', sans-serif;
            }
            p{
                padding: 1em 0;
                
            }
            .item-shopping{
                .size{
                    padding: .5em 0;
                    #size-sel{
                        margin-left: .5em;
                        background: none;
                        border: none;
                        border-bottom: 1px solid #707070;
                        outline: none;
                    }
                }
                .quant{
                    padding: .5em 0;
                    #quantity{
                        margin-left: .5em;
                        background: none;
                        border: none;
                        border-bottom: 1px solid #707070;
                        outline: none;
                        width: 2.3em;
                    }
                }
                .add-btn{
                    background: none;
                    border: none;
                    padding: .5em;
                    margin-top: .5em;
                    border: 1px solid #707070;
                    font-size: 1.1em;
                    transition: .3s;
                    &:hover{
                        background: #EDB270;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .recommendations-para{
		margin: 2em 0;
		font-size: 35px;
		color: #FF0000;
		font-family: 'Raleway', sans-serif;
	}
	.recommendations-items{
		display: flex;
		justify-content: space-around;
		.item{
			flex-basis: 20%;
			a{
				display: block;
				text-decoration: none;
			}
			.item-img{
				img{
					max-width: 100%;
					max-height: 100%;
				}
			}
			.item-name{
				padding-top: 1em;
				.name{
					color: #000;
					text-align: left;
					font-family: 'Raleway', sans-serif;
					font-weight: 600;
				}
				.price{
					color: #000;
					padding-top: .5em;
					text-align: left;
					font-family: 'Raleway', sans-serif;
				}
			}
		}
	}
}
</style>