// export default function Home() {
//   return (
//     <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700 sm:bg-red-500 lg:bg-blue-500">
//       <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col">
//             <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">In transit</span>
//             <span className="text-4xl font-semibold dark:text-white">Coolblue</span>
//           </div>
//           <div className="size-12 rounded-full bg-orange-400" />
//         </div>
//         <div className="my-2 flex items-center gap-2">
//           <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full transition hover:bg-green-500 hover:scale-125">Today</span>
//           <span className="dark:text-gray-100">9:30-10:30</span>
//         </div>
//         <div className="relative">
//           <div className="bg-gray-200 absolute rounded-full w-full h-2" />
//           <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
//         </div>
//         <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300 ">
//           <span>Expected</span>
//           <span>Sorting center</span>
//           <span>In transit</span>
//           <span className="text-gray-400 dark:text-gray-500">Delivered</span>
//         </div>
//         <div className="flex flex-col items-center gap-2 w-full md:flex-row">
//           <input
//             className="w-full rounded-full h-10 bg-gray-200 pl-5 ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow
//             invalid:focus:ring-red-500 peer
//             "
//             type="text"
//             required
//             placeholder="Enter your email"
//           />
//           <span className="text-red-500 text-sm hidden peer-invalid:block">Please enter a valid email address</span>
//           <button
//             className="w-full bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium md:w-auto px-5
//           "
//           >
//             Login
//           </button>

//           <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
//             {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
//               <div key={index} className="group flex items-center gap-5 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0 cursor-pointer hover:bg-gray-50 p-3 rounded-2xl transition-colors">
//                 <div className="size-10 bg-blue-400 rounded-full group-hover:scale-110 transition-transform" />
//                 <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300 group-hover:text-blue-500 transition-colors">{person}</span>
//                 <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative ml-auto group-hover:bg-red-600">
//                   <span className="z-10">{index}</span>
//                   <div className="size-6 bg-red-500 rounded-full absolute group-hover:animate-ping" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* Form with group-invalid and group-focus-within example */}
//         <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm mt-5">
//           <h3 className="text-lg font-medium mb-4">Contact Form</h3>
//           <div className="group flex flex-col">
//             <div className="relative">
//               <input
//                 type="email"
//                 required
//                 placeholder="Write your email"
//                 className="w-full pl-10 pr-4 py-2 rounded-lg
//                 bg-gray-100
//                 outline-none
//                 group-focus-within:ring-2
//                 group-focus-within:ring-blue-500
//                 "
//               />
//               <div className="absolute left-3 top-1/2 -translate-y-1/2">✉️</div>
//             </div>
//             <span className="text-sm text-gray-500 mt-1 group-focus-within:block hidden">Make sure it is a valid email...</span>
//           </div>
//         </div>

//         <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm mt-5">
//           <h3 className="text-lg font-medium mb-4">Contact Form</h3>
//           <input
//             type="text"
//             placeholder="Write your email"
//             className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 outline-none ring-2 ring-transparent focus:ring-blue-500 focus:ring-offset-2 transition-shadow"
//           />
//         </div>
//       </div>

//       {/* search bar */}
//     </main>
//   );
// }
// import Link from "next/link";
// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-between min-h-screen p-6">
//       <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
//         <span className="text-9xl">🥕</span>
//         <h1 className="text-4xl ">당근</h1>
//         <h2 className="text-2xl">당근 마겟에 어서오세요!</h2>
//       </div>
//       <div className="flex flex-col items-center gap-3 w-full">
//         <Link href="/create-account" className="w-full bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors">
//           시작하기
//         </Link>
//         <div className="flex gap-2">
//           <span>이미 계정이 있나요?</span>
//           <Link href="/login" className="hover:underline">
//             로그인
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
