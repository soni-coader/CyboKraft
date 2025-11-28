"use client";

import Domain from "@/components/Reusable/Domain";



function TelecomOs() {

 
  const telecomOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Telecom OS",
      pera:
        "Telecom OS is a next-generation AI operating system built for carriers, network operators, and digital service providers—delivering carrier-grade automation, network intelligence, and mission-critical reliability.",
    },

    sections: {
      hero: {
        heading: " Carrier-Grade Networking &  Connectivity",
        paragraph:
          "Telecom OS is a next-generation AI operating system built for carriers, network operators, and digital service providers. It delivers carrier-grade automation, network intelligence, and mission-critical reliability for modern telecom environments.",
        image: {
          src: "/assets/images/telecomos/i1.webp",
          alt: "telecom OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "network-intel" },
            title: "Network Analytics",
            text:
              "Telecom OS processes network telemetry, traffic patterns, and service metrics with unmatched accuracy using advanced artificial intelligence.",
          },

          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "routing-intel" },
            title: "Routing & Orchestration",
            text:
              "Predicts traffic routes, monitors congestion, and optimizes routing decisions. Essential for capacity planning, outage prevention, and QoS management.",
          },
        ],
      },

      industry: {
        heading: "Widely Used Across The Telecom Ecosystem",
        image: { src: "/assets/images/telecomos/i2.webp", alt: "telecom OS usage", width: 529, height: 500 },
        items: [
          {
            title: "1. Network Performance Optimization",
            text:
              "Used to tune throughput and latency, optimize spectrum usage, and ensure consistent service quality across urban and rural regions.",
          },
          {
            title: "2. AI-Based Network Automation",
            text:
              "Automates fault resolution, traffic steering, and lifecycle management while managing security, capacity, and edge resources intelligently.",
          },
          {
            title: "3. Telecom Exploration & Monitoring",
            text:
              "Provides network health dashboards, traffic flow analytics, and diagnostic toolsets for real-time operational improvements.",
          },
        ],
      },

      capabilities: {
        heading: "AI Streamlines Telecom Operations",
        paragraph:
          "As network demands increase, Telecom OS scales effortlessly—automating operational tasks while maintaining precision and carrier-grade SLAs. Telecom OS ensures that every network stays performant, secure, and future-ready.",
        image: { src: "/assets/images/telecomos/i4.webp", alt: "telecom OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "uptime-accuracy" },
            title: "Uptime Assurance",
            text: "99% Network uptime and automatic incident mitigation.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "prediction-speed" },
            title: "Predictive Routing",
            text: "95% Faster congestion prediction and traffic rerouting.",
          },

        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/telecomos/i3.webp", alt: "telecom os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Manage Massive Volumes Of Network Data",
      paragraph:
        "Telecom networks generate massive datasets—from base station telemetry to signaling logs. Telecom OS ingests and analyzes everything in real time to keep networks stable and performant.",
      stats: [
        { number: 99, suffix: "%", label: "Network uptime assurance" },
        { number: 95, suffix: "%", label: "Faster congestion prediction" },

      ],
    },

    faq: {
      heading: "Telecom OS — (FAQs)",
      items: [
        {
          question: "What is Telecom OS?",
          answer:
            "Telecom OS is an advanced AI operating system designed for carriers, network operators, and digital service providers. It powers automation, network analytics, and mission-critical reliability.",
        },
        {
          question: "Who is Telecom OS made for?",
          answer:
            "It is built for: Mobile carriers, Internet service providers, Cloud edge operators, Network integrators, Telecom equipment vendors.",
        },
        {
          question: "How does Telecom OS support network automation?",
          answer:
            "It provides AI control systems for: Base stations, Core network elements, Edge compute nodes, Orchestration platforms — enabling autonomous operations and rapid fault remediation.",
        },
        {
          question: "What does the network analytics feature do?",
          answer:
            "It analyzes: Telemetry streams, Traffic flows, Latency metrics, Signaling logs — helping operators detect anomalies and optimize performance.",
        },
        {
          question: "Can Telecom OS predict network congestion?",
          answer:
            "Yes. It forecasts: Traffic surges, Congestion hotspots, Link failures, Capacity shortages — enabling proactive rerouting and scaling.",
        },
        {
          question: "Is Telecom OS useful for 5G and edge deployments?",
          answer:
            "Absolutely. It supports: 5G orchestration, Edge resource optimization, Network slicing, Low-latency service steering.",
        },
        {
          question: "Does Telecom OS help with network security?",
          answer:
            "Yes, it improves: Threat detection, Anomaly monitoring, Automated mitigation, Secure configuration management.",
        },
        {
          question: "Can Telecom OS integrate with existing network systems?",
          answer:
            "Yes. It is designed to work with modern OSS/BSS platforms, NFV/SDN controllers, cloud APIs, and carrier-grade equipment.",
        },
        {
          question: "How reliable is Telecom OS in carrier environments?",
          answer:
            "It is engineered for: High-availability operation, Redundant failover, Real-time telemetry processing, Regulatory compliance.",
        },
      ],
    },
  };



  return (
    <>
      <Domain data={telecomOSData} />

    </>
  );
}

export default TelecomOs;
