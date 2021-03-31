<template>
   <div style="padding-left: 30px">
      <template v-for="(item, index) in subList">
         <div class="folder__item" :class="{ folder__item__active: item.id == selected.id }" :key="index" @click="selectItem(item)">
            <div v-if="item.sub_list.length" class="folder__icon" :class="{ folder__icon__active: item.opened }" @click="openList($event, item)"></div>
            <div class="folder__name">{{ item.name }}</div>
         </div>
         <FoldersSubList class="folders__sub__list" 
            v-if="item.sub_list"
            :selected="selected"
            :class="{ active: item.opened }" 
            :subList="item.sub_list" 
            :key="item.id"/> 
      </template>     
   </div>
</template>
<style scoped>

   .folders__sub__list {
      display: none;
   }

   .active {
      display: block !important;
   }

   .folder__item {
		height: 30px;
		display: flex;
		align-items: center;
		border: 1px solid #ccc;
		padding: 0 10px;
		margin-bottom: 3px;
      border-radius: 5px;		
      cursor: pointer;
   }
      
   .folder__item__active {
      background: #3ef3b7;      
   }

	.folder__icon {
		width: 10px;
		height: 10px;
		border-radius: 2px;
		border-right: 2px solid #333;
		border-bottom: 2px solid #333;
		transform: rotate(-45deg);
      transition: .3s;
		box-sizing: border-box;
		margin-right: 10px;
		cursor: pointer;
   }
   
   .folder__icon__active {
      transform: rotate(45deg);
   }
</style>
<script>
   export default {
      name: 'FoldersSubList',      
      props: ['selected','subList'],
      data() {
         return {}
      },      
      methods: {
         openList(e, item) {           
            item.opened = !item.opened            
            e.stopPropagation();
         },
         selectItem(item) {
            this.selected.id = item.id           
         }         
      },
      mounted() {
         
      }
   }
</script>