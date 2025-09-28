import { createContext, useContext, useState, useEffect } from "react";

export const AppContaxt = createContext();

export function AppProvider({ children }) {
  // ==============================
  // Users
  // ==============================
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [{ email: "ashish@gmail.com", password: "003" }];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const totalUser = users.length;

  // ==============================
  // Items / Products
  // ==============================
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  // ==============================
  // User-specific Cart Items
  // ==============================
  const userItems = items.filter(item => currentUser && item.userEmail === currentUser.email);
  const totalItems = userItems.length;

  // ==============================
  // Admin: Add Product
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

  // ==============================
  // Admin: Edit Product
  // ==============================
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

  // ==============================
  // Admin: Remove Product
  // ==============================
  const handleRemoveProduct = (id) => {
    if (!localStorage.getItem("adminAuth")) {
      alert("Only admin can remove products");
      return;
    }

    setItems(prev => prev.filter(item => item.id !== id));
  };

  


// User Cart Items
const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem("cartItems");
  return saved ? JSON.parse(saved) : [];
});

  // User: Add to Cart
const handleAddToCart = (product) => {
  if (!currentUser) {
    alert("Please sign in first");
    return;
  }

  // User ke liye sirf cart me add karo
  const cartItem = {
    id: Date.now(),           // unique ID for cart
    Product: product.Product,
    Price: product.Price,
    image: product.image,
    Discound: product.Discound,
    Discussion: product.Discussion,
    userEmail: currentUser.email // ye sirf current user ke liye hai
  };
setCartItems(prev => [...prev, cartItem]);
};


//User: Remove to cart
const handleRemoveToCard = (id) => {
  setCartItems(prev => prev.filter(item => !(item.id === id && item.userEmail === currentUser.email)));
};
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);




  
  // ==============================
  // Sign Up / Sign In / Logout
  // ==============================
  const handleSignUp = (email, password) => {
    const exist = users.find(u => u.email === email);
    if (exist) return { success: false, message: "User already exists!" };

    const updatedUsers = [...users, { email, password }];
    setUsers(updatedUsers);
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
  // Persist Items & Users
  // ==============================
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ==============================
  // Username / Admin Login
  // ==============================
  const [username, setUsername] = useState("");
  const HandleUsername = (name) => setUsername(name);

  const handleAdminLogin = (email, password) => {
    if (email === "ashishadmin11@gmail.com" && password === "Ashish0123") {
      localStorage.setItem("adminAuth", true);
      return { success: true, message: "Login successful" };
    } else {
      return { success: false, message: "Invalid Admin Credentials" };
    }
  };

  return (
    <AppContaxt.Provider
      value={{
        items,
        userItems,
        handleAddProduct,
        handleEditProduct,
        handleRemoveProduct,
        handleAddToCart,
        handleRemoveToCard,
        users,
        currentUser,
        handleSignUp,
        handleSignIn,
        handleLogout,
        username,
        HandleUsername,
        totalItems,
        totalUser,
        handleAdminLogin,
        cartItems
      }}
    >
      {children}
    </AppContaxt.Provider>
  );
}

export const useAppContext = () => useContext(AppContaxt);
