import React from "react";
import { FaReact, FaKey } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiDaisyui,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiShadcnui,
  SiFramer,
  SiNodedotjs,
  SiGooglegemini,
  SiPostgresql,
  SiPrisma,
  SiAuth0,
  SiSwiper,
} from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { SiBetterauth } from "react-icons/si";
import { SiAxios, SiReactquery, SiReacthookform } from "react-icons/si";
import { Project } from "./types";

import skillBridgeCover from "../assets/project-cover/skillBridge.jpg";
import gardenNestCover from "../assets/project-cover/gardenNest.jpg";
import devShowCaseCover from "../assets/project-cover/devShowCase.jpg";
import skillSparkCover from "../assets/project-cover/skillspark.jpg";
import travoaCover from "../assets/project-cover/Travoa.jpg";

export const projectData: Project[] = [
  {
    title: "SkillBridge",
    photo: skillBridgeCover,
    description:
      "SkillBridge is a premium full-stack tutoring platform that connects students with expert tutors for personalized 1-on-1 learning sessions. The platform provides role-based experiences for Students, Tutors, and Admins, featuring secure Stripe payments, smart tutor discovery, session booking, analytics dashboards, and a modern responsive UI built with Next.js and TypeScript.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-base-content" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "shadcn/ui", icon: <SiShadcnui className="text-base-content" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-[#F107A3]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-[#5a67d8]" /> },
      { name: "JWT Auth", icon: <FaKey className="text-[#d97706]" /> },
      { name: "Stripe", icon: <FaStripe className="text-[#635BFF]" /> },
      {
        name: "TanStack Query",
        icon: <SiReactquery className="text-[#FF4154]" />,
      },
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
    title: "Garden Nest",
    photo: gardenNestCover,
    description:
      "Garden Nest is a full-stack gardening community platform where users can share gardening tips, discover experienced gardeners, and engage with the gardening community. It features secure authentication, complete CRUD operations, dynamic content filtering, and a fully responsive user experience built with React and the MERN stack.",

    techStack: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "DaisyUI", icon: <SiDaisyui className="text-[#5A0EF8]" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      {
        name: "Firebase Auth",
        icon: <SiFirebase className="text-[#FFCA28]" />,
      },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-[#CA4245]" />,
      },
      { name: "Swiper.js", icon: <SiSwiper className="text-[#6332F6]" /> },
    ],

    links: [
      {
        live: "https://garden-nest.netlify.app",
        githubRepo: "https://github.com/noboKumar/Garden-Nest-Client",
      },
    ],

    features: [
      "Built a full-stack gardening community platform with complete CRUD functionality for creating, updating, and managing gardening tips.",
      "Implemented Firebase authentication with Email/Password and Google Sign-In, protected routes, and personalized user experiences.",
      "Developed dynamic features including active gardener profiles, difficulty-based filtering, trending tips through a like system, and responsive Swiper-powered event banners.",
      "Designed a fully responsive interface with dark/light mode and integrated MongoDB-backed REST APIs for seamless data management.",
    ],
  },
  {
    title: "DevShowcase - Developer Project Showcase Platform",
    photo: devShowCaseCover,
    description:
      "DevShowcase is a modern developer project showcase platform built with Next.js App Router and TypeScript. It enables developers to professionally present their projects, explore community submissions, and manage project listings through a clean, responsive, and user-friendly interface.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs className="text-base-content" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      },
      { name: "shadcn/ui", icon: <SiShadcnui className="text-base-content" /> },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-[#336791]" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="text-base-content" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-base-content" />,
      },
      {
        name: "Better Auth",
        icon: <SiBetterauth className="text-base-content" />,
      },
    ],
    links: [
      {
        live: "https://dev-show-case-phi.vercel.app/",
        githubRepo: "https://github.com/noboKumar/DevShowcase-Client",
      },
    ],
    features: [
      "Explore featured developer projects with search and advanced filtering by category and technology stack",
      "Dynamic project details pages built using Next.js App Router with related project recommendations",
      "Add new projects through a responsive submission form with validation and success feedback",
      "Manage submitted projects with instant deletion and an intuitive dashboard layout",
      "Fully responsive design with Light/Dark mode support for an enhanced user experience across devices",
      "Built with reusable components, modern architecture, and a protected route-ready structure for future scalability",
      "Interactive landing page featuring testimonials, community statistics, featured projects, and clear call-to-action sections",
      "Smooth UI interactions with hover effects, transitions, and consistent design patterns using shadcn/ui",
    ],
  },
  {
    title: "Skill Spark",
    photo: skillSparkCover,
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
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
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
        live: "https://skill-sparkx.netlify.app",
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
    title: "TraVoa - Hotel Booking Platform",
    photo: travoaCover,
    description:
      "TraVoa is a modern, full-featured Hotel Booking Platform built using the MERN stack with secure authentication and dynamic features. It offers users a seamless experience for discovering and booking hotel rooms, submitting reviews, and managing their bookings. The platform is mobile-responsive, secure.",
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
      { name: "Express.js", icon: <SiExpress className="text-base-content" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
    links: [
      {
        live: "https://travoa.netlify.app",
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
];
