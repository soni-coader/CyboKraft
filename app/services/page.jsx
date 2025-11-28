"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import useAccordion from "@/components/hooks/useAccordion";
import Image from "next/image";
import Link from "next/link";

function Services() {
	const [activeIndex, handleAccordion] = useAccordion(0);

	return (
		<>

			<main className="main-wrapper relative overflow-hidden">
				{/*...::: Breadcrumb Section Start :::... */}
				<section id="section-breadcrumb  ">

					{/* Section Spacer */}
					<div className="breadcrumb-wrapper  relative overflow-hidden">
						<div className="overflow-hidden absolute w-full h-full top-0 z-0  ">
							<Image
								src="/assets/images/final-1/servicebg.webp"
								alt="service-hero-image"
								width={1296}
								height={650}
								className="h-full w-full object-cover  filter  blur-[1px]  opacity-[0.8]    object-bottom z-0"
							/>
						</div>

						{/* Section Container */}
						<div className="global-container relative z-10">
							<div className="breadcrumb-block">
								<h1 className="breadcrumb-title">Services</h1>
								 <p className="text-xl font-bold">These are the services we offer to help you leverage smart AI-OS solutions for all your tasks.</p>
							</div>
						</div>
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Breadcrumb Section End :::... */}


				{/*...::: Service Section Start :::... */}
				<section id="section-service">
					{/* Section Spacer */}
					<div className="pb-20 xl:pb-[150px]">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
								<div className="mx-auto max-w-md lg:max-w-xl xl:max-w-[950px]">
									<h2>We provide smart AI-OS solutions for all tasks</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* Service List */}
							<ul className="jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
								{/* 1. House OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image
											src="/assets/images/th-1/service-icon-black-1.svg"
											alt="service-icon-house"
											width={70}
											height={70}
										/>
										<Image
											src="/assets/images/th-1/service-icon-orange-1.svg"
											alt="service-icon-house-hover"
											width={70}
											height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100"
										/>
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">House OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/house-os" className="hover:text-colorCyanBlue">
											Smart Home Automation
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Your living environment becomes intelligent, adaptive, and fully automated for comfort and security.
									</p>
									<Link href="/domain/house-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 2. School OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-2.svg" alt="service-icon-school" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-2.svg" alt="service-icon-school-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">School OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/school-os" className="hover:text-colorCyanBlue">
											Intelligent Learning Hub
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										AI-driven education that adapts to student needs, boosts productivity, and simplifies daily school tasks.
									</p>
									<Link href="/domain/school-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 3. Office OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-3.svg" alt="service-icon-office" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-3.svg" alt="service-icon-office-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Office OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/office-os" className="hover:text-colorCyanBlue">
											Workplace Automation
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Streamlines meetings, tasks, workflows, and office operations with predictive AI assistance.
									</p>
									<Link href="/domain/office-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 4. Time OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-4.svg" alt="service-icon-time" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-4.svg" alt="service-icon-time-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Time OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/time-os" className="hover:text-colorCyanBlue">
											AI Time Management
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										A fully automated calendar that organizes life, predicts needs, and optimizes your daily schedule.
									</p>
									<Link href="/domain/time-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 5. Quantum OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-5.svg" alt="service-icon-quantum" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-5.svg" alt="service-icon-quantum-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Quantum OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/quantum-os" className="hover:text-colorCyanBlue">
											Quantum Intelligence
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Advanced processing for complex tasks, high-speed logic, and futuristic computation workflows.
									</p>
									<Link href="/domain/quantum-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 6. Future OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-6.svg" alt="service-icon-future" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-6.svg" alt="service-icon-future-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Future OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/future-os" className="hover:text-colorCyanBlue">
											Next-Gen Innovation
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Enables futuristic features, upcoming technologies, and new experiences across every CYBOKARFT domain.
									</p>
									<Link href="/domain/future-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 7. Telecom OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-7.svg" alt="service-icon-telecom" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-7.svg" alt="service-icon-telecom-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Telecom OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/telecom-os" className="hover:text-colorCyanBlue">
											Smart Connectivity
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Optimizes communication networks, telecom tasks, routing, and intelligent global connectivity.
									</p>
									<Link href="/domain/telecom-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 8. Internet OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										<Image src="/assets/images/th-1/service-icon-black-8.svg" alt="service-icon-internet" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-8.svg" alt="service-icon-internet-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Internet OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/internet-os" className="hover:text-colorCyanBlue">
											Web Intelligence
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Automates online activity, digital identity, browsing tasks, and delivers a secure smart internet layer.
									</p>
									<Link href="/domain/internet-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>

								{/* 9. Space OS */}
								<li className="group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black">
									<div className="relative mb-9 h-[70px] w-[70px]">
										{/* Reusing icon-1 as placeholder for Space OS - replace with dedicated icon if available */}
										<Image src="/assets/images/th-1/service-icon-black-1.svg" alt="service-icon-space" width={70} height={70} />
										<Image src="/assets/images/th-1/service-icon-orange-1.svg" alt="service-icon-space-hover" width={70} height={70}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</div>
									<p className="text-colorCyanBlue mb-2 font-bold">Space OS</p>
									<h3 className="mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]">
										<Link href="/domain/space-os" className="hover:text-colorCyanBlue">
											Space Intelligence
										</Link>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										Supports aerospace logic, mission control tools, and advanced space-grade AI automation.
									</p>
									<Link href="/domain/space-os" className="relative inline-block h-[30px] w-[30px] duration-300">
										<Image src="/assets/images/th-1/arrow-right-black.svg" alt="arrow-right-black" width={30} height={30} />
										<Image src="/assets/images/th-1/arrow-right-orange.svg" alt="arrow-right-orange" width={30} height={30}
											className="absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100" />
									</Link>
								</li>
								<li className="group flex flex-col justify-center bg-white p-[30px] transition-all lg:col-span-3 duration-300 ease-in-out hover:bg-black">

									<h3 className="mb-4 block  leading-tight -tracking-[0.5px] group-hover:text-white  text-5xl ">
										<div   className=" ">
											These Are Our Core Services
										</div>
									</h3>
									<p className="mb-12 duration-300 group-hover:text-white">
										We have 9 OS for various domain . just like our 9 planets
									</p>

								</li>
							</ul>
							{/* Service List */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Service Section End :::... */}

				{/*...::: FAQ Section Start :::... */}
				<section className="faq-section">
					{/* Section Spacer */}
					<div className="pb-20 xl:pb-[150px]">
						{/* Section Container */}
						<div className="global-container">
							<div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
								{/* FAQ Left Block */}
								<div
									className="jos flex flex-col"
									data-jos_animation="fade-right"
								>
									{/* Section Content Block */}
									<div className="mb-6">
										<div className="mx-auto md:mx-0 md:max-w-none">
											<h2>Freely ask us for more information</h2>
										</div>
									</div>
									{/* Section Content Block */}
									<div className="text-lg leading-[1.4] lg:text-[21px]">
										<p className="mb-7 last:mb-0">
											Our AI SaaS solutions can be quickly deployed, enabling
											users to start benefiting from AI capabilities without
											lengthy setup and development times in fast-paced
											industries.
										</p>
										<Link
											href="/faq-1"
											className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorCyanBlue hover:border-colorCyanBlue hover:text-white"
										>
											Ask you questions
										</Link>
									</div>
								</div>
								{/* FAQ Left Block */}
								{/* FAQ Right Block */}
								<div
									className="jos md:ml-10 lg:ml-20 xl:ml-32"
									data-jos_animation="fade-left"
								>
									{/* Accordion*/}
									<ul className="accordion">
										{/* Accordion items */}
										<li
											className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex == 0 && "active"
												}`}
										>
											<div
												onClick={() => handleAccordion(0)}
												className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-2xl"
											>
												<p>Q1: What services does CYBOKARFT provide?
												</p>
												<div className="accordion-icon">
													<Image
														src="/assets/images/plus.svg"
														alt="plus"
														width={24}
														height={24}
													/>
												</div>
											</div>
											<div className="accordion-content text-[#2C2C2C]">
												<p>
													CYBOKARFT delivers nine domain-specific AI-OS solutions — from Home, School and Office to Quantum, Telecom and Space — plus integration services, managed AI ops, predictive analytics, automation, and secure metaverse tooling tailored for individuals, businesses and governments.
												</p>
											</div>
										</li>
										{/* Accordion items */}
										{/* Accordion items */}
										<li
											className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex == 1 && "active"
												}`}
										>
											<div
												onClick={() => handleAccordion(1)}
												className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-2xl"
											>
												<p>Q2: How do I integrate a CYBOKARFT AI-OS with our existing systems?</p>
												<div className="accordion-icon">
													<Image
														src="/assets/images/plus.svg"
														alt="plus"
														width={24}
														height={24}
													/>
												</div>
											</div>
											<div className="accordion-content text-[#2C2C2C]">
												<p>
													Integration uses our modular APIs and secure connectors. We assess your stack, map data flows, and deploy an AI-OS adapter that syncs with ERPs, CRMs, cloud providers, and on-prem systems with minimal disruption and phased rollout.
												</p>
											</div>
										</li>
										{/* Accordion items */}
										{/* Accordion items */}
										<li
											className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex == 2 && "active"
												}`}
										>
											<div
												onClick={() => handleAccordion(2)}
												className="accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-2xl"
											>
												<p>Q3: What enterprise support and SLAs are available for services?</p>
												<div className="accordion-icon">
													<Image
														src="/assets/images/plus.svg"
														alt="plus"
														width={24}
														height={24}
													/>
												</div>
											</div>
											<div className="accordion-content text-[#2C2C2C]">
												<p>
													Enterprise customers receive dedicated onboarding, 24/7 support, custom SLAs, regular security audits, and optional managed services. We offer premium plans for fast response times, on-site assistance, and tailored compliance packages for U.S./U.K./UAE markets.
												</p>
											</div>
										</li>
									</ul>
									{/* Accordion*/}
								</div>
								{/* FAQ Right Block */}
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: FAQ Section End :::... */}


			</main>

		</>
	);
}

export default Services;
