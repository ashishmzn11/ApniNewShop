import { createContext, useContext, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

export const AppContaxt = createContext();

export function AppProvider({ children }) {
  // ==============================
  // Users
  // ==============================
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const totalUser = users.length;
    // ==============================
  // Sign Up / Sign In / Logout
  // ==============================
  const handleSignUp = (email, password) => {
    const exist = users.find(u => u.email === email);
    if (exist) return { success: false, message: "User already exists!" };

    setUsers(prev => [...prev, { email, password }]);
    return { success: true, message: "Sign Up successful" };
  };

  const handleSignIn = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return { success: true, message: "Login successful" };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };
  // ==============================
  // Admin Login
  // ==============================
  const handleAdminLogin = (email, password) => {
    if (email === "ashishadmin11@gmail.com" && password === "Ashish0123") {
      localStorage.setItem("adminAuth", true);
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid Admin Credentials" };
    }
  };

  // ==============================
  // Username
  // ==============================
  const [username, setUsername] = useState("");
  const HandleUsername = (name) => setUsername(name);

  // ==============================
  // Items / Products
  // ==============================
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  // ==============================
  // Cart Items
  // ==============================
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

const [Orderitem,setOrderitem]=useState(()=>{
  const saved= localStorage.getItem("Orderitem");
  return saved ? JSON.parse(saved):[];
})
  // ==============================
  // User-specific Cart Items
  // ==============================
  const userCartItems = cartItems.filter(item => currentUser && item.userEmail === currentUser.email);

  // ==============================
  // Admin: Add / Edit / Remove Product
  // ==============================
  const handleAddProduct = (Product, Price, image, Discound, Discussion) => {
    if (!localStorage.getItem("adminAuth")) {
      alert("Only admin can add products");
      return;
    }

    const newProduct = {
      id: Date.now(),
      Product,
      Price,
      image,
      Discound,
      Discussion,
      userEmail: null // global product
    };

    setItems(prev => [...prev, newProduct]);
  };

  const handleEditProduct = (id, Product, Price, image, Discound, Discussion) => {
    if (!localStorage.getItem("adminAuth")) {
      alert("Only admin can edit products");
      return;
    }

    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, Product, Price, image, Discound, Discussion }
          : item
      )
    );
  };

  const handleRemoveProduct = (id) => {
    if (!localStorage.getItem("adminAuth")) {
      alert("Only admin can remove products");
      return;
    }

    setItems(prev => prev.filter(item => item.id !== id));
  };

  // ==============================
  // User: Add / Remove / Update Quantity
  // ==============================
  const handleAddToCart = (product) => {
    if (!currentUser) return;

    const existing = cartItems.find(
      item => item.Product === product.Product && item.userEmail === currentUser.email
    );

    if (existing) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === existing.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      const cartItem = {
        id: Date.now(),
        Product: product.Product,
        Price: product.Price,
        image: product.image,
        Discound: product.Discound,
        Discussion: product.Discussion,
        userEmail: currentUser.email,
        quantity: 1
      };
      setCartItems(prev => [...prev, cartItem]);
    }
  };



  const handleRemoveToCard = (id) => {
    setCartItems(prev =>
      prev.reduce((acc, item) => {
        if (item.id === id && item.userEmail === currentUser.email) {
          if ((item.quantity || 1) > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems(prev => prev.filter(item => item.userEmail !== currentUser.email));
  };




  
const handlePlaceOrder = ({ name, email, address, phone, totalPrice, navigate }) => {
  if (!name || !email || !address || !phone) {
    alert("Please fill all fields");
    return;
  }
   // ==============================
  // User: order ko order.jsx me dekna k liya
  // ==============================
   const order = {
    id: Date.now(),
    name,
    email,
    address,
    phone,
    totalPrice,
    items: cartItems.filter(item => item.userEmail === currentUser.email),
    date: new Date().toLocaleString()
  };
  // save this order separately
  const updatedOrders = [...Orderitem, order];
  setOrderitem(updatedOrders);
  localStorage.setItem("Orderitem", JSON.stringify(updatedOrders));
// email send k liya 
  const templateParams = {
    name,
    email,
    address,
    phone,
    totalPrice
  };

  emailjs.send(
    // "service_brhsp0e",    // EmailJS service ID
    // "template_hj9paf1",   // EmailJS template ID
    // templateParams,
    // "pm4CSGMZiBMkTGHIJ"    // EmailJS public key
  ).then(
    (response) => {
      alert('Order placed successfully! Confirmation email sent.');
      clearCart();        // Cart clear
      navigate("/");      // Redirect to home
    },
    (error) => {
      alert('Order placed but email failed.');
      clearCart();
      navigate("/");
    }
  );
};



  // ==============================
  // Persist Data
  // ==============================
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);


  return (
    <AppContaxt.Provider
      value={{
        items,
        cartItems,
        userCartItems,
        handleAddProduct,
        handleEditProduct,
        handleRemoveProduct,
        handleAddToCart,
        handleRemoveToCard,
        handleUpdateQuantity,
        clearCart,
        handlePlaceOrder,
        users,
        currentUser,
        handleSignUp,
        handleSignIn,
        handleLogout,
        totalItems: userCartItems.length,
        totalUser,
        handleAdminLogin,
        username,
        HandleUsername,
        Orderitem
      }}
    >
      {children}
    </AppContaxt.Provider>
  );
}

export const useAppContext = () => useContext(AppContaxt);
