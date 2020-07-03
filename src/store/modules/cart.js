import {getCartList} from '@/utils/api'

let cartModule = {
    namespaced : true,
    state : {
        list : [],
    },
    getters : {
        total : function(state){
            let result = 0
            state.list.map((ele)=>{
                if(ele.checked){
                    result += ele.num*ele.good.price*100
                }
            })
            return result
        }
    },
    mutations : {
        upList (state,payload){
            state.list = payload
            // console.log(state.list)
        },
        changeItem(state,payload){
            state.list[payload.index].checked = payload.checked
        }
    },
    actions : {
        upDateList(store,payload){
            // console.log('123')
            if(!localStorage.getItem('token')){
                // console.log('567')
                store.commit('upList',[])
                return
            }
            getCartList(payload).then((res)=>{
                console.log(res)
                res.map((ele)=>{
                    ele.checked = true
                })
                store.commit('upList',res)
                console.log('返回购物车列表')
            })
        }
    }
}
export default cartModule