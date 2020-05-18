<template>
    <main id="search">
        <section class="search-res">
			<p class="search-para">You searched for xyz here are the results :)</p>
			<div class="search-items">
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
			</div>
		</section>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#search{
	width: 60%;
	margin: auto;
	padding: 2em;
	text-align: center;
    .search-para{
            margin: 2em 0;
            font-size: 35px;
            color: #FF0000;
            font-family: 'Raleway', sans-serif;
    }
    .search-items{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .item{
            flex-basis: 20%;
            margin: .5em 2em;
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