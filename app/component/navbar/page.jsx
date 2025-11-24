
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Eye } from "lucide-react";
// import { AiOutlineBell } from "react-icons/ai";
// import { MdRestaurantMenu } from "react-icons/md";
// import { RiGalleryView2 } from "react-icons/ri";
// import { MdOutlineReceiptLong } from "react-icons/md";

// const Navbar = () => {
//   const pathname = usePathname();

//   const menuItems = [
//     { name: "Overview", icon: <RiGalleryView2 size={18} />, href: "/overview" },
//     { name: "Orders", icon: <MdOutlineReceiptLong size={18} />, href: "/orders" },
//     { name: "Menu", icon: <MdRestaurantMenu size={18} />, href: "/menu" },
//     { name: "Settings", icon: null, href: "/pages/settings" },
//   ];

//   return (
//     <nav className="w-full h-16 bg-white flex items-center shadow backdrop justify-between px-6 mx-auto mb-10">
//       {/* Left */}
//       <div className="flex items-center gap-6">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 bg-green-800 rounded-lg flex items-center justify-center text-white font-bold"></div>
//           <p className="text-xl font-semibold text-blue-900">DineFlow</p>
//         </div>

//         <div className="flex items-center text-sm ml-6 text-gray-600">
//           {menuItems.map((item) => {
//             const active = pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`relative px-3 py-2 gap-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ease-out transform 
//                 hover:scale-105 active:scale-95
//                 ${active ? "text-orange-600" : "hover:text-orange-600"}
//               `}
//               >
//                 {item.icon}
//                 {item.name}

//                 {/* underline */}
//                 <span
//                   className={`
//                    absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-orange-500 
//                     transition-all duration-300 rounded-full
//                     ${active ? "w-6" : "w-0 group-hover:w-3"}
//     `}
//                 ></span>
//               </Link>
//             );
//           })}
//         </div>
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-6">
//         <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-lg flex items-center gap-2 shadow-sm">
//           <Eye size={18} /> View Menu
//         </button>

//         <AiOutlineBell className="text-gray-500" size={25} />
//         <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Eye, Menu, X } from "lucide-react";
import { AiOutlineBell } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineReceiptLong } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Overview", icon: <RiGalleryView2 size={18} />, href: "/overview" },
    { name: "Orders", icon: <MdOutlineReceiptLong size={18} />, href: "/orders" },
    { name: "Menu", icon: <MdRestaurantMenu size={18} />, href: "/menu" },
    { name: "Settings", icon: null, href: "/pages/settings" },
  ];

  return (
    <nav className="w-full h-16 bg-white shadow flex items-center justify-between px-6 mb-10">

      {/* LEFT SECTION (Logo + Menu together) */}
      <div className="flex items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-800 rounded-lg"></div>
          <Link href="/" className="text-xl font-semibold text-blue-900">
            DineFlow
          </Link>
        </div>

        {/* MENU placed next to DineFlow */}
        <div className="hidden md:flex items-center text-sm text-gray-600 gap-2">
          {menuItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 flex items-center gap-2 
                  transition-all duration-300 hover:text-orange-600 transform hover:scale-105
                  ${active ? "text-orange-600" : ""}
                `}
              >
                {item.icon}
                {item.name}

                {/* Small centered underline */}
                <span
                  className={`
                    absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-orange-500
                    transition-all duration-300 rounded-full
                    ${active ? "w-6" : "w-0"}
                  `}
                />
              </Link>
            );
          })}
        </div>

      </div>

      {/* RIGHT SIDE (Desktop Only) */}
      <div className="hidden md:flex items-center gap-6">
        <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-lg flex items-center gap-2 shadow-sm">
          <Eye size={18} /> View Menu
        </button>
        <AiOutlineBell size={25} className="text-gray-500" />
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 md:hidden">

          {menuItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`w-full py-3 text-sm flex items-center gap-3 border-b 
                  ${active ? "text-orange-600 font-semibold" : "text-gray-700"}
                `}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          {/* bottom section */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-lg flex items-center gap-2 shadow-sm w-full justify-center">
              <Eye size={18} /> View Menu
            </button>

            <div className="flex items-center justify-between w-full">
              <AiOutlineBell size={25} className="text-gray-500" />
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;




