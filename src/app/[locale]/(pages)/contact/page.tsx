// "use client";

// import { useState } from "react";
// import { Phone, Link2, Instagram, Linkedin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import Link from "next/link";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <main className="relative min-h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src="/images/contact.jpg"
//           alt="Contact background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
//       </div>

//       {/* Header */}
//       <div className="text-center py-16 px-4 mt-16">
//         <h1 className="text-white text-5xl md:text-4xl font-bold tracking-tight">
//           CONTACT US
//         </h1>
//         <p className="text-gray-200 my-2 font-medium">
//           We Love To Hear From You We Love To Hear From You We Love To
//           Hear From You
//         </p>
//       </div>

//       {/* Main Content - Two Column Layout */}
//       <div className="max-w-7xl mx-auto px-4 pb-16">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//           {/* Left Column - Contact Information */}
//           <div className="space-y-12 px-4 lg:px-0 col-span-4">
//             {/* Find Us Here */}
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Find Us Here</h3>
//               <div className="flex items-start gap-3 text-gray-200">
//                 <Link2 size={20} className="mt-1 text-gray-200" />
//                 <div>
//                   <Link href="http://www.GAGroupofficial.com">
//                     http://www.GAGroupofficial.com
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Get In Touch */}
//             <div>
//               <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3 text-gray-200">
//                   <Phone size={20} className="text-gray-200" />
//                   <p>+966 55 30033</p>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-200">
//                   <Instagram size={20} className="text-gray-200" />
//                   <Link href={"www.GA.Group.Official.com"}>
//                     www.GA.Group.Official.com
//                   </Link>
//                 </div>
//                 <div className="flex items-center gap-3 text-gray-200">
//                   <Linkedin size={20} className="text-gray-200" />
//                   <Link href={"https://www.linkedin.com/company/ga-group-official/posts/?feedView=all"}>
//                     https://www.linkedin.com
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Contact Form */}
//           <div className="p-8 rounded-lg col-span-8 bg-transparent border border-white/30 backdrop-blur-sm">
//             <h3 className="text-xl font-semibold text-white mb-2">
//               Take The First Step, We
//             </h3>
//             <h3 className="text-xl font-semibold text-white mb-6">
//               Will Take Care For The Rest
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <Input
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className="border-b border-t-0 border-x-0 rounded-none bg-transparent text-white !placeholder-gray-300 !focus:border-gray-300"
//                 />
//               </div>

//               <div>
//                 <Input
//                   type="tel"
//                   name="phone"
//                   placeholder="* Phone Number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="border-b border-t-0 border-x-0 rounded-none bg-transparent text-white !placeholder-gray-300 !focus:border-gray-300"
//                   required
//                 />
//               </div>

//               <div>
//                 <Input
//                   type="email"
//                   name="email"
//                   placeholder="* Email Address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="border-b border-t-0 border-x-0 rounded-none bg-transparent text-white !placeholder-gray-300 !focus:border-gray-300"
//                   required
//                 />
//               </div>

//               <div>
//                 <Textarea
//                   name="message"
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="border-b border-t-0 border-x-0 rounded-none bg-transparent text-white !placeholder-gray-300 !focus:border-gray-300 resize-none"
//                   rows={3}
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-md font-semibold"
//               >
//                 Submit
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Contact;



"use client";

import { useState } from "react";
import { Phone, Link2, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/contact.jpg"
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* overlay لو عايز تعتيم */}
      </div>

      {/* Header */}
      <div className="text-center py-16 px-4 mt-16">
        <h1 className="text-white text-5xl md:text-4xl font-bold tracking-tight">
          CONTACT US
        </h1>
        <p className="text-gray-200 my-2 font-medium">
          We Love To Hear From You We Love To Hear From You We Love To
          Hear From You
        </p>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Contact Information */}
          <div className="space-y-12 px-4 lg:px-0 col-span-4">
            {/* Find Us Here */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Find Us Here</h3>
              <div className="flex items-start gap-3 text-gray-200">
                <Link2 size={20} className="mt-1 text-gray-200" />
                <div>
                  <Link href="http://www.GAGroupofficial.com">
                    http://www.GAGroupofficial.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-200">
                  <Phone size={20} className="text-gray-200" />
                  <p>+966 55 30033</p>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Instagram size={20} className="text-gray-200" />
                  <Link href={"www.GA.Group.Official.com"}>
                    www.GA.Group.Official.com
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <Linkedin size={20} className="text-gray-200" />
                  <Link href={"https://www.linkedin.com/company/ga-group-official/posts/?feedView=all"}>
                    https://www.linkedin.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-300/90 backdrop-blur-md p-8 rounded-lg col-span-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Take The First Step, We
            </h3>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">
              Will Take Care For The Rest
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border-b border-t-0 border-x-0 rounded-none bg-transparent focus:border-gray-500"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="* Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-b border-t-0 border-x-0 rounded-none bg-transparent focus:border-gray-500"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="* Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-b border-t-0 border-x-0 rounded-none bg-transparent focus:border-gray-500"
                  required
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-b border-t-0 border-x-0 rounded-none bg-transparent focus:border-gray-500 resize-none"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-md font-semibold"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
