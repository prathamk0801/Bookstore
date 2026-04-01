// import React from "react";
// import { useForm } from "react-hook-form";

// function Contact() {
//  const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm()
//    const onSubmit = (data) => {
//   console.log(data);

//   document.getElementById("my_modal_3").close();
//   reset();
// };

//   return (
//   <div className="flex items-start md:items-center justify-center px-4 bg-gray-100 dark:bg-slate-900 py-10 mt-10">
//       <div className="w-full max-w-lg bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
        
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Contact Us 📩
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

//           {/* Name */}
//           <div> 
//             <label className="text-sm">Name</label>
//             <br />
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full box-border mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 mr-8"
//               {...register("name", { required: true })}
//             />
//             <br />
//             {errors.name && (
//   <p className="text-red-500 text-sm">Name is required</p>
// )}
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm">Email</label>
//             <br />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className=" w-full box-border mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700"
//            {...register("email", { required: true })}
//             />
//             <br />
//             {errors.email && (
//   <p className="text-red-500 text-sm">Email is required</p>
// )}
//           </div>

//           {/* Subject */}
//           <div>
//             <label className="text-sm">Subject</label>
//             <br />
//             <input
//               type="text"
//               placeholder="Enter subject"
//               className=" w-full box-border mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700"
//               {...register("subject", { required: true })}
//             />
//             <br />
//             {errors.subject && (
//   <p className="text-red-500 text-sm">Subject is required</p>
// )}
//           </div>

//           {/* Message */}
//           <div>
//             <label className="text-sm">Message</label>
//             <br />
//             <textarea
//               rows="4"
//               placeholder="Write your message..."
//               className=" w-full box-border mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 resize-none"
//               {...register("message", { required: true })}
//             ></textarea>
//             <br />
//             {errors.message && (
//   <p className="text-red-500 text-sm">Message is required</p>
// )}
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
//           >
//             Send Message 🚀
//           </button>

//         </form>
//       </div>

//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // ✅ form clear
    reset();

    // ✅ modal close (agar use ho raha hai)
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div className="flex items-start md:items-center justify-center px-4 bg-gray-100 dark:bg-slate-900 py-10 mt-10">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Contact Us 📩
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div> 
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-2 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-2 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="text-sm">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full mt-1 px-2 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">Subject is required</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-1 px-2 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-pink-400 dark:bg-slate-700 resize-none"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">Message is required</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Send Message 🚀
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;