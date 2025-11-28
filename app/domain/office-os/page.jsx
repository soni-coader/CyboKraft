"use client";

import Domain from "@/components/Reusable/Domain";



function OfficeOs() {

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

  const officeOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Office OS",
      pera:
        "AI-powered workflow intelligence, productivity analytics, and real-time monitoring—Office OS gives complete command over your workplace’s efficiency, coordination, wellness, and daily routines.",
    },

    sections: {
      hero: {
        heading: " Perfect Control With Office OS",
        paragraph:
          "Control Your Entire Workplace Perfectly With Office OS — AI-powered workflow automation, workforce analytics, and monitoring. Office OS gives complete command over your organization’s efficiency, coordination, wellness, and daily routines.",
        image: {
          src: "/assets/images/th-1/content-image-1.jpg",
          alt: "House OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "office-intel" },
            title: "Workforce Intelligence",
            text:
              "Office OS continuously learns from employees’ work styles, habits, and behavioral patterns to deliver personalized workflow support.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "predictive-work" },
            title: "Predictive Office",
            text:
              "The system predicts workflow needs before they arise—adjusting tasks, optimizing schedules, and identifying performance barriers.",
          },
        ],
      },

      industry: {
        heading: "Widely Used Throughout Offices For Everyday Work Life",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS usage", width: 529, height: 500 },
        items: [
          {
            title: "1. Workplace Safety & Protection",
            text:
              "Office OS uses advanced AI to secure your workplace from any threat. It detects intruders, hazards, fire, unusual activity and notifies. Includes auto-locking zones, triggering alarms, contacting emergency services, logging evidence.",
          },
          {
            title: "2. Employee Wellness & Health Intelligence",
            text:
              "Employees' health data is continuously monitored using wearables and workspace sensors. Office OS provides health alerts, medication reminders, stress & burnout analysis, and personalized wellness insights.",
          },
          {
            title: "3. Workforce Learning & Growth",
            text:
              "Office OS assists with task tracking, focus and screen-time analysis, strength/weakness detection, and daily performance improvement reports.",
          },
        ],
      },

      capabilities: {
        heading: "AI-powered  workplace tasks",
        paragraph:
          "As teams’ routines evolve, Office OS adapts automatically—streamlining workflow management like never before again. Whether monitoring efficiency, managing health, or supporting tasks, the system adjusts its intelligence in real-time to match workplace needs.",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "automated-alerts" },
            title: "Office Safety",
            text: "Fast automated responses for security incidents and workspace hazards.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "task-management" },
            title: "Task Management",
            text: "Schedules, reminders and automated routines that reduce employee workload and save time.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/th-1/funfact-image.jpg", alt: "house os funfact", width: 721, height: 784 },
      video: "",
      heading: " Flexible & Adaptive Workplace Automation",
      paragraph:
        "This flexibility ensures your workplace always remains a smart, responsive, living ecosystem — evolving as your teams’ routines change.",
      stats: [
        { number: 89, suffix: "%", label: "Automated workplace manual tasks & responses" },
        { number: 74, suffix: "%", label: "Improvement in routine team workflow visibility" },
      ],
    },

    faq: {
      heading: "Office OS – Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is Office OS?",
          answer:
            "Office OS is an AI-powered Workplace Operating System that transforms your office into a smart, self-aware, and automated ecosystem. It connects all workflows, routines, performance data, and employee needs into one intelligent platform that observes, learns, predicts, and optimizes daily work operations.",
        },
        {
          question: "How is Office OS different from traditional office systems?",
          answer:
            "Unlike basic digital tools, Office OS doesn’t just organize tasks—it understands how teams work. It analyzes employee behaviors, productivity patterns, routines, performance levels and workflow requirements to become a complete workplace intelligence system, not just automation.",
        },
        {
          question: "How does Remote Office Monitoring work?",
          answer:
            "Office OS connects cameras, sensors, and devices into one interface. It gives real-time updates and detects threats like intruders, hazards, fire events, water leakage, and unusual movement patterns. The system can also automatically lock zones, trigger alarms, contact emergency services and activate backup power.",
        },
        {
          question: "Does Office OS work when I’m traveling?",
          answer:
            "Yes. In Remote Mode, Office OS acts as a virtual workplace guardian: it simulates an active office, controls lighting, monitors deliveries, and sends daily workplace safety reports.",
        },
        {
          question: "How does Office OS track employees’ health?",
          answer:
            "It uses wearable devices and environmental sensors to monitor heart rate, sleep patterns, stress levels, oxygen levels and (where supported) blood pressure. Office OS provides medication reminders, doctor alerts, lifestyle improvements, and emergency notifications.",
        },
      ],
    },
  };

  return (
    <>
      <Domain data={officeOSData} />

    </>
  );
}

export default OfficeOs;
