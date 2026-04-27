import React from "react";
import { contactDetails } from "../../data/contact";

const ContactInfo = () => {
  return (
    <div className="mx-auto grid w-full flex-1 gap-4">
      <h1 className="text-2xl font-semibold">Contact Information:</h1>
      {contactDetails.map((contact, idx) => (
        <a
          key={idx}
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="bg-base-200 hover:bg-base-300 flex items-center gap-4 rounded-xl p-2 md:p-4 shadow-md transition-colors"
        >
          <div className="bg-primary/10 rounded-full p-2">{contact.icon}</div>
          <div className="text-base font-semibold text-current">
            {contact.info}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
