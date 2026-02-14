import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FarmerFlow from './components/FarmerFlow';
import Login from './components/Login';

function App() {
  // 1. Initialize state based on the current URL (keeps user on correct page on refresh)
  const [view, setView] = useState(() => {
    const path = window.location.pathname;
    if (path === '/login') return 'login';
    if (path === '/farmer') return 'farmer';
    return 'home';
  });

  // 2. Listen for Browser "Back" / "Forward" buttons
  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      if (path === '/login') {
        setView('login');
      } else if (path === '/farmer') {
        setView('farmer');
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // 3. Wrapper function to update State AND History
  const handleNavigate = (newView) => {
    setView(newView);
    
    let path = '/';
    if (newView === 'login') path = '/login';
    if (newView === 'farmer') path = '/farmer';

    // Push new state to browser history
    window.history.pushState({}, '', path);
  };

  // 4. Render Login Page (Isolated View)
  if (view === 'login') {
    return <Login onNavigate={handleNavigate} />;
  }

  // 5. Render Main App (Navbar + Content)
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* Pass handleNavigate instead of setView */}
      <Navbar onNavigate={handleNavigate} />
      
      {view === 'home' ? (
        <Hero onStart={() => handleNavigate('farmer')} />
      ) : (
        <FarmerFlow />
      )}
    </div>
  );
}

export default App;