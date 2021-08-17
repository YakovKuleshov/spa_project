<template>
	<div class="main">
		<h2 class="page__title">Новости</h2>
		<div class="news__slider">
			<NewsSlider class="infinte__news" :list="newsList"/>
		</div>
		<div class="content__wrapper">
			<div class="container" ref="container">
				<template v-for="(item, index) in newsList">
					<div class="news__item" :key="index">
						<a :href="item.url" rel="noopener" target="_blank">
							<div class="item__image" :style="{ background: `#ccc url('${ item.urlToImage }') no-repeat center`, backgroundSize: 'cover' }"></div>
							<div class="text__container">
								<div class="title__text">{{ item.title }}</div>
								<div class="public__date">{{ new Date(item.publishedAt).toLocaleDateString() }}</div>
							</div>
						</a>
					</div>
				</template>
			</div>
			<div v-if="!newsList.length" class="preloader"></div>
		</div>
	</div>
</template>

<style scoped>
	a {
		text-decoration: none;
		height: 300px;
		display: flex;
		flex-direction: column;
	}

	.page__title {
		margin-bottom: 40px;
		font-size: 40px;
	}

	.content__wrapper {
		position: relative;
	}

	.news__slider {
		margin: 0 auto 20px;
		max-width: 1000px;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		grid-gap: 20px;
		padding-bottom: 5px;
		min-height: 560px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.news__item {
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
		transition: 1s;
	}

	.item__image {
		flex-grow: 1;
	}

	.text__container {
		display: flex;
		flex-direction: column;
		background: #fff;
		flex-grow: 0.1;
		padding: 10px;
		color: #333;
	}

	.title__text {
		font-size: 19px;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
	}

	.public__date {
		margin-top: auto;
		display: flex;
		justify-content: flex-end;
		font-size: 15px;
		color: #ccc;
	}

	.preloader {
		position: absolute;
		margin: 0 auto;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
		width: 30px;
		height: 30px;
		border: 4px solid #0863ef;
		border-radius: 50%;
		border-right-color: transparent;
		box-sizing: border-box;
		animation: rotatePreloader 0.5s linear infinite;
		display: block;
	}

	.infinte__news {
		--newsColor:#9bb2f4;
	}

	@keyframes rotatePreloader {
		100% {
			transform: translateX(-50%) rotateZ(360deg);
		}
	}
</style>
	
<script>
import { mapGetters, mapActions } from 'vuex'
import NewsSlider from "../news-slider/newsSlider"

export default {	
	components: {
		NewsSlider
	},
	computed: mapGetters('mainStore', ['newsList']),
	methods: mapActions('mainStore', ['getNews']),
	mounted() {				
		this.getNews()
	}
}
</script>