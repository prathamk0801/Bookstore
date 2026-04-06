
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

const API = import.meta.env.VITE_API_URL || "https://bookstore-9tth.onrender.com";
const handleLogin = async () => {
  if (email.trim() === '' || password.trim() === '') {
    toast.error('Please fill in both email and password');
    return;
  }

  try {
    const response = await axios.post(`${API}/user/login`, { email, password });
    
    // backend se user data mil gaya
    const user = response.data.user;

    setAuthUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    toast.success('Login successful!');
    onClose();
    navigate('/course');
  } catch (error) {
    toast.error('Login failed: ' + (error.response?.data?.message || error.message));
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
            className="btn bg-pink-500 text-white hover:bg-pink-600  rounded-full"
          >
            Login
          </button>
          <button
            onClick={onClose}
            className="btn bg-gray-500 text-white hover:bg-gray-600  rounded-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthProvider';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Login({ onClose }) {
//   const navigate = useNavigate();
//   const [authUser, setAuthUser] = useAuth();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // ✅ Backend route from environment variable
//   const API = import.meta.env.VITE_API_URL 

//  const handleLogin = async () => {
//   if (email.trim() === '' || password.trim() === '') {
//     toast.error('Please fill in both email and password');
//     return;
//   }

//   try {
//     // ✅ Define data object
//     const data = { email, password };

//     // ✅ Call backend login API
//     const res = await axios.post(`${API}/user/login`, data);
//     console.log(res.data); // check console for response

//     // ✅ Update auth context and localStorage
//     setAuthUser(res.data.user);
//     localStorage.setItem('user', JSON.stringify(res.data.user));

//     toast.success('Login successful! 🎉');
//     onClose();

//     // ✅ Redirect to Course page
//     navigate('/course');
//   } catch (error) {
//     console.error('Login Error:', error.response?.data || error.message);
//     if (error.response?.status === 400) {
//       toast.error('Invalid email or password ❌');
//     } else {
//       toast.error('Internal server error ❌');
//     }
//   }
// };

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//       <div className="bg-white dark:bg-slate-900 p-6 rounded-lg w-80 transition duration-300">
//         {/* Header */}
//         <h2 className="text-xl mb-4 text-center text-black dark:text-white">Login</h2>

//         {/* Email Input */}
//         <input
//           type="email"
//           placeholder="Enter email"
//           className="w-full border px-3 py-2 rounded mb-4 dark:bg-slate-700 dark:text-white"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         {/* Password Input */}
//         <input
//           type="password"
//           placeholder="Enter password"
//           className="w-full border px-3 py-2 rounded mb-4 dark:bg-slate-700 dark:text-white"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Buttons */}
//         <div className="flex justify-between">
//           <button
//             onClick={handleLogin}
//             className="w-1/2 mr-2 bg-pink-500 text-white hover:bg-pink-600 rounded-full py-2 cursor-pointer"
//           >
//             Login
//           </button>
//           <button
//             onClick={onClose}
//             className="w-1/2 ml-2 bg-gray-500 text-white hover:bg-gray-600 rounded-full py-2 cursor-pointer"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }