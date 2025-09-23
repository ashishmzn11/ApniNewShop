import { createContext, useContext, useState } from "react";

export const AppContaxt=createContext();

export function AppProvider({children}){
  

  // card funcanlity
  // card add
  const [items, setItems] = useState([]);
  const handleAddItem = (product, category, image) => {
  const newitem = {
    id: Date.now(),
    Product: product,
    Category: category,
    image: image,
    Action: "Delete",
  };
  setItems([...items, newitem]);
};

//  Deleted product
const handleRemoveItem = (id) => {
  const newitem = items.filter((item) => item.id !== id);
  setItems(newitem);
};

// signin funcanlity
const [Signuser,setSignuser]=useState([]);
const handleSign=(user,password)=>{
  

}


return(
  <AppContaxt.Provider value={{ items, handleAddItem, handleRemoveItem }}>
    {children}
  </AppContaxt.Provider>
)
}