'use client';
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import useAccordion from "@/components/hooks/useAccordion";
import Image from "next/image";
import Link from "next/link";

const Faq_1 = () => {
	const [activeIndex, handleAccordion] = useAccordion(0);

	return (
		<>
			<main className="main-wrapper relative overflow-hidden">
				{/*...::: Breadcrumb Section Start :::... */}
				<section id="section-breadcrumb">
					<div className="breadcrumb-wrapper  relative overflow-hidden">
						<div className="overflow-hidden absolute w-full h-full top-0 z-0  ">
							<Image
								src="/assets/images/final-1/faqbg.webp"
								alt="faq-hero-image"
								width={1296}
								height={650}
								className="h-full w-full object-cover  filter  blur-[1px]  opacity-[0.8]    object-bottom z-0"
							/>
						</div>

						{/* Section Container */}
						<div className="global-container relative z-10">
							<div className="breadcrumb-block">
								<h1 className="breadcrumb-title">FAQs</h1>
								 
							</div>
						</div>
					</div>
				</section>
				{/*...::: Breadcrumb Section End :::... */}

				{/*...::: FAQ Section Start :::... */}
				<section className="faq-section">
					<div className="pb-20 xl:pb-[130px]">
						<div className="global-container">
							<div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
								<div className="mx-auto max-w-md lg:max-w-3xl xl:max-w-[950px]">
									<h2>Our experts are able to answer all your questions</h2>
								</div>
							</div>

							{/* Accordion */}
							<ul className="accordion flex flex-col gap-y-6">

								{/* Q1 */}
								<li
									className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === 0 ? "active" : ""
										}`}
									onClick={() => handleAccordion(0)}
								>
									<div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
										<h5>What exactly is CYBOKARFT?</h5>
										<div className="accordion-icon">
											<Image src="/assets/images/plus.svg" width={24} height={24} alt="plus" />
										</div>
									</div>
									<div className="accordion-content text-[#2C2C2C]">
										<p>
											CYBOKARFT is a metaverse-based ecosystem of AI Operating Systems that
											connects home, work, business, education, finance, telecom, and space
											intelligence under one unified platform.
										</p>
									</div>
								</li>

								{/* Q2 */}
								<li
									className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === 1 ? "active" : ""
										}`}
									onClick={() => handleAccordion(1)}
								>
									<div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
										<h5>How does Tesla’s 3-6-9 rule inspire CYBOKARFT?</h5>
										<div className="accordion-icon">
											<Image src="/assets/images/plus.svg" width={24} height={24} alt="plus" />
										</div>
									</div>
									<div className="accordion-content text-[#2C2C2C]">
										<p>
											The entire system architecture—nine planets, energy flow, domain logic, and
											metaverse mechanics—is built using Nikola Tesla’s 3-6-9 numerical principles.
										</p>
									</div>
								</li>

								{/* Q3 */}
								<li
									className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === 2 ? "active" : ""
										}`}
									onClick={() => handleAccordion(2)}
								>
									<div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
										<h5>Who is CYBOKARFT designed for?</h5>
										<div className="accordion-icon">
											<Image src="/assets/images/plus.svg" width={24} height={24} alt="plus" />
										</div>
									</div>
									<div className="accordion-content text-[#2C2C2C]">
										<p>
											Professionals, entrepreneurs, enterprises, tech-savvy adults, governments,
											and global high-value markets.
										</p>
									</div>
								</li>

								{/* Q4 */}
								<li
									className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === 3 ? "active" : ""
										}`}
									onClick={() => handleAccordion(3)}
								>
									<div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
										<h5>Is the AI Calendar really patented?</h5>
										<div className="accordion-icon">
											<Image src="/assets/images/plus.svg" width={24} height={24} alt="plus" />
										</div>
									</div>
									<div className="accordion-content text-[#2C2C2C]">
										<p>
											Yes. The client has filed patent documentation, registered the trademark,
											and has full copyright ownership.
										</p>
									</div>
								</li>

								{/* Q5 */}
								<li
									className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === 4 ? "active" : ""
										}`}
									onClick={() => handleAccordion(4)}
								>
									<div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
										<h5>Is CYBOKARFT suitable for global markets?</h5>
										<div className="accordion-icon">
											<Image src="/assets/images/plus.svg" width={24} height={24} alt="plus" />
										</div>
									</div>
									<div className="accordion-content text-[#2C2C2C]">
										<p>
											Absolutely. The platform is designed for U.S., U.K., and UAE audiences with
											world-class quality and global UI/UX standards.
										</p>
									</div>
								</li>

								{/* Q6 */}
								<li
									className={`jos accordion-item is-2 rounded-[10px] border-[1px] border-[#EAEDF0] bg-white px-7 py-[30px] ${activeIndex === 5 ? "active" : ""
										}`}
									onClick={() => handleAccordion(5)}
								>
									<div className="accordion-header flex items-center justify-between text-xl lg:text-[28px]">
										<h5>How many operating systems are there?</h5>
										<div className="accordion-icon">
											<Image src="/assets/images/plus.svg" width={24} height={24} alt="plus" />
										</div>
									</div>
									<div className="accordion-content text-[#2C2C2C]">
										<p>
											There are nine core OS systems, each represented as a planet within the
											CYBOKARFT metaverse.
										</p>
									</div>
								</li>

							</ul>
						</div>
					</div>
				</section>
				{/*...::: FAQ Section End :::... */}

				<section id="about-conact">
					<div className="bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]">
						<div className="global-container">
							<div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[minmax(0,_1fr)_1.4fr]">

								<div
									className="jos order-2 overflow-hidden rounded-[20px] md:order-1"
									data-jos_animation="fade-left"
								>
									<Image
										src="/assets/images/th-1/about-contact-img.jpg"
										alt="about-contact-img"
										width={526}
										height={550}
										className="h-auto w-full"
									/>
								</div>

								<div className="jos order-1 md:order-2" data-jos_animation="fade-down">
									<div className="mb-8 max-w-sm md:max-w-max lg:mb-16 xl:mb-6">
										<h2 className="text-white">We always want to connect our clients</h2>
									</div>

									<div className="text-left text-lg leading-[1.4] text-white lg:text-[21px]">
										<p className="mb-7">
											CYBOKARFT is designed to elevate human and enterprise intelligence.
											For demos, partnerships, or enterprise inquiries — we’d love to connect.
										</p>
									</div>

									<ul className="mt-10 flex flex-col gap-6 font-dmSans text-[30px] lg:mt-14 lg:gap-y-3 xl:mt-[70px]">
										<li className="flex flex-col gap-x-2 text-colorCyanBlue lg:flex-row">
											Website:
											<Link
												rel="noopener noreferrer"
												href="#"
												className="text-white hover:text-colorCyanBlue"
											>
												www.cybokarft.com
											</Link>
										</li>

										<li className="flex flex-col gap-x-2 text-colorCyanBlue lg:flex-row">
											Email:
											<Link href="#" className="text-white hover:text-colorCyanBlue">
												contact@cybokarft.com
											</Link>
										</li>

										<li className="flex flex-col gap-x-2 text-colorCyanBlue lg:flex-row">
											Phone:
											<Link href="#" className="text-white hover:text-colorCyanBlue">
												(123) 456-7890
											</Link>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</div>
				</section>
			</main>


		</>
	);
};

export default Faq_1;
