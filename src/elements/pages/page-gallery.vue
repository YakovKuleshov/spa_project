<template>
	<div class="main">
		<h2 class="page__title">Галерея</h2>		
		<div class="content" ref="galleryContainer">
			<div class="wrapper__row">
				<input type="text" placeholder="Поиск" @input="searchWallpapers">
				<div class="total__count">Всего:&nbsp&nbsp{{ count.toLocaleString() }}</div>				
			</div>
			<div class="container" ref="container">
				<div v-for="(item, index) in gallery" class="card__container" :key="index">
					<div class="image__item" :style="{ background: `url('${item.largeImageURL}') no-repeat center`, backgroundSize: 'cover' }" ref="galleryItem" @click="imgClick(item)"></div>
				</div>
				<div v-if="!gallery.length && count != 0" class="preloader"></div>
				<div v-if="count == 0" class="no__items">Ничего не найдено</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper__row {
	display: flex;
	align-items: center;
	margin-bottom: 20px;
}

input {
	outline: none;	
	display: block;
	border: 1px solid #ccc;
	background: #fff;
	border-radius: 5px;
	padding: 0 10px;
	width: 250px;
	color: #333;
	font-size: 20px;
	height: 45px;	
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5) inset;	
	letter-spacing: .4px;
}

input::placeholder {
	color: #ccc;	
	font-size: 17px;
}

.total__count {	
	font-size: 20px;
	background: #fff;	
	height: 45px;
	line-height: 45px;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5) inset;
	border-radius: 5px;
	padding: 0 10px;
	margin-left: 10px;
	margin-right: 10px;	
}

.page__title {
	margin-bottom: 40px;
	font-size: 40px;
}

.content {
	/* overflow: auto; */
	max-width: 1600px;
	margin: 0 auto;
}

/* .content::-webkit-scrollbar {
	width: 20px;
	height: 20px;
	background: #f0f0f0;
	border-radius: 3px;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, .8) inset;
}

.content::-webkit-scrollbar-thumb  {
	background: grey;
	border: 4px solid transparent;
	border-radius: 7px;
	background-clip: content-box;
} */

.container {
	position: relative;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 200px;
	grid-gap: 20px;
	min-height: 200px;
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

@keyframes rotatePreloader {
  100% {
    transform: translateX(-50%) rotateZ(360deg);
  }
}

.no__items {
	font-size: 35px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
	color: #333;
}

.card__container {
	perspective: 800px;
	transform-style: preserve-3d;
}

.card__container:nth-child(10n + 1) {
	grid-row: span 2;
	grid-column: span 2;
}

.card__container:nth-child(10n + 8) {
	grid-row: span 2;
	grid-column: span 2;
}

.image__item {
	height: 100%;
	cursor: pointer;
	box-shadow: 5px 5px 10px rgba(0,0,0,.8);
	transition: .3s;
}

.card__container:hover .image__item {
	transform: translateZ(10px);
	box-shadow: 7px 9px 20px rgba(0,0,0,.7);
}
</style>

<script>
export default {
	data() {
		return {
			gallery: [],
			page: 1,
			// wthatsapp: 'https://api.whatsapp.com/send?phone=79195361459',
			flag: true,
			search: 'wallpapers',
			count:'',
			loadGallery(page, search) {
				search = !search ? 'wallpapers' : search
				fetch(`https://pixabay.com/api/?key=18385024-b47dd78b6166e0e0861cdd65c&q=${search}&image_type=all&page=${page}&per_page=15`).then((response) => {
					return response.json();
				}).then(res => {					
					if(page === 1) {
						this.gallery = res.hits
						setTimeout(() => {							
							if(this.$refs.galleryContainer.getBoundingClientRect().bottom < window.innerHeight) {
								this.page++
								this.loadGallery(this.page, this.search);
							}							
						})
					}else {
						this.gallery = this.gallery.concat(res.hits)
					}
					this.count = res.total
					this.flag = true
					
				}).catch(err => console.log(err));
			},
			gallertScroll() {
				if(!this.flag) return false
				if(this.gallery.length < this.count) {
					
					if(window.scrollY + 200 > document.body.scrollHeight - window.innerHeight) {
						this.page++

						this.loadGallery(this.page, this.search)	
						this.flag = false 
					}
				}
			}
		}
	},
	methods: {		
		searchWallpapers(e) {
			this.page = 1
			this.search = e.target.value.trim();			
			this.loadGallery(this.page, this.search)
		},
		imgClick(item) {
			this.$emit('onImageClick', item.largeImageURL)
		}
	},
	created() {
		this.loadGallery(this.page, this.search);
	},
	activated() {
		this.gallertScroll = this.gallertScroll.bind(this);		
		window.addEventListener('scroll', this.gallertScroll);
	},
	deactivated() {
		window.removeEventListener('scroll', this.gallertScroll);
	},
	// mounted() {
	// 	this.gallertScroll = this.gallertScroll.bind(this);	
	// 	window.addEventListener('scroll', this.gallertScroll);
	// },
	
	// destroyed() {
	// 	window.removeEventListener('scroll', this.gallertScroll);
	// }
}
</script>