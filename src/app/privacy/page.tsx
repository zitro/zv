'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import Link from 'next/link';

const sections = [
  {
    id: 'information-collection',
    title: 'Information We Collect',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you contact us or book a session, we collect information such as your name, email address, phone number, and any details you provide about your project requirements.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We automatically collect certain information when you visit our website, including your IP address, browser type, device information, and pages visited to improve our services and user experience.',
      },
      {
        subtitle: 'Cookies & Tracking',
        text: 'We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.',
      },
    ],
  },
  {
    id: 'information-use',
    title: 'How We Use Your Information',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Service Delivery',
        text: 'To provide our photography and videography services, communicate with you about bookings, and deliver your final images and videos.',
      },
      {
        subtitle: 'Communication',
        text: 'To respond to your inquiries, send booking confirmations, share project updates, and provide customer support.',
      },
      {
        subtitle: 'Improvement',
        text: 'To analyze how our website is used, improve our services, and develop new features that better serve our clients.',
      },
    ],
  },
  {
    id: 'data-protection',
    title: 'Data Protection & Security',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Security Measures',
        text: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your personal information.',
      },
      {
        subtitle: 'Data Retention',
        text: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.',
      },
      {
        subtitle: 'Third-Party Services',
        text: 'We may use trusted third-party services for payment processing, analytics, and communication. These partners are contractually obligated to protect your data.',
      },
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to access, update, or correct your personal information at any time by contacting us directly.',
      },
      {
        subtitle: 'Deletion',
        text: 'You may request deletion of your personal data, subject to legal requirements and legitimate business needs.',
      },
      {
        subtitle: 'Opt-Out',
        text: 'You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.',
      },
    ],
  },
  {
    id: 'photography-rights',
    title: 'Photography & Image Rights',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: [
      {
        subtitle: 'Portfolio Usage',
        text: 'Unless otherwise agreed in writing, Zitro Visuals retains the right to use photographs for portfolio, marketing, and promotional purposes.',
      },
      {
        subtitle: 'Client Usage',
        text: 'Clients receive usage rights as specified in their contract. Commercial usage rights are negotiated separately for each project.',
      },
      {
        subtitle: 'Model Releases',
        text: 'For boudoir and portrait sessions, we obtain appropriate releases. You may request exclusion from portfolio usage at any time.',
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zitro-500/5 via-transparent to-transparent" />
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-zitro-500/5 blur-3xl" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </motion.div>
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="mt-6 text-lg text-slate-400">
                Your privacy matters to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Last updated: February 1, 2026
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="border-y border-white/5 bg-slate-900/50 py-8">
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
      <section className="py-20">
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

          {/* Contact Section */}
          <FadeIn direction="up" delay={0.3}>
            <div className="mt-20 rounded-3xl border border-zitro-500/20 bg-gradient-to-br from-zitro-500/10 to-transparent p-8 text-center md:p-12">
              <h3 className="font-display text-2xl font-bold text-white">
                Questions About Your Privacy?
              </h3>
              <p className="mt-4 text-slate-400">
                We&apos;re here to help. Contact us anytime with questions or concerns about your data.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-zitro-500 px-6 py-3 font-semibold text-slate-950 transition-all hover:bg-zitro-400"
                >
                  Contact Us
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="mailto:privacy@zitrovisuals.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition-all hover:border-zitro-500/50 hover:bg-zitro-500/10"
                >
                  privacy@zitrovisuals.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
