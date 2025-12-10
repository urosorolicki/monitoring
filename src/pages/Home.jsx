import { Link } from 'react-router-dom'
import { Activity, GitBranch, BarChart3, Code, Bell, CheckCircle, ArrowRight } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Real-time Monitoring',
      description: 'Track system metrics and performance indicators in real-time with Prometheus and Grafana.',
      link: '/metrics',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: 'Microservices Architecture',
      description: 'Scalable and resilient microservices deployed on Kubernetes with Docker containers.',
      link: '/architecture',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: 'CI/CD Automation',
      description: 'Automated build, test, and deployment pipeline using Jenkins for continuous delivery.',
      link: '/cicd',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Production-Ready Code',
      description: 'Spring Boot services instrumented with Micrometer for comprehensive metrics collection.',
      link: '/code-snippets',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: 'Smart Alerting',
      description: 'Proactive incident detection and notification through Slack and Sentry integration.',
      link: '/alerting',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Business Benefits',
      description: 'Faster incident response, improved system reliability, and reduced downtime.',
      link: '/conclusion',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
  ]

  return (
    <div className="page-container">
      {/* Hero section */}
      <div className="text-center mb-16 relative">
        <div className="inline-block mb-6 px-5 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full">
          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
            Production-Ready Monitoring Stack
          </span>
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          System Observability &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 animate-gradient">
            Monitoring
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          A concise, show-and-tell walkthrough: architecture → metrics → CI/CD → alerting → code.
          Use this to narrate how you ship, observe, and recover.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/architecture" className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            Start the walkthrough
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/metrics" className="group bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2 hover:border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-200">
            Jump to metrics
            <BarChart3 className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-800 mb-2">99.9%</div>
          <div className="text-gray-700 font-semibold">System Uptime</div>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center border border-green-200 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-700 mb-2">45ms</div>
          <div className="text-gray-700 font-semibold">Avg Response Time</div>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-purple-800 mb-2">6</div>
          <div className="text-gray-700 font-semibold">Microservices</div>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl p-6 text-center border border-orange-200 hover:shadow-lg transition-shadow">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-amber-700 mb-2">24/7</div>
          <div className="text-gray-700 font-semibold">Monitoring</div>
        </div>
      </div>

      {/* Features grid */}
      <div className="mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group relative bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`${feature.bgColor} ${feature.color} p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Technology stack */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            'Spring Boot',
            'Prometheus',
            'Grafana',
            'Docker',
            'Kubernetes',
            'Jenkins',
            'Micrometer',
            'Slack',
            'Sentry',
            'React',
          ].map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center font-semibold text-gray-700 shadow-sm hover:shadow-md transition-shadow"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* CTA section with talk track */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Live demo flow (5–7 min)
        </h2>
        <div className="max-w-3xl mx-auto text-left bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-2xl p-8 mb-8 border border-gray-100">
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li className="leading-relaxed"><strong className="text-gray-900">Architecture:</strong> highlight services, ingress, Prometheus/Grafana, Jenkins, alerting.</li>
            <li className="leading-relaxed"><strong className="text-gray-900">Metrics:</strong> CPU/memory trends, latency buckets, error rate, service health.</li>
            <li className="leading-relaxed"><strong className="text-gray-900">CI/CD:</strong> Jenkins stages (build → test → image → deploy → smoke), logs.</li>
            <li className="leading-relaxed"><strong className="text-gray-900">Alerting:</strong> Slack/Sentry samples; filters by severity/status.</li>
            <li className="leading-relaxed"><strong className="text-gray-900">Code:</strong> Micrometer endpoint, Prometheus scrape, Snowflake analytics, Jenkinsfile, K8s deploy.</li>
          </ol>
        </div>
        <Link to="/architecture" className="btn-primary inline-flex items-center gap-2 text-lg">
          Start the walkthrough
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

export default Home
