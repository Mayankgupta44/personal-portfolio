import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { useTheme } from "../contexts/ThemeContext";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false,
  });
  const { toast } = useToast();
  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks! I'll be in touch soon 😄",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <section
      id="contact"
      className={`min-h-screen w-full px-8 md:px-32 mt-16 transition-colors duration-300 bg-[#153341]`}
    >
      {/* Title */}
      <div className="text-center opacity-100 transform-none">
        <p className="text-white mt-16 mb-6 text-xl font-mono">
          <span className="text-cyan-400">&lt;</span>Contact
          <span className="text-cyan-400">/&gt;</span>
        </p>
        <h2 className="text-white text-3xl font-bold mb-16">
          Write me a message and I will get back to you.
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 mb-32">
        {/* Left Column: Code snippet */}
        <div
          className="w-full md:w-1/2 flex-none text-white bg-[#101c24] rounded-2xl p-8 md:p-12
                     border-4 border-cyan-400 hover:border-turquoise transition-all duration-500
                     shadow-lg hover:shadow-2xl transform hover:scale-105 animate-scale-in"
        >
          <pre className="text-md md:text-lg leading-relaxed font-mono overflow-x-auto">
{`// `}
<span className="text-pink-400">// 🌈 Spreading Stardust:</span>
{`\n`}
<span className="text-pink-400">// Crafting Cosmic Email 🌌</span>
{`\n\n`}
<span className="text-green-400">import</span> <span className="text-white">{`{ useState }`}</span> <span className="text-green-400">from</span> <span className="text-yellow-300">"react"</span>;
{`\n\n`}
<span className="text-blue-400">const</span> <span className="text-white">[sender, setSender]</span> = <span className="text-yellow-300">"🚀"</span>;
{`\n`}
<span className="text-blue-400">const</span> <span className="text-white">[recipient, setRecipient]</span> = <span className="text-yellow-300">"📧"</span>;
{`\n`}
<span className="text-blue-400">const</span> <span className="text-white">[subject, setSubject]</span> = <span className="text-yellow-300">"<span className='blink'>|</span>✨"</span>;
{`\n`}
<span className="text-blue-400">const</span> <span className="text-white">[message, setMessage]</span> = <span className="text-green-400">`Hello, intrepid traveler! 👋`</span>;
{`\n\n`}
<span className="text-white">Across the cosmos, a message for you:</span>
{`\n\n`}
<span className="text-green-400">""</span>
{`\n\n`}
<span className="text-white">Wishing you stardust dreams,</span>
{`\n`}
<span className="text-white">`</span>
          </pre>
        </div>

        {/* Right Column: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex-1 flex flex-col gap-6 animate-fade-in"
          autoComplete="off"
        >
          {["name", "email", "subject"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }`}
              value={formData[field]}
              onChange={handleChange}
              required
              className="bg-[#101c24] text-white p-4 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-turquoise
                         shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            />
          ))}

          <textarea
            rows={6}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="bg-[#101c24] text-white p-4 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-turquoise
                       shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105 resize-none"
          />

          <div className="flex items-start gap-4">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={formData.privacy}
              onChange={handleChange}
              required
              className="mt-1 accent-turquoise"
            />
            <label htmlFor="privacy" className="text-lg text-white">
              I agree that Mayank may use my data to contact me.
            </label>
          </div>

          <p className="text-center text-lg text-white">
            By submitting this, you acknowledge that you have read the Privacy
            Policy.
          </p>

          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="w-1/4 md:w-1/5
               bg-gradient-to-r from-blue-500 to-cyan-500
               hover:from-blue-600 hover:to-cyan-600
               text-white font-bold text-sm
               py-2 px-4 rounded-lg
               transition-transform duration-300 transform hover:scale-110
               shadow-lg hover:shadow-xl
               focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
