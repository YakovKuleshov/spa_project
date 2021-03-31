<template>
	<div class="drag__drop">
		<div class="container" @drop="dropToEmptyContainer($event)" @dragover="$event.preventDefault()">
			<div class="list__title">Начальный список</div>
			<div v-for="(item, index) in firstList" class="list__item" draggable="true" 
				:key="index"
				@dragstart="dragstart($event, index)"
				@dragend="dragend($event, index)"
				@dragover="dragover($event)"
				@dragleave="dragleave($event)"
				@drop="drop($event, index)">
				{{ item.name }}
			</div>        
		</div>
		<div class="container second__container" @drop="dropToEmptyContainer($event)" @dragover="$event.preventDefault()">
			<div class="list__title">Конечный список</div>			
			<div v-for="(item, index) in endList" class="list__item second__item" draggable="true"
				:key="index"
				@dragstart="dragstart($event, index)"
				@dragend="dragend($event, index)"
				@dragover="dragover($event)"
				@dragleave="dragleave($event)"
				@drop="drop($event, index)">
				{{ item.name }}
			</div>			
		</div>
	</div>
</template>
<style scoped>
	.drag__drop {
		max-width: 674px;
		display: flex;
		margin: 0 auto;
		background: #fff;
		padding: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		color: #333;
		height: 475px;
	}
	
	.container {
		flex-grow: 1;     
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		box-sizing: border-box;    
		width: 1px;  
	}

	.container:nth-child(1) {
		margin-right: 10px;
	}

	.list__title {
		text-align: center;
		margin-bottom: 10px;
		font-weight: bold;      
		font-size: 18px;
		text-shadow: 1px 1px 2px rgba(0,0,0,.4);
	}

	.list__item {
		border: 1px solid #07f;
		padding: 8px;
		margin-bottom: 5px;
		box-shadow: 1px 2px 3px rgba(0,0,0,.2);
		border-radius: 3px;                      
		cursor: grab;      
		box-sizing: border-box;    
		background: #61c7f0;        
	}

	.list__item:active {
		cursor: grabbing;     
	}
	
	.invisible {
		opacity: 0;
	}

</style>
<script>
	export default {
		data() {
			return {
				firstList: [
					{
						name: 'Елемент 1'
					},
					{
						name: 'Елемент 2'
					},
					{
						name: 'Елемент 3'
					},
					{
						name: 'Елемент 4'
					},
					{
						name: 'Елемент 5'
					},
					{
						name: 'Елемент 6'
					},
					{
						name: 'Елемент 7'
					},
					{
						name: 'Елемент 8'
					},
					{
						name: 'Елемент 9'
					},
					{
						name: 'Елемент 10'
					}
				],
				endList: []				
			}
		},
		methods: {
			dragstart(e, index) {                 
				this.draggedIndex = index;
				this.fromContainer = e.target.parentNode;
				this.draggedElem = e.target;
			},
			dragend(e, index) {            
				e.target.classList.remove('invisible');			
			},
			dragover(e) {                   				
				e.target.classList.add('invisible');   
				e.preventDefault();
			},
			dragleave(e) {				
				if(this.draggedElem.innerText !== e.target.innerText) e.target.classList.remove('invisible');				
			},			
			drop(e, index) {

				if(!this.fromContainer.classList.contains('second__container') && !e.target.classList.contains('second__item')) {
					let elem = this.firstList.splice(this.draggedIndex, 1);
					this.firstList.splice(index, 0, ...elem);
				}else if (!this.fromContainer.classList.contains('second__container') && e.target.classList.contains('second__item')){
					let elem = this.firstList.splice(this.draggedIndex, 1);
					this.endList.splice(index, 0, ...elem);
				}else if (this.fromContainer.classList.contains('second__container') && e.target.classList.contains('second__item')) {
					let elem = this.endList.splice(this.draggedIndex, 1);
					this.endList.splice(index, 0, ...elem);
				}else {
					let elem = this.endList.splice(this.draggedIndex, 1);
					this.firstList.splice(index, 0, ...elem);
				}

				e.target.classList.remove('invisible');
				e.stopPropagation();
			},
			dropToEmptyContainer(e) {
				if(!this.fromContainer.classList.contains('second__container') && e.target.classList.contains('second__container')) {
					let elem = this.firstList.splice(this.draggedIndex, 1);
					this.endList.push(...elem);
				}else if(this.fromContainer.classList.contains('second__container') && !e.target.classList.contains('second__container')) {
					let elem = this.endList.splice(this.draggedIndex, 1);
					this.firstList.push(...elem);
				}					
			}
		}
	}
</script>