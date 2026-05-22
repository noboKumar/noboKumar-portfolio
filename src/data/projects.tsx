import React from "react";
import { FaReact, FaKey } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDaisyui, SiFirebase, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiShadcnui, SiFramer, SiNodedotjs, SiGooglegemini, SiPostgresql, SiPrisma } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { SiAxios, SiReactquery, SiReacthookform } from "react-icons/si";
import { Project } from "./types";

export const projectData: Project[] = [
  {
    title: "Skill Spark",
    photo: "https://i.ibb.co/yFG2nWs5/skill-spark-ss.png",
    photos: [
      "https://i.ibb.co/yFG2nWs5/skill-spark-ss.png",
      "https://i.ibb.co/5hj5Ytr5/53e096db-d1dc-415d-8d13-d00aa215b541.png",
      "https://i.ibb.co/vvvYMct6/8f4ca55f-a235-4869-8531-9cab079aaa40.png"
    ],
    photoLabels: ["Home", "All Classes", "Admin Dashboard"],
    description:
      "Skill Spark is a modern, full-featured e-learning platform built with the MERN stack. It empowers educational institutions through role-based Dashboards designed specifically for students, teachers, and admins. With Stripe-integrated payments, real-time feedback, class management tools, and a fully responsive design.",
    techStack: [
      { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "DaisyUI", icon: <SiDaisyui className="text-[#f9b779]" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-red-600" />,
      },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Stripe", icon: <FaStripe className="text-[#635BFF]" /> },
      { name: "Axios", icon: <SiAxios className="text-[#5A29E4]" /> },
      {
        name: "React Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
      {
        name: "React Hook Form",
        icon: <SiReacthookform className="text-[#EC5990]" />,
      },
    ],
    links: [
      {
        live: "https://skill-sparkx.netlify.app/",
        githubRepo: "https://github.com/noboKumar/Skill-Spark-Client",
      },
    ],
    features: [
      "Authentication System: Email/password and Google sign-in, with JWT-based secure routing.",
      "Role-Based Dashboards: Unique views and permissions for Students, Teachers, and Admins.",
      "Teacher Features: Apply to teach, manage classes and assignments, and track progress.",
      "Admin Panel: Manage users, control class visibility, and moderate platform content.",
      "Stripe Payments: Secure real-time payments for course enrollments.",
      "Evaluation System: Students can submit TERs (Teaching Evaluation Reports) with ratings and feedback.",
      "React Query: Optimized data fetching and mutation handling.",
      "Interactive UI: SweetAlert2 modals, toast feedback, and dynamic components.",
      "Live Statistics: Dashboards display current class, user, and enrollment data.",
      "Fully Responsive: Designed for seamless use across desktop, tablet, and mobile devices.",
    ],
  },
  {
    title: "Garden Nest AI",
    photo: "https://i.ibb.co/VYf9Rdbs/a43aa612-a11f-4ab2-a090-08d3f8a00a4d.png",
    photos: [
      "https://i.ibb.co/VYf9Rdbs/a43aa612-a11f-4ab2-a090-08d3f8a00a4d.png",
      "https://i.ibb.co/PvgsMzMh/20d05239-53d1-4cc5-ad44-ef10e002a4c4.png",
      "https://i.ibb.co/Z1BHRPD1/a9ed460e-c1b8-4c7b-b307-7cda23887c48.png"
    ],
    photoLabels: ["Home", "Explore Tips", "Admin Dashboard"],
    description:
      "Garden Nest AI is a full-stack gardening community platform powered by Generative AI. It connects plant enthusiasts, organic farmers, and urban gardeners to share gardening knowledge, discover expert tips, and engage with an intelligent gardening ecosystem. The platform features AI-powered content generation.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-[#38BDF8]" /> },
      { name: "ShadCN UI", icon: <SiShadcnui className="text-white" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#F107A3]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Google Gemini AI", icon: <SiGooglegemini className="text-[#1a73e8]" /> },
    ],
    links: [
      {
        live: "https://garden-nest-ai.vercel.app",
        githubRepo: "https://github.com/your-github-username/garden-nest-ai",
      },
    ],
    features: [
      "AI-powered GardenSage chatbot for instant gardening assistance",
      "Generate and refine gardening posts using Google Gemini AI",
      "Role-based dashboards for Visitors, Gardeners, and Admins",
      "Interactive analytics and charts with Recharts",
      "Advanced search, filtering, and sorting system",
      "Responsive premium UI with dark/light mode support",
      "Authentication with Firebase (Google & Email/Password)",
      "Smooth animations and modern glassmorphism design",
    ],
  },
  {
    title: "SkillBridge",
    photo: "https://i.ibb.co/8Lv128c7/6cc0460f-2b1d-4c68-b80c-29a1e2c817fe.png",
    photos: [
      "https://i.ibb.co/8Lv128c7/6cc0460f-2b1d-4c68-b80c-29a1e2c817fe.png",
      "https://i.ibb.co/dJMwbfSM/891f1e8d-d108-4c67-a0eb-5b03508a3242.png",
      "https://i.ibb.co/JW8y8bg7/1c243335-e9ab-4d2e-91ac-369fddbd4f86.png"
    ],
    photoLabels: ["Home", "Teachers", "Admin Dashboard"],
    description:
      "SkillBridge is a premium full-stack tutoring platform that connects students with expert tutors for personalized 1-on-1 learning sessions. The platform provides role-based experiences for Students, Tutors, and Admins, featuring secure Stripe payments, smart tutor discovery, session booking, analytics dashboards, and a modern responsive UI built with Next.js and TypeScript.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-[#38BDF8]" /> },
      { name: "shadcn/ui", icon: <SiShadcnui className="text-white" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#F107A3]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-[#5a67d8]" /> },
      { name: "JWT Auth", icon: <FaKey className="text-[#d97706]" /> },
      { name: "Stripe", icon: <FaStripe className="text-[#635BFF]" /> },
      { name: "TanStack Query", icon: <SiReactquery className="text-[#FF4154]" /> },
    ],
    links: [
      {
        live: "https://skillbridgex.vercel.app",
        githubRepo: "https://github.com/noboKumar/SkillBridge-frontend",
      },
    ],
    features: [
      "Role-based dashboards for Students, Tutors, and Admins",
      "Smart tutor search with subject, rating, and price filters",
      "1-on-1 tutoring session booking and scheduling system",
      "Secure Stripe payment integration for session checkout",
      "Tutor availability management and teaching analytics",
      "Interactive dashboards with real-time stats and animations",
      "Review and rating system for completed sessions",
      "Modern glassmorphism UI with fully responsive design",
    ],
  },
  {
    title: "TraVoa - Hotel Booking Platform",
    photo: "https://i.ibb.co/Gvnh3Cyk/Travoa-Page-1.png",
    photos: [
      "https://i.ibb.co/yjqTn4C/7941146b-be0f-49da-9f67-52b458b04d96.png",
      "https://i.ibb.co/QFHWn8Xr/1d1e7363-b8a2-43b5-af78-2f5a000db008.png",
      "https://i.ibb.co/KjvCbNB9/a6c33f44-3f4f-406d-b175-64617da17309.png"
    ],
    photoLabels: ["Home", "Rooms", "Rooms Details"],
    description:
      "TraVoa is a modern, full-featured Hotel Booking Platform built using the MERN stack with secure authentication and dynamic features. It offers users a seamless experience for discovering and booking hotel rooms, submitting reviews, and managing their bookings. The platform is mobile-responsive, secure, and designed to be both functional and visually appealing for users and recruiters.",
    techStack: [
      { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "DaisyUI", icon: <SiDaisyui className="text-[#f9b779]" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-red-600" />,
      },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
    links: [
      {
        live: "https://travoa.netlify.app/",
        githubRepo:
          "https://github.com/noboKumar/TraVoa-hotel-Booking-Platform-Client",
      },
    ],
    features: [
      "Hero Banner with SwiperJS Slider",
      "Featured Rooms with rating, image, price, and quick booking",
      "Email & Password Authentication with Validation",
      "Secure private routes using JWT",
      "Browse all hotel rooms with filter by price range",
      "View and manage bookings in My Bookings page",
      "Review modal with rating (1-5), timestamp, and display on room details",
      "Sorted descending by latest",
      "Custom 404 with Lottie react and redirect button",
    ],
  },
  {
    title: "Event Voyage - A Local Event Discovery PlatForm",
    photo: "https://i.ibb.co/S4RnwRNN/event-Voyage-page.png",
    photos: [
      "https://i.ibb.co/nqM1pBZq/e74be36c-edca-40a7-a1cf-5c8404530fa5.png",
      "https://i.ibb.co/hRLw3x91/f761b9d1-d300-435b-a131-9542b870d422.png",
      "https://i.ibb.co/5hv3wzMn/07d9d11b-b5bb-458c-a242-49e0d4e2055d.png"
    ],
    photoLabels: ["Home", "My Bookings", "My Profile"],
    description:
      "Event Explorer is a web application designed to help users discover, explore, and get detailed information about upcoming local events like conferences, workshops, sports events, art exhibitions, and more. Users can log in, browse events, view detailed info and reserve Seat.",
    techStack: [
      { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "DaisyUI", icon: <SiDaisyui className="text-[#f9b779]" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-red-600" />,
      },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    ],
    links: [
      {
        live: "https://event-voyage.netlify.app/",
        githubRepo: "https://github.com/noboKumar/Event-Voyage",
      },
    ],
    features: [
      "Browse and discover local events.",
      "Upcoming Event discovery.",
      "View Event Details.",
      "User Can Reserve seat for any Event.",
      "User authentication and login system.",
      "Responsive design for mobile and desktop.",
    ],
  },
  {
    title: "Doc Talk",
    photo: "https://i.ibb.co/4wdr21Hf/doc-Talk-page.png",
    photos: [
      "https://i.ibb.co/wrZ13d1f/1eae2388-f87d-4ae5-a9db-08d4d73e1664.png",
      "https://i.ibb.co/8nZq4Pmp/17e03479-ea5d-4cbd-a5fd-add8bbf9e357.png",
      "https://i.ibb.co/ZzQYvMTY/ee5be85c-87f1-4ea9-b568-4c4e55ff2955.png"
    ],
    photoLabels: ["Home", "My Bookings", "Blogs"],
    description:
      "Doc Talk is designed to simplify the process of finding doctors, viewing their details, and booking appointments—all powered by dynamic JSON data. Users can view a list of available doctors, check details for each doctor, and book appointments if slots are available. The app prevents double-booking, allows users to view their bookings with insightful charts, and provides the ability to cancel bookings easily.",
    techStack: [
      { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "DaisyUI", icon: <SiDaisyui className="text-[#f9b779]" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-red-600" />,
      },
    ],
    links: [
      {
        live: "https://doc-talk-nk.netlify.app/",
        githubRepo: "https://github.com/noboKumar/Doc-Talk",
      },
    ],
    features: [
      " Browse doctors from live JSON data",
      "Book available doctors (prevents double-booking)",
      "Detailed doctor information view",
      " See all your bookings with visual charts",
      "Cancel your bookings anytime",
      "Clean, modern, and responsive UI",
    ],
  },
];
