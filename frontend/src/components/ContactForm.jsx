import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const toastifyConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

function ContactForm() {
  const form = useRef();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitContactForm = (e) => {
    e.preventDefault();
    if (email.includes("@")) {
      toast.success("Message received", toastifyConfig);
      emailjs
        .sendForm(
          "service_26119ou",
          "template_q9npjae",
          form.current,

          "cykCirvge0R3E4Prx"
        )
        .then(
          (result) => {
            console.warn(result.text);
          },
          (error) => {
            console.warn(error.text);
          }
        );
    } else {
      toast.error("invalid email", toastifyConfig);
    }
  };

  return (
    <form ref={form} onSubmit={submitContactForm} className="footer-form">
      <div className="mb-2 mt-1 p-2">
        <input
          value={username}
          onChange={(e) => setName(e.target.value)}
          className="input-name w-100 p-2"
          type="text"
          name="user_name"
          placeholder="Name"
          required
        />
      </div>

      <div className="mb-2 p-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-email w-100 p-2"
          type="email"
          name="user_email"
          placeholder="Adress email"
          required
        />
      </div>

      <div className="mb-2 p-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea w-100 p-2"
          name="message"
          placeholder="Enter your message"
          required
        />
      </div>

      <div className="mb-2">
        <button className="button w-50 fs-5" type="submit">
          submit
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </form>
  );
}

export default ContactForm;
