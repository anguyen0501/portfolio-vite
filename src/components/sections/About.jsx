import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
const About = () => {
  const frontendSkills = [
    { name: "React", icon: SiReact },
    { name: "NextJs", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
  ];
  const backendSkills = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            {" "}
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">
              I am a 4th-year student with 3 months of experience in ReactJs
              technologies. I have cultivated a passion for learning new
              technologies and delving into documentation. I love teamwork and
              tend to work well within a group. I am always eager to learn and
              grow in.
            </p>
            <div className="flex justify-center mb-6">
              <a 
                href="https://anguyen0501.github.io/my_cv/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-700 rounded-full text-white font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                See my CV
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-700 text-center bg-clip-text text-transparent">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map(({ name, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 transition"
                    >
                      <Icon className="mr-2 w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-700 text-center bg-clip-text text-transparent">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map(({ name, icon: Icon }) => (
                    <span
                      key={name}
                      className="flex items-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 transition"
                    >
                      <Icon className="mr-2 w-4 h-4" />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Studying Web Developer</strong> - University of
                  Transport Ho Chi Minh City (2020 - 2024)
                </li>
                <li>
                  Degree grade: <strong>Good</strong> - GPA 3.2/4.0
                </li>
                <li>
                  <strong>Toeic</strong> - 600/990 (2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
              <div className="space-y-4 text-grey-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Web Development Intern at ALTA Software (12/2024 - 02/2025)
                  </h4>
                  <p className="text-sm text-gray-400">
                    - Developed and maintained web applications using React and
                    Node.js.
                  </p>
                  <p className="text-sm text-gray-400">
                    - Assisted in building front-end components and integrating
                    RESTful APIs.
                  </p>
                  <h4 className="font-semibold">
                    {" "}
                    Web Development Freelancer (02/2025 - Present)
                  </h4>
                  <p className="text-sm text-gray-400">
                    - I have worked on several freelance projects, including:
                    Wordpress website development, ReactJs website development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
