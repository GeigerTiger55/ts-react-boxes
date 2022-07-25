import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 *
 * Props:
 * - None
 *
 */

 interface BoxI {
  id: string;
  height: string ;
  width: string;
  backgroundColor: string;
}

function BoxList() {
  const [boxes , setBoxes] = useState <BoxI []> ([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxI) {
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes(boxes => boxes.filter((box: BoxI) => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor } : BoxI) => (
        <Box
          key={id}
          id={id}
          width={Number(width)}
          height={Number(height)}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
