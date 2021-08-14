const storeModule = {   
   state: () => ({            
      cartList: JSON.parse(localStorage.getItem('storage_cart_list')) || [],
      productList: [
         {
            id: '1',
            name: 'Феррари',
            price: '100000',
            count: '1',
            image: 'img/ferrari_2.jpg'
         },
         {
            id: '2',
            name: 'Ламбаргини',
            price: '150000',
            count: '1',
            image: 'img/lamborghini.jpg'
         },
         {
            id: '3',
            name: 'Шевроле корвет',
            price: '200000',
            count: '1',
            image: 'img/corvette.jpg'
         },
         {
            id: '4',
            name: 'Ламборгини хуракан',
            price: '110000',
            count: '1',
            image: 'img/huracan.jpg'
         },
         {
            id: '5',
            name: 'Форд GT40',
            price: '300000',
            count: '1',
            image: 'img/ford_3.jpg'
         },
         {
            id: '6',
            name: 'Мерседесс',
            price: '250000',
            count: '1',
            image: 'img/mercedes.jpg'            
         },
         {
            id: '7',
            name: 'Бугатти',
            price: '400000',
            count: '1',
            image: 'img/bugatti.jpg'
         },
         {
            id: '8',
            name: 'Порш',
            price: '210000',
            count: '1',
            image: 'img/porshe_2.jpg'
         }
      ],
      cartCount: 0
   }),
   getters: {
      totalCount(state) {
         state.cartCount = state.cartList.reduce((acc, item) => acc += Number(item.count), 0);
         return state.cartCount;
      },
      totalPrice(state) {
         return state.cartList.reduce((acc, item) => acc += Number(item.price) * Number(item.count), 0);
      }
   },
   mutations: {     
      addToCart(state, product) {
         state.cartList.push(product);
         localStorage.setItem('storage_cart_list', JSON.stringify(state.cartList));
      },
      removeFromCart(state, product_id) {
         state.cartList =  state.cartList.filter(el => el.id !== product_id);
         localStorage.setItem('storage_cart_list', JSON.stringify(state.cartList));
      },
      minus(state, product_id) {      
         const elem = state.cartList.find(el => el.id === product_id);
         elem.count = Number(elem.count)
         elem.count--
         elem.count = Math.min(Math.max(1, elem.count), 10);    
         localStorage.setItem('storage_cart_list', JSON.stringify(state.cartList));      
      },
      plus(state, product_id) {         
         const elem = state.cartList.find(el => el.id === product_id);
         elem.count = Number(elem.count)
         elem.count++
         elem.count = Math.min(Math.max(1, elem.count), 10);             
         localStorage.setItem('storage_cart_list', JSON.stringify(state.cartList));
      }      
   },
   actions: {}
}

export default storeModule




