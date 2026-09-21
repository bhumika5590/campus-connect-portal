import { useState, useEffect } from 'react';
import AuthModule from './components/AuthModule.jsx';
import StudentPortal from './components/StudentPortal.jsx';

export default function App() {
  const [activeView, setActiveView] = useState('auth');
  const [activeTab, setActiveTab] = useState('login');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#student') {
        setActiveView('student');
      } else if (hash === '#register') {
        setActiveView('auth');
        setActiveTab('register');
      } else {
        setActiveView('auth');
        setActiveTab('login');
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const goToStudentPortal = () => {
    window.location.hash = 'student';
  };

  const goBackToLogin = () => {
    window.location.hash = 'login';
  };

  return (
    <>
      {activeView === 'auth' && (
        <AuthModule activeTab={activeTab} setActiveTab={setActiveTab} onLoginSuccess={goToStudentPortal} />
      )}

      {activeView === 'student' && (
        <StudentPortal
          onBackToHome={goBackToLogin}
        />
      )}
    </>
  );
}