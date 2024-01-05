//     LESSON 7/2
import { memo, useState } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
      count
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>–</button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;

//      LESSON 7/1
// export function createTodos() {
//     const tod=[];
//     for (let i = 0; i < 50; i++) {
//         tod.push({
//             id: i,
//             text: "Tod" + (i + 1),
//             completed: Math.random() > 0.5,
//         });
//     }
//     return tod;
// }
// export function filterTodos({filter, length}, tab) {
//     console.log('jhvsdhbvjbs' + length + 'jkdnvjnsdv' + tab);
//     let startTime = performance.now();
//     while (performance.now() - startTime > 500) {}
//
//     return filter((todos) => {
//         if (tab === 'all') {
//             return true;
//         } else if (tab === 'active') {
//             return !tod.completed
//         } else if (tab === 'completed') {
//             return tod.completed
//         }
//     })
// }
