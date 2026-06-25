"use client";

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../data/config";
import { toast } from "sonner";

const SendEmail = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("EmailJS Config:", {
      serviceId: emailConfig.serviceId,
      templateId: emailConfig.templateId,
      publicKey: emailConfig.publicKey,
    });
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current || loading) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        {
          publicKey: emailConfig.publicKey,
        },
      );

      console.log("SUCCESS!");
      form.current.reset();
      toast.success("Message sent successfully!");
    } catch (error: any) {
      console.log("FAILED...", error?.text || error);
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-base-200 mx-auto w-full flex-1 space-y-5 rounded-xl p-10 shadow-lg"
    >
      <h1 className="text-2xl font-semibold md:text-4xl">Send a message:</h1>

      <div>
        <label className="mb-1 block text-sm font-semibold">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="focus:ring-primary w-full rounded-lg border border-base-content/20 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="focus:ring-primary w-full rounded-lg border border-base-content/20 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="focus:ring-primary w-full rounded-lg border border-base-content/20 px-4 py-2 focus:ring-2 focus:outline-none"
        />
      </div>

      <input type="hidden" name="time" value={new Date().toLocaleString()} />

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary mt-2 w-full disabled:opacity-60 rounded-2xl"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default SendEmail;
