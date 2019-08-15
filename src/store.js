import Axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    category: [
      // {
      //   thumb: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      //   title: 'AAAAA',
      //   id: 1
      // },
      // {
      //   thumb: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      //   title: 'BBBBB',
      //   id: 2
      // },
      // {
      //   thumb: 'https://images.unsplash.com/photo-1471696035578-3d8c78d99684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      //   title: 'CCCCC',
      //   id: 3
      // },
      // {
      //   thumb: 'https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      //   title: 'DDDDD',
      //   id: 4
      // },
    ],
    goods: [],
    orders: [],
    auth: [],
    discount: [],
    isAuthentificated: true,
  },
  mutations: {
    SET_CATEGORY(state, payload){
      state.category = payload
    },
    ADD_CATEGORY(state, payload){
      state.category.push(payload)
    },
    SET_GOODS(state, payload){
      state.goods = payload
    },
    ADD_GOODS(state, payload){
      state.goods.push(payload)
    },
    SET_ORDERS(state, payload){
      state.orders = payload
    },
    ADD_ORDERS(state, payload){
      state.orders.push(payload)
    },
    SET_AUTH(state, payload){
      state.auth = payload
    },
    ADD_AUTH(state, payload){
      state.auth.push(payload)
    },
    SET_DISCOUNT(state, payload){
      state.discount = payload
    },
    ADD_DISCOUNT(state, payload){
      state.discount.push(payload)
    },
  },
  actions:{
    GET_CATEGORY: async (context, payload) => {
      let {data} = await Axios.get('http://localhost:8080/api/v1/cats');
      context.commit('SET_CATEGORY', data);
    },
    SAVE_CATEGORY: async (context, payload) => {
      let {data} = await Axios.post('http://localhost:8080/api/v1/cats/edit/1');
      context.commit('ADD_CATEGORY', payload);
    },
    GET_GOODS: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:8080/api/v1/cats');    
    //   context.commit('SET_TODO', data);
    },
    SAVE_GOODS: async (context, payload) => {
    // let {data} = await Axios.post('http://localhost:8080/api/v1/cats'); 
    //   context.commit('ADD_TODO', payload);
    },
    GET_ORDERS: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:8080/api/v1/cats'); 
    //   context.commit('SET_TODO', data);
    },
    SAVE_ORDERS: async (context, payload) => {
    // let {data} = await Axios.post('http://localhost:8080/api/v1/cats'); 
    //   context.commit('ADD_TODO', payload);
    },
    GET_AUTH: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:8080/api/v1/cats'); 
    //   context.commit('SET_TODO', data);
    },
    SAVE_AUTH: async (context, payload) => {
    // let {data} = await Axios.post('http://localhost:8080/api/v1/cats'); 
    //   context.commit('ADD_TODO', payload);
    },
    GET_DISCOUNT: async (context, payload) => {
    let {data} = await Axios.get('http://localhost:8080/api/v1/cats'); 
    //   context.commit('SET_TODO', data);
    },
    SAVE_DISCOUNT: async (context, payload) => {
    // let {data} = await Axios.post('http://localhost:8080/api/v1/cats'); 
    //   context.commit('ADD_TODO', payload);
    },
  },
  getters: {
    CATEGORY: (state) => state.category,
    GOODS: (state) => state.goods,
    ORDERS: (state) => state.orders,
    AUTH: (state) => state.AUTH,
    DISCOUNT: (state) => state.discount
  },
})
