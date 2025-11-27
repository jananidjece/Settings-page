"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "../../component/ui/card";
import { Button } from "../../component/ui/button";
import { Input } from "../../component/ui/input";
import { Label } from "../../component/ui/label";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { PiTrashDuotone } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

// const Settings = () => {
//   const [showSuccess, setShowSuccess] = useState(false);

//   const [profile, setProfile] = useState({
//     restaurantName: "The Gourmet Kitchen",
//     phoneNumber: "(123) 456-7890",
//     address: "123 Culinary Lane, Foodie City, 90210",
//   });

//   const [hours, setHours] = useState({
//     Monday: { start: "09:00", end: "10:00" },
//     Tuesday: { start: "09:00", end: "10:00" },
//     Wednesday: { start: "09:00", end: "10:00" },
//   });

//   const [staff, setStaff] = useState([
//     { id: 1, name: "Jane Doe", role: "Admin" },
//     { id: 2, name: "John Smith", role: "Manager" },
//   ]);

//   const [notifications, setNotifications] = useState({
//     emailOrders: true,
//     smsOrders: false,
//     dailySummary: true,
//   });

//   // validation errors
//   const [errors, setErrors] = useState({
//     profileName: "",
//     staff: {}, // { [id]: "error message" }
//   });

//   // Validation helpers
//   const validateProfileName = (name) => {
//     if (!name || !name.trim()) {
//       return "Restaurant name cannot be empty";
//     }
//     return "";
//   };

//   const validateStaffName = (name) => {
//     if (!name || !name.trim()) {
//       return "Name cannot be empty";
//     }
//     return "";
//   };

//   // Called on Save
//   const handleSave = () => {
//     // validate profile
//     const profileNameError = validateProfileName(profile.restaurantName);

//     // validate staff
//     const staffErrors = {};
//     staff.forEach((s) => {
//       const err = validateStaffName(s.name);
//       if (err) staffErrors[s.id] = err;
//     });

//     setErrors({ profileName: profileNameError, staff: staffErrors });

//     const hasErrors =
//       !!profileNameError || Object.keys(staffErrors).length > 0;

//     if (hasErrors) {
//       // prevent saving
//       alert("Please fix validation errors before saving.");
//       return;
//     }

//     // simulate save
//     const savedData = { profile, hours, staff, notifications };
//     console.log("Saved Settings:", savedData);

//     // show success UI
//     setShowSuccess(true);
//     alert("Profile updated successfully!");
//     setTimeout(() => setShowSuccess(false), 3000);
//   };

//   // Staff functions
//   const handleAddStaff = () => {
//     const newStaff = { id: Date.now(), name: "", role: "Staff" };
//     setStaff((prev) => [...prev, newStaff]);

//     // set staff error for the new staff to enforce filling it
//     setErrors((prev) => ({
//       ...prev,
//       staff: { ...prev.staff, [newStaff.id]: "Name cannot be empty" },
//     }));
//   };

//   const handleDeleteStaff = (id) => {
//     setStaff((prev) => prev.filter((m) => m.id !== id));
//     setErrors((prev) => {
//       const nextStaffErrors = { ...prev.staff };
//       delete nextStaffErrors[id];
//       return { ...prev, staff: nextStaffErrors };
//     });
//   };

//   const handleEditStaff = (id, updatedName, updatedRole) => {
//     setStaff((prev) =>
//       prev.map((member) =>
//         member.id === id ? { ...member, name: updatedName, role: updatedRole } : member
//       )
//     );

//     // validate immediately
//     setErrors((prev) => {
//       const next = { ...prev.staff };
//       const nameErr = validateStaffName(updatedName);
//       if (nameErr) next[id] = nameErr;
//       else delete next[id];
//       return { ...prev, staff: next };
//     });
//   };

//   // handle profile restaurantName change with validation
//   const onProfileNameChange = (value) => {
//     setProfile((p) => ({ ...p, restaurantName: value }));
//     const err = validateProfileName(value);
//     setErrors((prev) => ({ ...prev, profileName: err }));
//   };

//   // check if there are validation errors to disable save
//   const hasValidationErrors = () => {
//     if (errors.profileName) return true;
//     if (Object.keys(errors.staff || {}).length > 0) return true;
//     // optional: you can add other validation checks here
//     return false;
//   };

