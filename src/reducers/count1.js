import {Add,Sub} from "./../constants/index"
const count=(state={count:100},action={})=>{
    switch(action.type){
        case Add :return {count:state.count+1};
        case Sub:return {count:state.count-1};
        default: return state;
    }
}
export default count