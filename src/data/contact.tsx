import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export const contactDetails = [
  {
    icon: <FaEnvelope className="text-primary text-xl" />,
    info: "nobokumar227@gmail.com",
    href: "mailto:nobokumar227@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="text-primary text-xl" />,
    info: "+880 1404647970",
    href: "tel:+8801404647970",
  },
  {
    icon: <FaLinkedin className="text-primary text-xl" />,
    info: "linkedin.com",
    href: "https://www.linkedin.com/in/nobo-kumar/",
  },
  {
    icon: <FaWhatsapp className="text-primary text-xl" />,
    info: "+880 1404647970",
    href: "https://wa.me/8801404647970",
  },
  {
    icon: <FaMapMarkerAlt className="text-primary text-xl" />,
    info: "Khulna, Bangladesh",
    href: "https://www.google.com/maps/place/Khulna,+Bangladesh",
  },
];
