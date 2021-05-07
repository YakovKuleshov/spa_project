<template>
   <div class="resiz__block" :style="{ width: block_width + 'px', height: block_height + 'px', top: block_top + 'px', left: block_left + 'px', background: bgColor}" ref="resizeBlock" @mousedown="moveBlock" @dblclick="defaultCoords">
      <span class="touched top_side top_line" @mousedown="changeHeightTop"></span>
      <span class="touched top_side bottom_line" @mousedown="changeHeight" ref="bottomLine"></span>
      <span class="touched left__side left_line" @mousedown="changeLeft"></span>
      <span class="touched left__side right_line" @mousedown="changeWidth"></span>
      <span class="touched coner_dot top_left" @mousedown="changeTopLeft"></span>
      <span class="touched coner_dot top_rigth" @mousedown="changeTopRight"></span>
      <span class="touched coner_dot bottom_left" @mousedown="changeBottomLeft"></span>
      <span class="touched coner_dot bottom_right"  @mousedown="changeBottomRight"></span>
	</div>
</template>

<style scoped>

   .resiz__block {
      cursor: grab;
      min-height: 50px;
      min-width: 50px;
      position: fixed;	
      backdrop-filter: invert(100%);
   }

   .resiz__block:active {
      cursor: grabbing;
   }

   .touched {
      position: absolute;
   }

   .top_side {
      background: #0099ff;
      border-radius: 5px;
      cursor: ns-resize;
      width: 100%;
      height: 3px;
      left: 0;
   }

   .top_line {
      top: -1.5px;
   }

   .bottom_line {
      bottom: -1.5px;
   }

   .left__side {
      background: #0099ff;
      border-radius: 5px;
      cursor: ew-resize;
      width: 3px;
      height: 100%;
      top: 0;
      z-index: 1;
   }

   .left_line {
      left: -2.5px;
   }

   .right_line {
      right: -2.5px;
   }

   .coner_dot {
      width: 11px;
      background: #0099ff;
      height: 11px;
      border-radius: 50%;
   }

   .top_left {
      cursor: nwse-resize;
      top: -5.5px;
      left: -5.5px;
      z-index: 2;
   }

   .top_rigth {
      cursor: nesw-resize;
      top: -5.5px;
      right: -5.5px;
      z-index: 2;
   }

   .bottom_left {
      cursor: nesw-resize;
      bottom: -5.5px;
      left: -5.5px;
      z-index: 2;
   }

   .bottom_right {
      cursor: nwse-resize;
      bottom: -5.5px;
      right: -5.5px;
      z-index: 2;
   }

</style>

<script>
   export default {
      props: ['bgColor'],
      data() {
         return {
            block_top: 136,
				block_left: 0,
				block_width: 200,
				block_height: 120,
            mooveBlock(e) {
					this.block_left = e.clientX - this.xOffset
					this.block_top = e.clientY - this.yOffset
				},
				height(e) {
					this.block_height = e.clientY - this.block_top
				},
				width(e) {
					this.block_width = e.clientX - this.block_left
				},
				heightTop(e) {
					let block = this.$refs.resizeBlock
					if(block.getBoundingClientRect().bottom - e.clientY > 50) {
						this.block_top = e.clientY
						this.block_height = block.getBoundingClientRect().bottom - this.block_top
					}
				},
				left(e) {
					let block = this.$refs.resizeBlock
					if(block.getBoundingClientRect().right - e.clientX > 50) {
						this.block_left =  e.clientX
						this.block_width = block.getBoundingClientRect().right - this.block_left
					}
				},
				topLeft(e) {
					this.heightTop(e)
					this.left(e)
				},
				topRight(e) {
					this.heightTop(e)
					this.width(e)
				},
				bottomLeft(e) {
					this.left(e)
					this.height(e)
				},
				bottomRight(e) {
					this.width(e)
					this.height(e)
				}
         }
      },
      methods: {
         defaultCoords() {
            this.block_top = 136
            this.block_width = 200
				this.block_left = window.innerWidth - this.block_width - 58				
				this.block_height = 120
         },
         moveBlock(e) {
				this.xOffset = e.offsetX
				this.yOffset = e.offsetY
				window.addEventListener('mousemove', this.mooveBlock);
			},
			changeHeight(e) {
				window.addEventListener('mousemove', this.height);
				e.stopPropagation()
			},
			changeHeightTop(e) {
				window.addEventListener('mousemove', this.heightTop);
				e.stopPropagation()
			},
			changeLeft(e) {
				window.addEventListener('mousemove', this.left);
				e.stopPropagation()
			},
			changeWidth(e) {
				window.addEventListener('mousemove', this.width);
				e.stopPropagation()
			},
			changeTopLeft(e) {
				window.addEventListener('mousemove', this.topLeft);
				e.stopPropagation()
			},
			changeTopRight(e) {
				window.addEventListener('mousemove', this.topRight);
				e.stopPropagation()
			},
			changeBottomLeft(e) {
				window.addEventListener('mousemove', this.bottomLeft);
				e.stopPropagation()
			},
			changeBottomRight(e) {
				window.addEventListener('mousemove', this.bottomRight);
				e.stopPropagation()
			}
      },
      created() {
         this.mooveBlock = this.mooveBlock.bind(this);		
			this.height = this.height.bind(this);
			this.heightTop = this.heightTop.bind(this);
			this.left = this.left.bind(this);
			this.width = this.width.bind(this);
			this.topLeft = this.topLeft.bind(this);
			this.topRight = this.topRight.bind(this);
			this.bottomLeft = this.bottomLeft.bind(this);
			this.bottomRight = this.bottomRight.bind(this);		
      },
      mounted() {
         this.block_left = window.innerWidth - this.block_width - 58
         window.addEventListener('mouseup', e => {
				window.removeEventListener('mousemove', this.height);
				window.removeEventListener('mousemove', this.heightTop);
				window.removeEventListener('mousemove', this.left);
				window.removeEventListener('mousemove', this.width);
				window.removeEventListener('mousemove', this.topLeft);
				window.removeEventListener('mousemove', this.topRight);
				window.removeEventListener('mousemove', this.bottomLeft);
				window.removeEventListener('mousemove', this.bottomRight);
				window.removeEventListener('mousemove', this.mooveBlock);
			})

         window.addEventListener('resize', () => {
            this.block_left = window.innerWidth - this.block_width - 58;
         })
      }
   }
</script>