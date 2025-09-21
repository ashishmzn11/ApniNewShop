import { useState } from "react";
import ViewCard from "./ViewCard";

function Card() {
  const [items, setItems] = useState([]);

  const handleAddItem = (product, category, image, action) => {
    const newItem = {
      id: Date.now(),
      Product: product,
      Category: category,
      image: image,
      Action: action,
    };
    setItems( [...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((data) => data.id !== id);
    setItems(updatedItems);
  };

  return (
    <>
      <ViewCard 
        Add={items} 
        SendData={handleAddItem} 
        Remove={handleRemoveItem} 
      />
    </>
  );
}

export default Card;
