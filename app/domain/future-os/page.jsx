"use client";

import Domain from "@/components/Reusable/Domain";



function FutureOs() {

 
  const futureOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Future OS",
      pera:
        "Future OS is the world’s most advanced foresight and automation engine, powered by patent-backed technologies and long-term predictive intelligence.",
    },

    sections: {
      hero: {
        heading: " Navigate The Future With Future OS",
        paragraph:
          "Navigate the future perfectly with Future OS — the world’s most advanced foresight and automation engine, powered by patent-backed technologies and predictive intelligence.",
        image: {
          src: "/assets/images/futureos/i1.webp",
          alt: "future OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "foresight-intel" },
            title: "Foresight Intelligence",
            text:
              "Future OS continuously models long-term patterns, cycles, and probabilities to deliver anticipatory insights and strategic clarity.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "predictive-time" },
            title: "Predictive Time",
            text:
              "The system predicts future shifts before they occur—optimizing schedules, scenarios, and resource allocation across timelines.",
          },
        ],
      },

      industry: {
        heading: "Widely used throughout next-generation industries",
        image: { src: "/assets/images/futureos/i2.webp", alt: "future OS usage", width: 529, height: 500 },
        items: [
          {
            title: "1. Patent-Backed AI Calendar Technology",
            text:
              "Reinvents traditional calendar models, offers advanced time navigation and future planning, and builds predictive scheduling on scientific optimization and frameworks.",
          },
          {
            title: "2. Tesla 3-6-9 Rule Integration",
            text:
              "Structured using the laws of frequency, energy and vibration. It creates greater accuracy, harmony, and natural flow while aligning decisions with universal mathematical patterns.",
          },
          {
            title: "3. Future Exploration & Dashboards",
            text:
              "Provides predictive planning insights, life-pattern forecasting, and a time-navigation dashboard for long-term decision-making and scenario simulation.",
          },
        ],
      },

      capabilities: {
        heading: "AI-powered foresight and automation",
        paragraph:
          "As long-term planning needs grow, Future OS adapts automatically—updating predictions, timelines, and foresight models in real time. It provides continuous situational awareness of upcoming opportunities, risks, and systemic shifts.",
        image: { src: "/assets/images/futureos/i4.webp", alt: "future OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "real-time-foresight" },
            title: "Real-Time Foresight",
            text: "AI analyzes complex probabilities and future scenarios instantly to surface high-confidence forecasts.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "automation-engine" },
            title: "Automation Engine",
            text: "Automates long-term planning, predictive scheduling, and strategic navigation across multiple time horizons.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/futureos/i3.webp", alt: "future os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Vast & Scalable Future Intelligence",
      paragraph:
        "Future OS processes years of predictive data, time cycles, life patterns, and strategic forecasts in real time—helping users and organizations understand tomorrow before it arrives.",
      stats: [
        { number: 92, suffix: "%", label: "Improvement in long-term strategic accuracy" },
        { number: 75, suffix: "%", label: "Increase in proactive decision-making efficiency" },
      ],
    },

    faq: {
      heading: "Future OS — Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is Future OS?",
          answer:
            "Future OS is an advanced AI operating system built with patented time-navigation technology and foresight engines designed to predict obstacles, opportunities, and future patterns for individuals and organizations.",
        },
        {
          question: "How does the patented AI Calendar technology work?",
          answer:
            "It modernizes traditional calendar systems using predictive algorithms, futuristic planning logic, and time-optimization principles to improve daily, monthly, and long-term scheduling.",
        },
        {
          question: "What is the Tesla 3-6-9 integration in Future OS?",
          answer:
            "Future OS uses the universal laws of frequency, energy, and vibration to structure planning, scheduling, and time-navigation features with greater harmony and scientific precision.",
        },
        {
          question: "What are foresight tools in Future OS?",
          answer:
            "These tools use AI to analyze data, detect patterns, and forecast potential risks, opportunities, and life or business trends—helping users make proactive, future-proof decisions.",
        },
        {
          question: "Who can use Future OS?",
          answer:
            "Future OS is built for enterprises, researchers, strategists, entrepreneurs, and anyone seeking enhanced clarity and predictive intelligence for long-term planning and decision-making.",
        },
      ],
    },
  };


  return (
    <>
      <Domain data={futureOSData} />

    </>
  );
}

export default FutureOs;
