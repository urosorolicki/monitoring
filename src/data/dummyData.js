// Metrics data for charts
export const metricsData = {
  // CPU usage over time (last 24 hours)
  cpuUsage: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'API Service',
        data: [45, 52, 48, 55, 62, 58, 65, 72, 68, 71, 75, 78, 82, 79, 76, 73, 68, 64, 58, 52, 48, 45, 42, 40],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Auth Service',
        data: [32, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 71, 68, 64, 60, 55, 50, 45, 40, 38, 35, 32, 30],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Database Service',
        data: [25, 28, 30, 32, 35, 38, 40, 43, 45, 48, 50, 52, 55, 52, 48, 45, 42, 38, 35, 32, 30, 28, 26, 25],
        borderColor: 'rgb(245, 158, 11)',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        tension: 0.4,
      },
    ],
  },

  // Memory usage
  memoryUsage: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Used Memory (GB)',
        data: [8.2, 8.5, 8.8, 9.2, 9.5, 9.8, 10.2, 10.5, 10.8, 11.2, 11.5, 11.8, 12.1, 11.8, 11.5, 11.2, 10.8, 10.5, 10.2, 9.8, 9.5, 9.2, 8.8, 8.5],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  },

  // Request latency distribution
  requestLatency: {
    labels: ['0-50ms', '50-100ms', '100-200ms', '200-500ms', '500-1000ms', '1000ms+'],
    datasets: [
      {
        label: 'Request Count',
        data: [45000, 28000, 15000, 8000, 3000, 1000],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(185, 28, 28, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(59, 130, 246)',
          'rgb(245, 158, 11)',
          'rgb(249, 115, 22)',
          'rgb(239, 68, 68)',
          'rgb(185, 28, 28)',
        ],
        borderWidth: 1,
      },
    ],
  },

  // Error rate over time
  errorRate: {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Error Rate (%)',
        data: [0.5, 0.6, 0.4, 0.7, 0.9, 1.2, 1.5, 1.8, 2.1, 1.9, 1.6, 1.3, 1.0, 0.8, 0.6, 0.5, 0.4, 0.3, 0.4, 0.5, 0.6, 0.5, 0.4, 0.3],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  },

  // Service health status
  serviceHealth: [
    { name: 'API Gateway', status: 'healthy', uptime: '99.98%', responseTime: '45ms' },
    { name: 'Auth Service', status: 'healthy', uptime: '99.99%', responseTime: '32ms' },
    { name: 'User Service', status: 'healthy', uptime: '99.95%', responseTime: '58ms' },
    { name: 'Payment Service', status: 'healthy', uptime: '99.92%', responseTime: '125ms' },
    { name: 'Notification Service', status: 'degraded', uptime: '99.85%', responseTime: '340ms' },
    { name: 'Database Primary', status: 'healthy', uptime: '99.99%', responseTime: '12ms' },
  ],
}

