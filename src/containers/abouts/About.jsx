import React from "react";
import CTA from "../../components/cta/CTA";
import Features from "../../components/features/Features";
import "./about.css";
function About() {
  return (
    <section className="about">
      <div className="about__difference">
        <h1>What's different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="about__features">
        <div className="about__features-content">
          <CTA text="01" />
             <Features
            head="Track company-wide progress"
            text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
          />
        </div>
        <div className="about__features-content">
          <CTA text="02" />
             <Features
            head="Advance built-in reports"
            text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
          />
        </div>
        <div className="about__features-content">
          <CTA text="03" />
             <Features
            head="Everything you need in one place"
            text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
          />
        </div>
      </div>
    </section>
  );
}

export default About;
