
import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthUser(null);
    localStorage.removeItem('user');
    toast.success('Logout successfully');
    navigate('/');
  };

  return (
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;