import { createContext, useContext, useState } from "react";
export const AppContaxt=createContext();
export function AppProvider({children}){
  // card funcanlity
  // card add
  const [items, setItems] = useState([]);
  
  const handleAddItem = (product, Price, image,Discound,Discussion) => {
  const newitem = {
    id: Date.now(),
    Product: product,
    Price: Price,
    image: image,
    Discound:Discound,
    Discussion:Discussion,
    Action: "Delete",
  };
  setItems([...items, newitem]);
};
// total item count
const totalItems = items.length;
//  Deleted product
const handleRemoveItem = (id) => {
  const newitem = items.filter((item) => item.id !== id);
  setItems(newitem);
};
// Edit item
const handleEditItem = (id, product, Price, image,Discound,Discussion) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, Product: product, Price: Price, image: image,Discound,Discussion }
        : item
    );
    setItems(updatedItems);
  };
// signin funcanlity
//  Sign in / Sign up ke liye state
  const [users, setUsers] = useState([
    { email: "ashish@gmail.com", password: "003" },
     // demo user
  ]);
  // total user count
  const totalUser=users.length;
  const [currentUser, setCurrentUser] = useState(null);
  // Sign up (naya user add karna)
  const handleSignUp = (email, password) => {
    const exist = users.find((u) => u.email === email);
    if (exist) {
      return { success: false, message: "User already exists!" };
    }
    setUsers([...users, { email, password }]);
    return { success: true, message: "Sign Up successful" };
  };
  // Sign in (login)
  const handleSignIn = (email, password) => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return { success: true, message: "Login successful" };
    }
    return { success: false, message: "Invalid email or password" };
  };
  // Logout
  const handleLogout = () => {
    setCurrentUser(null);
  };

  // user name pass in admin
  const [username,setusername]=useState("")
  const HandleUsername=(name)=>{
    setusername(name)
  }
  // total product count

return(
  <AppContaxt.Provider value={{ items, handleAddItem, handleRemoveItem ,handleEditItem  ,  users,
        currentUser,
        handleSignUp,
        handleSignIn,
        handleLogout,
        
        
        username,
        HandleUsername,
        
        totalItems,totalUser}}>
    {children}
  </AppContaxt.Provider>
)
}