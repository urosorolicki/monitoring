import { useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-groovy'
import 'prismjs/components/prism-sql'
import { codeSnippets } from '../data/dummyData'
import { Copy, Check, Code2, FileCode } from 'lucide-react'

const CodeSnippets = () => {
  const [copiedIndex, setCopiedIndex] = useState(null)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const snippets = [
    {
      title: 'Spring Boot Metrics with Micrometer',
      description: 'Controller instrumented with Micrometer annotations for automatic metrics collection',
      language: 'java',
      code: codeSnippets.springBootMetrics,
      icon: <Code2 className="h-6 w-6" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Prometheus Scrape Configuration',
      description: 'Prometheus config for scraping metrics from microservices and Kubernetes',
      language: 'yaml',
      code: codeSnippets.prometheusConfig,
      icon: <FileCode className="h-6 w-6" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Snowflake Metrics Analytics',
      description: 'Load Prometheus metrics into Snowflake for historical analysis and SLO computation',
      language: 'sql',
      code: codeSnippets.snowflakeMetrics,
      icon: <FileCode className="h-6 w-6" />,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
    },
    {
      title: 'Jenkins Pipeline (Jenkinsfile)',
      description: 'Complete CI/CD pipeline definition with build, test, and deployment stages',
      language: 'groovy',
      code: codeSnippets.jenkinsfile,
      icon: <FileCode className="h-6 w-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Kubernetes Deployment Configuration',
      description: 'K8s deployment with health checks, resource limits, and Prometheus annotations',
      language: 'yaml',
      code: codeSnippets.kubernetesDeployment,
      icon: <FileCode className="h-6 w-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  const copyToClipboard = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Code Snippets
        </h1>
        <p className="text-lg text-gray-600">
          Production-ready code examples demonstrating monitoring, CI/CD, and deployment configurations.
        </p>
      </div>

      {/* Code snippets */}
      <div className="space-y-8">
        {snippets.map((snippet, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className={`${snippet.bgColor} ${snippet.color} p-3 rounded-lg`}>
                  {snippet.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {snippet.title}
                  </h2>
                  <p className="text-gray-600">
                    {snippet.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(snippet.code, index)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
                title="Copy to clipboard"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative">
              <div className="absolute top-3 right-3 px-3 py-1 bg-gray-700 rounded text-xs text-gray-300 font-mono">
                {snippet.language}
              </div>
              <pre className={`language-${snippet.language} rounded-lg overflow-x-auto max-h-96`}>
                <code className={`language-${snippet.language}`}>
                  {snippet.code}
                </code>
              </pre>
            </div>

            {/* Code explanation */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
              <div className="text-sm text-gray-600">
                {index === 0 && (
                  <ul className="space-y-1 list-disc list-inside">
                    <li>@Timed annotation for automatic latency tracking</li>
                    <li>Custom counters for business metrics</li>
                    <li>Percentile calculations (p50, p95, p99)</li>
                    <li>Error tracking with detailed classification</li>
                  </ul>
                )}
                {index === 1 && (
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Service discovery for dynamic endpoints</li>
                    <li>Kubernetes pod auto-discovery</li>
                    <li>Flexible relabeling for metric organization</li>
                    <li>Integration with Alertmanager</li>
                  </ul>
                )}
                {index === 2 && (
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Kubernetes-based build agents for scalability</li>
                    <li>Multi-stage pipeline with quality gates</li>
                    <li>Docker image building and registry push</li>
                    <li>Automated deployment with health checks</li>
                    <li>Slack notifications for build status</li>
                  </ul>
                )}
                {index === 3 && (
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Rolling update strategy for zero downtime</li>
                    <li>Liveness and readiness probes</li>
                    <li>Resource limits for stability</li>
                    <li>Prometheus annotations for scraping</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional resources */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 mt-8">
        <h2 className="text-2xl font-semibold mb-4">Implementation Notes</h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Micrometer Integration:</strong> Add the Micrometer Prometheus registry 
            dependency to Spring Boot and enable the actuator endpoint in application.properties.
          </p>
          <p>
            <strong>Prometheus Setup:</strong> Deploy Prometheus using the official Helm chart 
            or operator for Kubernetes. Configure service monitors for automatic discovery.
          </p>
          <p>
            <strong>Jenkins Configuration:</strong> Install required plugins: Kubernetes, Docker, 
            Pipeline, and configure cloud provider for dynamic agent provisioning.
          </p>
          <p>
            <strong>Best Practices:</strong> Always use semantic versioning, implement health checks, 
            set appropriate resource limits, and ensure proper secret management.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CodeSnippets
