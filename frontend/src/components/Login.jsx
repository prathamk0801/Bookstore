
// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthProvider';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// export default function Login({ onClose }) {
//   const navigate = useNavigate();
//   const [authUser, setAuthUser] = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  

//   const handleLogin = () => {
//     if (email.trim() === '' || password.trim() === '') {
//       toast.error('Please fill in both email and password');
//       return;
//     }

//     try {
//       const user = { email, password };
//       setAuthUser(user);
//       localStorage.setItem('Users', JSON.stringify(user));
//       toast.success('Login successful!');
//       onClose();

//       // Redirect to Course page after login
    
//       navigate('/course');
//     } catch (error) {
//       toast.error('Error: ' + error.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="bg-white dark:bg-slate-900 p-6 rounded-lg w-80">
//         <h2 className="text-xl mb-4 text-center">Login</h2>

//         <input
//           type="email"
//           placeholder="Enter email"
//           className="w-auto border px-14 py-2 rounded mb-4 dark:bg-slate-700 dark:text-white"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter password"
//           className="w-auto border px-14 py-2 rounded mb-4 dark:bg-slate-700 dark:text-white"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <div className="flex justify-between">
//           <button
//             onClick={handleLogin}
//             className="btn bg-pink-500 text-white hover:bg-pink-600  rounded-full"
//           >
//             Login
//           </button>
//           <button
//             onClick={onClose}
//             className="btn bg-gray-500 text-white hover:bg-gray-600  rounded-full"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login({ onClose }) {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      toast.error('Please fill in both email and password');
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/user/login`, { email, password });

      setAuthUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data));
      toast.success('Login successful!');
      onClose();
      navigate('/course');
    } catch (error) {
      console.log('ERROR:', error.response?.data);
      if (error.response?.status === 400) {
        toast.error('Invalid credentials ❌');
      } else {
        toast.error('Something went wrong ❌');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg w-80">
        <h2 className="text-xl mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Enter email"
          className="w-auto border px-14 py-2 rounded mb-4 dark:bg-slate-700 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-auto border px-14 py-2 rounded mb-4 dark:bg-slate-700 dark:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            onClick={handleLogin}
            className="btn bg-pink-500 text-white hover:bg-pink-600 rounded-full"
          >
            Login
          </button>
          <button
            onClick={onClose}
            className="btn bg-gray-500 text-white hover:bg-gray-600 rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}