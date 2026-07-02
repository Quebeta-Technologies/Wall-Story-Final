import { useRef, useState } from 'react';
import { CONTACT } from '../data/constants.js';
import '../styles/hero.css';

export default function Hero() {
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="hero" id="top">
      <div className="hero-video-wrap">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            {/* Place your hero-video.mp4 in /public folder */}
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="video-fallback">Hero video</div>
        )}
      </div>

      <div className="hero-content reveal">
        <span className="hero-eyebrow">Est. Interiors · Curated Craft</span>
        <h1>
          Every Wall
          <br />
          <em>Tells a Story.</em>
        </h1>
        <p>
          From imported wallpapers to automated curtain tracks — we compose
          interiors that feel considered, warm, and unmistakably yours.
        </p>
        <div className="hero-cta-group">
          <a href="#services" className="btn-primary">
            Explore Services
            <ArrowRight />
          </a>
          <a href={`tel:${CONTACT.phoneRaw}`} className="btn-ghost">
            <Phone />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Phone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
