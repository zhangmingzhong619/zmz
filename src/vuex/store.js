import Vue from 'vue';//引用vue
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex

export default new Vuex.Store({

    state: {
        pollresult: [],//调查结果
    },
    // 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
    getters: {
        getResult: state => {
            return state.pollresult;
        }
    },
    // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
    mutations: {
        // 改变state状态的方法，不建议直接通过  
        // this.$store.state.? = ？的方式改变state中的状态
        addResult: (state, n) => {
            state.pollresult.push(n);
        },

    },


})
