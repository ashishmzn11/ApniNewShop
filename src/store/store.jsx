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
  // Items / Cart
  // ==============================
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved ? JSON.parse(saved) : [];
  });

  // ==============================
  // User-specific items
  // ==============================
  const userItems = items.filter(item => currentUser && item.userEmail === currentUser.email);
  const totalItems = userItems.length;

  // ==============================
  // Add Item (User-specific)
  // ==============================
  const handleAddItem = (product, Price, image, Discound, Discussion) => {
    
    const newItem = {
      id: Date.now(),
      Product: product,
      Price,
      image,
      Discound,
      Discussion,
      Action: "Delete",
// Associate item with current user
    };

    setItems(prev => {
      // Prevent duplicate items for same user
      const exists = prev.find(
        item => item.Product === product && item.userEmail === currentUser.email
      );
      if (exists) return prev;
      return [...prev, newItem];
    });
  };

  // ==============================
  // Remove Item (User-specific)
  // ==============================
  const handleRemoveItem = (id) => {
    if (!currentUser) {
      alert("Please sign in first");
      return;
    }

    setItems(prev =>
      prev.filter(item => !(item.id === id && item.userEmail === currentUser.email))
    );
  };

  // ==============================
  // Edit Item (User-specific)
  // ==============================
  const handleEditItem = (id, product, Price, image, Discound, Discussion) => {
    if (!currentUser) return;

    setItems(prev =>
      prev.map(item =>
        item.id === id && item.userEmail === currentUser.email
          ? { ...item, Product: product, Price, image, Discound, Discussion }
          : item
      )
    );
  };

  // ==============================
  // Persist Items to localStorage
  // ==============================
  useEffect(() => {
    try {
      localStorage.setItem("items", JSON.stringify(items));
    } catch (e) {
      console.error("LocalStorage full! Cannot save items.");
    }
  }, [items]);

  // ==============================
  // Sign Up
  // ==============================
  const handleSignUp = (email, password) => {
    const exist = users.find(u => u.email === email);
    if (exist) return { success: false, message: "User already exists!" };

    const updatedUsers = [...users, { email, password }];
    setUsers(updatedUsers);
    return { success: true, message: "Sign Up successful" };
  };

  // ==============================
  // Sign In
  // ==============================
  const handleSignIn = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      return { success: true, message: "Login successful" };
    }
    return { success: false, message: "Invalid email or password" };
  };

  // ==============================
  // Logout
  // ==============================
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  // ==============================
  // Persist Users to localStorage
  // ==============================
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // ==============================
  // Username (Admin welcome)
  // ==============================
  const [username, setUsername] = useState("");
  const HandleUsername = (name) => setUsername(name);

  return (
    <AppContaxt.Provider
      value={{
        items,
        userItems,          // user-specific items
        handleAddItem,
        handleRemoveItem,
        handleEditItem,
        users,
        currentUser,
        handleSignUp,
        handleSignIn,
        handleLogout,
        username,
        HandleUsername,
        totalItems,
        totalUser,
      }}
    >
      {children}
    </AppContaxt.Provider>
  );
}

export const useAppContext = () => useContext(AppContaxt);
