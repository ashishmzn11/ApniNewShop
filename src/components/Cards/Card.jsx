import { useState } from "react";
import HeaderCard from "./HeaderCard";

function Card({items,handleAddItem,handleRemoveItem}) {
  return (
    <>
      <HeaderCard 
        Add={items} 
        SendData={handleAddItem} 
        Remove={handleRemoveItem} 
      />
    </>
  );
}

export default Card;
