<template>
	<main id="cats">
		<section class="banner">
			<figure class="banner-img">
				<img src="../assets/a.png" alt="banner image">
			</figure>
		</section>
		<h3 class="title">Cats items</h3>
		<aside class="filters">
			<p>Filters</p>
		</aside>
		<section class="items">
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
#cats{
	width: 60%;
	margin: auto;
	padding: 2em;
	text-align: center;
	display: flex;
	flex-wrap: wrap;
	.banner{
		flex-basis: 100%;
	}
	.title{
		flex-basis: 100%;
		text-align: center;
		font-size: 2em;
		font-family: 'Raleway', sans-serif;
		padding: 4em;
	}
	.filters{
		flex-basis: 20%;
		border-right: 1px solid #707070;
		p{
			font-family: 'Raleway', sans-serif;
			font-size: 1.5em;
		}
	}
	.items{
		flex-basis: 80%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.item{
			flex-basis: 30%;
			padding: 0 1em 2em 1em;
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