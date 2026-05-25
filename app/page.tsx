"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
            {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050816]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          
          <div className="text-sm font-light tracking-[0.25em] text-white">
            SEBASTIÁN MARTÍNEZ QUIÑONES
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-top bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/pngtree-abstract-network-of-light-connections-on-a-dark-background-image_17424111.jpg')",
        }}
      />

     
      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex min-h-screen items-center px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          
          {/* Left Side */}
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Cloud & DevOps Engineer
            </p>

            <h1 className="mb-8 text-6xl font-light leading-tight tracking-tight md:text-8xl">
              Sebastián
              <br />
              Martínez Q
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
              Building scalable infrastructure, automation and observability
              systems using AWS, Kubernetes and Terraform.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl" />

              {/* Profile Image */}
              <img
                src="/sebastian.png"
                alt="Sebastian Martinez"
                className="relative z-10 h-[420px] w-[420px] rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

            {/* About Section */}
      <section id="about" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-5xl">
          
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="mb-8 text-4xl font-light tracking-tight md:text-6xl">
            Focused on modern cloud infrastructure and scalable systems.
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Passionate about AWS, Kubernetes, Terraform and observability.
            I enjoy building reliable infrastructure, automating deployments
            and creating production-grade environments with clean and modern practices.
          </p>
        </div>
      </section>
            {/* Tech Stack */}
      <section className="relative z-10 px-8 py-24">
        <div className="mx-auto max-w-6xl">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Tech Stack
          </p>

          <h2 className="mb-12 text-5xl font-light tracking-tight">
            Technologies I work with.
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "AWS",
              "Kubernetes",
              "Terraform",
              "Docker",
              "Linux",
              "Prometheus",
              "Grafana",
              "GitHub Actions",
              "DNS",
              "PowerBI",
              "Python",
              "CI/CD",
              "Cloud Infrastructure",
              "MySQL/PostgreSQL",
              "TCP/IP Networking",
              "REST APIs",
              "Jira/Confluence",
              "Bash",

            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
              >
                {skill}
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-7xl">
          
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="mb-16 text-4xl font-light tracking-tight md:text-6xl">
            Real cloud infrastructure and deployment workflows.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Project 1 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
              
              <img
                src="/canary.png"
                alt="Canary Deployment"
                className="mb-6 h-48 w-full rounded-2xl object-cover opacity-90 transition-all duration-300 group-hover:opacity-100"
              />

              <h3 className="mb-4 text-2xl font-light">
                Canary Deployment on AWS EKS
              </h3>

              <p className="leading-relaxed text-gray-400">
                Blue/Green deployment strategy using AWS ALB weighted routing,
                Kubernetes ingress and real-time monitoring with Prometheus and Grafana.
              </p>
              <a
                href="https://github.com/sebastianfernandom33-ctrl/kubernetes-canary-deployment"
                target="_blank"
                className="mt-6 inline-flex items-center text-sm text-cyan-400 transition hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
              
              <img
                src="/kubernetes.png"
                alt="Terraform Infrastructure"
                className="mb-6 h-48 w-full rounded-2xl object-cover opacity-90 transition-all duration-300 group-hover:opacity-100"
              />

              <h3 className="mb-4 text-2xl font-light">
                Terraform AWS Infrastructure
              </h3>

              <p className="leading-relaxed text-gray-400">
                Provisioned scalable AWS infrastructure with Terraform including
                VPC, subnets, EKS cluster, node groups and networking resources.
              </p>
              <a
                href="https://github.com/sebastianfernandom33-ctrl/terraform-eks-infrastructure"
                target="_blank"
                className="mt-6 inline-flex items-center text-sm text-cyan-400 transition hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
              
              <img
              src="/grafana.png"
              alt="Grafana Monitoring"
              className="mb-6 h-48 w-full rounded-2xl object-cover opacity-90 transition-all duration-300 group-hover:opacity-100"
              />

              <h3 className="mb-4 text-2xl font-light">
                Monitoring & Observability Stack
              </h3>

              <p className="leading-relaxed text-gray-400">
                Implemented Prometheus and Grafana dashboards to visualize
                live traffic distribution, infrastructure metrics and deployment behavior.
              </p>
              <a
                href="https://github.com/sebastianfernandom33-ctrl/monitoring-observability-stack"
                target="_blank"
                className="mt-6 inline-flex items-center text-sm text-cyan-400 transition hover:text-cyan-300"
              >
                View Project →
              </a>
            </div>

          </div>
        </div>
      </section>
            {/* Contact Section */}
      <section id="contact" className="relative z-10 px-8 py-32">
        <div className="mx-auto max-w-4xl text-center">
          
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mb-8 text-5xl font-light tracking-tight">
            Let’s build something meaningful.
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400">
            Open to cloud engineering, DevOps and infrastructure opportunities.
          </p>

          <div className="flex justify-center gap-10 text-gray-300">

            <a
              href="https://www.linkedin.com/in/smartinez-in/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaLinkedin size={28} strokeWidth={1.5} />
            </a>

            <a
              href="https://github.com/sebastianfernandom33-ctrl/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaGithub size={28} strokeWidth={1.5} />
            </a>

            <a
              href="mailto:sebastianfernando.m33@gmail.com"
              className="transition duration-300 hover:scale-110 hover:text-cyan-400"
            >
              <FaEnvelope size={28} strokeWidth={1.5} />
            </a>

          </div>
        </div>
      </section>
            {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm text-gray-500">
          
          <p>
            Sebastián Martínez Quiñones © 2026
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </main>
  );
}