'use client';
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";

function TryCybo() {
    return (
        <>
           
            <main className="main-wrapper relative overflow-hidden">
                {/* Breadcrumb */}
                <section id="section-breadcrumb">
                    <div className="breadcrumb-wrapper">
                        <div className="global-container">
                            <div className="breadcrumb-block">
                                <h1 className="breadcrumb-title">TryCybo — AI Agent & Assistant</h1>
                                <ul className="breadcrumb-nav">
                                    <li><Link href="/">Home</Link></li>
                                    <li>TryCybo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero */}
                <section id="trycybo-hero">
                    <div className="pt-28 lg:pt-40 xl:pt-[120px]">
                        <div className="global-container">
                            <div className="grid items-center gap-10 md:grid-cols-2 xl:grid-cols-[minmax(0,_1.3fr)_1fr]">
                                <div>
                                    <h2 className="font-raleway text-5xl md:text-6xl lg:text-7xl xl:text-[72px]">
                                        TryCybo — AI Agent for teams & users
                                    </h2>
                                    <p className="mt-6 text-lg font-semibold leading-[1.33] md:text-xl lg:text-2xl">
                                        Conversational AI, automated workflows, and personalized agents — TryCybo brings enterprise-class assistive intelligence to your product or workspace.
                                    </p>
                                    <div className="mt-8 flex gap-4">
                                        <Link href="/contact" className="button inline-block rounded-[50px] border-2 border-black bg-[#F6F6EB] text-black hover:text-white after:bg-colorOrangyRed">
                                            Try Live Demo
                                        </Link>
                                        <Link href="/pricing" className="button inline-block rounded-[50px] border-2 border-black bg-transparent text-black hover:bg-black hover:text-white">
                                            View Plans
                                        </Link>
                                    </div>
                                </div>

                                <div className="jos flex flex-col gap-6 md:gap-10">
                                    <div className="overflow-hidden rounded-[10px]">
                                        <Image
                                            src="/assets/img_placeholder/th-3/hero-img.jpg"
                                            alt="trycybo-hero"
                                            width={900}
                                            height={540}
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-[10px] bg-[#F6F6EB] p-4 text-center">
                                            <div className="text-xl font-bold">Instant Answers</div>
                                            <div className="text-sm text-[#7F8995] mt-2">Knowledge retrieval and summarization</div>
                                        </div>
                                        <div className="rounded-[10px] bg-[#F6F6EB] p-4 text-center">
                                            <div className="text-xl font-bold">Automated Workflows</div>
                                            <div className="text-sm text-[#7F8995] mt-2">Connects to apps, triggers tasks</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features / Capabilities */}
                <section id="trycybo-features">
                    <div className="pb-20 pt-20 xl:pb-[120px]">
                        <div className="global-container">
                            <div className="jos mx-auto mb-10 text-center md:max-w-xl lg:max-w-3xl">
                                <h2 className="font-raleway text-4xl font-medium">What TryCybo does</h2>
                                <p className="mt-4 text-lg text-[#7F8995]">
                                    Agent-first AI that automates tasks, answers questions, and assists users across chat, email, or embedded widgets.
                                </p>
                            </div>

                            <ul className="grid gap-x-6 gap-y-12 md:grid-cols-3">
                                <li className="text-center jos" data-jos_delay="0.1">
                                    <div className="mx-auto mb-[20px] inline-flex h-10 w-auto justify-center">
                                        <Image src="/assets/img_placeholder/th-3/icon-black-promo-1.svg" alt="icon" width={60} height={60} />
                                    </div>
                                    <h3 className="mb-3 font-raleway text-2xl font-bold">Conversational AI</h3>
                                    <p className="text-lg text-[#7F8995]">Human-like chat, context retention, and multi-turn dialogue.</p>
                                </li>

                                <li className="text-center jos" data-jos_delay="0.2">
                                    <div className="mx-auto mb-[20px] inline-flex h-10 w-auto justify-center">
                                        <Image src="/assets/img_placeholder/th-3/icon-black-promo-2.svg" alt="icon" width={70} height={60} />
                                    </div>
                                    <h3 className="mb-3 font-raleway text-2xl font-bold">Agent Automation</h3>
                                    <p className="text-lg text-[#7F8995]">Task chaining, API calls, and scheduled jobs — without code.</p>
                                </li>

                                <li className="text-center jos" data-jos_delay="0.3">
                                    <div className="mx-auto mb-[20px] inline-flex h-10 w-auto justify-center">
                                        <Image src="/assets/img_placeholder/th-3/icon-black-promo-3.svg" alt="icon" width={67} height={60} />
                                    </div>
                                    <h3 className="mb-3 font-raleway text-2xl font-bold">Secure Knowledge</h3>
                                    <p className="text-lg text-[#7F8995]">Private knowledge connectors, role-based access, and audit logs.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Demo / How it works */}
                <section id="trycybo-demo">
                    <div className="bg-[#EDEDE0]">
                        <div className="py-20 xl:py-[120px]">
                            <div className="global-container">
                                <div className="grid items-center gap-10 md:grid-cols-2">
                                    <div className="jos" data-jos_animation="fade-left">
                                        <div className="overflow-hidden rounded-[10px]">
                                            <Image src="/assets/img_placeholder/th-1/content-image-1.jpg" alt="demo" width={526} height={450} />
                                        </div>
                                    </div>

                                    <div className="jos" data-jos_animation="fade-right">
                                        <h2 className="mb-6 font-raleway text-4xl font-medium">How TryCybo works</h2>
                                        <ul className="flex flex-col gap-y-[18px] text-lg leading-[1.4] lg:text-[20px]">
                                            <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                                                Connect data sources: docs, CRM, tickets, Slack, email.
                                            </li>
                                            <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                                                Train and configure agents with intents, workflows, and schedules.
                                            </li>
                                            <li className="relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[6px] after:w-[6px] after:rounded-[50%] after:bg-black">
                                                Deploy across web, mobile, or internal dashboards with one-click.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits / Stats */}
                <section id="trycybo-stats">
                    <div className="pb-20 pt-20">
                        <div className="global-container">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="rounded-[10px] bg-[#F6F6EB] p-6 text-center">
                                    <div className="text-4xl font-bold">92%</div>
                                    <div className="mt-3 text-lg font-semibold">Faster issue resolution</div>
                                </div>
                                <div className="rounded-[10px] bg-[#F6F6EB] p-6 text-center">
                                    <div className="text-4xl font-bold">75%</div>
                                    <div className="mt-3 text-lg font-semibold">Automation of repetitive tasks</div>
                                </div>
                                <div className="rounded-[10px] bg-[#F6F6EB] p-6 text-center">
                                    <div className="text-4xl font-bold">99%</div>
                                    <div className="mt-3 text-lg font-semibold">Uptime for critical agents</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing CTA */}
                <section id="trycybo-cta">
                    <div className="bg-black">
                        <div className="py-16 sm:px-10 md:px-20 xl:px-[100px] xl:py-[80px]">
                            <div className="global-container text-center">
                                <h2 className="font-raleway text-4xl font-medium text-white">Start your TryCybo Pilot</h2>
                                <p className="mt-4 text-white text-lg">Pilot TryCybo in 7 days — integrate with your stack and measure impact.</p>
                                <div className="mt-8">
                                    <Link href="/contact" className="button inline-block rounded-[50px] border-2 border-white bg-white text-black">
                                        Request Pilot
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team / Contact */}
                <section id="trycybo-team">
                    <div className="py-20 xl:py-[120px]">
                        <div className="global-container">
                            <div className="jos mx-auto mb-10 text-center md:max-w-xl lg:max-w-3xl">
                                <h2 className="font-raleway text-4xl font-medium">People behind TryCybo</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Member 1 */}
                                <div className="rounded-[20px] bg-[#F6F6EB] p-[20px] jos" data-jos_animation="flip">
                                    <div className="overflow-hidden rounded-[20px]">
                                        <Image src="/assets/img_placeholder/th-1/team-member-img-1.jpg" alt="member" width={376} height={400} />
                                    </div>
                                    <div className="mt-5">
                                        <Link href="/team-details" className="font-dmSans text-[26px]">Mr. Abraham Maslo</Link>
                                        <div className="mt-3 text-[21px]">Chief AI Officer</div>
                                    </div>
                                </div>

                                {/* Member 2 */}
                                <div className="rounded-[20px] bg-[#F6F6EB] p-[20px] jos" data-jos_animation="flip" data-jos_delay="0.2">
                                    <div className="overflow-hidden rounded-[20px]">
                                        <Image src="/assets/img_placeholder/th-1/team-member-img-2.jpg" alt="member" width={376} height={400} />
                                    </div>
                                    <div className="mt-5">
                                        <Link href="/team-details" className="font-dmSans text-[26px]">Willium Robert</Link>
                                        <div className="mt-3 text-[21px]">Data Engineer</div>
                                    </div>
                                </div>

                                {/* Member 3 */}
                                <div className="rounded-[20px] bg-[#F6F6EB] p-[20px] jos" data-jos_animation="flip" data-jos_delay="0.3">
                                    <div className="overflow-hidden rounded-[20px]">
                                        <Image src="/assets/img_placeholder/th-1/team-member-img-3.jpg" alt="member" width={376} height={400} />
                                    </div>
                                    <div className="mt-5">
                                        <Link href="/team-details" className="font-dmSans text-[26px]">Henry Fayol</Link>
                                        <div className="mt-3 text-[21px]">Research Scientist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="trycybo-testimonials">
                    <div className="bg-[#EDEDE0] px-5 sm:px-[50px]">
                        <div className="relative z-[1] mx-auto max-w-full rounded-[20px] bg-[#381FD1]">
                            <div className="py-16 sm:px-10 md:px-20 lg:py-20 xl:px-[100px] xl:py-[130px]">
                                <div className="global-container">
                                    <div className="jos mb-10 text-center">
                                        <h2 className="font-raleway text-4xl font-medium text-white">What customers say</h2>
                                    </div>

                                    <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                                        <li className="jos flex flex-col gap-y-6 text-white" data-jos_delay="0.1">
                                            <div className="h-auto w-[146px]">
                                                <Image src="/assets/img_placeholder/th-3/review-star.svg" alt="star" width={146} height={24} />
                                            </div>
                                            <p className="font-raleway text-lg font-bold">
                                                TryCybo reduced our ticket backlog and delighted customers with faster answers.
                                            </p>
                                            <div className="text-[21px] font-semibold">- Jamie O'Connor <span className="block text-lg font-normal">Head of Support</span></div>
                                        </li>

                                        <li className="jos flex flex-col gap-y-6 text-white" data-jos_delay="0.2">
                                            <div className="h-auto w-[146px]">
                                                <Image src="/assets/img_placeholder/th-3/review-star.svg" alt="star" width={146} height={24} />
                                            </div>
                                            <p className="font-raleway text-lg font-bold">
                                                Integrating TryCybo into our CRM automated 40% of manual tasks.
                                            </p>
                                            <div className="text-[21px] font-semibold">- Priya Shah <span className="block text-lg font-normal">Product Lead</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ (including items from your PDF) */}
                <section id="trycybo-faq">
                    <div className="pb-20 pt-20 xl:pb-[120px]">
                        <div className="global-container">
                            <div className="jos mx-auto mb-10 text-center md:max-w-xl lg:max-w-3xl">
                                <h2 className="font-raleway text-4xl font-medium">TryCybo — FAQ</h2>
                            </div>

                            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                <li className="jos p-6 rounded-[10px] bg-[#F6F6EB]">
                                    <h4 className="mb-3 font-bold">What is TryCybo?</h4>
                                    <p>TryCybo is an AI agent platform that powers chat, automation and knowledge assistants for teams and customers.</p>
                                </li>

                                <li className="jos p-6 rounded-[10px] bg-[#F6F6EB]">
                                    <h4 className="mb-3 font-bold">Who is TryCybo for?</h4>
                                    <p>Professionals, enterprises, product teams, support orgs, and any team that needs an AI assistant.</p>
                                </li>

                                <li className="jos p-6 rounded-[10px] bg-[#F6F6EB]">
                                    <h4 className="mb-3 font-bold">Is TryCybo enterprise-ready?</h4>
                                    <p>Yes — built for compliance, access control, and scale with integrations to enterprise systems.</p>
                                </li>

                                <li className="jos p-6 rounded-[10px] bg-[#F6F6EB]">
                                    <h4 className="mb-3 font-bold">How does it connect to my data?</h4>
                                    <p>Connectors include docs, databases, CRM, helpdesk, Slack, and secure file stores with permissioned access.</p>
                                </li>

                                {/* Items sourced/confirmed from your uploaded FAQ PDF. */}
                                <li className="jos p-6 rounded-[10px] bg-[#F6F6EB]">
                                    <h4 className="mb-3 font-bold">What exactly is CYBOKARFT?</h4>
                                    <p>CYBOKARFT is a metaverse-based ecosystem of AI Operating Systems that connect home, work, business, education, finance, telecom, and space intelligence under one unified platform. :contentReference[oaicite:1] </p>
                                </li>

                                <li className="jos p-6 rounded-[10px] bg-[#F6F6EB]">
                                    <h4 className="mb-3 font-bold">Is the AI Calendar patented?</h4>
                                    <p>Yes — patent filings, trademark registration and copyright ownership have been recorded as described in your platform docs. :contentReference[oaicite:2] </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Final CTA / Contact */}
                <section id="trycybo-contact">
                    <div className="bg-black">
                        <div className="py-16 xl:py-[80px]">
                            <div className="global-container text-center">
                                <h2 className="font-raleway text-4xl font-medium text-white">Ready to deploy an agent?</h2>
                                <p className="mt-4 text-white">Schedule a demo and we'll build a custom TryCybo pilot for your use-case.</p>
                                <div className="mt-8">
                                    <Link href="/contact" className="button inline-block rounded-[50px] border-2 border-white bg-white text-black">Schedule a Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            
        </>
    );
}

export default TryCybo;
