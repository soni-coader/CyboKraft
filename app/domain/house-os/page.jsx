"use client";

import Domain from "@/components/Reusable/Domain";



function HouseOs() {

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

  const houseOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "House OS",
      pera:
        "AI-powered automation, emotional intelligence, and real-time monitoring—House OS gives you complete command over your home’s safety, comfort, wellness, and daily routines.",
    },

    sections: {
      hero: {
        heading: " Perfect Control With House OS",
        paragraph:
          "Control Your Entire Home Perfectly With House OS — AI-powered automation, emotional intelligence, and real-time monitoring. House OS gives you complete command over your home’s safety, comfort, wellness, and daily routines.",
        image: {
          src: "/assets/images/th-1/content-image-1.jpg",
          alt: "House OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "smart-home-intel" },
            title: "Home Intelligence",
            text:
              "House OS continuously learns from your family’s behavior, habits, and emotional patterns to deliver personalized experiences.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "predictive-automation" },
            title: "Predictive Home  ",
            text:
              "The system predicts needs before you act—adjusting lights, optimizing energy, or identifying unusual activity.",
          },
        ],
      },

      industry: {
        heading: "Widely Used Throughout the Home for Daily Life",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS usage", width: 529, height: 500 },
        items: [
          
          {
            title: "1. Household Safety & Protection",
            text:
              "House OS uses advanced AI to secure your home from any threat. It detects intruders, leaks, smoke, unusual movement and reacts instantly. Includes auto-locking doors, triggering alarms, contacting emergency services, capturing evidence.",
          },
          {
            title: "2. Family Wellness & Health Intelligence",
            text:
              "Parents' health data is continuously monitored using wearables and environmental sensors. House OS provides health alerts, medication reminders, sleep & stress analysis, and personalized wellness insights.",
          },
          {
            title: "3. Children’s Learning & Growth",
            text:
              "House OS assists with homework tracking, focus and screen-time analysis, strength/weakness detection, and daily academic performance reports.",
          },
        ],
      },

      capabilities: {
        heading: "AI-powered  household tasks",
        paragraph:
          "As your family’s routines evolve, House OS adapts automatically—streamlining home management like never before. Whether monitoring safety, managing health, or supporting learning, the system adjusts its intelligence in real-time to match your lifestyle.",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "automated-alerts" },
            title: "Home Safety",
            text: "Fast automated responses for security incidents and environmental hazards.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "task-management" },
            title: "Task Management",
            text: "Schedules, reminders and automated routines that reduce family friction and save time.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/th-1/funfact-image.jpg", alt: "house os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Flexible & Adaptive Home Automation",
      paragraph:
        "This flexibility ensures your home always remains a smart, responsive, living ecosystem — evolving as your family's routines change.",
      stats: [
        { number: 98, suffix: "%", label: "Automated home safety alerts & responses" },
        { number: 87, suffix: "%", label: "Improvement in routine family task management" },
      ],
    },

    faq: {
      heading: "House OS – Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is House OS?",
          answer:
            "House OS is an AI-powered Home Operating System that transforms your home into a smart, self-aware, and automated ecosystem. It connects all devices, routines, emotions, and family needs into one intelligent platform that observes, learns, predicts, and optimizes your daily life.",
        },
        {
          question: "How is House OS different from traditional smart home systems?",
          answer:
            "Unlike basic smart home setups, House OS doesn’t just control devices—it understands people. It analyzes family behaviors, emotions, routines, health patterns, academic progress and household requirements to become a complete family intelligence system, not just automation.",
        },
        {
          question: "How does Remote Home Monitoring work?",
          answer:
            "House OS connects cameras, sensors, and devices into one interface. It gives real-time updates and detects threats like intruders, smoke/fire, gas leaks, water leakage, and unusual movement. The system can also automatically lock doors, trigger alarms, contact emergency services and activate backup power.",
        },
        {
          question: "Does House OS work when I’m traveling?",
          answer:
            "Yes. In Travel Mode, House OS acts as a virtual security guard: it simulates human presence, controls lights/curtains, monitors parcel deliveries, and sends daily home safety reports.",
        },
        {
          question: "How does House OS track parents’ health?",
          answer:
            "It uses wearable devices and environmental sensors to monitor heart rate, sleep patterns, stress levels, oxygen levels and (where supported) blood pressure. House OS provides medication reminders, doctor alerts, lifestyle improvements, and emergency notifications.",
        },
      ],
    },
  };


  return (
    <>
      <Domain data={houseOSData} />

    </>
  );
}

export default HouseOs;