//   return (
//     <div className="max-w-4xl mx-auto mb-10 space-y-8 ">
//       <div className="pt-5 mt-3 ">
//         <h1 className="text-4xl font-bold">Settings</h1>
//         <p className="text-gray-500 mt-1">
//           Manage your restaurant profile, staff, and operational settings.
//         </p>
//       </div>

//       <Card className="bg-white rounded-lg border border-gray-200">
//         <CardHeader className="px-6 py-4 border-b border-gray-200">
//           <CardTitle className="text-lg font-semibold text-blue-900">
//             Restaurant Profile
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-6 p-5">
//           {/* Form grid */}
//           <div className="grid grid-cols-2 gap-4 mb-4">
//             <div>
//               <Label className="block text-sm font-medium text-gray-700 mb-2">
//                 Restaurant Name
//               </Label>
//               <Input
//                 type="text"
//                 value={profile.restaurantName}
//                 onChange={(e) => onProfileNameChange(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {errors.profileName && (
//                 <p className="text-red-600 text-xs mt-1">{errors.profileName}</p>
//               )}
//             </div>

//             <div>
//               <Label className="block text-sm font-medium text-gray-700 mb-2">
//                 Phone Number
//               </Label>
//            <Input
//   type="text"
//   value={profile.phoneNumber}
//   onChange={(e) => {
//     let value = e.target.value;

//     // Allow only digits, hyphens, round brackets
//     value = value.replace(/[^0-9()-]/g, "");

//     // Count only digits for the 10-digit rule
//     const digitsOnly = value.replace(/\D/g, "");

//     // Stop input if digits exceed 10
//     if (digitsOnly.length > 10) return;

//     setProfile({ ...profile, phoneNumber: value });
//   }}
//   className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// />
//             </div>
//           </div>

//           <div>
//             <Label className="block text-sm font-medium text-gray-700 mb-2">Address</Label>
//             <textarea
//               value={profile.address}
//               onChange={(e) => setProfile({ ...profile, address: e.target.value })}
//               rows={3}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </CardContent>

//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-lg">
//           <Button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
//             Cancel
//           </Button>

//           <Button
//             onClick={handleSave}
//             className={`px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 ${
//               hasValidationErrors() ? "opacity-60 cursor-not-allowed" : ""
//             }`}
//             disabled={hasValidationErrors()}
//           >
//             Save Changes
//           </Button>
//         </div>
//       </Card>

//       {/* Operating Hours */}
//       <Card className="bg-white rounded-lg border border-gray-200">
//         <CardHeader className="px-6 py-4 border-b border-gray-200">
//           <CardTitle className="text-lg font-semibold text-blue-900">
//             Operating Hours
//           </CardTitle>
//         </CardHeader>

//         <CardContent className="p-6 space-y-4 ">
//           {Object.keys(hours).map((day) => (
//             <div key={day} className="flex items-center gap-4">
//               <Label className="w-32 text-sm font-medium text-gray-900">{day}</Label>
//               <div className="flex-1 px-4 ml-25 rounded-md flex items-center gap-4">
//                 <div className="relative flex-1">
//                   <Input
//                     type="time"
//                     value={hours[day].start}
//                     onChange={(e) =>
//                       setHours({ ...hours, [day]: { ...hours[day], start: e.target.value } })
//                     }
//                     className="bg-gray-100 "
//                   />
//                 </div>
//                 <div className="relative flex-1">
//                   <Input
//                     type="time"
//                     value={hours[day].end}
//                     onChange={(e) =>
//                       setHours({ ...hours, [day]: { ...hours[day], end: e.target.value } })
//                     }
//                     className="bg-gray-100 border-b"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </CardContent>

//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-lg">
//           <Button variant="outline">Cancel</Button>
//           <Button onClick={handleSave} className="bg-orange-500 hover:bg-orange-600">
//             Save Changes
//           </Button>
//         </div>
//       </Card>

//       {/* Staff Management */}
//       <Card className="bg-white rounded-lg border border-gray-200">
//         <CardHeader className="flex md:flex-row justify-between items-center border-gray-200 text-gray-500 border-b">
//           <CardTitle className="text-lg font-semibold text-blue-900">Staff Management</CardTitle>

//           <Button
//             onClick={handleAddStaff}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800"
//           >
//             <FaPlus className="text-sm " /> Add Staff
//           </Button>
//         </CardHeader>

