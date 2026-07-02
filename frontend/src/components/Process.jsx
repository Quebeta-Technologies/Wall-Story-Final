import { useState } from 'react';
import '../styles/process.css';

const steps = [
  {
    num: '01',
    title: 'Consult',
    text: 'We visit, measure, and listen to how you live in your space.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Curate',
    text: 'You get a shortlist of materials, swatches and finishes to touch.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Install',
    text: 'Our in-house team handles precise, no-mess installation.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Care',
    text: 'We stay on call — because interiors deserve after-care too.',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Process() {
  const [active, setActive] = useState(null);

  return (
    <section id="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">How We Work</span>
          <h2>A calm, considered <em>process.</em></h2>
          <div className="flourish">
            <svg viewBox="0 0 44 12" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M2 6 Q11 -1 22 6 T42 6" />
              <circle cx="22" cy="6" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`step${active === i ? ' step--active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Dotted connector — not on last card */}
              {i < steps.length - 1 && (
                <div className="step-connector">
                  <div className="step-connector-dot" />
                  <div className="step-connector-dot" />
                  <div className="step-connector-dot" />
                </div>
              )}

              {/* Glow blob behind card */}
              <div className="step-glow" />

              {/* Icon */}
              <div className="step-icon-wrap">
                <div className="step-icon">{step.icon}</div>
              </div>

              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>

              {/* Bottom bar */}
              <div className="step-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}