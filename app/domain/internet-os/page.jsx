"use client";

import Domain from "@/components/Reusable/Domain";



function InternetOs() {

 
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
          src: "/assets/images/internetos/i1.webp",
          alt: "internet OS hero image",
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
        image: { src: "/assets/images/internetos/i2.webp", alt: "internet OS usage", width: 529, height: 500 },
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
        image: { src: "/assets/images/internetos/i4.webp", alt: "internet OS capabilities", width: 526, height: 450 },
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
      image: { src: "/assets/images/internetos/i3.webp", alt: "internet os funfact", width: 721, height: 784 },
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
