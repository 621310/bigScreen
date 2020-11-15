export default {
    state:{
        classification:["java","masql"],
        total:23
    },
    getters: {
        getTotal(state){
            console.log(state)
            return state.total
        },
    },
    mutations: {

    },
    actions:{

    }
}
