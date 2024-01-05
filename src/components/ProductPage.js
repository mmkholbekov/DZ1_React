//      Lesson 7/2
import ShippingForm from './ShippingForm.js';

export default function ProductPage({ productId, referrer, theme }) {
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}


//      Lesson 7/1
// import React, {useMemo} from "react";
// import {filterTodos} from "./ShippingForm";
//
// export default function ProductPage({todos, tab}) {
//     const visibleTodos = useMemo(() => filterTodos(todos, tab),[todos, tab]);
//     return(
//         <div>
//             <p>
//                 <b>Note:<code>filterTodos</code> id elseyughb</b>
//             </p>
//             <ul>
//                 {visibleTodos.map(tod => (
//                     <li key={tod.id}>
//                         {tod.completed ?
//                         <s>{tod.text}</s> :
//                         tod.text
//                         }
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


//     Lesson 6
// export function createConnection(serverUrl, roomId) {
//     return {
//         connect() {
//             console.log(
//                 "✅Connecting to" + roomId + "room at the" + serverUrl + "..."
//             );
//         },
//         disconnect() {
//             console.log("❌ Disconnect from" + roomId + "room at" + serverUrl);
//         },
//     };
// }
