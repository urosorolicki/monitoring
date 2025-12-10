import { useState } from 'react'
import { pipelineLogs } from '../data/dummyData'
import { CheckCircle, XCircle, Clock, Play, GitBranch, Package, Rocket } from 'lucide-react'

const CICD = () => {
  const [selectedStage, setSelectedStage] = useState(0)

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case 'failure':
        return <XCircle className="h-5 w-5 text-red-600" />
      case 'running':
        return <Clock className="h-5 w-5 text-blue-600 animate-spin" />
      default:
        return <Clock className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'failure':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'running':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getStageIcon = (stageName) => {
    if (stageName.toLowerCase().includes('build')) {
      return <Package className="h-5 w-5" />
    } else if (stageName.toLowerCase().includes('test')) {
      return <CheckCircle className="h-5 w-5" />
    } else if (stageName.toLowerCase().includes('docker')) {
      return <Package className="h-5 w-5" />
    } else if (stageName.toLowerCase().includes('deploy')) {
      return <Rocket className="h-5 w-5" />
    }
    return <Play className="h-5 w-5" />
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          CI/CD Pipeline
        </h1>
        <p className="text-lg text-gray-600">
          Automated build, test, and deployment pipeline using Jenkins for continuous delivery.
        </p>
      </div>

      {/* Pipeline overview */}
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <GitBranch className="h-6 w-6 text-primary-600" />
            Pipeline Execution: Build #247
          </h2>
          <div className="flex items-center gap-2">
            <span className="badge badge-success">
              <CheckCircle className="h-4 w-4 mr-1" />
              Success
            </span>
            <span className="text-sm text-gray-600">Duration: 8m 16s</span>
          </div>
        </div>

        {/* Pipeline stages visualization */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pipelineLogs.map((stage, index) => (
            <div key={index} className="flex items-center">
              <button
                onClick={() => setSelectedStage(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                  selectedStage === index
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : getStatusColor(stage.status)
                }`}
              >
                {getStatusIcon(stage.status)}
                <div className="text-left">
                  <div className="font-semibold text-sm">{stage.stage}</div>
                  <div className="text-xs opacity-75">{stage.duration}</div>
                </div>
              </button>
              {index < pipelineLogs.length - 1 && (
                <div className="w-4 h-0.5 bg-gray-300 mx-1"></div>
              )}
            </div>
          ))}
        </div>

        {/* Stage details */}
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {getStageIcon(pipelineLogs[selectedStage].stage)}
              {pipelineLogs[selectedStage].stage}
            </h3>
            <div className="flex items-center gap-3">
              <span className={`badge ${
                pipelineLogs[selectedStage].status === 'success' 
                  ? 'badge-success' 
                  : 'badge-error'
              }`}>
                {pipelineLogs[selectedStage].status}
              </span>
              <span className="text-sm text-gray-600">
                Duration: {pipelineLogs[selectedStage].duration}
              </span>
            </div>
          </div>

          {/* Log output */}
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
              {pipelineLogs[selectedStage].logs}
            </pre>
          </div>
        </div>
      </div>

      {/* Pipeline features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Package className="h-6 w-6 text-blue-600" />
            Build Process
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Maven Build:</strong> Compile source code, 
                resolve dependencies, and create executable JAR
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Dependency Check:</strong> Scan for vulnerable 
                dependencies using OWASP
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Artifact Creation:</strong> Package application 
                with all required resources
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            Testing Strategy
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Unit Tests:</strong> JUnit tests with 87% 
                code coverage threshold
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Integration Tests:</strong> Test service 
                interactions and database connectivity
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Performance Tests:</strong> Load testing to 
                ensure SLA requirements
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Package className="h-6 w-6 text-purple-600" />
            Containerization
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Docker Build:</strong> Multi-stage builds for 
                optimized image size
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Security Scan:</strong> Trivy scans for 
                vulnerabilities in base images
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Registry Push:</strong> Push to private 
                container registry with versioning
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-orange-600" />
            Deployment
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Rolling Update:</strong> Zero-downtime 
                deployment to Kubernetes
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Health Checks:</strong> Verify service 
                health before routing traffic
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5">✓</span>
              <div>
                <strong className="text-gray-900">Rollback:</strong> Automatic rollback on 
                deployment failures
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Pipeline metrics */}
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6">Pipeline Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98.5%</div>
            <div className="text-gray-600">Success Rate</div>
            <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8m 16s</div>
            <div className="text-gray-600">Avg Duration</div>
            <div className="text-xs text-gray-500 mt-1">Build to deploy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">247</div>
            <div className="text-gray-600">Total Builds</div>
            <div className="text-xs text-gray-500 mt-1">This month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15 min</div>
            <div className="text-gray-600">Time to Production</div>
            <div className="text-xs text-gray-500 mt-1">From commit</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CICD
