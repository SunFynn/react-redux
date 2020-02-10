import React, { Component } from 'react';
import {connect} from "react-redux";
import {add,sub} from "./actions/count"

class App extends Component {
  render() {
    let {count1,add,sub}=this.props;
    console.log(this.props)
    return (
      <div>
         {
           count1
         }
         <button onClick={()=>add()}>+</button>
         <button onClick={()=>sub()}>-</button>

      </div>
    )
  }
}
const mapStateToProps=(state)=>{
   console.log(state)
   return {count1:state.count1.count}
}
export default connect(mapStateToProps,{add,sub})(App)