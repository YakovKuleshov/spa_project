<template>
	<div class="other" ref="container">
		<h2 class="page__title">Разное</h2>
		<div class="other__content">         
			<div class="section slider">
				<Slider />
			</div>    			   
			<div class="section">
				<AnimatedShapes />
			</div>
			<div class="section infinite__slider">         
				<component :is="componentsList[0].instance"></component>
				<!-- <InfiniteSlider /> -->
			</div>
			<div class="section">
				<component :is="componentsList[1].instance"></component>
				<!-- <Header /> -->
			</div>
			<div class="section">
				<component :is="componentsList[2].instance"></component>
				<!-- <TabMenu /> -->
			</div>
			<div class="section">
				<div v-if="componentsList[3].instance" class="folders__container">
					{{ name }}
					<component :is="componentsList[3].instance" :selected="selectedItem" :list="fixedList"></component>
					<!-- <FolderList :selected="selectedItem" :list="fixedList" /> -->
				</div>
			</div>
			<div class="section">
				<component :is="componentsList[4].instance"></component>
				<!-- <DragDrop /> -->
			</div>
			<div class="section">
				<component :is="componentsList[5].instance"></component>
				<!-- <Volume /> -->
			</div>         
			<div class="section">
				<component :is="componentsList[6].instance"></component>
			</div>
		</div>
		<StarsRating />      
		<div class="button" @click="updateSection">Send</div>
	</div>
</template>

<style scoped>

	.button {
		position: fixed;
		width: 150px;
		height: 40px;
		box-shadow: -2px 5px 10px rgb(0 0 0 / 50%);
		background: #07f;
		top: 350px;
		left: 58px;
		border-radius: 5px;
		text-align: center;
		line-height: 40px;
		color: #fff;
		letter-spacing: 1px;
		cursor: pointer;
	}

	.folders__container {
		width: 400px;
		background: #fff;
		margin: 0 auto;
		padding: 10px;
		border-radius: 5px;
		position: relative;
	}

	.page__title {
		margin-bottom: 40px;
		font-size: 40px;
	}

	.section {
		position: relative;
		margin-bottom: 100px;
		z-index: 0;
	}

	.section:last-of-type {
		margin-bottom: 0;
	}

	.infinite__slider {
		max-width: 1400px;
		margin: 0 auto 200px;
		padding: 0 50px;
		box-sizing: border-box;
	}

	.slider {
		margin: 0 auto 100px;
		max-width: 800px;
	}
</style>

<script>
import Slider from "../slider/Slider";
import StarsRating from './other-elements/starsRating';
import AnimatedShapes from './other-elements/AnimatedShapes'

// import InfiniteSlider from "../slider/InfiniteSlider";
// import Header from "../header/Header";
// import TabMenu from "../tab-menu/TabMenu";
// import FolderList from "./other-elements/FolderList";
// import DragDrop from "./other-elements/DragDrop";
// import Volume from "./other-elements/Volume";