//         <CardContent>
//           <table className="w-full border text-sm rounded-md overflow-hidden">
//             <thead className="text-gray-500">
//               <tr className="border-b border-gray-200 ">
//                 <th className="p-3 text-left">Name</th>
//                 <th className="p-3 text-left">Role</th>
//                 <th className="p-3 flex justify-end">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-gray-200">
//               {staff.map((member) => (
//                 <tr key={member.id} className="border-b border-gray-200">
//                   <td className="p-3">
//                     <input
//                       type="text"
//                       value={member.name}
//                       onChange={(e) => handleEditStaff(member.id, e.target.value, member.role)}
//                       className=" px-2 py-1 rounded w-full"
//                       placeholder="Enter name"
//                     />
//                     {errors.staff && errors.staff[member.id] && (
//                       <p className="text-red-600 text-xs mt-1">{errors.staff[member.id]}</p>
//                     )}
//                   </td>

//                   <td className="p-3">
//                     <input
//                       type="text"
//                       value={member.role}
//                       onChange={(e) => handleEditStaff(member.id, member.name, e.target.value)}
//                       className="px-2 py-1 rounded w-full"
//                     />
//                   </td>

//                   <td className="p-3 flex justify-end text-gray-500 text-2xl gap-3">
//                     <button
//                       title="Edit"
//                       onClick={() => {
//                         /* optional: focus or open modal */
//                       }}
//                     >
//                       <MdOutlineModeEditOutline />
//                     </button>
//                     <button title="Delete" onClick={() => handleDeleteStaff(member.id)}>
//                       <PiTrashDuotone />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>

//       {/* Payment + Notifications */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Payment */}
//         <Card className="bg-white rounded-lg border border-gray-200">
//           <CardHeader className="px-6 py-4 border-b border-gray-200">
//             <CardTitle className="text-lg font-semibold text-blue-900">Payment Gateway</CardTitle>
//           </CardHeader>

//           <CardContent className="p-4  flex flex-col items-center justify-center py-10 ">
//             <div className="w-12 h-12 bg-gray-100 mb-4"></div>
//             <div className="flex items-center gap-2 text-sm text-green-600 font-medium mb-6 rounded-3xl px-4 py-1 bg-green-100">
//               <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//               <span className="text-green-600 ">Connected</span>
//             </div>

//             <Button>Manage Connection</Button>
//           </CardContent>
//         </Card>

//         {/* Notifications */}
//         <Card className=" rounded-lg border border-gray-200">
//           <CardHeader className="px-6 py-4 border-b border-gray-200">
//             <CardTitle className="text-lg font-semibold text-blue-900">Notifications</CardTitle>
//           </CardHeader>

//           <CardContent className="p-6 space-y-4">
//             <label className="flex items-center justify-between">
//               Email for new orders
//               <input
//                 type="checkbox"
//                 checked={notifications.emailOrders}
//                 onChange={(e) => setNotifications({ ...notifications, emailOrders: e.target.checked })}
//               />
//             </label>

//             <label className="flex items-center justify-between">
//               SMS for new orders
//               <input
//                 type="checkbox"
//                 checked={notifications.smsOrders}
//                 onChange={(e) => setNotifications({ ...notifications, smsOrders: e.target.checked })}
//               />
//             </label>

//             <label className="flex items-center justify-between">
//               Daily summary email
//               <input
//                 type="checkbox"
//                 checked={notifications.dailySummary}
//                 onChange={(e) => setNotifications({ ...notifications, dailySummary: e.target.checked })}
//               />
//             </label>
//           </CardContent>
//         </Card>

//       </div>
//     </div>
//   );
// };

// export default Settings;

