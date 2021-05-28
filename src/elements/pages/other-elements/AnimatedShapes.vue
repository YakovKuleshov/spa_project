<template>
	<div class="shapes">      
		<div class="round__block">
			<div class="round__item"></div>
			<div class="round__item"></div>
			<div class="round__item"></div>
			<div class="round__item"></div>
		</div>       
		<div class="cube">
			<div class="side__small side__small_1"></div>
			<div class="side__small side__small_2"></div>
			<div class="side__small side__small_3"></div>
			<div class="side__small side__small_4"></div>
			<div class="side__small side__small_5"></div>
			<div class="side__small side__small_6"></div>
			<div class="side side_1"></div>
			<div class="side side_2"></div>
			<div class="side side_3"></div>
			<div class="side side_4"></div>
			<div class="side side_5"></div>
			<div class="side side_6"></div>
		</div>
	</div>
</template>
<style scoped>

	.shapes {
		perspective: 1000px;
		display: flex;
		justify-content: space-between;
		max-width: 900px;
		margin: 0 auto;
	}

	.round__block {
		position: relative;     
		display: block;
		width: 300px;      
		height: 300px;     
		box-sizing: border-box;            
		transform-style: preserve-3d;
		animation: rotateSvg 20s linear infinite;
	}

	@keyframes rotateSvg {
		100% {
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
		}
	}

	.round__item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;          
		box-sizing: border-box;
		border: 3px solid #02afff;
		background: rgba(0,0,0,.2);
		animation: rotateSquare 20s linear infinite;
	}  

	@keyframes rotateSquare {      
		0% {
			border-radius: 0%;
		}
		50% {
			border-radius: 50%;
		}
		100% {         
			border-radius: 0%;
		}         
	}

	.round__item:nth-child(1) {
		transform: rotateY(90deg);      
	}

	.round__item:nth-child(2) {
		transform: rotateY(45deg);      
	}

	.round__item:nth-child(3) {
		transform: rotateY(-45deg);      
	}  

	.cube {
		position: relative;
		width: 250px;      
		height: 250px;      
		transform-style: preserve-3d;      
		animation: rotateCube 30s linear infinite;
	}

	@keyframes rotateCube {            
		100% {         
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
		}         
	}

	.side__small {
		position: absolute;
		width: 150px;
		height: 150px;
		background: rgba(0,0,0,.5);
		border: 2px solid #0f7;
		box-sizing: border-box;
		border-radius: 10px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.side__small_1 {
		transform: translate3d(-50%, -50%, -75px);
	}

	.side__small_2 {
		transform: translate3d(-50%, -50%, 75px);
	}

	.side__small_3 {
		transform: translate3d(-100%, -50%, 0) rotateY(90deg);
	}

	.side__small_4 {
		transform: translate3d(0, -50%, 0) rotateY(90deg);
	}

	.side__small_5 {
		transform: translate3d(-50%, -100%, 0) rotateX(90deg);
	}

	.side__small_6 {
		transform: translate3d(-50%, 0, 0) rotateX(90deg);
	}

	.side {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0,0,0,.3);      
		border: 3px solid #0099ff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 15px;
		box-sizing: border-box;
	}

	.side:before {
		content: '';
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: #fff;
	}

	.side_1 {
		/* background: rgba(255, 0, 0, 0.5); */
		transform: translateZ(-125px);
		animation: translateSide1 3s linear infinite; 
	}

	@keyframes translateSide1 {
		0% {
			transform: translateZ(-125px);
		}
		50% {
			transform: translateZ(-155px);
		}
		100% {
			transform: translateZ(-125px);
		}
	}

	.side_2 {
		/* background: rgba(0, 255, 157, 0.5); */
		transform: translateZ(125px);
		animation: translateSide2 3s linear infinite; 
	}

	@keyframes translateSide2 {
		0% {
			transform: translateZ(125px);
		}
		50% {
			transform: translateZ(155px);
		}
		100% {
			transform: translateZ(125px);
		}
	}

	.side_3 {
		/* background: rgba(0, 183, 255, 0.5); */
		transform: translateX(-125px) rotateY(90deg);
		animation: translateSide3 3s linear infinite;
	}

	@keyframes translateSide3 {
		0% {
			transform: translateX(-125px) rotateY(90deg);
		}
		50% {
			transform: translateX(-155px) rotateY(90deg);
		}
		100% {
			transform: translateX(-125px) rotateY(90deg);
		}
	}

	.side_4 {
		/* background: rgba(255, 196, 0, 0.5); */
		transform: translateX(125px) rotateY(90deg);
		animation: translateSide4 3s linear infinite;
	}

	@keyframes translateSide4 {
		0% {
			transform: translateX(125px) rotateY(90deg);
		}
		50% {
			transform: translateX(155px) rotateY(90deg);
		}
		100% {
			transform: translateX(125px) rotateY(90deg);
		}
	}

	.side_5 {
		/* background: rgba(255, 0, 221, 0.5); */
		transform: translateY(125px) rotateX(90deg);
		animation: translateSide5 3s linear infinite;
	}

	@keyframes translateSide5 {
		0% {
			transform: translateY(125px) rotateX(90deg);
		}
		50% {
			transform: translateY(155px) rotateX(90deg);
		}
		100% {
			transform: translateY(125px) rotateX(90deg);
		}
	}

	.side_6 {
		/* background: rgba(252, 127, 127, 0.5); */
		transform: translateY(-125px) rotateX(90deg);
		animation: translateSide6 3s linear infinite;
	}

	@keyframes translateSide6 {
		0% {
			transform: translateY(-125px) rotateX(90deg);
		}
		50% {
			transform: translateY(-155px) rotateX(90deg);
		}
		100% {
			transform: translateY(-125px) rotateX(90deg);
		}
	}

</style>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>