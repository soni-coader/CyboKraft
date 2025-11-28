"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServiceDetails({ data }) {
    const [toggler, setToggler] = useState(false);

    const { breadcrumb, sections, funfact, contact, faq } = data;
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <main className="main-wrapper relative overflow-hidden">
                {/* ------------------------------------
        Breadcrumb Section
        ------------------------------------- */}
                <div className="breadcrumb-wrapper  relative overflow-hidden">
                    <div className="overflow-hidden absolute w-full h-full top-0 z-0  ">
                        <Image
                            src={breadcrumb.bg}
                            alt="service-hero-image"
                            width={1296}
                            height={650}
                            className="h-full w-full object-cover  filter  blur-[1px]  opacity-[0.8]    object-bottom z-0"
                        />
                    </div>

                    {/* Section Container */}
                    <div className="global-container relative z-10">
                        <div className="breadcrumb-block">
                            <h1 className="breadcrumb-title">{breadcrumb.title}</h1>
                            <p className="text-xl  ">{breadcrumb.pera}</p>
                        </div>
                    </div>
                </div>


                {/* ------------------------------------
        Section 1 (Hero)
        ------------------------------------- */}
                <section id="content-section-1">
                    <div className="pb-20 xl:pb-[150px]">
                        <div className="global-container">
                            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">

                                {/* Image */}
                                <div className="jos order-2 overflow-hidden rounded-xl" data-jos_animation="fade-left">
                                    <Image
                                        src={sections.hero.image.src}
                                        alt={sections.hero.image.alt}
                                        width={sections.hero.image.width}
                                        height={sections.hero.image.height}
                                        className="h-auto w-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="jos order-1" data-jos_animation="fade-right">
                                    <h2 className="mb-6">{sections.hero.heading}</h2>

                                    <p className="text-lg mb-7 lg:text-[21px]">
                                        {sections.hero.paragraph}
                                    </p>

                                    <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-2 xl:mt-14">
                                        {sections.hero.features.map((feature, index) => (
                                            <li key={index} className="flex flex-col gap-y-4">
                                                <div className="h-[50px] w-[50px]">
                                                    <Image
                                                        src={feature.icon.src}
                                                        alt={feature.icon.alt}
                                                        width={50}
                                                        height={50}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <h5>{feature.title}</h5>
                                                <p className="text-lg">{feature.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------
        Section 2 (Industry Use Cases)
        ------------------------------------- */}
                <section id="content-section-2">
                    <div className="pb-20 xl:pb-[150px]">
                        <div className="global-container">

                            <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                                <h2>{sections.industry.heading}</h2>
                            </div>

                            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,_1fr)_1.2fr] xl:gap-28 xxl:gap-32">

                                {/* Image */}
                                <div className="jos order-2 md:order-1 overflow-hidden rounded-xl" data-jos_animation="fade-left">
                                    <Image
                                        src={sections.industry.image.src}
                                        alt={sections.industry.image.alt}
                                        width={sections.industry.image.width}
                                        height={sections.industry.image.height}
                                        className="h-auto w-full"
                                    />
                                </div>

                                {/* Content */}
                                <div className="jos order-1 md:order-2" data-jos_animation="fade-right">
                                    <ul className="flex flex-col gap-y-6">
                                        {sections.industry.items.map((item, index) => (
                                            <li key={index}>
                                                <h5 className="mb-[10px]">{item.title}</h5>
                                                <p className="mb-7">{item.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* ------------------------------------
        Funfact Section
        ------------------------------------- */}
                <section id="funfact-section">
                    <div className="mx-auto max-w-[1500px] px-5">
                        <div className="jos grid grid-cols-1 overflow-hidden bg-black rounded-[30px] lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]">

                            {/* Left Image + Play Button */}
                            <div className="relative overflow-hidden rounded-[30px] lg:rounded-[50px]">
                                <Image
                                    src={funfact.image.src}
                                    alt={funfact.image.alt}
                                    width={funfact.image.width}
                                    height={funfact.image.height}
                                    className="h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full"
                                />

                            </div>

                            <FsLightbox toggler={toggler} sources={[funfact.video]} />

                            {/* Right Content */}
                            <div className="self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xxl:pl-16 xxl:pr-28">
                                <h2 className="text-white mb-8">{funfact.heading}</h2>

                                <p className="text-white text-lg mb-7 lg:text-[21px]">{funfact.paragraph}</p>

                                <div className="my-8 h-[1px] w-full bg-white" />

                                <ul className="flex flex-col sm:flex-row gap-y-8 gap-x-11 text-center md:text-left xxl:gap-x-20">
                                    {funfact.stats.map((stat, index) => (
                                        <li key={index}>
                                            <h3 className="text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xxl:text-[120px]">
                                                {stat.number}
                                                {stat.suffix}
                                            </h3>
                                            <span className="block text-white text-lg lg:text-[21px]">{stat.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ------------------------------------
        Section 3 (Capabilities)
        ------------------------------------- */}
                <section id="content-section-3">
                    <div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
                        <div className="global-container">
                            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28">

                                <div className="jos order-2 overflow-hidden rounded-xl" data-jos_animation="fade-left">
                                    <Image
                                        src={sections.capabilities.image.src}
                                        alt={sections.capabilities.image.alt}
                                        width={sections.capabilities.image.width}
                                        height={sections.capabilities.image.height}
                                        className="h-auto w-full"
                                    />
                                </div>

                                <div className="jos order-1" data-jos_animation="fade-right">
                                    <h2 className="mb-6">{sections.capabilities.heading}</h2>

                                    <p className="text-lg mb-7 lg:text-[21px]">
                                        {sections.capabilities.paragraph}
                                    </p>

                                    <ul className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-2 xl:mt-14">
                                        {sections.capabilities.features.map((feature, index) => (
                                            <li key={index} className="flex flex-col gap-y-4">
                                                <div className="h-[50px] w-[50px]">
                                                    <Image
                                                        src={feature.icon.src}
                                                        alt={feature.icon.alt}
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                                <h5>{feature.title}</h5>
                                                <p className="text-lg">{feature.text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                
                <section className="faq-section">
                    <div className=" pb-40   xl:pb-[200px]  ">
                        <div className="global-container">

                            {/* Heading */}
                            <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                                <div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
                                    <h2>{faq.heading}</h2>
                                </div>
                            </div>

                            {/* Accordion */}
                            <ul className="accordion flex flex-col gap-y-6">
                                {faq.items.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`jos accordion-item is-2 rounded-[10px] border border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === index ? "active" : ""
                                            }`}
                                        onClick={() => handleAccordion(index)}
                                    >
                                        {/* Header */}
                                        <div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
                                            <h5>{item.question}</h5>
                                            <div className="accordion-icon">
                                                <Image
                                                    src="/assets/images/plus.svg"
                                                    width={24}
                                                    height={24}
                                                    alt="plus"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="accordion-content text-[#2C2C2C]">
                                            <p>{item.answer}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
