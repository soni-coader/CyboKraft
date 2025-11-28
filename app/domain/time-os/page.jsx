"use client";

import Domain from "@/components/Reusable/Domain";



function TimeOs() {

 
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
          src: "/assets/images/timeos/i1.webp",
          alt: "time OS hero image",
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
        image: { src: "/assets/images/timeos/i2.webp", alt: "time OS usage", width: 529, height: 500 },
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
        image: { src: "/assets/images/timeos/i4.webp", alt: "time OS capabilities", width: 526, height: 450 },
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
      image: { src: "/assets/images/timeos/i3.webp", alt: "time os funfact", width: 721, height: 784 },
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
