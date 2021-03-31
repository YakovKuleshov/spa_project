<template>
	<div class="main">
		<h2 class="page__title">Фильмы</h2>
		<div class="wrapper">
			<div class="container" @scroll="scrollContent" ref="container">
				<template v-for="(item, index) in list">
					<div class="list__item" :key="index" @click="showInfo(item)">
						<div class="item__image" :style="{ backgroundImage: `url('${getImageUrl(item.element.basicCovers.items)}')`}"></div>
						<div class="text__container">
							<div class="title__text">{{ item.element.name }}</div>
							<div class="public__date">{{ item.Year }}</div>
							<div class="rating__wrapper">
								<div class="year">{{ item.element.worldReleaseDate ? new Date(item.element.worldReleaseDate).toLocaleString([], {year: 'numeric'}) : '' }}</div>
								<div class="rate__wrapper">
									<div class="rating">
										<div class="colored__rating"  :style="{ backgroundImage: 'url(src/img/' + getRateColor(item.element.kinopoiskRating) + ')', width: getRateWidth(item.element.kinopoiskRating) + '%' }"></div>
									</div>
									<div class="value">{{ getRate(item.element.kinopoiskRating) }}</div>
								</div>
							</div>
						</div>
					</div>
				</template>
			</div>
			<div v-if="list.length" class="filters">
				<div class="label" :class="{ active: this.ratingFilter }" @click="rateFilter">По рейтингу</div>
			</div>
			<div v-if="preloader" class="loading">
				<div class="preloader"></div>
				<div class="loading__text">Загрузка...</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

	.page__title {
		font-size: 40px;
		margin-bottom: 40px;		
	}

	.wrapper {
		position: relative;
	}

	.loading {
		position: absolute;
		bottom: -18px;
		left: 50%;
		transform: translateX(-50%);
	}

	.loading__text {
		margin: 5px 0 0 10px;
		color: #0863EF;
		font-size: 15px;
		font-weight: bold;
	}

	.preloader {
		margin: 0 auto;
		width: 30px;
		height: 30px;
		border: 4px solid #0863EF;
		border-radius: 50%;
		border-right-color: transparent;
		box-sizing: border-box;
		animation: rotatePreloader  .5s linear infinite;
	}

	@keyframes rotatePreloader {
		100% {
			transform: rotateZ(360deg);
		}
	}

	.filters {
		position: absolute;
		width: 140px;
		height: 100%;
		border-radius: 7px;
		box-shadow: 2px 2px 5px rgba(0,0,0,.6) inset;
		background: #fff;
		padding: 13px;
		left: 290px;
		box-sizing: border-box;
		top: 0;
	}

	.label {
		cursor: pointer;
		font-size: 16px;
		text-shadow: 1px 1px 2px rgba(0,0,0,.3);
		margin-bottom: 10px;
		font-weight: bold;
		color: #333;
	}

	.container {
		display: flex;
		height: 556px;
		overflow-y: auto;
		flex-wrap: wrap;
		padding-bottom: 5px;
		align-content: flex-start;
		scroll-behavior: smooth;
		max-width: 1000px;
		margin: 0 auto;
	}

	.container::-webkit-scrollbar {
		width: 5px;
	}

	.container::-webkit-scrollbar-thumb {
		background: grey;
		border-radius: 5px;
	}

	.list__item {
		cursor: pointer;
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
		display: flex;
		flex-direction: column;
		width: 170px;
		flex-grow: 1;
		height: 260px;
		margin: 10px;
	}

	.item__image {
		flex-grow: 1;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}

	.text__container {
		display: flex;
		flex-direction: column;
		background: #fff;
		flex-grow: .1;
		padding: 10px;
		color: #333;
		box-shadow: 0px -3px 10px rgba(0,0,0,.8);
	}

	.title__text {
		font-size: 14px;
		letter-spacing: .4px;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	}

	.public__date {
		margin-top: auto;
		display: flex;
		justify-content: flex-end;
		font-size: 15px;
		color: #333;
		text-shadow: -2px 3px 5px rgba(0, 0, 0, 0.4);
	}

	.rating__wrapper {
			display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.year {
		font-size: 15px;
		color: #9c9c9c;
	}

	.rate__wrapper {
		display: flex;
		align-items: center;
	}

	.rating {
		position: relative;
		width: 70px;
		height: 13px;
		background: url('../../img/grey_star.svg') repeat-x center;
		background-size: contain;
	}

	.colored__rating {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		background-size: contain;
	}

	.value {
		color: #333;
		font-weight: bold;
		margin-left: 10px;
		font-size: 16px;
	}

	.active {
		color: #07f;
	}
</style>

<script>
export default {
	data() {
		return {
			preloader: false,
			ratingFilter: false,
			list: [],
			page: 0,
			hasItems(arr) {
				return arr && arr.length ? true : false
			},
			getRate(rate) {
				return rate ? rate.toFixed(1) : ''
			},
			getImageUrl(arr) {
				return arr[1] && arr[1].__ob__.value.url ? arr[1].__ob__.value.url : arr[0].__ob__.value.url
			},
			getRateColor(rate) {				
				if(!rate) return
				if(rate <= 4) {
					return 'red_star.svg'
				}else if(rate > 4 && rate <= 7) {
					return 'yellow_star.svg'
				}else {
					return 'green_star.svg'
				}
			},
			getRateWidth(rate) {
				return 100 / 10 * rate
			},
			getItemInfo(item) {				
				fetch(`https://ctx.playfamily.ru/screenapi/v1/noauth/moviecard/web/1?elementAlias=${item.element.alias}&elementType=MOVIE`, {					
				}).then((response) => {
					return response.json();
				}).then(res => {					
					const filmData = {
						url: res.element.basicCovers.items[0].url,
						description: res.element.description,
						trailer: res.element.trailers.items[1].url,
						rating: res.element.kinopoiskRating,
						filmName: res.element.alias,
						type: res.element.type,
						year: new Date(res.element.worldReleaseDate).toLocaleString({}, { year: 'numeric' })
					}
					this.$emit('onFilmClick', filmData)
				});
			},
			load(page) {
				this.preloader = true
				fetch('https://ctx.playfamily.ru/screenapi/v1/noauth/collection/web/1?elementAlias=novelty_web&elementType=COLLECTION&limit=10&offset='+ page +'&withInnerCollections=false')
					.then(response => response.json())
					.then(res => {

						if(this.hasItems(res.element.collectionItems.items)) {
							if(this.page == 0) {
								this.list = res.element.collectionItems.items
							}else {
								this.list = this.list.concat(res.element.collectionItems.items)
							}
							this.flag = true
						}
						this.clone = this.list.slice(0)
						this.preloader = false
					}).catch(err => console.log(err));
			}
		}
	},
	watch: {
		ratingFilter(value) {
			if(value) {
				let list = this.list.slice(0)
				list.sort((a, b) => {
					if(a.element.kinopoiskRating > b.element.kinopoiskRating) return -1
				})
				this.list = list
			}else {
					this.list = this.clone
			}
		}
	},
	methods: {
		scrollContent(e) {
			let container = e.target

			if(!this.flag) return false
			if(container.scrollTop >= (container.scrollHeight - container.offsetHeight) - 200) {
				this.page += 10
				this.load(this.page)
				this.flag = false
			}
		},
		showInfo(item) {			
			this.getItemInfo(item);
		},
		rateFilter() {
			this.ratingFilter = !this.ratingFilter

			if(this.ratingFilter) {
				this.$refs.container.scrollTop = 0
			}
		}
	},
	mounted() {
		this.load(this.page)
	}
}
</script>