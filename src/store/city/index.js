// 在页面里使用  <div>{{ $store.state.city.nm }}</div>

const state = { // 1、 定义状态，被其他页面使用
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 1
}

const actions = {

}
// js 修改状态
//    this.$store.commit('city/CITY_INFO', { nm, id })
const mutations = { // 2、 定义改变状态的方法
    CITY_INFO (state, payload) {
        state.nm = payload.nm
        state.id = payload.id
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
