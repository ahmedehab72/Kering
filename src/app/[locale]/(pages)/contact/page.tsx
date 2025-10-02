"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/images/contact.jpg"
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-white text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto -mt-20 relative z-10 bg-white shadow-lg rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        {/* Address */}
        <div className="flex flex-col items-center text-center space-y-3">
          <MapPin className="w-6 h-6 text-gray-700" />
          <h3 className="font-semibold text-lg">Physical Address</h3>
          <p className="text-gray-500">
            123 Mainstreet Lane <br /> Krakow, Poland 30-013
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Mail className="w-6 h-6 text-gray-700" />
          <h3 className="font-semibold text-lg">Email Address</h3>
          <a className="text-gray-500" href="Info@weddingJournal.com">
            Info@weddingJournal.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Phone className="w-6 h-6 text-gray-700" />
          <h3 className="font-semibold text-lg">Phone Numbers</h3>
          <p className="text-gray-500">+48 123 456 789</p>
        </div>
      </div>

      {/* Chat Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 my-24 gap-y-10 gap-x-24 px-6">
        {/* Left Image */}
        <div className="relative h-[450px] w-full rounded-lg overflow-hidden">
          <Image
            src="/images/aboutImage.png"
            alt="Wedding couple"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="px-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-8">Let’s Chat</h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleInputChange}
            />
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white"
            >
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
