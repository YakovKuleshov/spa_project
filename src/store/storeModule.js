const storeModule = {   
   state: () => ({            
      cartList: JSON.parse(localStorage.getItem('storage_cart_list')) || [],
      productList: [
         {
            id: '1',
            name: 'Ferrari 488',
            price: '100000',
            count: '1',
            image: 'img/ferrari_2.jpg'
         }, 
         {
            id: '6',
            name: 'Mercedes benz amg sls',
            price: '250000',
            count: '1',
            image: 'img/mercedes.jpg'            
         },        
         {
            id: '3',
            name: 'Chevrolet Corvette C5-R',
            price: '200000',
            count: '1',
            image: 'img/corvette.jpg'
         },
         {
            id: '2',
            name: 'Lamborghini Aventador',
            price: '150000',
            count: '1',
            image: 'img/lamborghini.jpg'
         },
         {
            id: '9',
            name: 'Ferrari 488 GT3',
            price: '220000',
            count: '1',
            image: 'img/ferrari.jpg'
         },
         {
            id: '4',
            name: 'Lamborghini huracan',
            price: '110000',
            count: '1',
            image: 'img/huracan.jpg'
         },
         {
            id: '5',
            name: 'Ford GT40',
            price: '230000',
            count: '1',
            image: 'img/ford_3.jpg'
         },         
         {
            id: '7',
            name: 'Bugatti Veyron 16.4 Grand Sport Vitesse',
            price: '400000',
            count: '1',
            image: 'img/bugatti.jpg'
         },
         {
            id: '12',
            name: 'Ford GT40 restyling',
            price: '260000',
            count: '1',
            image: 'img/ford_2.jpg'
         },
         {
            id: '8',
            name: 'Porshe 911 turbo s',
            price: '210000',
            count: '1',
            image: 'img/porshe_2.jpg'
         },         
         {
            id: '10',
            name: 'Ferrari 458 italia',
            price: '160000',
            count: '1',
            image: 'img/ferrari_3.jpg'
         },
         {
            id: '11',
            name: 'Ford GT40 2020',
            price: '300000',
            count: '1',
            image: 'img/ford.jpg'
         }         
      ],
      cartCount: 0,
      search: '',
      filter: 'random',
      view: window.innerWidth > 590 ? 'tile' : 'list'
   }),
   getters: {
      totalCount(state) {         
         return state.cartList.reduce((acc, item) => acc += Number(item.count), 0);
      },
      totalPrice(state) {
         return state.cartList.reduce((acc, item) => acc += Number(item.price) * Number(item.count), 0);
      },
      sortedList(state) {         
         if(state.filter == 'decreasing') {
            return [...state.productList].sort((a, b) => Number(b.price) - Number(a.price));
         }else if(state.filter == 'ascending') {
            return [...state.productList].sort((a, b) => Number(a.price) - Number(b.price));
         }else {
            return state.productList;
         }         
      },
      searchedList(state, { sortedList }) {         
         return sortedList.filter(el => el.name.toLowerCase().includes(state.search.toLowerCase()));
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
      },
      searchList(state, search_value) {         
         state.search = search_value;
      },
      sortList(state, filter_param) {         
         state.filter = filter_param;
      },
      changeView(state, view_param) {         
         state.view = view_param;
      }
   },
   actions: {}
}

export default storeModule