// CI/CD pipeline logs
export const pipelineLogs = [
  {
    stage: 'Build',
    status: 'success',
    duration: '2m 34s',
    logs: `[INFO] Scanning for projects...
[INFO] 
[INFO] -----------------< com.monitoring:api-service >-----------------
[INFO] Building API Service 1.0.0
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- maven-clean-plugin:3.2.0:clean (default-clean) @ api-service ---
[INFO] Deleting /app/target
[INFO] 
[INFO] --- maven-resources-plugin:3.3.0:resources (default-resources) @ api-service ---
[INFO] Copying 12 resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.11.0:compile (default-compile) @ api-service ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 45 source files to /app/target/classes
[INFO] 
[INFO] --- maven-surefire-plugin:2.22.2:test (default-test) @ api-service ---
[INFO] 
[INFO] -------------------------------------------------------
[INFO]  T E S T S
[INFO] -------------------------------------------------------
[INFO] Running com.monitoring.api.controller.HealthControllerTest
[INFO] Tests run: 5, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] --- maven-jar-plugin:3.3.0:jar (default-jar) @ api-service ---
[INFO] Building jar: /app/target/api-service-1.0.0.jar
[INFO] 
[INFO] BUILD SUCCESS
[INFO] Total time: 2m 34s`,
  },
  {
    stage: 'Test',
    status: 'success',
    duration: '3m 12s',
    logs: `[INFO] Running unit tests...
[INFO] 
[2024-03-15 10:23:45] INFO  Starting test suite execution
[2024-03-15 10:23:46] INFO  Test: UserServiceTest.testCreateUser - PASSED
[2024-03-15 10:23:46] INFO  Test: UserServiceTest.testUpdateUser - PASSED
[2024-03-15 10:23:47] INFO  Test: UserServiceTest.testDeleteUser - PASSED
[2024-03-15 10:23:47] INFO  Test: AuthServiceTest.testAuthenticate - PASSED
[2024-03-15 10:23:48] INFO  Test: AuthServiceTest.testAuthorize - PASSED
[2024-03-15 10:23:48] INFO  Test: MetricsControllerTest.testGetMetrics - PASSED
[INFO] 
[INFO] Running integration tests...
[2024-03-15 10:24:15] INFO  Test: ApiIntegrationTest.testEndToEndFlow - PASSED
[2024-03-15 10:24:45] INFO  Test: DatabaseIntegrationTest.testConnectivity - PASSED
[INFO] 
[INFO] Results:
[INFO] 
[INFO] Tests run: 28, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] Code Coverage: 87.5%
[INFO] TEST SUCCESS`,
  },
  {
    stage: 'Build Docker Image',
    status: 'success',
    duration: '1m 45s',
    logs: `[INFO] Building Docker image...
Sending build context to Docker daemon  52.48MB
Step 1/8 : FROM openjdk:17-jdk-alpine
 ---> 5e28ba2b4cdb
Step 2/8 : WORKDIR /app
 ---> Using cache
 ---> c7af7a8dbb58
Step 3/8 : COPY target/api-service-1.0.0.jar app.jar
 ---> 2f8a3c9d7e12
Step 4/8 : EXPOSE 8080
 ---> Running in 9a8b7c6d5e4f
 ---> 1e2d3c4b5a67
Step 5/8 : ENV JAVA_OPTS="-Xms512m -Xmx1024m"
 ---> Running in 8b9c7d6e5f4a
 ---> 6f7e8d9c0a1b
Step 6/8 : HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:8080/actuator/health || exit 1
 ---> Running in 7c8d9e0f1a2b
 ---> 0a1b2c3d4e5f
Step 7/8 : ENTRYPOINT ["java", "-jar", "/app/app.jar"]
 ---> Running in 1a2b3c4d5e6f
 ---> 5e6f7a8b9c0d
Successfully built 5e6f7a8b9c0d
Successfully tagged monitoring/api-service:1.0.0
[INFO] Pushing image to registry...
The push refers to repository [registry.example.com/monitoring/api-service]
1.0.0: digest: sha256:abc123def456 size: 2835`,
  },
  {
    stage: 'Deploy to Kubernetes',
    status: 'success',
    duration: '45s',
    logs: `[INFO] Deploying to Kubernetes cluster...
[INFO] Applying deployment configuration...
deployment.apps/api-service configured
service/api-service unchanged
[INFO] 
[INFO] Waiting for rollout to complete...
Waiting for deployment "api-service" rollout to finish: 0 of 3 updated replicas are available...
Waiting for deployment "api-service" rollout to finish: 1 of 3 updated replicas are available...
Waiting for deployment "api-service" rollout to finish: 2 of 3 updated replicas are available...
deployment "api-service" successfully rolled out
[INFO] 
[INFO] Current deployment status:
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
api-service   3/3     3            3           45s
[INFO] 
[INFO] DEPLOYMENT SUCCESS
[INFO] Application is now live at: https://api.monitoring-demo.example.com`,
  },
]

