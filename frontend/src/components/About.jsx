import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual reveal">
            <div className="about-visual-img" />
            <div className="about-visual-badge">
              <div className="about-visual-badge-num">15+</div>
              <div className="about-visual-badge-label">Years Crafting Homes</div>
            </div>
          </div>

          <div className="about-text reveal">
            <span className="eyebrow">About Us</span>
            <h2>Interiors that <em>whisper, not shout.</em></h2>

            <p>
              The Wall Story began with a simple belief — a well-considered room
              speaks softly and stays memorable. We are a Pune-based interior
              specialist working with families, architects and designers to
              bring together imported materials, refined craftsmanship, and
              quietly clever technology.
            </p>
            <p>
              From a single accent wall to a full home turnaround, every project
              is treated as a chapter in someone's life. That's how we approach
              it. That's the wall's story.
            </p>

            <ul className="about-values">
              <li>
                <span className="about-values-dot" />
                <div>
                  <strong>Sourced with intent</strong>
                  <p>Every wallpaper and fabric bolt chosen by hand.</p>
                </div>
              </li>
              <li>
                <span className="about-values-dot" />
                <div>
                  <strong>In-house team</strong>
                  <p>No subcontractors — one team, end to end.</p>
                </div>
              </li>
              <li>
                <span className="about-values-dot" />
                <div>
                  <strong>Honest pricing</strong>
                  <p>Transparent quotes, no hidden line items.</p>
                </div>
              </li>
            </ul>

            <div className="about-stats">
              <div>
                <div className="stat-num">15<span>+</span></div>
                <div className="stat-label">Years of Craft</div>
              </div>
              <div>
                <div className="stat-num">2K<span>+</span></div>
                <div className="stat-label">Homes Styled</div>
              </div>
              <div>
                <div className="stat-num">10</div>
                <div className="stat-label">Verticals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
