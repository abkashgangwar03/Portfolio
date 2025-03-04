import React, { useState, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lf70p2", // EmailJS Service ID
        "template_dotjpdk", // EmailJS Template ID
        formRef.current,
        "F1WJ4B21bGuOYueUp" // EmailJS Public API Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setFormStatus("Message sent successfully! I'll get back to you soon.");
          formRef.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          setFormStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contactMe" className="h-full w-auto mx-4 md:mx-10 mt-20 scroll-mt-12 md:scroll-mt-0">
      <h1
        className="text-start border-b-2 mt-5 border-neutral-600 text-2xl md:text-4xl font-extrabold
        p-2 bg-gradient-to-r brightness-175 from-neutral-600 to-textcolor to-30% md:to-12% text-transparent bg-clip-text"
      >
        Contact Me
      </h1>

      <p className="text-neutral-400 font-serif text-center mt-2">
        <b>Let's Connect!</b>
        I’m always open to discussing new projects, exploring creative ideas,
        and collaborating on exciting opportunities.
      </p>

      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-10 mt-10 md:mt-16">
          <div className="flex flex-col md:flex-row gap-10">
            <a
              href="https://www.google.com/maps/place/Bareilly,+Uttar+Pradesh/"
              target="_blank"
              rel="noreferrer"
              className="transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg focus:scale-110 
               focus:shadow-xl active:scale-105 active:shadow-lg outline-1 outline-textcolor shadow-textcolor 
               h-40 w-64 brightness-150 bg-neutral-950 rounded-2xl flex flex-col justify-center items-center p-4"
            >
              <FaMapMarkerAlt className="text-neutral-500 text-4xl" />
              <h3 className="font-bold text-xl text-textcolor brightness-175 mt-2">
                Address
              </h3>
              <h4 className="font-semibold text-neutral-500">
                Bareilly, Uttar Pradesh
              </h4>
            </a>

            <a
              href="tel:+916397335364"
              className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:scale-105 
               focus:shadow-lg active:scale-105 active:shadow-lg outline-1 outline-textcolor shadow-textcolor 
               h-40 w-64 brightness-150 bg-neutral-950 rounded-2xl flex flex-col justify-center items-center p-4"
            >
              <FaPhone className="text-neutral-500 text-4xl transition rotate-90" />
              <h3 className="font-bold text-xl text-textcolor brightness-175 mt-2">
                Call Me
              </h3>
              <h4 className="font-semibold text-neutral-500">+91 6397335364</h4>
            </a>
          </div>

          <a
            href="mailto:abkashgangwar@gmail.com"
            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg focus:scale-105 
             focus:shadow-lg active:scale-110 active:shadow-lg outline-1 outline-textcolor shadow-textcolor 
             h-40 w-64 brightness-150 bg-neutral-950 rounded-2xl flex flex-col justify-center items-center p-4"
          >
            <FaEnvelope className="text-neutral-500 text-4xl" />
            <h3 className="font-bold text-xl text-textcolor brightness-175 mt-2">
              Mail Me
            </h3>
            <h4 className="font-semibold text-neutral-500">
              abkashgangwar@gmail.com
            </h4>
          </a>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mb-12 md:mb-18 brightness-150 border h-125 w-84 md:w-94 pt-5 pb-8 px-3 border-black flex flex-col 
                justify-center bg-neutral-950 rounded-sm shadow-md shadow-textcolor outline-1 outline-textcolor gap-4"
          >
            <h5 className=" text-xl text-textcolor brightness-150 px-1 font-bold">SEND YOUR MESSAGE</h5>
            <input
              required
              name="user_name"
              className="bg-black border-1 border-neutral-700 placeholder-neutral-700 text-neutral-400 
              h-10 p-2 rounded-sm focus:ring-1 focus:ring-textcolor focus:border-textcolor outline-none"
              type="text"
              placeholder="Your Name"
            />
            <input
              required
              name="user_email"
              className="border-1 border-neutral-700 bg-black text-neutral-400 placeholder-neutral-700 h-10 p-2 
              rounded-sm focus:ring-1 focus:ring-textcolor focus:border-textcolor outline-none"
              type="email"
              placeholder="Your Email"
            />
            <textarea
              required
              name="message"
              placeholder="Your Message..."
              className="w-full h-60 p-2 mt-2 bg-black border border-neutral-700 text-neutral-400 
              placeholder-neutral-700 rounded-sm focus:ring-1 focus:ring-textcolor focus:border-textcolor 
              outline-none resize-none transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="bg-websec resize-none h-10 rounded-sm font-semibold mt-1"
            >
              Send Message
            </button>
            {formStatus && (
              <p className="text-center text-textcolor mt-2">{formStatus}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
