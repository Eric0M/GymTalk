// "use client";

// TODO : CREATE USER

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const UserForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     const res = await fetch("/api/Users", {
//       method: "POST",
//       body: JSON.stringify({ formData }),
//       headers: {
//         "content-type": "application/json",
//       },
//     });
//     if (!res.ok) {
//       const response = await res.json();
//       setErrorMessage(response.message);
//     } else {
//       router.refresh();
//       router.push("/");
//     }
//   };
//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         method="POST"
//         className="flex flex-col space-y-4"
//       >
//         <h1>Create New User</h1>
//         <label>Full Name</label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           onChange={handleChange}
//           required={true}
//           value={formData.name}
//         ></input>
//         <label>Email</label>
//         <input
//           id="email"
//           name="email"
//           type="email"
//           onChange={handleChange}
//           required={true}
//           value={formData.email}
//         ></input>
//         <label>PassWord</label>
//         <input
//           id="password"
//           name="password"
//           type="password"
//           onChange={handleChange}
//           required={true}
//           value={formData.password}
//         ></input>
//         <input
//           type="submit"
//           value="Create User"
//           className="bg-indigo-600 hover:bg-indigo-400 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full"
//         />
//       </form>
//       <p className="text-red-500">{errorMessage}</p>
//     </>
//   );
// };

// export default UserForm;
