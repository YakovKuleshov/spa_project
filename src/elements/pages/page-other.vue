<template>
   <div class="other">
      <h2 class="page__title">Разное</h2>
      <div class="section slider">
         <Slider />
      </div>
      <div class="section infinite__slider" ref="infinContainer">         
         <component :is="componentsList[0].instance"></component>
         <!-- <InfiniteSlider /> -->
      </div>
      <div class="section" ref="header">
         <component :is="componentsList[1].instance"></component>
         <!-- <Header /> -->
      </div>
      <div class="section" ref="tabMenu">
         <component :is="componentsList[2].instance"></component>
         <!-- <TabMenu /> -->
      </div>
      <div class="section">
         <div v-if="componentsList[3].instance" class="folders__container" ref="folders">
            {{ name }}
            <component :is="componentsList[3].instance" :selected="selectedItem" :list="fixedList"></component>
            <!-- <FolderList :selected="selectedItem" :list="fixedList" /> -->
         </div>
      </div>
      <div class="section" ref="dragDrop">
         <component :is="componentsList[4].instance"></component>
         <!-- <DragDrop /> -->
      </div>
      <div class="section" ref="volume">
         <component :is="componentsList[5].instance"></component>
         <!-- <Volume /> -->
      </div>
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

.infinite__slider {
   max-width: 1300px;
   margin: 0 auto 200px;
}

.slider {
   margin: 0 auto 100px;
   max-width: 800px;
}
</style>

<script>
import Slider from "../slider/Slider";
// import InfiniteSlider from "../slider/InfiniteSlider";
// import Header from "../header/Header";
// import TabMenu from "../tab-menu/TabMenu";
// import FolderList from "./other-elements/FolderList";
// import DragDrop from "./other-elements/DragDrop";
// import Volume from "./other-elements/Volume";

export default {
   components: {
      Slider,
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

			// '{"header":{"text":""},"change_slide_effect_settings":{"change_slide_effect_type":"fadeof","change_slide_effect_duration":4},"right_controls":{"turned_on":false,"type":"1"},"bottom_controls":{"turned_on":false,"type":"1"},"slides":[{"composition":{"type":"4"},"content_align":"center","background":{"type":"image","url":"http://api.demo.wantenger.com/reader/18040961/","adaptation":"cover","position":"top","color":"transparent","scrolling":{"type":"usual","amount":"1200"},"exposition":"100%","contrast":"100%","blur":"0","grayscale":"0","saturate":"100","sepia":"0","huerotate":"0","opacity":"100","mobile_hidden":false,"overlay":{"color":"#5E5E5E","opacity":"0","type":"fog_8"},"position_2":"center","poster_url":"","id":"","huerotate":0},"texts":[{"style":"h3","text":""}],"texts_color":"#0000a0","media":"","buttons":[{"size":"large","label":{"text":"","style":"h2","color":"#ffffff"},"background":{"color":"#00ff99"},"border":{"color":"#00ff99","radius":"0"},"action":{"type":"subscribe","data":""}},{"size":"large","label":{"text":"","style":"h2","color":"#ffffff"},"background":{"color":"#00ff99"},"border":{"color":"#00ff99","radius":"0"},"action":{"type":"subscribe","data":""}},{"size":"large","label":{"text":"","style":"h2","color":"#ffffff"},"background":{"color":"#00ff99"},"border":{"color":"#00ff99","radius":"0"},"action":{"type":"subscribe","data":""}}],"custom_text":"<p><span style=\"font-size: 36px; color: #270043;\"><strong>В Wantenger есть все, что вам нужно&nbsp;</strong></span></p>","index":"0","content_top":"-335","content":{"padding_bottom":"","margin_top":"","margin_bottom":"","margin_left":"","margin_right":""},"content_bottom":"","folder_id":""}],"block_height":{"height":"650","unit":"px"},"name":"Медиа","type":"mediablock","current_slide_index":"0"}'
			
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

      window.addEventListener('scroll', e => {
      if(this.counter < this.componentsList.length - 1) {
         if(!this.scrollFlag) return false
            if(window.scrollY > document.body.scrollHeight - window.innerHeight) {
               this.counter++            
               this.componentsList[this.counter].instance = this.componentsList[this.counter].component;
               this.scrollFlag = false            
               if(this.componentsList[this.counter].instance) {
                  this.scrollFlag = true
               }
            }      
         }
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

         // let number = 3000500
         // console.log(new Intl.NumberFormat().format(number))
   }
};
</script>