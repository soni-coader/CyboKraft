"use client";

import Domain from "@/components/Reusable/Domain";



function TimeOs() {

  const serviceData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Data Analytics",
       pera: "AI data analysis, also known as artificial intelligence data analysis or AI-driven data analysis, refers to the process of using artificial intelligence and machine learning techniques.",
    },

    sections: {
      hero: {
        heading: "Analyze any data perfectly with AI",
        paragraph:
          "AI data analysis, also known as artificial intelligence data analysis or AI-driven data analysis, refers to the process of using artificial intelligence and machine learning techniques.",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "content-image-1", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "trending-up-icon" },
            title: "Data Preprocessing",
            text: "AI data analysis can begin, and raw data must be collected, cleaned.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "cog-icon" },
            title: "Predictive Analytics",
            text: "Algorithms use historical data to forecast future trends, behaviors.",
          },
        ],
      },

      industry: {
        heading: "Widely used throughout the industry for work",
        image: { src: "/assets/images/th-1/content-image-4.jpg", alt: "content-image-4", width: 529, height: 500 },
        items: [
          {
            title: "1. Businesses and Corporations:",
            text:
              "Businesses use AI data analysis to gain competitive advantages, optimize operations, & make data-driven decisions. This includes industries such as retail, finance, manufacturing.",
          },
          {
            title: "2. Data Scientists and Analysts:",
            text:
              "Data scientists and analysts leverage AI tools and algorithms to extract actionable insights from large datasets. They alsouse AI for predictive modeling, anomaly detection, and data visualization.",
          },
          {
            title: "3. Government and Public Sector:",
            text:
              "Government agencies use AI data analysis for various purposes, including public policy development, law enforcement, urban planning, and disaster.",
          },
        ],
      },

      capabilities: {
        heading: "Manage large amounts of data",
        paragraph:
          "AI data analysis also can handle vast amounts of data, making it suitable for big data environments. Data analysis can automate many aspects of data processing and analysis",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "content-image-1-2" , width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "icon-orange-clock" },
            title: "Real-Time Analysis",
            text: "Some AI data analysis solutions are design to process making instant.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "icon-orange-cursor-click" },
            title: "Automation",
            text: "his leads to increased efficiency and quicker decision-making.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/th-1/funfact-image.jpg", alt: "funfact-image", width: 721, height: 784 },
      heading: "AI-powered that streamline tasks",
      paragraph:
        "As your business grows or your AI SaaS needs change, you can easily adjust your subscription level to match those needs. This flexibility ensures that AI remains an asset.",
      stats: [
        { number: 92, suffix: "%", label: "Customer service inquiries" },
        { number: 75, suffix: "%", label: "Using financial institutions" },
      ],
    },

    faq: {
      heading: "Our experts are able to answer all your questions",
      items: [
        {
          question: "What exactly is CYBOKARFT?",
          answer:
            "CYBOKARFT is a metaverse-based ecosystem of AI Operating Systems that connects home, work, business, education, finance, telecom, and space intelligence under one unified platform.",
        },
        {
          question: "How does Tesla’s 3-6-9 rule inspire CYBOKARFT?",
          answer:
            "The entire system architecture—nine planets, energy flow, domain logic, and metaverse mechanics—is built using Nikola Tesla’s 3-6-9 numerical principles.",
        },
        {
          question: "Who is CYBOKARFT designed for?",
          answer:
            "Professionals, entrepreneurs, enterprises, tech-savvy adults, governments, and global high-value markets.",
        },
        {
          question: "Is the AI Calendar really patented?",
          answer:
            "Yes. The client has filed patent documentation, registered the trademark, and has full copyright ownership.",
        },
        {
          question: "Is CYBOKARFT suitable for global markets?",
          answer:
            "Absolutely. The platform is designed for U.S., U.K., and UAE audiences with world-class quality and global UI/UX standards.",
        },
        {
          question: "How many operating systems are there?",
          answer:
            "There are nine core OS systems, each represented as a planet within the CYBOKARFT metaverse.",
        },
      ],
    }
    ,

 
  };

  const timeOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Time OS",
      pera:
        "Time OS is a next-generation AI time-engineering system inspired by Nikola Tesla’s 3-6-9 Principle, designed to reinvent how humans, businesses, and machines understand and manage time.",
    },

    sections: {
      hero: {
        heading: " Master your time perfectly with Time OS",
        paragraph:
          "Master your time perfectly with Time OS — a next-generation AI time-engineering system inspired by Tesla’s 3-6-9 principle that reinvents how people and organizations manage time.",
        image: {
          src: "/assets/images/th-1/content-image-1.jpg",
          alt: "House OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "ai-calendar" },
            title: "AI Calendar (Patent Filed)",
            text:
              "World’s first calendar engineered using Tesla’s 3-6-9 principle to fix centuries-old time inefficiencies with predictive scheduling.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "predictive-time" },
            title: "Predictive Time Intelligence",
            text:
              "AI analyzes patterns to forecast productivity cycles, peak hours, and scheduling needs to optimize every hour with precision.",
          },
        ],
      },

      industry: {
        heading: "Widely used throughout industries",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS usage", width: 529, height: 500 },
        items: [
          {
            title: "Time Exploration",
            text:
              "AI-based insights for personal routines, workforce time synchronization, and enterprise-level automation across organizations.",
          },
          {
            title: "1. Businesses & Corporations",
            text:
              "Organizations use Time OS to gain efficiency advantages, optimize workforce performance, reduce delays, and automate daily time-based tasks.",
          },
          {
            title: "2. Developers & SaaS Platforms",
            text:
              "Developers use Time OS APIs to integrate predictive calendars, time-tracking, and automated workflows across mobile and web systems.",
          },
          {
            title: "3. Government & Public Sector",
            text:
              "Government agencies use Time OS for public workflows, city management, transportation timing, planning systems, and large-scale synchronization.",
          },
        ],
      },

      capabilities: {
        heading: "AI-powered system that streamlines every second",
        paragraph:
          "As operations scale, Time OS adjusts automatically—synchronizing people, tasks, workflows, and timelines with mathematical accuracy. Whether individual or enterprise, Time OS makes time your optimized asset.",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "timeflow-analysis" },
            title: "Real-Time Timeflow Analysis",
            text: "Instant understanding of workloads, delays, patterns, and upcoming time requirements.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "automation-engine" },
            title: "Automation Engine",
            text: "Automates scheduling, reminders, workforce alignment, daily routines, and business operations.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/th-1/funfact-image.jpg", alt: "house os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Manage unlimited time-based data effortlessly",
      paragraph:
        "Time OS processes massive amounts of time logs, schedules, workforce timelines, productivity patterns, and automation triggers using an advanced Tesla-based model.",
      stats: [
        { number: 92, suffix: "%", label: "Improvement in scheduling efficiency for enterprise teams" },
        { number: 75, suffix: "%", label: "Reduction in timing conflicts and workflow delays" },
      ],
    },

    faq: {
      heading: "TIME OS – Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is Time OS?",
          answer:
            "Time OS is an AI-powered time-management operating system that uses Tesla’s 3•6•9 energy principle to optimize schedules, workflows, and productivity for individuals and enterprises.",
        },
        {
          question: "How is Time OS different from a normal calendar?",
          answer:
            "Traditional calendars only track dates. Time OS predicts, optimizes, and auto-adjusts time based on intelligence, energy patterns, and real-world behavior.",
        },
        {
          question: "What is the Tesla 3•6•9 principle used for?",
          answer:
            "It structures time into natural energy cycles—helping people and businesses schedule tasks during peak performance windows for better outcomes.",
        },
        {
          question: "Does Time OS support automatic scheduling?",
          answer:
            "Yes. The AI automatically arranges tasks, meetings, and routines based on energy levels, priorities, and productivity patterns.",
        },
        {
          question: "Can Time OS reorganize my day automatically?",
          answer:
            "Yes. If a task is delayed or skipped, Time OS auto-reshuffles your entire day to maintain flow and preserve efficiency.",
        },
      ],
    },
  };



  return (
    <>
      <Domain data={timeOSData} />

    </>
  );
}

export default TimeOs;
