import React from 'react';
import "./App.css";

export default function Counter() {
   const [data, setData] = useState();

   increase = (e) => {
      let newData = this.state.data.map((data) => {
         return {
            ...data,
            userId: e + 1,
         };
      });
      this.setState({
         data: newData,
         initial: e + 1,
      });
   };

   decrease = (e) => {
      let newData = this.state.data.map((data) => {
         return {
            ...data,
            userId: e - 1,
         };
      });
      this.setState({
         data: newData,
         initial: e - 1,
      });
   };


   return (
      <div className="col-3 my-3">
         <h6 className="d-inline-block">{obj.id}</h6> &nbsp;
         <div className="input-number">
            <button onClick={() => this.increase(this.state.initial)}>
               +
                </button>
            <div>{obj.userId}</div>
            {/* <div>{obj.userId}</div> */}
            <button onClick={() => this.decrease(this.state.initial)}>
               -
                </button>
         </div>
      </div>
   )
}
