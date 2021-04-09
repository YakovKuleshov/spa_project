<template>
	<div class="main">
		<h2 class="title">Галерея
			<input type="text" placeholder="Поиск" @input="searchWallpapers">
			<div class="total__count">Всего:&nbsp&nbsp{{ count }}</div>
		</h2>
		<div class="content">
			<div class="container" ref="container">
				<div v-for="(item, index) in gallery" class="card__container" :key="index">
					<div class="image__item" :style="{ background: `url('${item.largeImageURL}') no-repeat center`, backgroundSize: 'cover' }" @click="imgClick(item)"></div>
				</div>
				<div v-if="!gallery.length" class="preloader"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
input {
	outline: none;
	position: absolute;
	display: block;
	border: 1px solid #ccc;
	background: #fff;
	border-radius: 5px;
	padding: 0 10px;
	width: 300px;
	color: #333;
	font-size: 18px;
	height: 100%;
	top: 50%;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
	left: 0;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5) inset;
	transform: translateY(-50%);
	letter-spacing: .4px;
}

input::placeholder {
	color: #ccc;
	font-size: 15px;
	
}

.total__count {
	position: absolute;
	top: 50%;
	right: 236px;
	transform: translateY(-50%);
	font-size: 20px;
	background: #fff;
	height: 100%;
	line-height: 40px;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5) inset;
	border-radius: 5px;
	padding: 0 10px;
}

.title {
	position: relative;
	max-width: 1600px;
	font-size: 40px;
	text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
	font-weight: bold;
	color: #333;
	margin: 40px auto;
	padding: 0;
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
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 200px;
	grid-gap: 20px;
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
					// console.log(res)
					if(page === 1) {
						this.gallery = res.hits
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
			this.search = e.target.value
			this.loadGallery(this.page, this.search)
		},
		imgClick(item) {
			this.$emit('onImageClick', item.largeImageURL)
		}
	},
	mounted() {
		this.gallertScroll = this.gallertScroll.bind(this);
		this.loadGallery(this.page, this.search)

		window.addEventListener('scroll', this.gallertScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.gallertScroll);
	}
}
</script>