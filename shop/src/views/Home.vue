<template>
	<main id="home">
		<section class="banner">
			<figure class="banner-img">
				<img src="../assets/a.png" alt="banner image">
			</figure>
		</section>
		<section class="promo">
			<p class="promo-para">SUPER PROMO GET NOW AS FAST AS POSSIBLE!!!!!!!!!</p>
			<div class="promo-items">
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
		<section class="about">
			<p class="about-title">About p j e s k i</p>
			<p class="about-text">So basically we're a company that sells some stuff for animals u know :)</p>
		</section>
	</main>
</template>

<script>
export default {
	mounted(){
		window.scrollTo(top)
	}
}
</script>

<style lang="scss" scoped>
#home{
	width: 60%;
	margin: auto;
	padding: 2em;
	text-align: center;
	.banner{
		width: 100%;
		figure{
			img{
				max-width: 100%;
			}
		}
	}
	.promo-para{
		margin: 2em 0;
		font-size: 35px;
		color: #FF0000;
		font-family: 'Raleway', sans-serif;
	}
	.promo-items{
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
	.about{
		margin-top: 3em;
		.about-title{
			text-align: center;
			font-size: 35px;
			font-family: 'Raleway', sans-serif;
			font-weight: 300;
			margin-bottom: .7em;
			color: #707070;
		}
		.about-text{
			width: 60%;
			margin: auto;
			font-family: 'Montserrat', sans-serif;
			font-weight: 600;
			color: #707070;
		}
	}
}
</style>