import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6 space-y-16">
        {/* Contacts Info Section*/}
        <div>
          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-4">Contacts</h1>

          {/* Paragraph */}
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vehicula, justo a posuere suscipit, sapien sem fermentum nulla,
            a ultricies nisl ex sit amet libero.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {/* Location */}
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
                Location
              </h2>
              <p>123 Main Street, City, Country</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-500" />
                Phone
              </h2>
              <p>+1 234 567 890</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
                Email
              </h2>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form + Map Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Send Me a Message</h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-200"
              />
              <button
                type="submit"
                className="bg-gray-900 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-gray-500 transition"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Send
              </button>
            </form>
          </div>

          {/*  Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Current Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61571.86326249403!2d76.30975618383752!3d10.008506607638417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1758774730585!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="min-h-[400px] w-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
