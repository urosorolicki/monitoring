import { useState } from 'react'
import { alerts } from '../data/dummyData'
import { Bell, AlertTriangle, Info, AlertCircle, CheckCircle, Clock, MessageSquare, Bug } from 'lucide-react'

const Alerting = () => {
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterType, setFilterType] = useState('all')

  const getAlertIcon = (type) => {
    switch (type) {
      case 'critical':
        return <AlertCircle className="h-5 w-5" />
      case 'warning':
        return <AlertTriangle className="h-5 w-5" />
      case 'info':
        return <Info className="h-5 w-5" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-300'
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300'
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved':
        return 'badge-success'
      case 'investigating':
        return 'badge-warning'
      case 'acknowledged':
        return 'badge-info'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getChannelIcon = (channel) => {
    if (channel === 'slack') {
      return <MessageSquare className="h-4 w-4" />
    } else if (channel === 'sentry') {
      return <Bug className="h-4 w-4" />
    }
    return <Bell className="h-4 w-4" />
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const filteredAlerts = alerts.filter(alert => {
    if (filterStatus !== 'all' && alert.status !== filterStatus) return false
    if (filterType !== 'all' && alert.type !== filterType) return false
    return true
  })

  const alertStats = {
    total: alerts.length,
    critical: alerts.filter(a => a.type === 'critical').length,
    warning: alerts.filter(a => a.type === 'warning').length,
    resolved: alerts.filter(a => a.status === 'resolved').length,
  }

  return (
    <div className="page-container">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Alerting & Notifications
        </h1>
        <p className="text-lg text-gray-600">
          Real-time alerts from Prometheus, Grafana, and Sentry with Slack integration 
          for immediate incident response.
        </p>
      </div>

      {/* Alert statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Total Alerts</div>
            <Bell className="h-5 w-5 text-gray-600" />
          </div>
          <div className="text-3xl font-bold text-gray-900">{alertStats.total}</div>
          <div className="text-sm text-gray-600 mt-1">Last 24 hours</div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Critical</div>
            <AlertCircle className="h-5 w-5 text-red-600" />
          </div>
          <div className="text-3xl font-bold text-red-600">{alertStats.critical}</div>
          <div className="text-sm text-gray-600 mt-1">Requires attention</div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Warnings</div>
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
          </div>
          <div className="text-3xl font-bold text-yellow-600">{alertStats.warning}</div>
          <div className="text-sm text-gray-600 mt-1">Being monitored</div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-600">Resolved</div>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-3xl font-bold text-green-600">{alertStats.resolved}</div>
          <div className="text-sm text-gray-600 mt-1">Successfully handled</div>
        </div>
      </div>

      {/* Filters */}
      <div className="card mb-8">
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Status:
            </label>
            <div className="flex gap-2">
              {['all', 'resolved', 'investigating', 'acknowledged'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterStatus === status
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Type:
            </label>
            <div className="flex gap-2">
              {['all', 'critical', 'warning', 'info'].map(type => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filterType === type
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alerts list */}
      <div className="space-y-4 mb-8">
        {filteredAlerts.length === 0 ? (
          <div className="card text-center py-12">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No alerts found
            </h3>
            <p className="text-gray-600">
              All systems are operating normally or try adjusting your filters.
            </p>
          </div>
        ) : (
          filteredAlerts.map(alert => (
            <div
              key={alert.id}
              className={`border-2 rounded-lg p-6 ${getAlertColor(alert.type)} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    {getAlertIcon(alert.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold">
                        {alert.message}
                      </h3>
                      <span className={`badge ${getStatusColor(alert.status)}`}>
                        {alert.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm opacity-90">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {formatTimestamp(alert.timestamp)}
                      </span>
                      <span className="font-medium">{alert.service}</span>
                      <span className="flex items-center gap-1">
                        {getChannelIcon(alert.channel)}
                        {alert.channel}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-white bg-opacity-50 rounded">
                  {alert.source}
                </span>
              </div>

              <div className="ml-8 bg-white bg-opacity-50 rounded-lg p-4">
                <p className="text-sm leading-relaxed">{alert.details}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Alert configuration info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-primary-600" />
            Slack Integration
          </h3>
          <p className="text-gray-600 mb-4">
            Real-time notifications sent to dedicated Slack channels based on alert severity.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">🔴</span>
              <span><strong>Critical:</strong> #incidents channel with @here mention</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">🟡</span>
              <span><strong>Warning:</strong> #monitoring channel for team awareness</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">🔵</span>
              <span><strong>Info:</strong> #deployments channel for routine updates</span>
            </li>
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Bug className="h-6 w-6 text-purple-600" />
            Sentry Integration
          </h3>
          <p className="text-gray-600 mb-4">
            Application error tracking with detailed stack traces and context.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Automatic error grouping and deduplication</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Release tracking for version-specific issues</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Performance monitoring and transaction traces</span>
            </li>
          </ul>
        </div>

        <div className="card md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Bell className="h-6 w-6 text-orange-600" />
            Alert Rules & Thresholds
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Performance Alerts</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• CPU usage {'>'} 85% for 5 minutes</li>
                <li>• Memory usage {'>'} 90% for 3 minutes</li>
                <li>• Response time {'>'} 500ms (p95) for 2 minutes</li>
                <li>• Error rate {'>'} 5% for 1 minute</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Availability Alerts</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Service down or unreachable</li>
                <li>• Health check failures (3 consecutive)</li>
                <li>• Database connection pool exhaustion</li>
                <li>• Disk space {'<'} 10% remaining</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alerting
