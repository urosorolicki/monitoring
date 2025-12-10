import { useEffect, useRef } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { metricsData } from '../data/dummyData'
import { Activity, Cpu, HardDrive, Clock, AlertTriangle, TrendingUp } from 'lucide-react'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const Metrics = () => {
  // Chart options
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%'
          }
        }
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  }

  const memoryChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y + ' GB'
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 16,
        ticks: {
          callback: function(value) {
            return value + ' GB'
          }
        }
      },
    },
  }

  const latencyChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const errorRateOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value + '%'
          }
        }
      },
    },
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-50'
      case 'degraded':
        return 'text-yellow-600 bg-yellow-50'
      case 'critical':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          System Metrics Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          Real-time monitoring of system performance, resource utilization, and service health.
        </p>
      </div>

      {/* Key metrics summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Avg CPU Usage</div>
            <Cpu className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900">62.5%</div>
          <div className="text-sm text-green-600 flex items-center mt-1">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>Normal range</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Memory Usage</div>
            <HardDrive className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900">10.8 GB</div>
          <div className="text-sm text-gray-600 mt-1">
            of 16 GB (67.5%)
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Avg Response Time</div>
            <Clock className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900">85ms</div>
          <div className="text-sm text-green-600 flex items-center mt-1">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>Within SLA</span>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Error Rate</div>
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900">0.8%</div>
          <div className="text-sm text-green-600 flex items-center mt-1">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>Low</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* CPU Usage Chart */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Cpu className="h-6 w-6 text-blue-600" />
            CPU Usage (Last 24 Hours)
          </h3>
          <div className="h-80">
            <Line data={metricsData.cpuUsage} options={lineChartOptions} />
          </div>
        </div>

        {/* Memory Usage Chart */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <HardDrive className="h-6 w-6 text-purple-600" />
            Memory Usage (Last 24 Hours)
          </h3>
          <div className="h-80">
            <Line data={metricsData.memoryUsage} options={memoryChartOptions} />
          </div>
        </div>

        {/* Request Latency Distribution */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Clock className="h-6 w-6 text-green-600" />
            Request Latency Distribution
          </h3>
          <div className="h-80">
            <Bar data={metricsData.requestLatency} options={latencyChartOptions} />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            95th percentile: 185ms | 99th percentile: 420ms
          </p>
        </div>

        {/* Error Rate Chart */}
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            Error Rate (Last 24 Hours)
          </h3>
          <div className="h-80">
            <Line data={metricsData.errorRate} options={errorRateOptions} />
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Average error rate: 0.8% | Peak: 2.1%
          </p>
        </div>
      </div>

      {/* Service Health Status */}
      <div className="card">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary-600" />
          Service Health Status
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uptime
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Response Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {metricsData.serviceHealth.map((service, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {service.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {service.uptime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {service.responseTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Metrics explanation */}
      <div className="card bg-blue-50 mt-8">
        <h3 className="text-xl font-semibold mb-4">About These Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong className="text-gray-900">CPU & Memory:</strong> Tracked via Prometheus 
            node exporter and cAdvisor. Alerts trigger at 85% sustained usage.
          </div>
          <div>
            <strong className="text-gray-900">Response Time:</strong> Measured using Micrometer 
            @Timed annotations on Spring Boot endpoints.
          </div>
          <div>
            <strong className="text-gray-900">Error Rate:</strong> Calculated from HTTP 5xx 
            responses and application exceptions logged to Sentry.
          </div>
          <div>
            <strong className="text-gray-900">Service Health:</strong> Kubernetes liveness and 
            readiness probes combined with custom health indicators.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metrics