// Alert data
export const alerts = [
  {
    id: 1,
    type: 'critical',
    source: 'Prometheus',
    service: 'Payment Service',
    message: 'High error rate detected (>5%)',
    timestamp: '2024-03-15T14:23:45Z',
    status: 'resolved',
    channel: 'slack',
    details: 'Error rate spiked to 7.2% for 3 minutes. Root cause: Database connection pool exhaustion. Auto-scaled database replicas and issue resolved.',
  },
  {
    id: 2,
    type: 'warning',
    source: 'Grafana',
    service: 'Notification Service',
    message: 'Response time above threshold (>500ms)',
    timestamp: '2024-03-15T13:45:22Z',
    status: 'investigating',
    channel: 'slack',
    details: 'Average response time is 680ms, 36% above normal. Checking external email service provider status.',
  },
  {
    id: 3,
    type: 'info',
    source: 'Kubernetes',
    service: 'API Gateway',
    message: 'Pod restarted due to health check failure',
    timestamp: '2024-03-15T12:10:33Z',
    status: 'resolved',
    channel: 'sentry',
    details: 'Single pod restart. Health checks passed after restart. No service disruption detected.',
  },
  {
    id: 4,
    type: 'critical',
    source: 'Sentry',
    service: 'User Service',
    message: 'NullPointerException in UserController',
    timestamp: '2024-03-15T11:30:15Z',
    status: 'resolved',
    channel: 'sentry',
    details: 'Exception occurred when processing requests with missing user context. Fixed in version 1.2.3 and deployed.',
  },
  {
    id: 5,
    type: 'warning',
    source: 'Prometheus',
    service: 'Database Primary',
    message: 'High CPU usage (>80%)',
    timestamp: '2024-03-15T10:15:42Z',
    status: 'acknowledged',
    channel: 'slack',
    details: 'CPU usage at 85% during peak hours. Scheduled maintenance to optimize slow queries.',
  },
  {
    id: 6,
    type: 'info',
    source: 'Jenkins',
    service: 'CI/CD Pipeline',
    message: 'Deployment completed successfully',
    timestamp: '2024-03-15T09:45:10Z',
    status: 'resolved',
    channel: 'slack',
    details: 'Version 1.2.3 deployed to production. All health checks passing.',
  },
]

