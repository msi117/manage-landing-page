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
            text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nisi vel dignissimos facere labore magnam cumque porro aliquam veniam necessitatibus. "
          />
        </div>
        <div className="about__features-content">
          <CTA text="02" />
             <Features
            head="Track company-wide progress"
            text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nisi vel dignissimos facere labore magnam cumque porro aliquam veniam necessitatibus. "
          />
        </div>
        <div className="about__features-content">
          <CTA text="03" />
             <Features
            head="Track company-wide progress"
            text=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nisi vel dignissimos facere labore magnam cumque porro aliquam veniam necessitatibus. "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
