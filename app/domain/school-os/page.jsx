"use client";

import Domain from "@/components/Reusable/Domain";

 

function SchoolOs() {

 

  
  const schoolOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "School OS",
      pera:
        "AI-powered academic insights, behavioral analytics, and real-time monitoring—School OS gives complete command over the school's safety, learning, wellness, and daily routines.",
    },

    sections: {
      hero: {
        heading: " Perfect Control With School OS",
        paragraph:
          "Control Your Entire School Perfectly With School OS — AI-powered academic insights, behavioral analytics, and monitoring. School OS gives complete command over the school's safety, learning, wellness, and daily routines.",
        image: {
          src: "/assets/images/schoolos/i1.webp",
          alt: "School OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "student-intel" },
            title: "Student Intelligence",
            text:
              "School OS continuously learns from students’ learning styles, habits, and classroom behaviors to deliver personalized instruction.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "predictive-education" },
            title: "Predictive School",
            text:
              "The system predicts learning needs before they arise—adjusting lessons, personalizing pacing, and flagging struggles.",
          },
        ],
      },

      industry: {
        heading: "Widely Used Throughout Schools For Everyday Learning Life",
        image: { src: "/assets/images/schoolos/i2.webp", alt: "school OS usage", width: 529, height: 500 },
        items: [
          {
            title: "1. Institutional Safety & Protection",
            text:
              "School OS uses advanced AI to secure your campus from any threat. It detects intruders, vandalism, fire, unusual movement and notifies. Includes auto-locking gates, triggering alarms, contacting emergency services, logging evidence.",
          },
          {
            title: "2. Student Wellness & Health Intelligence",
            text:
              "Students' health data is continuously monitored using wearables and classroom sensors. School OS provides health alerts, medication reminders, sleep & stress analysis, and personalized wellness insights.",
          },
          {
            title: "3. Students’ Learning & Growth",
            text:
              "School OS assists with homework tracking, focus and screen-time analysis, strength/weakness detection, and daily academic performance reports.",
          },
        ],
      },

      capabilities: {
        heading: "AI-powered  educational tasks",
        paragraph:
          "As students’ routines evolve, School OS adapts automatically—streamlining classroom management like never before again. Whether monitoring safety, managing health, or supporting learning, the system adjusts its intelligence in real-time to match school needs.",
        image: { src: "/assets/images/schoolos/i4.webp", alt: "school OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "automated-alerts" },
            title: "School Safety",
            text: "Fast automated responses for security incidents and campus hazards.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "task-management" },
            title: "Task Management",
            text: "Schedules, reminders and automated routines that reduce teacher workload and save time.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/schoolos/i3.webp", alt: "school os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Flexible & Adaptive School Automation",
      paragraph:
        "This flexibility ensures your school environment remains a smart, responsive, living ecosystem — evolving as your students' routines change.",
      stats: [
        { number: 93, suffix: "%", label: "Automated school safety alerts & responses" },
        { number: 78, suffix: "%", label: "Improvement in routine school task management" },
      ],
    },

    faq: {
      heading: "School OS – Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is School OS?",
          answer:
            "School OS is an AI-powered Education Operating System that transforms your school into a smart, self-aware, and automated ecosystem. It connects all devices, routines, assessments, and student needs into one intelligent platform that observes, learns, predicts, and optimizes daily school learning.",
        },
        {
          question: "How is School OS different from traditional school management systems?",
          answer:
            "Unlike basic digital tools, School OS doesn’t just control devices—it understands students' needs. It analyzes student behaviors, engagement, routines, learning patterns, assessment progress and classroom requirements to become a complete school intelligence system, not just automation.",
        },
        {
          question: "How does Remote School Monitoring work?",
          answer:
            "School OS connects cameras, sensors, and devices into one interface. It gives real-time updates and detects threats like intruders, vandalism, fire, water leakage, and unusual movement patterns. The system can also automatically lock gates, trigger alarms, contact emergency services and activate backup power.",
        },
        {
          question: "Does School OS work when I’m traveling?",
          answer:
            "Yes. In Remote Mode, School OS acts as a virtual campus guardian: it simulates occupied classrooms, controls lighting, monitors real-time deliveries, and sends daily school safety reports.",
        },
        {
          question: "How does School OS track students’ health?",
          answer:
            "It uses wearable devices and environmental sensors to monitor heart rate, sleep patterns, stress levels, oxygen levels and (where supported) blood pressure. School OS provides medication reminders, doctor alerts, lifestyle improvements, and emergency notifications.",
        },
      ],
    },
  };

  return (
    <>
      <Domain data={schoolOSData} />
    </>
  );
}

export default SchoolOs;
