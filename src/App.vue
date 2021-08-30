<template>
	<div id="main">
		<div class="wallpaper" :style="{ background: 'url(' + mainBg + ') no-repeat center' }"></div>		
		<section>
			<h1 class="title">{{ title }}</h1>
			<div v-if="getPath" class="menu">
				<div class="shadow__line" :style="{ width: lineWidth + 'px', left: lineLeft + 'px' }"></div>
				<template v-for="item in menuList">
					<router-link
						:to="item.id"						
						class="menu__item"
						active-class="menu__item__active"
						:key="item.id"
						@click.native="switchPage">{{ item.name }}
					</router-link>
				</template>
			</div>
			<div class="import__components">
				<div class="content">
					<!-- <keep-alive> -->
						<router-view @onImageClick="imageClick" @onFilmClick="filmClick"></router-view>
					<!-- </keep-alive> -->
				</div>
			</div>
		</section> 
		<template v-if="filmData">
			<popup-info :filmData="filmData" @clearData="clearData"></popup-info>
		</template>
		<template v-if="galleryImgUrl">
			<ImagePopup :url="galleryImgUrl" @clearImgUrl="clearImgUrl" />
		</template>
		<div v-if="!this.$isMobile" class="button color__button" @click="colorpickerToggle">Цвет</div>
		<div class="color__picker" :class="{ color__picker__active: colorpicker }" @click="stopProp">
			<Colorpicker @onRgbaColor="setRgba" @onInputColor="setHexColor" />
		</div>
		<div class="clock">
			<Clock />			
		</div>
		<resize-block class="resize__overlay" v-if="!this.$isMobile" :bgColor="blockColor"></resize-block>
		<div class="up__down_buttons">
			<div id="up" class="scroll__buttons up__button" ref="upButton" @click="scrollPage"></div>
			<div id="down" class="scroll__buttons down__button" ref="downButton" @click="scrollPage"></div>
		</div>
		<weather-now></weather-now>		
		<div class="logo">
			<div class="logo__icon"></div>
		</div>
		<div class="ultra">
			<div class="ultra__logo"></div>
			<audio controls src="https://nashe1.hostingradio.ru:18000/ultra-128.mp3" ref="audio"></audio>
		</div>  		
		<div v-if="!mainBg.includes('wallpaper')" class="bg__button" :style="{ top: `${bgButtonTop}px` }">
			<div class="pulse__elem_1"></div>
			<div class="pulse__elem_2"></div>
			<div class="pulse__elem_3"></div>
			<div class="button gallary__button" @click="changeMainBg('img/wallpaper_5.jpg')">Вернуть фон</div>
		</div>
	</div>
</template>

<script>

	import weatherNow from "./elements/weather-now/weather-now";
	import Range from "./elements/range/Range";
	import Colorpicker from "./elements/colorpicker/Colorpicker";
	import resizeBlock from "./elements/resize-block/Resize-block";
	import popupInfo from "./popup-info";
	import Clock from "./elements/clock/Clock";
	import ImagePopup from "./ImagePopup";
	import { mapState, mapMutations } from "vuex";
	import "./style/style.css";

export default {
	components: {
		weatherNow,           
		popupInfo,
		Range,
		Colorpicker,
		resizeBlock,
		ImagePopup,
		Clock 
	},
	data() {
		return {                 			
			galleryImgUrl: "",
			colorpicker: false,
			blockColor: "",
			hexColor: "",
			rangeValue: "",
			filmData: "",
			title: "Vue",
			lineWidth: "",
			lineLeft: "",
			bgButtonTop: window.innerHeight - 300
		};
	},
	watch: {
    	$route({ meta }) {			
        	document.title = meta;
    	}
	},
	methods: {     
		...mapMutations('mainStore', ['changeMainBg']),
		switchPage() {			
			let activeItem = document.querySelector(".menu__item__active");
			if(activeItem) {
				this.lineWidth = activeItem.offsetWidth;
				this.lineLeft = activeItem.offsetLeft;
			}
		},

		stopProp(e) {
			e.stopPropagation();
		},

		colorpickerToggle(e) {
			this.colorpicker = !this.colorpicker;
			e.stopPropagation();
		},

		getRangeValue(value) {
			this.rangeValue = value;
		},

		filmClick(film_data) {
			this.filmData = film_data;
		},

		imageClick(url) {
			this.galleryImgUrl = url;
		},

		clearData() {
			this.filmData = "";
		},

		clearImgUrl() {
			this.galleryImgUrl = "";
		},

		scrollPage(e) {
			if (e.target.id === "up") {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			} else {
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: "smooth",
				});
			}
		},

		setRgba(value) {
			this.blockColor = value;
		},

		setHexColor(value) {
			// this.hexColor = value[0] == '#' ? value : '#' + value
		}
	},
	computed: {
		...mapState('mainStore', ['menuList', 'mainBg']),		
		getPath()  {
			return this.$route.path != '/info';
		}
	},

	beforeCreate() {},

	created() {},

	beforeMount() {},
	
	mounted() {				
		this.switchPage();
		
		this.$refs.audio.volume = .1;

		if (window.scrollY < 500) {
			this.$refs.upButton.style.opacity = "0";
			this.$refs.upButton.style.display = "none";
		}

		if (
			window.scrollY >
			document.body.scrollHeight - window.innerHeight - 500
		) {
			this.$refs.downButton.style.opacity = "0";
			this.$refs.downButton.style.display = "none";
		}

		let flagUp = true;
		let flagDown = true;
		
		window.addEventListener("scroll", (e) => {
			//PARALAX
			// let elems = this.$el.querySelectorAll(".block");
			// elems.forEach((el) => {
			//    if (window.scrollY - el.offsetTop >= -100) {
			//       el.style.transform =  `translateY(${(window.scrollY - el.offsetTop + 100) / 1.5}px)`;
			//    } else {
			//       el.style.transform = "translateY(0)";
			//    }
			// });

			this.bgButtonTop = window.innerHeight - 300 + window.scrollY;

			if (!flagUp) return false;
			flagUp = false;

			if (window.scrollY > 500) {
				this.$refs.upButton.style.display = "block";
				setTimeout(() => {
					this.$refs.upButton.style.opacity = "1";
					flagUp = true;
				}, 1);
			} else {
				this.$refs.upButton.style.opacity = "0";
				setTimeout(() => {
					this.$refs.upButton.style.display = "none";
					flagUp = true;
				}, 300);
			}

			if (!flagDown) return false;
			flagDown = false;

			if (
				window.scrollY <
				document.body.scrollHeight - window.innerHeight - 500
			) {
				this.$refs.downButton.style.display = "block";
				setTimeout(() => {
					this.$refs.downButton.style.opacity = "1";
					flagDown = true;
				});
			} else {
				this.$refs.downButton.style.opacity = "0";
				setTimeout(() => {
					this.$refs.downButton.style.display = "none";
					flagDown = true;
				}, 300);
			}
		});

		window.addEventListener("click", () => {
			this.colorpicker = false;
		});

		window.addEventListener('popstate', () => {
			this.switchPage();
		});

		// let number = 20500200
		// console.log(new Intl.NumberFormat().format(number))		
	},

	beforeUpdate() {},

	updated() {},

	beforeDestroy() {},

	destroyed() {},

	activated() {},

	deactivated() {},
};
</script>
