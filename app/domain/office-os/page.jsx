"use client";

import Domain from "@/components/Reusable/Domain";



function OfficeOs() {



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
          src: "/assets/images/officeos/i1.webp",
          alt: "Office OS hero image",
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
        image: { src: "/assets/images/officeos/i2.webp", alt: "office OS usage", width: 529, height: 500 },
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
        image: { src: "/assets/images/officeos/i4.webp", alt: "office OS capabilities", width: 526, height: 450 },
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
      image: { src: "/assets/images/officeos/i3.webp", alt: "office os funfact", width: 721, height: 784 },
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
