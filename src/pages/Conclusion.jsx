import { CheckCircle, TrendingUp, Zap, Shield, Clock, DollarSign, Users, Eye } from 'lucide-react'

const Conclusion = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Faster Problem Detection',
      description: 'Real-time monitoring catches issues before they impact users, reducing MTTR from hours to minutes.',
      metrics: ['95% faster incident detection', 'Real-time alerting'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Automated Deployment',
      description: 'CI/CD pipeline eliminates manual steps, reducing deployment time and human error.',
      metrics: ['10x faster deployments', '98.5% success rate'],
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Improved Reliability',
      description: 'Comprehensive monitoring and automated rollbacks ensure high availability and system stability.',
      metrics: ['99.9% uptime', 'Zero-downtime deploys'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Reduced Downtime',
      description: 'Proactive alerting and quick rollback capabilities minimize service disruption.',
      metrics: ['80% reduction in downtime', '15min MTTR'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'System Transparency',
      description: 'Complete visibility into system behavior, performance trends, and resource utilization.',
      metrics: ['End-to-end observability', 'Historical analysis'],
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Cost Optimization',
      description: 'Identify resource bottlenecks and optimize infrastructure spending based on actual usage.',
      metrics: ['30% cost reduction', 'Better resource allocation'],
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Enhanced Team Productivity',
      description: 'Automated workflows free developers to focus on features instead of operational tasks.',
      metrics: ['50% less manual work', 'More time for innovation'],
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Automated testing and continuous monitoring ensure high code quality and system health.',
      metrics: ['87% code coverage', 'Fewer production bugs'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ]

  const keyMetrics = [
    { label: 'System Uptime', value: '99.9%', change: '+0.5%' },
    { label: 'Deployment Frequency', value: '15/day', change: '+900%' },
    { label: 'Mean Time to Recovery', value: '15min', change: '-80%' },
    { label: 'Error Rate', value: '0.8%', change: '-60%' },
  ]

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Benefits & Interview Talking Points
        </h1>
        <p className="text-lg text-gray-600">
          Use these to wrap the demo: why this approach matters, what outcomes it delivers, and how you’d extend it.
        </p>
      </div>

      {/* Key metrics summary */}
      <div className="card bg-gradient-to-r from-primary-600 to-blue-600 text-white mb-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Impact Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm opacity-90 mb-1">{metric.label}</div>
              <div className="text-xs bg-white bg-opacity-20 rounded-full px-3 py-1 inline-block">
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits grid */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="card hover:scale-105 transition-transform duration-300">
              <div className={`${benefit.bgColor} ${benefit.color} p-3 rounded-lg inline-block mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {benefit.description}
              </p>
              <div className="space-y-1">
                {benefit.metrics.map((metric, idx) => (
                  <div key={idx} className="text-xs font-medium text-gray-700 bg-gray-50 px-2 py-1 rounded">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Revenue Protection:</strong> Faster incident 
                response prevents revenue loss from downtime
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Customer Satisfaction:</strong> Reliable 
                service with minimal disruption improves user experience
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Competitive Advantage:</strong> Faster 
                feature delivery enables quicker market response
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Risk Reduction:</strong> Automated testing 
                and monitoring reduce production incidents
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Technical Advantages</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Scalability:</strong> Kubernetes enables 
                automatic scaling based on demand
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Maintainability:</strong> Microservices 
                architecture allows independent service updates
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Debugging:</strong> Distributed tracing 
                and logging simplify troubleshooting
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Security:</strong> Automated security 
                scans in CI/CD pipeline catch vulnerabilities early
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Implementation roadmap */}
      <div className="card mb-8">
        <h3 className="text-2xl font-semibold mb-6">Implementation Roadmap</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">Foundation (Weeks 1-2)</h4>
              <p className="text-gray-600">Set up Kubernetes cluster, deploy monitoring stack (Prometheus, Grafana), configure basic alerting</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">Instrumentation (Weeks 3-4)</h4>
              <p className="text-gray-600">Add Micrometer to Spring Boot services, expose metrics endpoints, create custom dashboards in Grafana</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">CI/CD Pipeline (Weeks 5-6)</h4>
              <p className="text-gray-600">Configure Jenkins pipelines, set up automated testing, implement Docker image building and deployment</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-1">Integration & Testing (Weeks 7-8)</h4>
              <p className="text-gray-600">Integrate Slack and Sentry, fine-tune alert rules, conduct load testing, document runbooks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="card bg-gradient-to-r from-green-50 to-emerald-50">
        <h3 className="text-2xl font-semibold mb-4 text-center">Summary</h3>
        <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
          <p className="text-lg">
            This monitoring stack demonstrates production-ready observability: comprehensive instrumentation, automated delivery pipelines, and intelligent alerting that closes the feedback loop.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Reliability:</strong> p95 latency tracking and error rate monitoring ensure service quality. Health checks and rolling deployments minimize blast radius.</li>
            <li><strong>Speed:</strong> Automated CI/CD pipeline delivers changes from commit to production in minutes with built-in smoke tests.</li>
            <li><strong>Actionable Alerts:</strong> Prometheus alerting rules combined with Slack and Sentry integration provide targeted notifications without noise.</li>
            <li><strong>Future Enhancements:</strong> Distributed tracing with OpenTelemetry, formal SLO tracking, detailed runbooks, and chaos engineering practices.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Conclusion