const Settings = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [profile, setProfile] = useState({
    restaurantName: "The Gourmet Kitchen",
    phoneNumber: "(123) 456-7890",
    address: "123 Culinary Lane, Foodie City, 90210",
  });

  const [hours, setHours] = useState({
    Monday: { start: "09:00", end: "10:00" },
    Tuesday: { start: "09:00", end: "10:00" },
    Wednesday: { start: "09:00", end: "10:00" },
  });

  const [staff, setStaff] = useState([
    { id: 1, name: "Jane Doe", role: "Admin" },
    { id: 2, name: "John Smith", role: "Manager" },
  ]);

  const [notifications, setNotifications] = useState({
    emailOrders: true,
    smsOrders: false,
    dailySummary: true,
  });

  const [errors, setErrors] = useState({
    profileName: "",
    staff: {},
  });

  const validateProfileName = (name) => {
    if (!name.trim()) return "Restaurant name cannot be empty";
    return "";
  };

  const validateStaffName = (name) => {
    if (!name.trim()) return "Name cannot be empty";
    return "";
  };

  const handleSave = () => {
    const profileNameError = validateProfileName(profile.restaurantName);

    const staffErrors = {};
    staff.forEach((s) => {
      const err = validateStaffName(s.name);
      if (err) staffErrors[s.id] = err;
    });

    setErrors({ profileName: profileNameError, staff: staffErrors });

    if (profileNameError || Object.keys(staffErrors).length > 0) {
      alert("Please fix validation errors before saving.");
      return;
    }

    setShowSuccess(true);
    alert("Profile updated successfully!");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleAddStaff = () => {
    const newStaff = { id: Date.now(), name: "", role: "Staff" };
    setStaff((prev) => [...prev, newStaff]);

    setErrors((prev) => ({
      ...prev,
      staff: { ...prev.staff, [newStaff.id]: "Name cannot be empty" },
    }));
  };

  const handleDeleteStaff = (id) => {
    setStaff((prev) => prev.filter((m) => m.id !== id));

    setErrors((prev) => {
      const next = { ...prev.staff };
      delete next[id];
      return { ...prev, staff: next };
    });
  };

  const handleEditStaff = (id, updatedName, updatedRole) => {
    setStaff((prev) =>
      prev.map((m) => (m.id === id ? { ...m, name: updatedName, role: updatedRole } : m))
    );

    setErrors((prev) => {
      const next = { ...prev.staff };
      const nameErr = validateStaffName(updatedName);
      if (nameErr) next[id] = nameErr;
      else delete next[id];
      return { ...prev, staff: next };
    });
  };

  const onProfileNameChange = (value) => {
    setProfile((p) => ({ ...p, restaurantName: value }));
    setErrors((prev) => ({ ...prev, profileName: validateProfileName(value) }));
  };

  const hasValidationErrors = () => {
    return errors.profileName || Object.keys(errors.staff).length > 0;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0 mb-10 space-y-8">

      {/* HEADER */}
      <div className="pt-5 mt-3">
        <h1 className="text-3xl md:text-4xl font-bold">Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage your restaurant profile, staff, and operational settings.
        </p>
      </div>

      {/* RESTAURANT PROFILE */}
      <Card className="border-gray-200">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="text-blue-900 text-lg">Restaurant Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Restaurant Name */}
            <div>
              <Label className="text-sm mb-2">Restaurant Name</Label>
              <Input
                type="text"
                value={profile.restaurantName}
                onChange={(e) => onProfileNameChange(e.target.value)}
              />
              {errors.profileName && (
                <p className="text-red-600 text-xs mt-1">{errors.profileName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <Label className="text-sm mb-2">Phone Number</Label>
              <Input
                type="text"
                value={profile.phoneNumber}
                onChange={(e) => {
                  let v = e.target.value.replace(/[^0-9()-]/g, "");
                  if (v.replace(/\D/g, "").length > 10) return;
                  setProfile({ ...profile, phoneNumber: v });
                }}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <Label className="text-sm mb-2">Address</Label>
            <textarea
              value={profile.address}
              onChange={(e) => setProfile({ ...profile, address: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </CardContent>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-lg">
          <Button variant="outline">Cancel</Button>
          <Button
            onClick={handleSave}
            disabled={hasValidationErrors()}
            className={`bg-orange-500 hover:bg-orange-600 ${
              hasValidationErrors() && "opacity-60 cursor-not-allowed"
            }`}
          >
            Save Changes
          </Button>
        </div>
      </Card>

      {/* OPERATING HOURS */}
      <Card className="border-gray-200">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="text-blue-900 text-lg">Operating Hours</CardTitle>
        </CardHeader>

        <CardContent className="p-6 space-y-5 overflow-x-hidden">
          {Object.keys(hours).map((day) => (
            <div key={day} className="flex flex-col md:flex-row md:items-center gap-4">

              <Label className="md:w-32 font-medium">{day}</Label>

              <div className="flex flex-col md:flex-row gap-4 md:w-full max-w-full">
                <Input
                  type="time"
                  value={hours[day].start}
                  className="bg-gray-100"
                  onChange={(e) =>
                    setHours({ ...hours, [day]: { ...hours[day], start: e.target.value } })
                  }
                />
                <Input
                  type="time"
                  value={hours[day].end}
                  className="bg-gray-100"
                  onChange={(e) =>
                    setHours({ ...hours, [day]: { ...hours[day], end: e.target.value } })
                  }
                />
              </div>

            </div>
          ))}
        </CardContent>

        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-lg">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleSave}>
            Save Changes
          </Button>
        </div>
      </Card>

      {/* STAFF MANAGEMENT */}
     <Card className="bg-white rounded-lg border border-gray-200">
     <CardHeader className="flex md:flex-row justify-between items-center border-gray-200 text-gray-500 border-b">       <CardTitle className="text-lg font-semibold text-blue-900">Staff Management</CardTitle>

<Button
            onClick={handleAddStaff}
            className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800"
          >
            <FaPlus className="text-sm " /> Add Staff
          </Button>
        </CardHeader>

        <CardContent>
          <table className="w-full text-sm rounded-md overflow-hidden">
            <thead className="text-gray-500">
              <tr className="border-b border-gray-200 ">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-end">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {staff.map((member) => (
                <tr key={member.id} className="border-b border-gray-200">
                  <td className="p-3">
                    <input
                      type="text"
                      value={member.name}
                      onChange={(e) => handleEditStaff(member.id, e.target.value, member.role)}
                      className=" px-2 py-1 rounded w-full"
                      placeholder="Enter name"
                    />
                    {errors.staff && errors.staff[member.id] && (
                      <p className="text-red-600 text-xs mt-1">{errors.staff[member.id]}</p>
                    )}
                  </td>

                  <td className="p-3">
                    <input
                      type="text"
                      value={member.role}
                      onChange={(e) => handleEditStaff(member.id, member.name, e.target.value)}
                      className="px-2 py-1 rounded w-full"
                    />
                  </td>

                  <td className="p-3 flex justify-end text-gray-500 text-2xl gap-3">
                    <button
                      title="Edit"
                      onClick={() => {
                        /* optional: focus or open modal */
                      }}
                    >
                      <MdOutlineModeEditOutline />
                    </button>
                    <button title="Delete" onClick={() => handleDeleteStaff(member.id)}>
                      <PiTrashDuotone />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
   </Card>

      {/* PAYMENT + NOTIFICATIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Payment */}
        <Card className="border-gray-200">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-blue-900 text-lg">Payment Gateway</CardTitle>
          </CardHeader>

          <CardContent className="p-6 flex flex-col items-center text-center space-y-5">
            <div className="w-12 h-12 bg-gray-100 rounded-md"></div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-1 rounded-full">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-green-700 text-sm">Connected</span>
            </div>

            <Button>Manage Connection</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-gray-200">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-blue-900 text-lg">Notifications</CardTitle>
          </CardHeader>

          <CardContent className="p-6 space-y-4">
            <label className="flex justify-between">
              Email for new orders
              <input
                type="checkbox"
                checked={notifications.emailOrders}
                onChange={(e) =>
                  setNotifications({ ...notifications, emailOrders: e.target.checked })
                }
              />
            </label>

            <label className="flex justify-between">
              SMS for new orders
              <input
                type="checkbox"
                checked={notifications.smsOrders}
                onChange={(e) =>
                  setNotifications({ ...notifications, smsOrders: e.target.checked })
                }
              />
            </label>

            <label className="flex justify-between">
              Daily summary email
              <input
                type="checkbox"
                checked={notifications.dailySummary}
                onChange={(e) =>
                  setNotifications({ ...notifications, dailySummary: e.target.checked })
                }
              />
            </label>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;




//  <div className="max-w-5xl mx-auto mb-10 space-y-10">
 
//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-6 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
//           <p className="text-gray-600 mt-1">Manage your restaurant profile, staff, and operational settings.</p>
//         </div>

//         <div className="space-y-6">
//           {/* Restaurant Profile */}
//           <div className="bg-white rounded-lg border border-gray-200">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h2 className="text-lg font-semibold text-blue-900">Restaurant Profile</h2>
//             </div>
//             <div className="p-6">
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
//                   <input
//                     type="text"
//                     value={profile.restaurantName}
//                     onChange={(e) => setProfile({...profile, restaurantName: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//                   <input
//                     type="text"
//                     value={profile.phoneNumber}
//                     onChange={(e) => setProfile({...profile, phoneNumber: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
//                 <textarea
//                   value={profile.address}
//                   onChange={(e) => setProfile({...profile, address: e.target.value})}
//                   rows={3}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//             </div>
//             <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-lg">
//               <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
//                 Cancel
//               </button>
//               <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
//                 Save Changes
//               </button>
//             </div>
//           </div>

//           {/* Operating Hours */}
//           <div className="bg-white rounded-lg border border-gray-200">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h2 className="text-lg font-semibold text-blue-900">Operating Hours</h2>
//             </div>
//             <div className="p-6 space-y-4">
//               {Object.keys(hours).map((day) => (
//                 <div key={day} className="flex items-center gap-4">
//                   <div className="w-32 text-sm font-medium text-gray-900">{day}</div>
//                   <div className="flex-1 flex items-center gap-4">
//                     <div className="relative flex-1">
//                       <input
//                         type="time"
//                         value={hours[day].start}
//                         onChange={(e) => setHours({...hours, [day]: {...hours[day], start: e.target.value}})}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="relative flex-1">
//                       <input
//                         type="time"
//                         value={hours[day].end}
//                         onChange={(e) => setHours({...hours, [day]: {...hours[day], end: e.target.value}})}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3 rounded-b-lg">
//               <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
//                 Cancel
//               </button>
//               <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
//                 Save Changes
//               </button>
//             </div>
//           </div>

//           {/* Staff Management */}
//           <div className="bg-white rounded-lg border border-gray-200">
//             <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
//               <h2 className="text-lg font-semibold text-blue-900">Staff Management</h2>
//               <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-md text-sm font-medium hover:bg-blue-800">
//                 <Plus className="w-4 h-4" />
//                 Add Staff
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gray-50 border-b border-gray-200">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {staff.map((member) => (
//                     <tr key={member.id} className="hover:bg-gray-50">
//                       <td className="px-6 py-4 text-sm text-gray-900">{member.name}</td>
//                       <td className="px-6 py-4 text-sm text-gray-900">{member.role}</td>
//                       <td className="px-6 py-4 text-sm">
//                         <div className="flex items-center gap-2">
//                           <button className="p-1 hover:bg-gray-100 rounded">
//                             <Edit2 className="w-4 h-4 text-gray-600" />
//                           </button>
//                           <button className="p-1 hover:bg-gray-100 rounded">
//                             <Trash2 className="w-4 h-4 text-gray-600" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Payment Gateway & Notifications */}
//           <div className="grid grid-cols-2 gap-6">
//             {/* Payment Gateway */}
//             <div className="bg-white rounded-lg border border-gray-200">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-blue-900">Payment Gateway</h2>
//               </div>
//               <div className="p-6 flex flex-col items-center justify-center py-12">
//                 <div className="w-12 h-12 bg-gray-100 mb-4"></div>
//                 <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-6 rounded-3xl px-4 py-1 bg-green-100">
//                   <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                   Connected
//                 </div>
//                 <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
//                   Manage Connection
//                 </button>
//               </div>
//             </div>

//             {/* Notifications */}
//             <div className="bg-white rounded-lg border border-gray-200">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h2 className="text-lg font-semibold text-blue-900">Notifications</h2>
//               </div>
//               <div className="p-6 space-y-4">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-700">Email for new orders</span>
//                   <input
//                     type="checkbox"
//                     checked={notifications.emailOrders}
//                     onChange={(e) => setNotifications({...notifications, emailOrders: e.target.checked})}
//                     className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-700">SMS for new orders</span>
//                   <input
//                     type="checkbox"
//                     checked={notifications.smsOrders}
//                     onChange={(e) => setNotifications({...notifications, smsOrders: e.target.checked})}
//                     className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm text-gray-700">Daily summary email</span>
//                   <input
//                     type="checkbox"
//                     checked={notifications.dailySummary}
//                     onChange={(e) => setNotifications({...notifications, dailySummary: e.target.checked})}
//                     className="w-4 h-4 text-orange-500 rounded focus:ring-orange-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Success Toast */}
//       {showSuccess && (
//         <div className="fixed bottom-6 right-6 bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center gap-3 animate-slide-up">
//           <CheckCircle className="w-5 h-5 text-green-600" />
//           <span className="text-sm font-medium text-gray-900">Profile updated successfully!</span>
//         </div>
//       )}
//     </div>