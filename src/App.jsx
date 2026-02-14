import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FarmerFlow from './components/FarmerFlow';
import Login from './components/Login'; // Import the new component

function App() {
  const [view, setView] = useState('home'); 

  // If view is login, we might not want to show the Navbar (common pattern), 
  // or we can keep it. Based on the reference image, the login page usually stands alone.
  // I will hide the Navbar for the Login page for a cleaner look, 
  // but if you want it, just move <Navbar> outside the check.
  
  if (view === 'login') {
    return <Login onNavigate={setView} />;
  }

  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar onNavigate={setView} />
      
      {view === 'home' ? (
        <Hero onStart={() => setView('farmer')} />
      ) : (
        <FarmerFlow />
      )}
    </div>
  );
}

export default App;