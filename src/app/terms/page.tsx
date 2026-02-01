'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';

const sections = [
  {
    id: 'services',
    title: 'Our Services',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Service Description',
        text: 'Zitro Visuals provides professional photography and videography services including commercial, fashion, product, portrait, boudoir, and video production. All services are subject to availability and require advance booking.',
      },
      {
        subtitle: 'Service Agreement',
        text: 'Each project is governed by a separate service agreement that outlines specific deliverables, timelines, and pricing. These terms supplement but do not replace individual project contracts.',
      },
      {
        subtitle: 'Professional Standards',
        text: 'We commit to delivering work of the highest professional quality, using industry-standard equipment and techniques to ensure exceptional results for every project.',
      },
    ],
  },
  {
    id: 'booking',
    title: 'Booking & Payment',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Booking Process',
        text: 'Bookings are confirmed upon receipt of a signed contract and required deposit. We recommend booking at least 2-4 weeks in advance for standard sessions and 2-3 months for commercial projects.',
      },
      {
        subtitle: 'Payment Terms',
        text: 'A non-refundable deposit of 50% is required to secure your booking. The remaining balance is due upon delivery of final images or as specified in your contract.',
      },
      {
        subtitle: 'Accepted Payment Methods',
        text: 'We accept major credit cards, bank transfers, and approved corporate payment terms. All prices are in USD unless otherwise specified.',
      },
    ],
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Rescheduling',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Client Cancellation',
        text: 'Cancellations made more than 14 days before the scheduled date will receive a deposit credit for future use. Cancellations within 14 days forfeit the deposit. Cancellations within 48 hours may be subject to the full session fee.',
      },
      {
        subtitle: 'Rescheduling',
        text: 'One reschedule is permitted free of charge with at least 7 days notice. Additional reschedules or last-minute changes may incur a rescheduling fee of up to 25% of the session cost.',
      },
      {
        subtitle: 'Force Majeure',
        text: 'In cases of extreme weather, illness, or other circumstances beyond our control, we will work with you to reschedule at no additional cost.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Copyright Ownership',
        text: 'Zitro Visuals retains copyright to all photographs and videos unless explicitly transferred in writing. Clients receive a license to use images as specified in their contract.',
      },
      {
        subtitle: 'Usage Rights',
        text: 'Personal use licenses permit sharing on personal social media and printing for personal display. Commercial use requires a separate license and additional fees.',
      },
      {
        subtitle: 'Portfolio Rights',
        text: 'We reserve the right to use images for portfolio, marketing, competition entries, and promotional purposes unless a confidentiality agreement is in place.',
      },
    ],
  },
  {
    id: 'deliverables',
    title: 'Deliverables & Timeline',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Delivery Timeline',
        text: 'Standard portrait sessions: 2-3 weeks. Commercial projects: 3-4 weeks. Rush delivery is available for an additional fee. Timelines begin after the session date.',
      },
      {
        subtitle: 'File Formats',
        text: 'Final images are delivered as high-resolution JPEGs via secure online gallery. RAW files are not included unless specified in your contract for an additional fee.',
      },
      {
        subtitle: 'Revisions',
        text: 'Each package includes a specified number of retouched images. Additional retouching or revisions beyond the package scope are available at our standard hourly rate.',
      },
    ],
  },
  {
    id: 'liability',
    title: 'Liability & Conduct',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Limitation of Liability',
        text: 'Our total liability for any claims arising from our services shall not exceed the total amount paid for the specific project in question.',
      },
      {
        subtitle: 'Equipment Failure',
        text: 'While rare, in cases of equipment failure or data loss, our liability is limited to a full refund or complimentary reshoot at our discretion.',
      },
      {
        subtitle: 'Client Conduct',
        text: 'We reserve the right to terminate any session where client behavior is inappropriate, dangerous, or violates our professional standards, without refund.',
      },
    ],
  },
];

const highlights = [
  { label: 'Deposit Required', value: '50%' },
  { label: 'Delivery Time', value: '2-4 weeks' },
  { label: 'Free Reschedule', value: '7+ days notice' },
  { label: 'Cancellation Notice', value: '14 days' },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zitro-500/5 via-transparent to-transparent" />
          <div className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-zitro-500/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zitro-500/10 ring-1 ring-zitro-500/30"
              >
                <svg className="h-8 w-8 text-zitro-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.div>
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400">
                Clear and fair terms that protect both you and us. Please review before booking.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Last updated: February 1, 2026
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="border-y border-white/5 bg-slate-900/50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="rounded-xl bg-white/5 p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-zitro-500">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-wrap justify-center gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-400 transition-all hover:bg-zitro-500/10 hover:text-zitro-400"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, sectionIndex) => (
              <FadeIn key={section.id} direction="up" delay={0.1 * sectionIndex}>
                <div id={section.id} className="scroll-mt-32">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zitro-500/10 text-zitro-500">
                      {section.icon}
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-8 space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * itemIndex }}
                        viewport={{ once: true }}
                        className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-zitro-500/20 hover:bg-white/[0.04]"
                      >
                        <h3 className="font-semibold text-white group-hover:text-zitro-400 transition-colors">
                          {item.subtitle}
                        </h3>
                        <p className="mt-2 text-slate-400 leading-relaxed">
                          {item.text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Agreement Section */}
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-20 rounded-3xl border border-zitro-500/20 bg-gradient-to-br from-zitro-500/10 to-transparent p-8 md:p-12">
              <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-zitro-500/20 md:mb-0 md:mr-6">
                  <svg className="h-8 w-8 text-zitro-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-white">
                    Ready to Work Together?
                  </h3>
                  <p className="mt-4 text-slate-400">
                    By booking our services, you agree to these terms. We&apos;re committed to providing an exceptional experience from start to finish.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-zitro-500 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-zitro-400"
                    >
                      Book a Session
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/privacy"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:border-zitro-500/50 hover:bg-zitro-500/10"
                    >
                      View Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Questions */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-slate-500">
                Have questions about our terms?{' '}
                <Link href="/contact" className="text-zitro-400 hover:text-zitro-300 transition-colors">
                  Contact us
                </Link>
                {' '}and we&apos;ll be happy to clarify.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
