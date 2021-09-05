export default {   
   activated() {      
      if(localStorage.getItem(`${this.$route.path.replace('/', '')}_scroll`)) window.scrollTo({top: +localStorage.getItem(`${this.$route.path.replace('/', '')}_scroll`)});
   },
   beforeRouteLeave(to, { name }, next) {      
      localStorage.setItem(`${name}_scroll`, window.scrollY);
      next();
   }
}