"use client";

import Domain from "@/components/Reusable/Domain";



function SpaceOs() {

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
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "content-image-1-2", width: 526, height: 450 },
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

  const spaceOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Space OS",
      pera:
        "Space OS is a next-generation AI operating system designed for aerospace, research labs, satellites, and future deep-space missions.",
    },

    sections: {
      hero: {
        heading: " Robotics & Cosmic Intelligence",
        paragraph:
          "Space OS is a next-generation AI operating system designed for aerospace, research labs, satellites, and future deep-space missions. It delivers powerful robotics automation, cosmic data intelligence, and mission-critical analytical capabilities for space-grade environments.",
        image: {
          src: "/assets/images/th-1/content-image-1.jpg",
          alt: "House OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "space-data-intel" },
            title: "Analyze Space Data",
            text:
              "Space OS processes deep-space, orbital, and mission telemetry data with unmatched accuracy using advanced artificial intelligence.",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "space-robotics" },
            title: "Space Robotics",
            text:
              "AI-powered control systems for drones, lunar rovers, and autonomous space devices. Enables intelligent decision-making, hazard detection, and real-time mission adjustments.",
          },
        
        ],
      },

      industry: {
        heading: "Widely Used Across The Space Industry",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS usage", width: 529, height: 500 },
        items: [
          {
            title: "1. Aerospace Companies",
            text:
              "Used to automate spacecraft operations, analyze flight patterns, and improve mission success rates. Ideal for rocket companies, satellite manufacturers, and orbital-tech startups.",
          },
          {
            title: "2. Space Research Centers",
            text:
              "Enables researchers to explore cosmic behavior, star mapping, radiation waves, and planetary analytics. Perfect for universities, observatories, and deep-space labs.",
          },
          {
            title: "3. Government & Defense Space Agencies",
            text:
              "Supports national space programs with intelligence for satellite surveillance, space-risk prediction, and mission readiness.",
          },
        ],
      },

      capabilities: {
        heading: "AI That Streamlines Mission Tasks",
        paragraph:
          "As mission complexity increases, Space OS scales effortlessly—automating workflows while maintaining precision. Space OS ensures that every mission remains efficient, safe, and future-ready.",
        image: { src: "/assets/images/th-1/content-image-1.jpg", alt: "House OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "cosmic-accuracy" },
            title: "Cosmic Recognition",
            text: "98% Accuracy in cosmic pattern recognition",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "satellite-prediction" },
            title: "Path Predictions",
            text: "85% Faster satellite-path predictions",
          },
          
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/th-1/funfact-image.jpg", alt: "house os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Manage Massive Volumes Of Space Data",
      paragraph:
        "Space missions generate enormous datasets—from rover feeds to orbital sensor logs. Space OS handles it all with unmatched performance.",
      stats: [
        { number: 98, suffix: "%", label: "Accuracy in cosmic pattern recognition" },
        { number: 85, suffix: "%", label: "Faster satellite-path predictions" },
         
      ],
    },

    faq: {
      heading: "Space OS — Frequently Asked Questions (FAQ)",
      items: [
        {
          question: "What is Space OS?",
          answer:
            "Space OS is an advanced AI operating system designed for aerospace, space research, satellites, and future cosmic missions. It powers automation, data analysis, and mission intelligence.",
        },
        {
          question: "Who is Space OS made for?",
          answer:
            "It is built for: Space research institutions, Aerospace companies, Satellite operators, Space mission planners, High-tech robotics developers.",
        },
        {
          question: "How does Space OS support space robotics?",
          answer:
            "It provides AI control systems for: Space drones, Rovers, Autonomous robotic devices, On-orbit servicing machines — allowing them to operate independently in harsh space environments.",
        },
        {
          question: "What does the cosmic data processing feature do?",
          answer:
            "It analyzes: Deep-space signals, Astronomical patterns, Satellite telemetry, Cosmic radiation data — helping researchers decode space behavior and environmental changes.",
        },
        {
          question: "Can Space OS predict satellite movements?",
          answer:
            "Yes. It forecasts: Orbital paths, Collision risks, Atmospheric shifts, Debris threats — this helps maintain safe satellite operations.",
        },
        {
          question: "Is Space OS useful for future space missions?",
          answer:
            "Absolutely. It supports: Mission planning, Real-time navigation, Autonomous correction systems, Risk prediction.",
        },
        {
          question: "Does Space OS help with space communication?",
          answer:
            "Yes, it improves: Signal processing, Communication stability, Data transmission accuracy.",
        },
        {
          question: "Can Space OS integrate with existing aerospace systems?",
          answer:
            "Yes. It is designed to work with modern spacecraft software, ground systems, satellite networks, and robotics platforms.",
        },
        {
          question: "How reliable is Space OS in extreme conditions?",
          answer:
            "It is engineered for: Low-gravity environments, High radiation, High-speed movements, Deep-space communication delays.",
        },
      ],
    },
  };



  return (
    <>
      <Domain data={spaceOSData} />

    </>
  );
}

export default SpaceOs;
