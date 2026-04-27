"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../data/config";

const SendEmail = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, {
        publicKey: emailConfig.publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-base-200 mx-auto w-full flex-1 space-y-5 rounded-xl p-10 shadow-lg"
    >
        <h1 className="text-2xl md:text-4xl font-semibold">Send a message:</h1>
      <div>
        <label className="mb-1 block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="bg-base-200 focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="bg-base-200 focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="bg-base-200 focus:ring-primary w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      {/* Hidden time input */}
      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <div>
        <input
          type="submit"
          value="Send Message"
          className="btn btn-primary mt-2 w-full"
        />
      </div>
    </form>
  );
};

export default SendEmail;
