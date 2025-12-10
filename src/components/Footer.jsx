import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About This Project</h3>
            <p className="text-sm leading-relaxed">
              A demonstration of modern system observability and monitoring practices using 
              industry-standard tools like Prometheus, Grafana, and Kubernetes.
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Technologies</h3>
            <ul className="text-sm space-y-2">
              <li>• Spring Boot & Micrometer</li>
              <li>• Prometheus & Grafana</li>
              <li>• Docker & Kubernetes</li>
              <li>• Jenkins CI/CD</li>
              <li>• Slack & Sentry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:devops@example.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
