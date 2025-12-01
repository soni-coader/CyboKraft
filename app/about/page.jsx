import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";

function About() {
	return (
		<>
			<main className="main-wrapper relative overflow-hidden">
				{/*...::: Breadcrumb Section Start :::... */}
				<section id="section-breadcrumb">
					{/* Section Spacer */}
					<div className="breadcrumb-wrapper relative overflow-hidden">
						<div className="overflow-hidden absolute w-full h-full top-0 z-0  ">
							<Image
								src="/assets/images/final-1/aboutbg.webp"
								alt="about-hero-image"
								width={1296}
								height={650}
								className="h-full w-full object-cover filter blur-[1px]     object-bottom z-0"
							/>
						</div>

						{/* Section Container */}
						<div className="global-container relative z-10">
							<div className="breadcrumb-block">
								<h1 className="breadcrumb-title">About Us</h1>
								<p className="text-xl font-bold">Learn more about our mission, vision, and the team behind our success.</p>

								{/* <ul className="breadcrumb-nav">
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>About</li>
								</ul> */}
							</div>
						</div>
					</div>

					{/* Section Spacer */}
				</section>
				{/*...::: Breadcrumb Section End :::... */}

				{/*...::: About Us Section Start :::... */}
				<section id="about-hero-section">
					{/* Section Spacer */}
					<div className="mb-20 lg:mb-24">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="jos mb-10 text-center lg:mb-12 xl:mb-20">
								<div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[950px]">
									<h2>We are a trusted partner in our clients AI journey</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* About Hero Image */}
							<div
								className="jos overflow-hidden rounded-3xl"
								data-jos_animation="zoom"
							>
								<Image
									src="/assets/images/aboutus-faq/i1.webp"
									alt="about-hero-image"
									width={1296}
									height={650}
									className="h-full w-full object-cover"
								/>
							</div>
							{/* About Hero Image */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: About Us Section End :::... */}
				{/*...::: About Funfact Start :::... */}
				<section id="about-funfact-section">
					{/* Section Container */}
					<div className="global-container">
						{/* Counter Scroll */}
						<ul className="grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
							{/* Counter Items */}
							<li className="jos" data-jos_delay="0.1">
								<h3
									className="text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xl:text-[80px]"
									data-module="countup"
								>
									<span className="start-number" data-countup-number={2}>
										2
									</span>
									K+
								</h3>
								<span className="block text-lg font-normal text-black">
									Successful Implementations
								</span>
							</li>
							{/* Counter Items */}
							{/* Counter Items */}
							<li className="jos" data-jos_delay="0.2">
								<h3
									className="text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xl:text-[80px]"
									data-module="countup"
								>
									<span className="start-number" data-countup-number={95}>
										95
									</span>
									%
								</h3>
								<span className="block text-lg font-normal text-black">
									Client Satisfaction Rate
								</span>
							</li>
							{/* Counter Items */}
							{/* Counter Items */}
							<li className="jos" data-jos_delay="0.3">
								<h3
									className="text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xl:text-[80px]"
									data-module="countup"
								>
									<span className="start-number" data-countup-number={40}>
										40
									</span>
									+
								</h3>
								<span className="block text-lg font-normal text-black">
									Awards and Recognitions
								</span>
							</li>
							{/* Counter Items */}
							{/* Counter Items */}
							<li className="jos" data-jos_delay="0.4">
								<h3
									className="text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xl:text-[80px]"
									data-module="countup"
								>
									<span className="start-number" data-countup-number={73}>
										73
									</span>
									+
								</h3>
								<span className="block text-lg font-normal text-black">
									Growth and Expansion
								</span>
							</li>
							{/* Counter Items */}
						</ul>
						{/* Counter Scroll */}
					</div>
					{/* Section Container */}
				</section>
				{/*...::: About Funfact Start :::... */}
				{/*...::: Content Section Start :::... */}
				<section id="content-section-2">
					{/* Section Spacer */}
					<div className="pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]">
						{/* Section Container */}
						<div className="global-container">
							<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
								{/* Content Left Block */}
								<div
									className="jos order-2 overflow-hidden rounded-md"
									data-jos_animation="fade-left"
								>
									<Image
										src="/assets/images/aboutus-faq/i2.webp"
										alt="content-image-2"
										width={526}
										height={550}
										className="h-auto w-full"
									/>
								</div>
								{/* Content Left Block */}
								{/* Content Right Block */}
								<div className="jos order-1" data-jos_animation="fade-right">
									{/* Section Content Block */}
									<div className="mb-6">
										<h2>Delivering the best solutions with AI</h2>
									</div>
									{/* Section Content Block */}
									<div className="text-lg leading-[1.4] lg:text-[21px]">
										<p className="mb-7 last:mb-0">
											Our mission is to empower businesses with AI-powered solutions that increase productivity, improve decision-making and drive growth.
										</p>
										<p className="mb-7 last:mb-0">
											Since 2016 we have been passionate about helping our clients harness With a team of AI experts and data scientists their full potential &amp; stay competitive in an increasingly digital world.
										</p>
										<Link
											href="/contact"
											className="button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorCyanBlue hover:border-colorCyanBlue hover:text-white"
										>
											Get in touch
										</Link>
									</div>
								</div>
								{/* Content Right Block */}
							</div>
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Content Section End :::... */}
				{/*...::: Core Value Section Start :::... */}
				<section id="core-value">
					{/* Section Spacer */}
					<div className="jos mx-5 mb-32 rounded-[50px] bg-black px-[20px] py-20 sm:px-[50px] md:mx-[50px] lg:px-[100px] xl:py-[130px]">
						{/* Section Container */}
						<div className="global-container">
							{/* Section Content Block */}
							<div className="mb-10 text-center lg:mb-12 xl:mb-20">
								<div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-[745px]">
									<h2 className="text-white">
										The core values behind our work
									</h2>
								</div>
							</div>
							{/* Section Content Block */}
							{/* Horizontal Separator */}
							<div className="mb-6 h-[4px] w-full rounded bg-colorCodGray sm:mb-0" />
							{/* Core Value list */}
							<ul className="grid grid-cols-1 justify-between gap-6 md:grid-cols-2 xxl:flex xxl:flex-nowrap">
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorCyanBlue after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/images/th-1/core-value-icon-1.svg"
												alt="core-value-icon-1"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Innovation</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We’re committed to exploring new technologies, and finding
									</p>
								</li>
								{/* Core Value Item */}
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorCyanBlue after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/images/th-1/core-value-icon-2.svg"
												alt="core-value-icon-2"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Excellence</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We set high standards for our work &amp; we are dedicated
										team
									</p>
								</li>
								{/* Core Value Item */}
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorCyanBlue after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/images/th-1/core-value-icon-3.svg"
												alt="core-value-icon-3"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Collaboration</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We believe in the power of collaboration, working closely
									</p>
								</li>
								{/* Core Value Item */}
								{/* Core Value Item */}
								<li className="relative after:absolute after:-top-[3px] after:left-0 after:h-[5px] after:w-full after:scale-x-0 after:rounded-[5px] after:bg-colorCyanBlue after:transition-all after:duration-300 hover:after:scale-x-0 sm:pt-6 lg:pt-10 xxl:hover:after:scale-x-100">
									<div className="mb-3 flex items-center gap-x-3 md:mb-6">
										<div className="h-[30px] w-[30px]">
											<Image
												src="/assets/images/th-1/core-value-icon-4.svg"
												alt="core-value-icon-4"
												width={30}
												height={30}
											/>
										</div>
										<h4 className="flex-1 text-white">Integrity</h4>
									</div>
									<p className="text-lg text-white lg:text-[21px]">
										We uphold the highest ethical honesty in all our
										interactions
									</p>
								</li>
								{/* Core Value Item */}
							</ul>
							{/* Core Value list */}
						</div>
						{/* Section Container */}
					</div>
					{/* Section Spacer */}
				</section>
				{/*...::: Core Value Section End :::... */}


			</main>
		</>
	);
}

export default About;
