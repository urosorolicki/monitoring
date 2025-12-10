import { Link } from 'react-router-dom'
import { Activity, GitBranch, BarChart3, Bell, Code, Rocket } from 'lucide-react'

const Pitch = () => {
  const flow = [
    {
      title: 'Architecture (90s)',
      detail: 'Spring Boot services on Kubernetes, Docker images, ingress, Prometheus/Grafana, Jenkins CI/CD, Slack/Sentry alerts.',
      link: '/architecture',
    },
    {
      title: 'Metrics (60s)',
      detail: 'CPU/memory trends, latency buckets, error rate, service health table. Talk SLO targets and alert thresholds.',
      link: '/metrics',
    },
    {
      title: 'CI/CD (60s)',
      detail: 'Jenkins stages: build → test → image → deploy → smoke. Emphasize rollback and gating tests.',
      link: '/cicd',
    },
    {
      title: 'Alerting (45s)',
      detail: 'Slack/Sentry samples, severity + status filters, how to avoid noisy alerts.',
      link: '/alerting',
    },
    {
      title: 'Code (45s)',
      detail: 'Micrometer endpoint, Prometheus scrape config, Jenkinsfile, K8s deploy. Mention OTel tracing as next step.',
      link: '/code-snippets',
    },
  ]

  const proofPoints = [
    'p95 latency visible; error rate trend and service health table.',
    'CI/CD time: minutes from commit to deploy with smoke tests.',
    'Alerts routed to Slack/Sentry; tuned for actionability.',
    'Deploys on Kubernetes with health checks and rolling updates.',
  ]

  return (
    <div className="page-container">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">5-Minute Pitch Guide</h1>
        <p className="text-lg text-gray-600">
          Quick script for the technical interview: architecture → metrics → CI/CD → alerting → code. Keep it concrete and show live.
        </p>
      </div>

      <div className="card mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary-600" />
          Flow (timeboxed)
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {flow.map((step, idx) => (
            <li key={idx} className="leading-relaxed">
              <div className="font-semibold text-gray-900">{step.title}</div>
              <div className="text-sm text-gray-700">{step.detail}</div>
              <Link to={step.link} className="text-primary-600 text-sm font-medium inline-flex items-center gap-1 mt-1">
                Jump
                <Rocket className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            What to prove
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            {proofPoints.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-green-600" />
            Metrics to quote
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>p95 latency and error rate trends.</li>
            <li>Deployment frequency and lead time.</li>
            <li>MTTR with alert-to-fix narrative.</li>
            <li>Uptime target (e.g., 99.9%) and how you enforce it.</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <Bell className="h-5 w-5 text-red-600" />
            Anticipated questions
          </h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
            <li>How do you prevent alert fatigue?</li>
            <li>Rollback story if deploy breaks prod?</li>
            <li>How do you onboard a new service to monitoring?</li>
            <li>What’s next? (OTel tracing, SLOs, runbooks).</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Code className="h-5 w-5 text-purple-600" />
          Quick links
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-medium text-primary-700">
          <Link to="/architecture" className="underline">Architecture</Link>
          <Link to="/metrics" className="underline">Metrics</Link>
          <Link to="/cicd" className="underline">CI/CD</Link>
          <Link to="/alerting" className="underline">Alerting</Link>
          <Link to="/code-snippets" className="underline">Code Snippets</Link>
          <Link to="/conclusion" className="underline">Benefits</Link>
        </div>
      </div>
    </div>
  )
}

export default Pitch
