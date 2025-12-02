import React, { useState, useEffect } from 'react';
import { authService } from './services/supabaseClient';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { Dashboard } from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    authService.getCurrentUser().then(user => {
      if (user) {
        setUser(user);
        setCurrentPage('dashboard');
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });

    // Listen for authentication state changes
    const { data: { subscription } } = authService.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        setCurrentPage('dashboard');
      } else {
        setCurrentPage('login');
      }
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (email, password) => {
    const { user } = await authService.signIn(email, password);
    setUser(user);
    setCurrentPage('dashboard');
  };

  const handleSignup = async (email, password, name) => {
    await authService.signUp(email, password, name);
  };

  const handleLogout = async () => {
    await authService.signOut();
    setUser(null);
    setCurrentPage('login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-12 px-4">
      {currentPage === 'login' && (
        <LoginPage onLogin={handleLogin} onPageChange={setCurrentPage} />
      )}
      {currentPage === 'signup' && (
        <SignupPage onSignup={handleSignup} onPageChange={setCurrentPage} />
      )}
      {currentPage === 'dashboard' && user && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;