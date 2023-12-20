import React, { useState } from 'react';

const TwoSquares = () => {
  const [Color1, setColor1] = useState('red')
  const [Color2, setColor2] = useState('blue')

  const SquareClick = (squareNumber) => {
    if (squareNumber === 1) {
      setColor1('blue')
      setColor2('red')
    } else {
      setColor1('red')
      setColor2('blue')
    }
  };

  return (
    <div>
      <div
        style={{ width: '100px', height: '100px', backgroundColor: Color1, margin: '10px', display: 'inline-block' }}
        onClick={() => SquareClick(1)}
      />
      <div
        style={{ width: '100px', height: '100px', backgroundColor: Color2, margin: '10px', display: 'inline-block' }}
        onClick={() => SquareClick(2)}
      />
    </div>
  );
};

export default TwoSquares


// export default function Search() {
//     function publish(formData) {
//         const content = formData.get("content")
//         const button = formData.get("button")
//         console.log(`'${content} sdfghjk '${button}'`)
//     }
//     function save(formdata) {
//         const content = formdata.get("content")
//         console.log(`your draft of '${content}' has been saved!`)
//     }
//     return(
//         <form action={publish}>
//             <textarea name="content" rows={4} cols={40} />
//             <br/>
//             <button type="submit" name="button" value="submit">
//                 Publish
//             </button>
//             <button formAction={save}>Save Draft</button>
//         </form>
//     )
// }