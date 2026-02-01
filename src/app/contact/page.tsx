import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Zitro Visuals. Book a consultation for your next photography or videography project.',
};

const contactInfo = [
  {
    title: 'Email',
    value: 'hello@zitrovisuals.com',
    href: 'mailto:hello@zitrovisuals.com',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: 'Studio',
    value: 'Los Angeles, CA',
    href: null,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/zitrovisuals' },
  { name: 'Vimeo', href: 'https://vimeo.com/zitrovisuals' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/zitrovisuals' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-zitro-950/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <FadeIn direction="up">
              <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
                Get in Touch
              </span>
            </FadeIn>

            <AnimatedText
              text="Let's Create Together"
              className="mt-6 font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              delay={0.2}
              as="h1"
            />

            <FadeIn direction="up" delay={0.4}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
                Ready to bring your vision to life? We&apos;d love to hear about your
                project and discuss how we can help.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Info */}
            <FadeIn direction="right">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Contact Information
                </h2>
                <p className="mt-4 text-slate-400">
                  Reach out through any of these channels or fill out the form
                  and we&apos;ll get back to you within 24 hours.
                </p>

                <div className="mt-10 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-zitro-500/10 text-zitro-500">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-500">
                          {item.title}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-lg font-medium text-white transition-colors hover:text-zitro-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="font-medium text-white">Follow Us</h3>
                  <div className="mt-4 flex gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-white/5 px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-zitro-500 hover:text-slate-950"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-12 rounded-2xl bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium text-white">
                      Currently accepting new projects
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-400">
                    We typically respond within 24 hours. For urgent inquiries,
                    please call directly.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left" delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
