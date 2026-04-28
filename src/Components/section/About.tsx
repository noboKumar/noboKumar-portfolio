import React from "react";
import Heading from "../UI/Heading";
import Container from "../UI/Container";
import { aboutData } from "../../data/about";
import carttoonImg from "../../assets/nobokumar-laptop.png";
import TiltedCard from "../UI/TiltedCard";

const About = () => {
  return (
    <Container id="about" className="mt-20">
      <Heading text={aboutData.title} />

      <div className="mx-auto mt-12 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Left — cartoon image */}
        <TiltedCard
          imageSrc={(carttoonImg.src as any) || carttoonImg}
          altText="noboKumar"
          captionText="Full Stack Developer"
          containerHeight="500px"
          containerWidth="300px"
          imageHeight="400px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip
          displayOverlayContent
          overlayContent={
            <p className="tilted-card-demo-text p-5 text-gray-200 font-medium">Nobo Kumar</p>
          }
        />

        {/* Right — text content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* subtitle */}
          <p
            className="text-xl leading-snug font-semibold"
            style={{ color: "var(--color-primary)" }}
          >
            {aboutData.subtitle}
          </p>

          {/* paragraphs */}
          <div className="space-y-4">
            {aboutData.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-base leading-relaxed"
                style={{ color: "var(--color-secondary)" }}
              >
                {p.text
                  .split(new RegExp(`(${p.highlights.join("|")})`, "g"))
                  .map((part, i) =>
                    p.highlights.includes(part) ? (
                      <span
                        key={i}
                        className="font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {part}
                      </span>
                    ) : (
                      part
                    ),
                  )}
              </p>
            ))}
          </div>

          {/* divider */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.4), transparent)",
            }}
          />

          {/* call to action block */}
          <div
            className="rounded-2xl p-6"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)",
              border: "1px solid rgba(99,102,241,0.15)",
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-secondary)" }}
            >
              {aboutData.callToAction.text}
            </p>
            <p
              className="mt-2 text-lg font-bold"
              style={{
                background: "linear-gradient(90deg, #818cf8, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {aboutData.callToAction.highlight}
            </p>
          </div>

          {/* quick stat pills */}
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {[
              { label: "Projects Built", value: "12+" },
              { label: "Technologies", value: "15+" },
              { label: "Experience", value: "2+ yr" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl px-4 py-3 text-center"
                style={{
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(148,163,184,0.1)",
                  minWidth: 90,
                }}
              >
                <p
                  className="text-lg font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {value}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
