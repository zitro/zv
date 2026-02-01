'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';

const faqs = [
  {
    question: 'What should I expect during a boudoir session?',
    answer:
      'Your session begins with a consultation to discuss your vision and comfort level. On the day, we provide professional hair and makeup, wardrobe guidance, and a relaxed, private environment. Our experienced team ensures you feel comfortable and empowered throughout.',
  },
  {
    question: 'What should I wear?',
    answer:
      'We recommend bringing 3-4 outfit options ranging from elegant lingerie to cozy sweaters or your partner\'s shirt. We provide a detailed style guide and can help you select pieces that photograph beautifully and make you feel confident.',
  },
  {
    question: 'How are the images delivered?',
    answer:
      'You\'ll receive access to a private, password-protected online gallery within 2-3 weeks. From there, you can select your favorites for professional retouching. Final images are delivered in both digital format and optional luxury prints or albums.',
  },
  {
    question: 'Is my privacy protected?',
    answer:
      'Absolutely. Your privacy is our top priority. All images are stored securely, galleries are password-protected, and we never share or post images without explicit written consent. Most images in our portfolio are from consenting clients or professional models.',
  },
  {
    question: 'Do you offer couples sessions?',
    answer:
      'Yes! Couples boudoir sessions are a beautiful way to celebrate your connection. These sessions are tasteful, romantic, and focused on capturing the intimacy between partners.',
  },
];

export function BoudoirFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-zitro-500">
              Common Questions
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold text-white">
              What to <span className="text-gradient">Expect</span>
            </h2>
          </div>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} direction="up" delay={0.1 * index}>
              <div className="overflow-hidden rounded-xl bg-white/5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-zitro-500/10 text-zitro-500"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-white/5 px-6 pb-6 pt-4">
                        <p className="text-slate-400">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
