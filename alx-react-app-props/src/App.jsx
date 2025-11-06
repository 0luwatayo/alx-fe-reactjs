import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext';
import React from "react";

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
    <UserContext.Provider value={userData}>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>User Profile</h1>
        <UserProfile />
      </div>
    </UserContext.Provider>
    {/* <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider> */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage /> 
      <Header />
      <MainContent />
      <Footer />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

    </>
  )
}

export default App



// import React from "react";
// import UserContext from "./UserContext";
// import UserProfile from "./components/UserProfile";

// function App() {
//   const user = { name: "Tayo", email: "tayo@example.com" };

//   return (
//     <UserContext.Provider value={user}>
//       <UserProfile />
//     </UserContext.Provider>
//   );
// }

// export default App;



// import ProfilePage from './ProfilePage';
// import UserContext from './UserContext';

// function App() {
//   const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

//   return (
//     // Provide the user data through the context provider
//     <UserContext.Provider value={userData}>
//       <ProfilePage />
//     </UserContext.Provider>
//   );
// }

// export default App;
