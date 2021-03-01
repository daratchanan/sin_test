import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Todo() {
   let count = 0;
   const getTodo = async () => {
      while (count < 3) {
         await axios
            .post("https://jsonplaceholder.typicode.com/todos/1")
            .then(res => console.log(res.data))
            .catch(err => count++)
      }
      await axios
         .post("https://jsonplaceholder.typicode.com/posts")
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
   }

   useEffect(() => {
      getTodo()
   }, [])



   return (
      <div>
         <button onClick={getTodo}>click</button>
      </div>
   )
}
