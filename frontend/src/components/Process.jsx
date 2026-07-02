import '../styles/process.css';

const steps = [
  { num: '01', title: 'Consult', text: 'We visit, measure, and listen to how you live in your space.' },
  { num: '02', title: 'Curate',  text: 'You get a shortlist of materials, swatches and finishes to touch.' },
  { num: '03', title: 'Install', text: 'Our in-house team handles precise, no-mess installation.' },
  { num: '04', title: 'Care',    text: 'We stay on call — because interiors deserve after-care too.' },
];

export default function Process() {
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
          {steps.map((step) => (
            <div className="step reveal" key={step.num}>
              <div className="step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
