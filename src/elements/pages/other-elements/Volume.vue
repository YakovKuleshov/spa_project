<template>
	<div class="volume">      			
		<div class="volume__indicator" :style="{ background: `linear-gradient(to top, #0099ff, ${this.volume.value}%, #fff 0%)` }" ref="volumeContainer" @mousedown="mousedown">			
			<div class="indicators"></div>
			<div class="indicators"></div>
			<div class="indicators"></div>
			<div class="indicators"></div>
			<div class="indicators"></div>
			<div class="indicators"></div>
			<div class="indicators"></div>					
		</div>							
		<div class="volume__value">{{ volume.value.toFixed(0) }} %</div>			
	</div>
</template>
<style scoped>

	.volume {
		width: 70px;
		height: 120px;
		border-radius: 10px;
		margin: 0 auto;
		background: #55788b;
		box-shadow: 3px 4px 10px rgba(0,0,0,.5);		
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}	

	.volume__indicator {		
		width: 30px;		
		height: 85%;
		border-radius: 3px;				
		padding: 3px 0;	
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-around;		
		cursor: pointer;
		overflow: hidden;		
	}

	.indicators {
		height: 8px;		
		background: #55788b;
	}	

	.volume__value {
		position: absolute;
		right: -130%;
		top: 50%;
		transform: translateY(-50%);
		font-size: 30px;
		color: #333;
		text-shadow: 1px 1px 2px rgba(0,0,0,.5);
	}

</style>
<script>
	export default {		
		data() {
			return {		
				volume: {
					value: 35
				},	
				moveVolume(e) {							
					const container = this.$refs.volumeContainer;
					const dist = -(100 / container.offsetHeight * (e.clientY - container.getBoundingClientRect().top) - 100);					
					this.volume.value = Math.min(Math.max(0, dist), 100);								
				}
			}
		},
		methods: {		
			mousedown(e) {
				const container = this.$refs.volumeContainer;
				const dist = -(100 / container.offsetHeight * (e.clientY - container.getBoundingClientRect().top) - 100);
				this.volume.value = dist;	
				window.addEventListener('mousemove', this.moveVolume);
			}		
		},
		mounted() {
			this.moveVolume = this.moveVolume.bind(this);

			window.addEventListener('mouseup', () => {			
				window.removeEventListener('mousemove', this.moveVolume);
			})		
		}
	}
</script>