// Code snippets
export const codeSnippets = {
  springBootMetrics: `package com.monitoring.api.controller;

import io.micrometer.core.annotation.Timed;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    
    private final UserService userService;
    private final Counter userCreationCounter;
    private final MeterRegistry meterRegistry;
    
    public UserController(UserService userService, MeterRegistry meterRegistry) {
        this.userService = userService;
        this.meterRegistry = meterRegistry;
        // Custom counter for tracking user creation
        this.userCreationCounter = Counter.builder("users.created")
            .description("Total number of users created")
            .tag("service", "user-service")
            .register(meterRegistry);
    }
    
    /**
     * Create a new user with automatic metrics tracking
     * Tracks execution time and success/failure rates
     */
    @PostMapping
    @Timed(value = "users.create.time", 
           description = "Time taken to create a user",
           percentiles = {0.5, 0.95, 0.99})
    public ResponseEntity<User> createUser(@RequestBody UserRequest request) {
        try {
            User user = userService.createUser(request);
            
            // Increment custom counter
            userCreationCounter.increment();
            
            // Track additional metrics
            meterRegistry.gauge("users.total", userService.getTotalUserCount());
            
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            // Track errors
            meterRegistry.counter("users.create.errors",
                "error", e.getClass().getSimpleName()).increment();
            throw e;
        }
    }
    
    /**
     * Get user by ID with latency tracking
     */
    @GetMapping("/{id}")
    @Timed(value = "users.get.time", 
           description = "Time taken to fetch a user")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}`,

  prometheusConfig: `# Prometheus configuration for microservices monitoring
global:
  scrape_interval: 15s      # Scrape metrics every 15 seconds
  evaluation_interval: 15s  # Evaluate rules every 15 seconds
  external_labels:
    cluster: 'production'
    environment: 'prod'

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
            - alertmanager:9093

# Rule files for alerting
rule_files:
  - 'alerts/*.yml'

# Scrape configurations
scrape_configs:
  # API Service monitoring
  - job_name: 'api-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['api-service:8080']
        labels:
          service: 'api-service'
          tier: 'backend'
    
  # Auth Service monitoring  
  - job_name: 'auth-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['auth-service:8081']
        labels:
          service: 'auth-service'
          tier: 'backend'
          
  # User Service monitoring
  - job_name: 'user-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['user-service:8082']
        labels:
          service: 'user-service'
          tier: 'backend'
          
  # Kubernetes nodes monitoring
  - job_name: 'kubernetes-nodes'
    kubernetes_sd_configs:
      - role: node
    relabel_configs:
      - source_labels: [__address__]
        regex: '(.*):10250'
        replacement: '\${1}:9100'
        target_label: __address__
        
  # Kubernetes pods monitoring
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
        action: replace
        target_label: __metrics_path__
        regex: (.+)
      - source_labels: [__address__, __meta_kubernetes_pod_annotation_prometheus_io_port]
        action: replace
        regex: ([^:]+)(?::\\d+)?;(\\d+)
        replacement: \$1:\$2
        target_label: __address__`,

  jenkinsfile: `// Jenkins pipeline for CI/CD automation
@Library('shared-pipeline-library') _

pipeline {
    agent {
        kubernetes {
            label 'api-service-build'
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: maven
    image: maven:3.8-openjdk-17
    command: ['cat']
    tty: true
  - name: docker
    image: docker:24.0
    command: ['cat']
    tty: true
    volumeMounts:
    - name: docker-sock
      mountPath: /var/run/docker.sock
  volumes:
  - name: docker-sock
    hostPath:
      path: /var/run/docker.sock
"""
        }
    }
    
    environment {
        DOCKER_REGISTRY = 'registry.example.com'
        APP_NAME = 'api-service'
        NAMESPACE = 'production'
        SLACK_CHANNEL = '#deployments'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/company/api-service.git',
                    credentialsId: 'github-credentials'
            }
        }
        
        stage('Build') {
            steps {
                container('maven') {
                    sh '''
                        mvn clean package -DskipTests
                        echo "Build completed successfully"
                    '''
                }
            }
        }
        
        stage('Unit Tests') {
            steps {
                container('maven') {
                    sh '''
                        mvn test
                        mvn jacoco:report
                    '''
                }
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                    jacoco(
                        execPattern: 'target/jacoco.exec',
                        classPattern: 'target/classes',
                        sourcePattern: 'src/main/java'
                    )
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                container('maven') {
                    sh 'mvn verify -P integration-tests'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                container('docker') {
                    script {
                        def imageTag = "\${DOCKER_REGISTRY}/\${APP_NAME}:\${BUILD_NUMBER}"
                        sh """
                            docker build -t \${imageTag} .
                            docker tag \${imageTag} \${DOCKER_REGISTRY}/\${APP_NAME}:latest
                        """
                    }
                }
            }
        }
        
        stage('Push to Registry') {
            steps {
                container('docker') {
                    script {
                        docker.withRegistry("https://\${DOCKER_REGISTRY}", 'docker-credentials') {
                            sh """
                                docker push \${DOCKER_REGISTRY}/\${APP_NAME}:\${BUILD_NUMBER}
                                docker push \${DOCKER_REGISTRY}/\${APP_NAME}:latest
                            """
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        configs: 'k8s/deployment.yaml',
                        kubeconfigId: 'kubeconfig-prod',
                        enableConfigSubstitution: true
                    )
                    
                    // Wait for rollout to complete
                    sh """
                        kubectl rollout status deployment/\${APP_NAME} -n \${NAMESPACE}
                        kubectl get pods -n \${NAMESPACE} -l app=\${APP_NAME}
                    """
                }
            }
        }
        
        stage('Smoke Tests') {
            steps {
                sh '''
                    # Wait for service to be ready
                    sleep 30
                    
                    # Run smoke tests
                    curl -f https://api.example.com/actuator/health || exit 1
                    echo "Smoke tests passed"
                '''
            }
        }
    }
    
    post {
        success {
            slackSend(
                channel: SLACK_CHANNEL,
                color: 'good',
                message: "✅ Deployment successful: \${APP_NAME} v\${BUILD_NUMBER}\\nEnvironment: \${NAMESPACE}"
            )
        }
        failure {
            slackSend(
                channel: SLACK_CHANNEL,
                color: 'danger',
                message: "❌ Deployment failed: \${APP_NAME} v\${BUILD_NUMBER}\\nCheck: \${BUILD_URL}"
            )
        }
    }
}`,

  snowflakeMetrics: `-- Snowflake analytics for monitoring metrics
CREATE OR REPLACE PROCEDURE load_metrics_from_prometheus()
RETURNS STRING
LANGUAGE PYTHON
RUNTIME_VERSION = '3.8'
PACKAGES = ('requests')
HANDLER = 'load_metrics'
AS
$$
import requests
import json
from datetime import datetime

def load_metrics(session):
    # Query Prometheus for metrics
    prometheus_url = 'http://prometheus:9090'
    queries = {
        'cpu_usage': 'avg(rate(container_cpu_seconds_total[5m])) by (pod)',
        'memory_usage': 'avg(container_memory_usage_bytes) by (pod)',
        'request_latency': 'histogram_quantile(0.95, rate(request_duration_seconds_bucket[5m]))',
        'error_rate': 'sum(rate(errors_total[5m])) / sum(rate(requests_total[5m]))',
    }
    
    for metric_name, query in queries.items():
        response = requests.get(
            f'{prometheus_url}/api/v1/query',
            params={'query': query}
        )
        data = response.json()['data']['result']
        
        # Transform and load into Snowflake
        session.sql(f"""
            INSERT INTO metrics.{metric_name} 
            SELECT 
                '{metric_name}' as metric_type,
                '{datetime.utcnow().isoformat()}' as timestamp,
                labels,
                value
            FROM TABLE(FLATTEN(INPUT => PARSE_JSON(?)))
        """, [json.dumps(data)]).collect()
    
    return f'Successfully loaded metrics at {datetime.utcnow()}'

$$;

-- Query historical metrics and compute SLOs
SELECT 
    DATE_TRUNC('hour', timestamp) as hour,
    service,
    APPROX_PERCENTILE(latency_ms, 0.95) as p95_latency,
    SUM(CASE WHEN status_code >= 500 THEN 1 ELSE 0 END) / COUNT(*) as error_rate,
    COUNT(*) as request_count,
    CASE 
        WHEN APPROX_PERCENTILE(latency_ms, 0.95) <= 200 
             AND (SUM(CASE WHEN status_code >= 500 THEN 1 ELSE 0 END) / COUNT(*)) <= 0.01
        THEN 'SLO_MET'
        ELSE 'SLO_BREACH'
    END as slo_status
FROM metrics.request_logs
WHERE timestamp >= CURRENT_TIMESTAMP - INTERVAL '7 days'
GROUP BY 1, 2
ORDER BY hour DESC;`,

  kubernetesDeployment: `# Kubernetes deployment configuration
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
  namespace: production
  labels:
    app: api-service
    tier: backend
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  selector:
    matchLabels:
      app: api-service
  template:
    metadata:
      labels:
        app: api-service
        version: "1.0.0"
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "8080"
        prometheus.io/path: "/actuator/prometheus"
    spec:
      containers:
      - name: api-service
        image: registry.example.com/api-service:latest
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
          name: http
          protocol: TCP
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "production"
        - name: JAVA_OPTS
          value: "-Xms512m -Xmx1024m"
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 20
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: api-service
  namespace: production
spec:
  type: ClusterIP
  selector:
    app: api-service
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP`,
}
