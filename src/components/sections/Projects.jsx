import { RevealOnScroll } from "../RevealOnScroll";
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow[0_0_20px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Ecommerce Agido</h3>
              <p className="text-gray-400 mb-4 min-h-50">
                Create and deploy a comprehensive full-stack e-commerce platform
                with an integrated Admin Dashboard using Next.js 14, Stripe for
                payment processing, TypeScript, MongoDB for complete database
                management, Clerk for authentication and user handling,
                React-Hook-Form for form validation, Tailwind CSS and Shadcn UI
                for a visually appealing and responsive user interface, and Next
                Cloudinary for image uploading and storage.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Next.js 14",
                  "Stripe",
                  "TypeScript",
                  "MongoDB",
                  "Clerk",
                  "React-Hook-Form",
                  "Tailwindcss",
                  "Shadcn UI",
                  "Next Cloudinary",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 space-x-4">
                <a
                  href="https://ecommerce-agido.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Shop Demo</span>
                </a>

                <a
                  href="https://admin-agido.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <span>Admin Demo</span>
                </a>
                <a
                  href="https://github.com/anguyen0501/ecommerce_agido"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow[0_0_20px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">ZepLao Chat App</h3>
              <p className="text-gray-400 mb-4 min-h-50">
                Build a Full Stack NEXT.js Real-time Chat Messaging App with
                fully complex functions by using Next.js, Next Auth for
                authentication, MongoDB for all database management, Pusher for
                Real-time messaging, React-Hook-Form for form validation,
                Tailwind CSS for a stunning UI design, and Next Cloudinary for
                image upload and storage.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Next.js 15",
                  "Next Auth",
                  "Javascript",
                  "MongoDB",
                  "Pusher",
                  "React-Hook-Form",
                  "Tailwindcss",
                  "Next Cloudinary",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 space-x-4">
                <a
                  href="https://zeplaochat.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Chat Demo</span>
                </a>
                <a
                  href="https://github.com/anguyen0501/zeplaochat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow[0_0_20px_rgba(59,130,246,0.1)] transition">
              <h3 className="text-xl font-bold mb-2">Ecommerce Web Basic</h3>
              <p className="text-gray-400 mb-4 min-h-50">
                This is a learning project for an e-commerce website called
                LINKKING (sometimes shown as AV Shop in the code). The site is
                designed for selling electronic products such as laptops,
                smartphones, tablets, and accessories. It features a modern,
                responsive interface with product detail pages, a shopping cart,
                user authentication (login/register), and an admin panel for
                product and user management.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "HTML",
                  "CSS",
                  "Javascript",
                  "PHP",
                  "MySQL",
                  "Font Awesome"
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm font-semibold hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4 space-x-4">
                <a
                  href="https://anguyen0501.github.io/ecommerse-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Website Demo</span>
                </a>
                <a
                  href="https://github.com/anguyen0501/ecommerse-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>GitHub Repo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
