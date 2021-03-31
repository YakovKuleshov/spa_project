<template>
   <input type="text" :placeholder="placeholder" :value="message" @input="setMessage">
</template>

<style scoped>
   input {
      outline: none;
      border-radius: 5px;
      border: 1px solid #ccc;
      background: #f0f0f0;
      height: 38px;
      font-size: 17px;
      display: block;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
   }

   input::placeholder {
      font-size: 15px;
   }
</style>

<script>
   export default {
      props: ['placeholder', 'message'],
      data() {
         return {}
      },
      methods: {
         setMessage(e) {
            this.$emit('mesInput', e.target.value);
         }
      }
   }
</script>