import { Server, Database, Cloud, Activity, GitBranch, Bell } from 'lucide-react'

const Architecture = () => {
  // Architecture components for the diagram
  const services = [
    { name: 'API Gateway', color: 'bg-blue-500', position: 'top-1/2 left-10' },
    { name: 'Auth Service', color: 'bg-green-500', position: 'top-1/4 left-1/3' },
    { name: 'User Service', color: 'bg-purple-500', position: 'top-1/2 left-1/3' },
    { name: 'Payment Service', color: 'bg-orange-500', position: 'top-3/4 left-1/3' },
  ]

  const infrastructure = [
    { name: 'Kubernetes', icon: <Cloud className="h-6 w-6" />, desc: 'Container Orchestration' },
    { name: 'Docker', icon: <Server className="h-6 w-6" />, desc: 'Containerization' },
    { name: 'Prometheus', icon: <Activity className="h-6 w-6" />, desc: 'Metrics Collection' },
    { name: 'Grafana', icon: <Activity className="h-6 w-6" />, desc: 'Visualization' },
    { name: 'Jenkins', icon: <GitBranch className="h-6 w-6" />, desc: 'CI/CD Pipeline' },
    { name: 'AlertManager', icon: <Bell className="h-6 w-6" />, desc: 'Alerting' },
  ]

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Microservices Architecture
        </h1>
        <p className="text-lg text-gray-600">
          A scalable, cloud-native architecture designed for high availability 
          and comprehensive observability.
        </p>
      </div>

      {/* Architecture diagram */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-6">System Architecture Diagram</h2>
        
        {/* Simplified architecture visualization */}
        <div className="bg-gray-50 rounded-lg p-8 min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Client/Load Balancer */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-6 w-full text-center shadow-lg">
                <Server className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold text-lg">Load Balancer</h3>
                <p className="text-xs mt-1 opacity-90">Nginx Ingress Controller</p>
                <div className="text-xs mt-3 bg-blue-700/30 rounded p-2">
                  <div className="font-semibold mb-1">Purpose:</div>
                  SSL termination, traffic distribution, health checks
                </div>
              </div>
              <div className="w-px h-12 bg-gray-400 my-2"></div>
              <div className="text-xs text-gray-600 font-semibold">→ Routes to →</div>
              <div className="w-px h-12 bg-gray-400 my-2"></div>
            </div>

            {/* API Gateway */}
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white rounded-lg p-6 w-full text-center shadow-lg">
                <Server className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-semibold text-lg">API Gateway</h3>
                <p className="text-xs mt-1 opacity-90">Spring Cloud Gateway</p>
                <div className="text-xs mt-3 bg-indigo-700/30 rounded p-2">
                  <div className="font-semibold mb-1">Purpose:</div>
                  Auth, rate limiting, request routing, API versioning
                </div>
              </div>
              <div className="w-px h-12 bg-gray-400 my-2"></div>
              <div className="text-xs text-gray-600 font-semibold">→ Distributes to →</div>
              <div className="w-px h-12 bg-gray-400 my-2"></div>
            </div>

            {/* Microservices */}
            <div className="flex flex-col space-y-4">
              <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg p-4 text-center shadow-lg">
                <Server className="h-6 w-6 mx-auto mb-1" />
                <h4 className="font-bold">Auth Service</h4>
                <span className="text-xs opacity-90 block mb-2">Port 8081 • JWT tokens</span>
                <div className="text-xs bg-green-700/30 rounded p-1.5">
                  Login, OAuth, session mgmt
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg p-4 text-center shadow-lg">
                <Server className="h-6 w-6 mx-auto mb-1" />
                <h4 className="font-bold">User Service</h4>
                <span className="text-xs opacity-90 block mb-2">Port 8082 • Profile API</span>
                <div className="text-xs bg-purple-700/30 rounded p-1.5">
                  User CRUD, preferences
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg p-4 text-center shadow-lg">
                <Server className="h-6 w-6 mx-auto mb-1" />
                <h4 className="font-bold">Payment Service</h4>
                <span className="text-xs opacity-90 block mb-2">Port 8083 • Stripe integration</span>
                <div className="text-xs bg-orange-700/30 rounded p-1.5">
                  Transactions, billing
                </div>
              </div>
            </div>

            {/* Data Layer */}
            <div className="flex flex-col space-y-4">
              <div className="bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg p-5 text-center shadow-lg">
                <Database className="h-7 w-7 mx-auto mb-2" />
                <h3 className="font-bold text-base">PostgreSQL</h3>
                <p className="text-xs mt-1 opacity-90 mb-2">Primary + Read Replicas</p>
                <div className="text-xs bg-red-700/30 rounded p-2">
                  <div className="font-semibold mb-1">Transactional Data:</div>
                  User accounts, payments, session data. ACID compliance.
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-300 to-cyan-600 text-white rounded-lg p-5 text-center shadow-lg">
                <Database className="h-7 w-7 mx-auto mb-2" />
                <h3 className="font-bold text-base">Snowflake</h3>
                <p className="text-xs mt-1 opacity-90 mb-2">Cloud Data Warehouse</p>
                <div className="text-xs bg-cyan-700/30 rounded p-2">
                  <div className="font-semibold mb-1">Analytics & SLOs:</div>
                  Historical metrics, SLO tracking, business intelligence queries.
                </div>
              </div>
            </div>
          </div>

          {/* Monitoring layer */}
          <div className="mt-8 pt-8 border-t-2 border-gray-300">
            <h3 className="text-center font-bold text-gray-800 mb-2 text-lg">
              Observability & Monitoring Layer
            </h3>
            <p className="text-center text-sm text-gray-600 mb-6">
              These tools continuously scrape metrics, visualize health, send alerts, and automate deployments
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg p-5 text-center shadow-md">
                <Activity className="h-7 w-7 mx-auto mb-2" />
                <h4 className="font-bold">Prometheus</h4>
                <p className="text-xs opacity-90 mb-2">Time-series Database</p>
                <div className="text-xs bg-yellow-700/30 rounded p-1.5">
                  Scrapes /metrics every 15s. Stores CPU, memory, latency, errors.
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-lg p-5 text-center shadow-md">
                <Activity className="h-7 w-7 mx-auto mb-2" />
                <h4 className="font-bold">Grafana</h4>
                <p className="text-xs opacity-90 mb-2">Visualization</p>
                <div className="text-xs bg-pink-700/30 rounded p-1.5">
                  Custom dashboards. Real-time charts. Team-shared views.
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg p-5 text-center shadow-md">
                <Bell className="h-7 w-7 mx-auto mb-2" />
                <h4 className="font-bold">AlertManager</h4>
                <p className="text-xs opacity-90 mb-2">Notifications</p>
                <div className="text-xs bg-teal-700/30 rounded p-1.5">
                  Routes to Slack/Sentry. Deduplicates. Silences during deploys.
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white rounded-lg p-5 text-center shadow-md">
                <GitBranch className="h-7 w-7 mx-auto mb-2" />
                <h4 className="font-bold">Jenkins</h4>
                <p className="text-xs opacity-90 mb-2">CI/CD Pipeline</p>
                <div className="text-xs bg-cyan-700/30 rounded p-1.5">
                  Build → Test → Docker → Deploy. Smoke tests gate rollout.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infrastructure components */}
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-6">Infrastructure Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructure.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-primary-600">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Server className="h-6 w-6 text-primary-600" />
            Microservices Design
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Independent deployment and scaling of services</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>API Gateway for centralized routing and security</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Service discovery and load balancing</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Circuit breakers for fault tolerance</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary-600" />
            Observability Stack
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Real-time metrics collection with Prometheus</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Visual dashboards in Grafana</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Distributed tracing for request flow analysis</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Centralized logging with ELK stack</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Cloud className="h-6 w-6 text-primary-600" />
            Container Orchestration
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Kubernetes for automated deployment and scaling</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Docker containers for consistent environments</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Health checks and self-healing capabilities</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Rolling updates with zero downtime</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-primary-600" />
            CI/CD Pipeline
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Automated build and test with Jenkins</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Docker image creation and registry push</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Automated deployment to Kubernetes</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Smoke tests and rollback on failures</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Architecture
