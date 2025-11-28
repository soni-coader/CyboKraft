"use client";

import Domain from "@/components/Reusable/Domain";



function QuantumOs() {

 
  const quantumOSData = {
    breadcrumb: {
      bg: "/assets/images/final-1/faqbg.webp",
      title: "Quantum OS",
      pera:
        "Quantum OS is the world’s first hybrid operating system combining AR/VR immersion with quantum-inspired intelligence, giving users a futuristic interface beyond traditional screens.",
    },

    sections: {
      hero: {
        heading: "   Reimagined Reality  with Quantum OS",
        paragraph:
          "Quantum OS is the world’s first hybrid operating system combining AR/VR immersion with quantum-inspired intelligence, giving users a futuristic interface beyond traditional screens.",
        image: {
          src: "/assets/images/quantumos/i1.webp",
          alt: "quantum OS hero image",
          width: 526,
          height: 450,
        },
        features: [
          {
            icon: { src: "/assets/images/th-1/trending-up-icon.svg", alt: "arvr-interfaces" },
            title: "Immersive AR/VR Interfaces",
            text: "Futuristic holographic dashboards and interactive 3D environments",
          },
          {
            icon: { src: "/assets/images/th-1/cog-icon.svg", alt: "quantum-intel" },
            title: "Quantum Decision Intelligence",
            text: "Simulates outcomes and delivers fast, accurate decision paths",
          },
        ],

      },

      industry: {
        heading: "Widely used throughout next-generation industries",
        image: { src: "/assets/images/quantumos/i2.webp", alt: "quantum OS usage", width: 529, height: 500 },
        items: [
        
          {
            title: "1. Businesses & Corporations",
            text:
              "Companies use Quantum OS to operate advanced virtual workspaces, predictive simulations, risk modeling, and futuristic project management.",
          },
           
          {
            title: "2. Developers & Tech Innovators",
            text:
              "Developers leverage Quantum OS to build AR/VR portals, quantum-inspired apps, virtual dashboards, and immersive AI-powered products.",
          },
          {
            title: "3. Government & Research Sectors",
            text:
              "Government departments, laboratories, and scientific agencies use Quantum OS for simulation modeling, training, defense systems, and strategic planning.",
          },
        ],
      },

      capabilities: {
        heading: "  accelerate Your decisions",
        paragraph:
          "As your operations expand, Quantum OS intelligently adjusts visual environments, simulation complexity, and virtual collaboration tools.",
        image: { src: "/assets/images/quantumos/i4.webp", alt: "quantum OS capabilities", width: 526, height: 450 },
        features: [
          {
            icon: { src: "/assets/images/th-1/icon-orange-clock.svg", alt: "stable-immersive" },
            title: "Immersive Stability",
            text: "It ensures that your AR/VR workspace remains stable, fast, and deeply immersive.",
          },
          {
            icon: { src: "/assets/images/th-1/icon-orange-cursor-click.svg", alt: "simulation-speed" },
            title: "Simulation Speed",
            text: "Instant calculations of outcomes, environment changes, and scenario results.",
          },
        ],
      },
    },

    funfact: {
      image: { src: "/assets/images/quantumos/i3.webp", alt: "quantum os funfact", width: 721, height: 784 },
      video: "", // optional: add a demo video url if available
      heading: " Manage Multi-Dimensional Intelligence ",
      paragraph:
        "Quantum OS processes massive volumes of spatial data, environmental mapping, simulation layers, and AR/VR interactions — all in real time.",
      stats: [
        { number: 92, suffix: "%", label: "Increase in decision-making speed using quantum simulations" },
        { number: 75, suffix: "%", label: "Adoption rate among future-tech and research institutions" },
      ],
    },

    faq: {
      heading: "Quantum OS — (FAQs)",
      items: [
        {
          question: "What is Quantum OS?",
          answer:
            "Quantum OS is a next-generation operating system that combines AR/VR immersive environments with quantum-inspired intelligence to deliver futuristic, high-performance AI experiences for individuals and enterprises.",
        },
        {
          question: "How does the AR/VR system work in Quantum OS?",
          answer:
            "Quantum OS provides 3D holographic dashboards, interactive virtual environments, and immersive control panels that allow users to manage tasks, systems, and data in a visually advanced interface.",
        },
        {
          question: "What is Quantum-Inspired Decision Intelligence?",
          answer:
            "It uses multi-dimensional data modeling to simulate possible outcomes—helping businesses and users make faster, more accurate, and highly optimized decisions.",
        },
        {
          question: "Who can benefit from using Quantum OS?",
          answer:
            "Tech innovators, enterprises, research labs, gaming creators, developers, and anyone seeking futuristic AI tools for visualization, decision-making, or immersive interfaces.",
        },
        {
          question: "Does Quantum OS require AR/VR hardware?",
          answer:
            "No. Quantum OS works on traditional devices, but AR/VR features unlock a full immersive experience when used with compatible hardware.",
        },
      ],
    },
  };


  return (
    <>
      <Domain data={quantumOSData} />

    </>
  );
}

export default QuantumOs;
