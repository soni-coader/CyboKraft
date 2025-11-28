"use client";

import Domain from "@/components/Reusable/Domain";



function InternetOs() {

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

  const internetOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Internet OS",
      pera:
        "Internet OS is the core digital intelligence engine of the CYBOKARF ecosystem—enhancing web performance, infrastructure stability, and AI-driven reliability for applications of any scale.",
    },

    sections: {
      hero: {
        heading: " Perfect Control With Internet OS",
        paragraph:
          "Control Any Website Perfectly With Internet OS — the core digital intelligence engine of the CYBOKARF ecosystem, enhancing web performance, backend stability, and AI-powered reliability.",
        image: {
          src: "/assets/images/th-1/content-image-1.jpg",
          alt: "House OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "web-performance" },
            title: "Web Performance",
            text:
              "Internet OS continuously optimizes server speed, caching, and delivery to ensure instant load times and high availability worldwide.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "digital-infrastructure" },
            title: "AI Infrastructure",
            text:
              "The system automates backend operations, manages content delivery networks, and maintains reliability for platforms, apps, and networks.",
          },
        ],
      },

      industry: {
        heading: "Widely used throughout the digital ecosystem",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS usage", width: 529, height: 500 },
        items: [
          {
            title: "1. Web Performance Optimization",
            text:
              "Boosts server speed and uptime, optimizes data flow for high-traffic websites, and ensures instant load times across global regions.",
          },
          {
            title: "2. AI-Based Digital Infrastructure",
            text:
              "Automates backend operations and security, manages content delivery intelligently, and maintains platform reliability under load.",
          },
          {
            title: "3. Web Exploration & Tools",
            text:
              "Provides website performance insights, traffic flow analytics, and optimization toolsets for real-time operational improvements.",
          },
        ],
      },

      capabilities: {
        heading: "AI systems for digital operations",
        paragraph:
          "As web traffic and infrastructure demands grow, Internet OS adapts automatically—adjusting server configs, caching strategies, and routing to maintain speed, stability, and security.",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "real-time-web-analysis" },
            title: "Real-Time Web Analysis",
            text: "AI tracks performance, traffic patterns, and user behavior instantly to surface actionable optimization opportunities.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "automation-engine" },
            title: "Automation Engine",
            text: "Automates security, scaling, cache control, API routing, and infrastructure tasks to reduce manual backend operations.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/th-1/funfact-image.jpg", alt: "house os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Fast, Stable & Scalable Web Optimization",
      paragraph:
        "Internet OS processes massive volumes of web activity, traffic analytics, and infrastructure metrics in real time—automating optimization and keeping your digital ecosystem running smoothly.",
      stats: [
        { number: 92, suffix: "%", label: "Improvement in website load performance" },
        { number: 75, suffix: "%", label: "Reduction in manual backend operations" },
      ],
    },

    faq: {
      heading: "Internet OS — Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is Internet OS?",
          answer:
            "Internet OS is an AI-powered digital infrastructure engine that improves web performance, automates backend operations, and enhances reliability for businesses, platforms, and networks.",
        },
        {
          question: "How does Internet OS improve website performance?",
          answer:
            "It optimizes server speed, stabilizes uptime, improves load balancing, and accelerates data flow to make websites faster and more resilient.",
        },
        {
          question: "Is Internet OS suitable for high-traffic websites?",
          answer:
            "Yes. It is designed for large platforms, SaaS apps, enterprise websites, and global applications that handle heavy user loads and require millisecond-level performance.",
        },
        {
          question: "What backend tasks can Internet OS automate?",
          answer:
            "Internet OS automates server scaling, security monitoring, content delivery, cache control, database optimization, and API routing without manual intervention.",
        },
        {
          question: "How does the AI-based digital infrastructure system work?",
          answer:
            "It continuously observes server behavior, user traffic, and performance metrics to auto-optimize configurations, predict issues, and maintain the web environment automatically.",
        },
      ],
    },
  };



  return (
    <>
      <Domain data={internetOSData} />

    </>
  );
}

export default InternetOs;
