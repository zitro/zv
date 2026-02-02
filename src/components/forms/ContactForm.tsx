'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';

const projectTypes = [
  'Commercial',
  'Fashion',
  'Product',
  'Portrait',
  'Boudoir',
  'Video',
  'Other',
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!turnstileToken) {
      setError('Please complete the verification.');
      return;
    }

    if (!formState.projectType) {
      setError('Please select a project type.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formState,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      // Reset Turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass flex h-full flex-col items-center justify-center rounded-2xl p-12 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <svg
            className="h-8 w-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-white">
          Message Sent!
        </h3>
        <p className="mt-2 text-slate-400">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setTurnstileToken(null);
            setFormState({
              name: '',
              email: '',
              company: '',
              projectType: '',
              budget: '',
              message: '',
            });
          }}
          className="mt-6 text-sm font-medium text-zitro-400 hover:text-zitro-300"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
      <h2 className="font-display text-2xl font-bold text-white">
        Start a Project
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        Tell us about your vision and we&apos;ll make it happen.
      </p>

      {error && (
        <div className="mt-4 rounded-lg bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <div className="mt-8 space-y-6">
        {/* Name & Email */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-zitro-500 focus:outline-none focus:ring-1 focus:ring-zitro-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-zitro-500 focus:outline-none focus:ring-1 focus:ring-zitro-500"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-300"
          >
            Company / Brand
          </label>
          <input
            type="text"
            id="company"
            value={formState.company}
            onChange={(e) =>
              setFormState({ ...formState, company: e.target.value })
            }
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-zitro-500 focus:outline-none focus:ring-1 focus:ring-zitro-500"
            placeholder="Your company name"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium text-slate-300">
            Project Type *
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormState({ ...formState, projectType: type })}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  formState.projectType === type
                    ? 'bg-zitro-500 text-slate-950'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-slate-300"
          >
            Budget Range
          </label>
          <select
            id="budget"
            value={formState.budget}
            onChange={(e) =>
              setFormState({ ...formState, budget: e.target.value })
            }
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white transition-colors focus:border-zitro-500 focus:outline-none focus:ring-1 focus:ring-zitro-500"
          >
            <option value="" className="bg-slate-900">
              Select a range
            </option>
            <option value="5k-10k" className="bg-slate-900">
              $5,000 - $10,000
            </option>
            <option value="10k-25k" className="bg-slate-900">
              $10,000 - $25,000
            </option>
            <option value="25k-50k" className="bg-slate-900">
              $25,000 - $50,000
            </option>
            <option value="50k+" className="bg-slate-900">
              $50,000+
            </option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-300"
          >
            Project Details *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formState.message}
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-zitro-500 focus:outline-none focus:ring-1 focus:ring-zitro-500"
            placeholder="Tell us about your project, timeline, and any specific requirements..."
          />
        </div>

        {/* Turnstile */}
        <div className="flex justify-center">
          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
            onSuccess={setTurnstileToken}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
            options={{
              theme: 'dark',
            }}
          />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-lg bg-zitro-500 px-6 py-4 font-semibold text-slate-950 transition-all hover:bg-zitro-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </div>
    </form>
  );
}