export default {
	components: {
		Slider,
		StarsRating,
		AnimatedShapes		
		// InfiniteSlider,
		// Header,
		// TabMenu,
		// FolderList,
		// DragDrop,
		// Volume,
	},
	data() {
		return {
			scrollFlag: true,
			counter: -1,       
			componentsList: [
				{
					instance: '',
					component: () => import('../slider/InfiniteSlider'),
				},
				{
					instance: '',
					component: () => import('../header/Header'),
				},
				{
					instance: '',
					component: () => import('../tab-menu/TabMenu'),
				},
				{
					instance: '',
					component: () => import('./other-elements/FolderList'),
				},
				{
					instance: '',
					component: () => import('./other-elements/DragDrop'),
				},
				{
					instance: '',
					component: () => import('./other-elements/Volume')
				},
				{
					instance: '',
					component: () => import('./other-elements/Сalendar')
				}                     
			],         
			name: "",
			selectedItem: {
				id: null,
			},
			folders: [
				{
					id: null,
					name: "Все",
					parent_id: "",
					opened: false,
				},
				{
					id: 1,
					name: "Главная",
					parent_id: "",
					opened: false,
				},
			],
			fixedList: [],
			fixList(arr, res) {
				arr.forEach((el) => {
					el.sub_list = res.filter((item) => item.parent_id == el.id);

					if (el.sub_list && el.sub_list.length) {
						this.fixList(el.sub_list, res);
					}
				});
				this.fixedList = arr;
			},
			getName(list, id) {
				list.forEach((el) => {
					if (el.id === id) {
						this.name = el.name;
					}
					if (el.sub_list.length) {
						this.getName(el.sub_list, id);
					}
				});
			},
			loadContent(first_load) {
				const container = this.$refs.container;
				if(this.counter < this.componentsList.length - 1) {
					if(!this.scrollFlag) return false
					if(window.scrollY >= document.body.scrollHeight - window.innerHeight - 200) {						
						this.counter++            
						this.componentsList[this.counter].instance = this.componentsList[this.counter].component;
						this.scrollFlag = false            
						if(this.componentsList[this.counter].instance) {
							this.scrollFlag = true                     
							if(first_load) {                        
								this.componentsList[this.counter].instance().then(x => {                        
									setTimeout(() => {
										if(container.getBoundingClientRect().bottom < window.innerHeight) {
											this.loadContent(first_load);
										}                           
									}, 10)                
								})              
							}                                
						}
					}              
				}
			}        
		};
	},
	watch: {
		selectedItem: {
			handler: function (val) {
				this.getName(this.fixedList, val.id);
			},
			deep: true,
		},
	},
	computed: {},
	methods: {       
		updateSection() {
			// ("https://api.wantenger.com/api/wantenger/work/update");
			// id: '1572446048261'  

			// Здравствуйте. Хочу подать анонимную жалобу на организацию ООО Триумф, расположенную по адресу г. Москва 2-й Крутицкий переулок, 18с3.  Этой организацией управляет бывший глава "Интеркоопбанка" Золкин Олег Анатольевич. По не подтвержденной информации в этой организации осуществляется отмыв денежных средств через отдел разработки, что я имею ввиду: разрабатывают сайт уже на протяжении лет 12 и конца этому не видно - всё переделывается постоянно, даются нелепые задачи, заставляют сниматься на виде и давать какие то обещания угрожая увольнением, заставляют подписывать какие то непонятные отчеты, называя их авторскими правами, хотя авторские права передаются совсем в другой форме. Вкладывают на зарплаты программистам одну сумму, платят им сущие копейки за их работу, а по бухгалтерии у всех зарплаты завышены в 3-4 раза, нет учета отпусков.  Правой рукой Золкина О. А. является Бутузов Алексей Юрьевич, именно он и руководит всем процессом липовой разработки, кроет матом подчиненных и заставляет выполнять большой объем работ, угрожая не выплатой заработной платы за отказы. У Золкина О. А. в Шестаково находится завод по производству молока ЗАО "Шестаково". Главой Шестаковского села является Бутузова Нина Ивановна. По не подтвержденной информации она выделила землю под этот завод, либо аренду земли сделала ниже рыночной, в замен на это Бутузов А. Ю. получил свою должность руководителя проекта. По всем документам генеральным директором числится Подобед Андрей Юрьевич, но он там только для подписи, всем управляют Золкин О. А. и Бутузов А. Ю. Прошу провести расследование и принять соответствующие меры к виновным.
			
			fetch('https://api.wantenger.com/api/wantenger/sections/page/list/?profile=601825', {
				method: 'GET',
				headers: new Headers({
					'Accept': 'application/json',
					'Content-Type': 'application/json; charset=utf-8',						
				})										
			}).then((response) => {
				return response.json();
			}).then(res => {           
				let data = res
				data[0].slides[0].custom_text = '<p><span style="font-size: 36px; color: #270043;"><strong>В Wantenger есть все, что вам нужно</strong></span></p>'               
				console.log(data)
				// https://api.wantenger.com/api/wantenger/work/update
				// https://api.wantenger.com/api/wantenger/sections/page/save
				// fetch('https://api.wantenger.com/api/wantenger/work/update', {
				//    method: 'POST',
				//    headers: new Headers({
				//       'Accept': 'application/json',
				
				//       'Content-Type': 'application/json; charset=utf-8'						
				//       // session: '10b19f61-0e1a-4b24-a214-2c43d6231638'
				//    }),		                  
				//    body: JSON.stringify({id: data[0].id, vacancy_id: JSON.stringify(data[0])})
				// }).then((response) => {
				//    return response.json();
				// }).then(res => {                  
				//    console.log(res);
				// });
			});			
		}
	},
		
	mounted() {	
		// this.$router.push(this.$route.path + '?page=1')
		// console.log(this.$route.query)
		// console.log(this.$options)


		//332260061 - коммент
		// Золкин Олег: 604825, Дмитрий Золкин: 709461, Золкин Дмитрий Олегович: 739361, Золкин Олег Анатольевич: (739661 740661), Золкина Катя: 785861
		this.loadContent(true);   
		window.addEventListener('scroll', e => {
			this.loadContent();
		})      
		
		fetch("src/elements/pages/other-elements/data.json")
			.then((response) => {
				return response.json();
			})
			.then((res) => {
				res.forEach((el) => (el.opened = false));

				this.fixList(this.folders, res);
				this.selectedItem = { id: null };
			});                  
			// https://webdevblog.ru/15-obyazatelnyh-direktiv-vue-kotorye-znachitelno-uvelichat-vashu-proizvoditelnost/
			// let number = 3000500
			// console.log(new Intl.NumberFormat().format(number))
	}
};
</script>