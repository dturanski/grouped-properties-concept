SPRING_CONFIGURATION_METADATA={
  "groups": [
    {
      "name": "cloud.aws.credentials",
      "type": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.ContextCredentialsAutoConfiguration",
      "sourceMethod": "awsCredentialsProperties()"
    },
    {
      "name": "cloud.aws.loader",
      "type": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsS3ResourceLoaderProperties",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.ContextResourceLoaderAutoConfiguration",
      "sourceMethod": "awsS3ResourceLoaderProperties()"
    },
    {
      "name": "cloud.aws.region",
      "type": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsRegionProperties",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.ContextRegionProviderAutoConfiguration",
      "sourceMethod": "awsRegionProperties()"
    },
    {
      "name": "cloud.aws.stack",
      "type": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsStackProperties",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsStackProperties"
    },
    {
      "name": "file.consumer",
      "type": "org.springframework.cloud.fn.common.file.FileConsumerProperties",
      "sourceType": "org.springframework.cloud.fn.common.file.FileConsumerProperties"
    },
    {
      "name": "filter.function",
      "type": "org.springframework.cloud.fn.filter.FilterFunctionProperties",
      "sourceType": "org.springframework.cloud.fn.filter.FilterFunctionProperties"
    },
    {
      "name": "header.enricher",
      "type": "org.springframework.cloud.fn.header.enricher.HeaderEnricherFunctionProperties",
      "sourceType": "org.springframework.cloud.fn.header.enricher.HeaderEnricherFunctionProperties"
    },
    {
      "name": "logging",
      "type": "org.springframework.boot.context.logging.LoggingApplicationListener"
    },
    {
      "name": "management.endpoint.auditevents",
      "type": "org.springframework.boot.actuate.audit.AuditEventsEndpoint",
      "sourceType": "org.springframework.boot.actuate.audit.AuditEventsEndpoint"
    },
    {
      "name": "management.endpoint.beans",
      "type": "org.springframework.boot.actuate.beans.BeansEndpoint",
      "sourceType": "org.springframework.boot.actuate.beans.BeansEndpoint"
    },
    {
      "name": "management.endpoint.bindings",
      "type": "org.springframework.cloud.stream.endpoint.BindingsEndpoint",
      "sourceType": "org.springframework.cloud.stream.endpoint.BindingsEndpoint"
    },
    {
      "name": "management.endpoint.caches",
      "type": "org.springframework.boot.actuate.cache.CachesEndpoint",
      "sourceType": "org.springframework.boot.actuate.cache.CachesEndpoint"
    },
    {
      "name": "management.endpoint.channels",
      "type": "org.springframework.cloud.stream.endpoint.ChannelsEndpoint",
      "sourceType": "org.springframework.cloud.stream.endpoint.ChannelsEndpoint"
    },
    {
      "name": "management.endpoint.conditions",
      "type": "org.springframework.boot.actuate.autoconfigure.condition.ConditionsReportEndpoint",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.condition.ConditionsReportEndpoint"
    },
    {
      "name": "management.endpoint.configprops",
      "type": "org.springframework.boot.actuate.autoconfigure.context.properties.ConfigurationPropertiesReportEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.context.properties.ConfigurationPropertiesReportEndpointProperties"
    },
    {
      "name": "management.endpoint.env",
      "type": "org.springframework.boot.actuate.autoconfigure.env.EnvironmentEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.env.EnvironmentEndpointProperties"
    },
    {
      "name": "management.endpoint.flyway",
      "type": "org.springframework.boot.actuate.flyway.FlywayEndpoint",
      "sourceType": "org.springframework.boot.actuate.flyway.FlywayEndpoint"
    },
    {
      "name": "management.endpoint.health",
      "type": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties"
    },
    {
      "name": "management.endpoint.health.status",
      "type": "org.springframework.boot.actuate.autoconfigure.health.HealthProperties$Status",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties",
      "sourceMethod": "getStatus()"
    },
    {
      "name": "management.endpoint.heapdump",
      "type": "org.springframework.boot.actuate.management.HeapDumpWebEndpoint",
      "sourceType": "org.springframework.boot.actuate.management.HeapDumpWebEndpoint"
    },
    {
      "name": "management.endpoint.httptrace",
      "type": "org.springframework.boot.actuate.trace.http.HttpTraceEndpoint",
      "sourceType": "org.springframework.boot.actuate.trace.http.HttpTraceEndpoint"
    },
    {
      "name": "management.endpoint.info",
      "type": "org.springframework.boot.actuate.info.InfoEndpoint",
      "sourceType": "org.springframework.boot.actuate.info.InfoEndpoint"
    },
    {
      "name": "management.endpoint.integrationgraph",
      "type": "org.springframework.boot.actuate.integration.IntegrationGraphEndpoint",
      "sourceType": "org.springframework.boot.actuate.integration.IntegrationGraphEndpoint"
    },
    {
      "name": "management.endpoint.jolokia",
      "type": "org.springframework.boot.actuate.autoconfigure.jolokia.JolokiaProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.jolokia.JolokiaProperties"
    },
    {
      "name": "management.endpoint.liquibase",
      "type": "org.springframework.boot.actuate.liquibase.LiquibaseEndpoint",
      "sourceType": "org.springframework.boot.actuate.liquibase.LiquibaseEndpoint"
    },
    {
      "name": "management.endpoint.logfile",
      "type": "org.springframework.boot.actuate.autoconfigure.logging.LogFileWebEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.logging.LogFileWebEndpointProperties"
    },
    {
      "name": "management.endpoint.loggers",
      "type": "org.springframework.boot.actuate.logging.LoggersEndpoint",
      "sourceType": "org.springframework.boot.actuate.logging.LoggersEndpoint"
    },
    {
      "name": "management.endpoint.mappings",
      "type": "org.springframework.boot.actuate.web.mappings.MappingsEndpoint",
      "sourceType": "org.springframework.boot.actuate.web.mappings.MappingsEndpoint"
    },
    {
      "name": "management.endpoint.metrics",
      "type": "org.springframework.boot.actuate.metrics.MetricsEndpoint",
      "sourceType": "org.springframework.boot.actuate.metrics.MetricsEndpoint"
    },
    {
      "name": "management.endpoint.prometheus",
      "type": "org.springframework.boot.actuate.metrics.export.prometheus.PrometheusScrapeEndpoint",
      "sourceType": "org.springframework.boot.actuate.metrics.export.prometheus.PrometheusScrapeEndpoint"
    },
    {
      "name": "management.endpoint.scheduledtasks",
      "type": "org.springframework.boot.actuate.scheduling.ScheduledTasksEndpoint",
      "sourceType": "org.springframework.boot.actuate.scheduling.ScheduledTasksEndpoint"
    },
    {
      "name": "management.endpoint.sessions",
      "type": "org.springframework.boot.actuate.session.SessionsEndpoint",
      "sourceType": "org.springframework.boot.actuate.session.SessionsEndpoint"
    },
    {
      "name": "management.endpoint.shutdown",
      "type": "org.springframework.boot.actuate.context.ShutdownEndpoint",
      "sourceType": "org.springframework.boot.actuate.context.ShutdownEndpoint"
    },
    {
      "name": "management.endpoint.threaddump",
      "type": "org.springframework.boot.actuate.management.ThreadDumpEndpoint",
      "sourceType": "org.springframework.boot.actuate.management.ThreadDumpEndpoint"
    },
    {
      "name": "management.endpoints.jmx",
      "type": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties"
    },
    {
      "name": "management.endpoints.jmx.exposure",
      "type": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties$Exposure",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties",
      "sourceMethod": "getExposure()"
    },
    {
      "name": "management.endpoints.web",
      "type": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties"
    },
    {
      "name": "management.endpoints.web.cors",
      "type": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties"
    },
    {
      "name": "management.endpoints.web.exposure",
      "type": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties$Exposure",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties",
      "sourceMethod": "getExposure()"
    },
    {
      "name": "management.health.diskspace",
      "type": "org.springframework.boot.actuate.autoconfigure.system.DiskSpaceHealthIndicatorProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.system.DiskSpaceHealthIndicatorProperties"
    },
    {
      "name": "management.health.status",
      "type": "org.springframework.boot.actuate.autoconfigure.health.HealthIndicatorProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthIndicatorProperties"
    },
    {
      "name": "management.info",
      "type": "org.springframework.boot.actuate.autoconfigure.info.InfoContributorProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.info.InfoContributorProperties"
    },
    {
      "name": "management.info.git",
      "type": "org.springframework.boot.actuate.autoconfigure.info.InfoContributorProperties$Git",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.info.InfoContributorProperties",
      "sourceMethod": "getGit()"
    },
    {
      "name": "management.metrics",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties"
    },
    {
      "name": "management.metrics.distribution",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties",
      "sourceMethod": "getDistribution()"
    },
    {
      "name": "management.metrics.export.appoptics",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties"
    },
    {
      "name": "management.metrics.export.atlas",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties"
    },
    {
      "name": "management.metrics.export.cloudwatch",
      "type": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties"
    },
    {
      "name": "management.metrics.export.datadog",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties"
    },
    {
      "name": "management.metrics.export.dynatrace",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties"
    },
    {
      "name": "management.metrics.export.elastic",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties"
    },
    {
      "name": "management.metrics.export.ganglia",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties"
    },
    {
      "name": "management.metrics.export.graphite",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties"
    },
    {
      "name": "management.metrics.export.humio",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties"
    },
    {
      "name": "management.metrics.export.influx",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.jmx",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.jmx.JmxProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.jmx.JmxProperties"
    },
    {
      "name": "management.metrics.export.kairos",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties"
    },
    {
      "name": "management.metrics.export.newrelic",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties"
    },
    {
      "name": "management.metrics.export.prometheus",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties"
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties",
      "sourceMethod": "getPushgateway()"
    },
    {
      "name": "management.metrics.export.prometheus.rsocket",
      "type": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties"
    },
    {
      "name": "management.metrics.export.signalfx",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties"
    },
    {
      "name": "management.metrics.export.simple",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.simple.SimpleProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.simple.SimpleProperties"
    },
    {
      "name": "management.metrics.export.stackdriver",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties"
    },
    {
      "name": "management.metrics.export.statsd",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties"
    },
    {
      "name": "management.metrics.export.wavefront",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties"
    },
    {
      "name": "management.metrics.export.wavefront.sender",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties$Sender",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "sourceMethod": "getSender()"
    },
    {
      "name": "management.metrics.web",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties",
      "sourceMethod": "getWeb()"
    },
    {
      "name": "management.metrics.web.client",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Client",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web",
      "sourceMethod": "getClient()"
    },
    {
      "name": "management.metrics.web.client.request",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Client$ClientRequest",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Client",
      "sourceMethod": "getRequest()"
    },
    {
      "name": "management.metrics.web.client.request.autotime",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Client$ClientRequest",
      "sourceMethod": "getAutotime()"
    },
    {
      "name": "management.metrics.web.server",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web",
      "sourceMethod": "getServer()"
    },
    {
      "name": "management.metrics.web.server.request",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server$ServerRequest",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server",
      "sourceMethod": "getRequest()"
    },
    {
      "name": "management.metrics.web.server.request.autotime",
      "type": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server$ServerRequest",
      "sourceMethod": "getAutotime()"
    },
    {
      "name": "management.server",
      "type": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties"
    },
    {
      "name": "management.server.servlet",
      "type": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties$Servlet",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "management.server.ssl",
      "type": "org.springframework.boot.web.server.Ssl",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "management.trace.http",
      "type": "org.springframework.boot.actuate.autoconfigure.trace.http.HttpTraceProperties",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.trace.http.HttpTraceProperties"
    },
    {
      "name": "metadata.store",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties"
    },
    {
      "name": "metadata.store.dynamo-db",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceMethod": "getDynamoDb()"
    },
    {
      "name": "metadata.store.gemfire",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Gemfire",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceMethod": "getGemfire()"
    },
    {
      "name": "metadata.store.jdbc",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Jdbc",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceMethod": "getJdbc()"
    },
    {
      "name": "metadata.store.mongo-db",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Mongo",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceMethod": "getMongoDb()"
    },
    {
      "name": "metadata.store.redis",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Redis",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceMethod": "getRedis()"
    },
    {
      "name": "metadata.store.zookeeper",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Zookeeper",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties",
      "sourceMethod": "getZookeeper()"
    },
    {
      "name": "s3.common",
      "type": "org.springframework.cloud.fn.common.aws.s3.AmazonS3Properties",
      "sourceType": "org.springframework.cloud.fn.common.aws.s3.AmazonS3Properties"
    },
    {
      "name": "s3.supplier",
      "type": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties"
    },
    {
      "name": "server",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"
    },
    {
      "name": "server.compression",
      "type": "org.springframework.boot.web.server.Compression",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getCompression()"
    },
    {
      "name": "server.error",
      "type": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getError()"
    },
    {
      "name": "server.error.whitelabel",
      "type": "org.springframework.boot.autoconfigure.web.ErrorProperties$Whitelabel",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "sourceMethod": "getWhitelabel()"
    },
    {
      "name": "server.http2",
      "type": "org.springframework.boot.web.server.Http2",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getHttp2()"
    },
    {
      "name": "server.jetty",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getJetty()"
    },
    {
      "name": "server.jetty.accesslog",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "sourceMethod": "getAccesslog()"
    },
    {
      "name": "server.jetty.threads",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "sourceMethod": "getThreads()"
    },
    {
      "name": "server.netty",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Netty",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getNetty()"
    },
    {
      "name": "server.servlet",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "server.servlet.encoding",
      "type": "org.springframework.boot.web.servlet.server.Encoding",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet",
      "sourceMethod": "getEncoding()"
    },
    {
      "name": "server.servlet.jsp",
      "type": "org.springframework.boot.web.servlet.server.Jsp",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet",
      "sourceMethod": "getJsp()"
    },
    {
      "name": "server.servlet.session",
      "type": "org.springframework.boot.web.servlet.server.Session",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet",
      "sourceMethod": "getSession()"
    },
    {
      "name": "server.servlet.session.cookie",
      "type": "org.springframework.boot.web.servlet.server.Session$Cookie",
      "sourceType": "org.springframework.boot.web.servlet.server.Session",
      "sourceMethod": "getCookie()"
    },
    {
      "name": "server.ssl",
      "type": "org.springframework.boot.web.server.Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "server.tomcat",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getTomcat()"
    },
    {
      "name": "server.tomcat.accesslog",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "sourceMethod": "getAccesslog()"
    },
    {
      "name": "server.tomcat.mbeanregistry",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Mbeanregistry",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "sourceMethod": "getMbeanregistry()"
    },
    {
      "name": "server.tomcat.remoteip",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "sourceMethod": "getRemoteip()"
    },
    {
      "name": "server.tomcat.resource",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Resource",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "sourceMethod": "getResource()"
    },
    {
      "name": "server.tomcat.threads",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Threads",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "sourceMethod": "getThreads()"
    },
    {
      "name": "server.undertow",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "sourceMethod": "getUndertow()"
    },
    {
      "name": "server.undertow.accesslog",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "sourceMethod": "getAccesslog()"
    },
    {
      "name": "server.undertow.options",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Options",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "sourceMethod": "getOptions()"
    },
    {
      "name": "server.undertow.threads",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Threads",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "sourceMethod": "getThreads()"
    },
    {
      "name": "spel.function",
      "type": "org.springframework.cloud.fn.spel.SpelFunctionProperties",
      "sourceType": "org.springframework.cloud.fn.spel.SpelFunctionProperties"
    },
    {
      "name": "spring.activemq",
      "type": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties"
    },
    {
      "name": "spring.activemq.packages",
      "type": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties$Packages",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "sourceMethod": "getPackages()"
    },
    {
      "name": "spring.activemq.pool",
      "type": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.artemis",
      "type": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties"
    },
    {
      "name": "spring.artemis.embedded",
      "type": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties",
      "sourceMethod": "getEmbedded()"
    },
    {
      "name": "spring.artemis.pool",
      "type": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.batch",
      "type": "org.springframework.boot.autoconfigure.batch.BatchProperties",
      "sourceType": "org.springframework.boot.autoconfigure.batch.BatchProperties"
    },
    {
      "name": "spring.batch.job",
      "type": "org.springframework.boot.autoconfigure.batch.BatchProperties$Job",
      "sourceType": "org.springframework.boot.autoconfigure.batch.BatchProperties",
      "sourceMethod": "getJob()"
    },
    {
      "name": "spring.cache",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties"
    },
    {
      "name": "spring.cache.caffeine",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties$Caffeine",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceMethod": "getCaffeine()"
    },
    {
      "name": "spring.cache.couchbase",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties$Couchbase",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceMethod": "getCouchbase()"
    },
    {
      "name": "spring.cache.ehcache",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties$EhCache",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceMethod": "getEhcache()"
    },
    {
      "name": "spring.cache.infinispan",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties$Infinispan",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceMethod": "getInfinispan()"
    },
    {
      "name": "spring.cache.jcache",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties$JCache",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceMethod": "getJcache()"
    },
    {
      "name": "spring.cache.redis",
      "type": "org.springframework.boot.autoconfigure.cache.CacheProperties$Redis",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties",
      "sourceMethod": "getRedis()"
    },
    {
      "name": "spring.cloud.function",
      "type": "org.springframework.cloud.function.context.FunctionProperties",
      "sourceType": "org.springframework.cloud.function.context.FunctionProperties"
    },
    {
      "name": "spring.cloud.stream",
      "type": "org.springframework.cloud.stream.config.BindingServiceProperties",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties"
    },
    {
      "name": "spring.cloud.stream.function",
      "type": "org.springframework.cloud.stream.function.StreamFunctionProperties",
      "sourceType": "org.springframework.cloud.stream.function.StreamFunctionProperties"
    },
    {
      "name": "spring.cloud.stream.integration",
      "type": "org.springframework.cloud.stream.config.SpringIntegrationProperties",
      "sourceType": "org.springframework.cloud.stream.config.SpringIntegrationProperties"
    },
    {
      "name": "spring.cloud.stream.metrics",
      "type": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties",
      "sourceType": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties"
    },
    {
      "name": "spring.cloud.stream.poller",
      "type": "org.springframework.cloud.stream.config.DefaultPollerProperties",
      "sourceType": "org.springframework.cloud.stream.config.DefaultPollerProperties"
    },
    {
      "name": "spring.cloud.stream.rabbit",
      "type": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitExtendedBindingProperties",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitExtendedBindingProperties"
    },
    {
      "name": "spring.cloud.stream.rabbit.binder",
      "type": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties"
    },
    {
      "name": "spring.cloud.streamapp.security",
      "type": "org.springframework.cloud.stream.app.security.common.AppStarterWebSecurityAutoConfigurationProperties",
      "sourceType": "org.springframework.cloud.stream.app.security.common.AppStarterWebSecurityAutoConfigurationProperties"
    },
    {
      "name": "spring.codec",
      "type": "org.springframework.boot.autoconfigure.codec.CodecProperties",
      "sourceType": "org.springframework.boot.autoconfigure.codec.CodecProperties"
    },
    {
      "name": "spring.couchbase",
      "type": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties"
    },
    {
      "name": "spring.couchbase.env",
      "type": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Env",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties",
      "sourceMethod": "getEnv()"
    },
    {
      "name": "spring.couchbase.env.io",
      "type": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Io",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Env",
      "sourceMethod": "getIo()"
    },
    {
      "name": "spring.couchbase.env.ssl",
      "type": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Env",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.couchbase.env.timeouts",
      "type": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Env",
      "sourceMethod": "getTimeouts()"
    },
    {
      "name": "spring.data.cassandra",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties"
    },
    {
      "name": "spring.data.cassandra.connection",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Connection",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "sourceMethod": "getConnection()"
    },
    {
      "name": "spring.data.cassandra.pool",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Pool",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.data.cassandra.request",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Request",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "sourceMethod": "getRequest()"
    },
    {
      "name": "spring.data.cassandra.request.throttler",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Throttler",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Request",
      "sourceMethod": "getThrottler()"
    },
    {
      "name": "spring.data.couchbase",
      "type": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties",
      "sourceType": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive",
      "type": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.mongodb",
      "type": "org.springframework.boot.autoconfigure.mongo.MongoProperties",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.neo4j",
      "type": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties"
    },
    {
      "name": "spring.data.neo4j.embedded",
      "type": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties$Embedded",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties",
      "sourceMethod": "getEmbedded()"
    },
    {
      "name": "spring.data.rest",
      "type": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.solr",
      "type": "org.springframework.boot.autoconfigure.solr.SolrProperties",
      "sourceType": "org.springframework.boot.autoconfigure.solr.SolrProperties"
    },
    {
      "name": "spring.data.web",
      "type": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties"
    },
    {
      "name": "spring.data.web.pageable",
      "type": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties",
      "sourceMethod": "getPageable()"
    },
    {
      "name": "spring.data.web.sort",
      "type": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Sort",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties",
      "sourceMethod": "getSort()"
    },
    {
      "name": "spring.datasource",
      "type": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.dbcp2",
      "type": "org.apache.commons.dbcp2.BasicDataSource",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Dbcp2",
      "sourceMethod": "dataSource(org.springframework.boot.autoconfigure.jdbc.DataSourceProperties)"
    },
    {
      "name": "spring.datasource.hikari",
      "type": "com.zaxxer.hikari.HikariDataSource",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Hikari",
      "sourceMethod": "dataSource(org.springframework.boot.autoconfigure.jdbc.DataSourceProperties)"
    },
    {
      "name": "spring.datasource.tomcat",
      "type": "org.apache.tomcat.jdbc.pool.DataSource",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceConfiguration$Tomcat",
      "sourceMethod": "dataSource(org.springframework.boot.autoconfigure.jdbc.DataSourceProperties)"
    },
    {
      "name": "spring.datasource.xa",
      "type": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties$Xa",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "sourceMethod": "getXa()"
    },
    {
      "name": "spring.elasticsearch.rest",
      "type": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties",
      "sourceType": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties"
    },
    {
      "name": "spring.flyway",
      "type": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.freemarker",
      "type": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties"
    },
    {
      "name": "spring.groovy.template",
      "type": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties"
    },
    {
      "name": "spring.groovy.template.configuration",
      "type": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateAutoConfiguration$GroovyMarkupConfiguration",
      "sourceMethod": "groovyMarkupConfigurer(org.springframework.beans.factory.ObjectProvider<groovy.text.markup.MarkupTemplateEngine>)"
    },
    {
      "name": "spring.gson",
      "type": "org.springframework.boot.autoconfigure.gson.GsonProperties",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.h2.console",
      "type": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties",
      "sourceType": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties"
    },
    {
      "name": "spring.h2.console.settings",
      "type": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties$Settings",
      "sourceType": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties",
      "sourceMethod": "getSettings()"
    },
    {
      "name": "spring.hateoas",
      "type": "org.springframework.boot.autoconfigure.hateoas.HateoasProperties",
      "sourceType": "org.springframework.boot.autoconfigure.hateoas.HateoasProperties"
    },
    {
      "name": "spring.hazelcast",
      "type": "org.springframework.boot.autoconfigure.hazelcast.HazelcastProperties",
      "sourceType": "org.springframework.boot.autoconfigure.hazelcast.HazelcastProperties"
    },
    {
      "name": "spring.influx",
      "type": "org.springframework.boot.autoconfigure.influx.InfluxDbProperties",
      "sourceType": "org.springframework.boot.autoconfigure.influx.InfluxDbProperties"
    },
    {
      "name": "spring.info",
      "type": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties"
    },
    {
      "name": "spring.info.build",
      "type": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties$Build",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties",
      "sourceMethod": "getBuild()"
    },
    {
      "name": "spring.info.git",
      "type": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties$Git",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties",
      "sourceMethod": "getGit()"
    },
    {
      "name": "spring.integration",
      "type": "org.springframework.boot.autoconfigure.integration.IntegrationProperties",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties"
    },
    {
      "name": "spring.integration.jdbc",
      "type": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$Jdbc",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties",
      "sourceMethod": "getJdbc()"
    },
    {
      "name": "spring.integration.rsocket",
      "type": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties",
      "sourceMethod": "getRsocket()"
    },
    {
      "name": "spring.integration.rsocket.client",
      "type": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket$Client",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket",
      "sourceMethod": "getClient()"
    },
    {
      "name": "spring.integration.rsocket.server",
      "type": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket$Server",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket",
      "sourceMethod": "getServer()"
    },
    {
      "name": "spring.jackson",
      "type": "org.springframework.boot.autoconfigure.jackson.JacksonProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jdbc",
      "type": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties"
    },
    {
      "name": "spring.jdbc.template",
      "type": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties$Template",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties",
      "sourceMethod": "getTemplate()"
    },
    {
      "name": "spring.jersey",
      "type": "org.springframework.boot.autoconfigure.jersey.JerseyProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties"
    },
    {
      "name": "spring.jersey.filter",
      "type": "org.springframework.boot.autoconfigure.jersey.JerseyProperties$Filter",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties",
      "sourceMethod": "getFilter()"
    },
    {
      "name": "spring.jersey.servlet",
      "type": "org.springframework.boot.autoconfigure.jersey.JerseyProperties$Servlet",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "spring.jms",
      "type": "org.springframework.boot.autoconfigure.jms.JmsProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties"
    },
    {
      "name": "spring.jms.cache",
      "type": "org.springframework.boot.autoconfigure.jms.JmsProperties$Cache",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties",
      "sourceMethod": "getCache()"
    },
    {
      "name": "spring.jms.listener",
      "type": "org.springframework.boot.autoconfigure.jms.JmsProperties$Listener",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties",
      "sourceMethod": "getListener()"
    },
    {
      "name": "spring.jms.template",
      "type": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties",
      "sourceMethod": "getTemplate()"
    },
    {
      "name": "spring.jooq",
      "type": "org.springframework.boot.autoconfigure.jooq.JooqProperties",
      "sourceType": "org.springframework.boot.autoconfigure.jooq.JooqProperties"
    },
    {
      "name": "spring.jpa",
      "type": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties"
    },
    {
      "name": "spring.jpa.hibernate",
      "type": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties"
    },
    {
      "name": "spring.jpa.hibernate.naming",
      "type": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties$Naming",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties",
      "sourceMethod": "getNaming()"
    },
    {
      "name": "spring.jta",
      "type": "org.springframework.boot.autoconfigure.transaction.jta.JtaProperties",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.jta.JtaProperties"
    },
    {
      "name": "spring.jta.atomikos.connectionfactory",
      "type": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean"
    },
    {
      "name": "spring.jta.atomikos.datasource",
      "type": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean"
    },
    {
      "name": "spring.jta.atomikos.properties",
      "type": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties"
    },
    {
      "name": "spring.jta.atomikos.properties.recovery",
      "type": "org.springframework.boot.jta.atomikos.AtomikosProperties$Recovery",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "sourceMethod": "getRecovery()"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory",
      "type": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean"
    },
    {
      "name": "spring.jta.bitronix.datasource",
      "type": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.properties",
      "type": "bitronix.tm.Configuration",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.jta.BitronixJtaConfiguration",
      "sourceMethod": "bitronixConfiguration(org.springframework.boot.autoconfigure.transaction.jta.JtaProperties)"
    },
    {
      "name": "spring.kafka",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties"
    },
    {
      "name": "spring.kafka.admin",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Admin",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getAdmin()"
    },
    {
      "name": "spring.kafka.admin.security",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Admin",
      "sourceMethod": "getSecurity()"
    },
    {
      "name": "spring.kafka.admin.ssl",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Admin",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.kafka.consumer",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getConsumer()"
    },
    {
      "name": "spring.kafka.consumer.security",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer",
      "sourceMethod": "getSecurity()"
    },
    {
      "name": "spring.kafka.consumer.ssl",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.kafka.jaas",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Jaas",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getJaas()"
    },
    {
      "name": "spring.kafka.listener",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getListener()"
    },
    {
      "name": "spring.kafka.producer",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getProducer()"
    },
    {
      "name": "spring.kafka.producer.security",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer",
      "sourceMethod": "getSecurity()"
    },
    {
      "name": "spring.kafka.producer.ssl",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.kafka.security",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getSecurity()"
    },
    {
      "name": "spring.kafka.ssl",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.kafka.streams",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getStreams()"
    },
    {
      "name": "spring.kafka.streams.security",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams",
      "sourceMethod": "getSecurity()"
    },
    {
      "name": "spring.kafka.streams.ssl",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.kafka.template",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Template",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties",
      "sourceMethod": "getTemplate()"
    },
    {
      "name": "spring.ldap",
      "type": "org.springframework.boot.autoconfigure.ldap.LdapProperties",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.ldap.embedded",
      "type": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties"
    },
    {
      "name": "spring.ldap.embedded.credential",
      "type": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties$Credential",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties",
      "sourceMethod": "getCredential()"
    },
    {
      "name": "spring.ldap.embedded.validation",
      "type": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties$Validation",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties",
      "sourceMethod": "getValidation()"
    },
    {
      "name": "spring.lifecycle",
      "type": "org.springframework.boot.autoconfigure.context.LifecycleProperties",
      "sourceType": "org.springframework.boot.autoconfigure.context.LifecycleProperties"
    },
    {
      "name": "spring.liquibase",
      "type": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.mail",
      "type": "org.springframework.boot.autoconfigure.mail.MailProperties",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.messages",
      "type": "org.springframework.boot.autoconfigure.context.MessageSourceProperties",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceAutoConfiguration",
      "sourceMethod": "messageSourceProperties()"
    },
    {
      "name": "spring.mongodb.embedded",
      "type": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties"
    },
    {
      "name": "spring.mongodb.embedded.storage",
      "type": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties$Storage",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties",
      "sourceMethod": "getStorage()"
    },
    {
      "name": "spring.mustache",
      "type": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties"
    },
    {
      "name": "spring.mvc",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties"
    },
    {
      "name": "spring.mvc.async",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Async",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceMethod": "getAsync()"
    },
    {
      "name": "spring.mvc.contentnegotiation",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Contentnegotiation",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceMethod": "getContentnegotiation()"
    },
    {
      "name": "spring.mvc.format",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Format",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceMethod": "getFormat()"
    },
    {
      "name": "spring.mvc.pathmatch",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Pathmatch",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceMethod": "getPathmatch()"
    },
    {
      "name": "spring.mvc.servlet",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Servlet",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "spring.mvc.view",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$View",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "sourceMethod": "getView()"
    },
    {
      "name": "spring.quartz",
      "type": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties"
    },
    {
      "name": "spring.quartz.jdbc",
      "type": "org.springframework.boot.autoconfigure.quartz.QuartzProperties$Jdbc",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "sourceMethod": "getJdbc()"
    },
    {
      "name": "spring.r2dbc",
      "type": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties"
    },
    {
      "name": "spring.r2dbc.pool",
      "type": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties$Pool",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.rabbitmq",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.rabbitmq.cache",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "sourceMethod": "getCache()"
    },
    {
      "name": "spring.rabbitmq.cache.channel",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache$Channel",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache",
      "sourceMethod": "getChannel()"
    },
    {
      "name": "spring.rabbitmq.cache.connection",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache$Connection",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache",
      "sourceMethod": "getConnection()"
    },
    {
      "name": "spring.rabbitmq.listener",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Listener",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "sourceMethod": "getListener()"
    },
    {
      "name": "spring.rabbitmq.listener.direct",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Listener",
      "sourceMethod": "getDirect()"
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer",
      "sourceMethod": "getRetry()"
    },
    {
      "name": "spring.rabbitmq.listener.simple",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Listener",
      "sourceMethod": "getSimple()"
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer",
      "sourceMethod": "getRetry()"
    },
    {
      "name": "spring.rabbitmq.ssl",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "sourceMethod": "getSsl()"
    },
    {
      "name": "spring.rabbitmq.template",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "sourceMethod": "getTemplate()"
    },
    {
      "name": "spring.rabbitmq.template.retry",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Retry",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template",
      "sourceMethod": "getRetry()"
    },
    {
      "name": "spring.redis",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties"
    },
    {
      "name": "spring.redis.cluster",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Cluster",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "sourceMethod": "getCluster()"
    },
    {
      "name": "spring.redis.jedis",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Jedis",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "sourceMethod": "getJedis()"
    },
    {
      "name": "spring.redis.jedis.pool",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Jedis",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.redis.lettuce",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "sourceMethod": "getLettuce()"
    },
    {
      "name": "spring.redis.lettuce.cluster",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce$Cluster",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce",
      "sourceMethod": "getCluster()"
    },
    {
      "name": "spring.redis.lettuce.cluster.refresh",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce$Cluster$Refresh",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce$Cluster",
      "sourceMethod": "getRefresh()"
    },
    {
      "name": "spring.redis.lettuce.pool",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.redis.sentinel",
      "type": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Sentinel",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "sourceMethod": "getSentinel()"
    },
    {
      "name": "spring.resources",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties"
    },
    {
      "name": "spring.resources.cache",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties",
      "sourceMethod": "getCache()"
    },
    {
      "name": "spring.resources.cache.cachecontrol",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache",
      "sourceMethod": "getCachecontrol()"
    },
    {
      "name": "spring.resources.chain",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties$Chain",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties",
      "sourceMethod": "getChain()"
    },
    {
      "name": "spring.resources.chain.strategy",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties$Strategy",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Chain",
      "sourceMethod": "getStrategy()"
    },
    {
      "name": "spring.resources.chain.strategy.content",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties$Content",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Strategy",
      "sourceMethod": "getContent()"
    },
    {
      "name": "spring.resources.chain.strategy.fixed",
      "type": "org.springframework.boot.autoconfigure.web.ResourceProperties$Fixed",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Strategy",
      "sourceMethod": "getFixed()"
    },
    {
      "name": "spring.rsocket",
      "type": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties",
      "sourceType": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties"
    },
    {
      "name": "spring.rsocket.server",
      "type": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties$Server",
      "sourceType": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties",
      "sourceMethod": "getServer()"
    },
    {
      "name": "spring.security",
      "type": "org.springframework.boot.autoconfigure.security.SecurityProperties",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties"
    },
    {
      "name": "spring.security.filter",
      "type": "org.springframework.boot.autoconfigure.security.SecurityProperties$Filter",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties",
      "sourceMethod": "getFilter()"
    },
    {
      "name": "spring.security.oauth2.client",
      "type": "org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties"
    },
    {
      "name": "spring.security.oauth2.resourceserver",
      "type": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties"
    },
    {
      "name": "spring.security.oauth2.resourceserver.jwt",
      "type": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Jwt",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties",
      "sourceMethod": "getJwt()"
    },
    {
      "name": "spring.security.oauth2.resourceserver.opaquetoken",
      "type": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Opaquetoken",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties",
      "sourceMethod": "getOpaquetoken()"
    },
    {
      "name": "spring.security.saml2.relyingparty",
      "type": "org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties",
      "sourceType": "org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties"
    },
    {
      "name": "spring.security.user",
      "type": "org.springframework.boot.autoconfigure.security.SecurityProperties$User",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties",
      "sourceMethod": "getUser()"
    },
    {
      "name": "spring.sendgrid",
      "type": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties",
      "sourceType": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties"
    },
    {
      "name": "spring.sendgrid.proxy",
      "type": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties$Proxy",
      "sourceType": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties",
      "sourceMethod": "getProxy()"
    },
    {
      "name": "spring.servlet.multipart",
      "type": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties"
    },
    {
      "name": "spring.session",
      "type": "org.springframework.boot.autoconfigure.session.SessionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.session.SessionProperties"
    },
    {
      "name": "spring.session.hazelcast",
      "type": "org.springframework.boot.autoconfigure.session.HazelcastSessionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.session.HazelcastSessionProperties"
    },
    {
      "name": "spring.session.jdbc",
      "type": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties"
    },
    {
      "name": "spring.session.mongodb",
      "type": "org.springframework.boot.autoconfigure.session.MongoSessionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.session.MongoSessionProperties"
    },
    {
      "name": "spring.session.redis",
      "type": "org.springframework.boot.autoconfigure.session.RedisSessionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.session.RedisSessionProperties"
    },
    {
      "name": "spring.session.servlet",
      "type": "org.springframework.boot.autoconfigure.session.SessionProperties$Servlet",
      "sourceType": "org.springframework.boot.autoconfigure.session.SessionProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "spring.task.execution",
      "type": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties"
    },
    {
      "name": "spring.task.execution.pool",
      "type": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Pool",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.task.execution.shutdown",
      "type": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Shutdown",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties",
      "sourceMethod": "getShutdown()"
    },
    {
      "name": "spring.task.scheduling",
      "type": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties"
    },
    {
      "name": "spring.task.scheduling.pool",
      "type": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties$Pool",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties",
      "sourceMethod": "getPool()"
    },
    {
      "name": "spring.task.scheduling.shutdown",
      "type": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties$Shutdown",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties",
      "sourceMethod": "getShutdown()"
    },
    {
      "name": "spring.thymeleaf",
      "type": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties"
    },
    {
      "name": "spring.thymeleaf.reactive",
      "type": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Reactive",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "sourceMethod": "getReactive()"
    },
    {
      "name": "spring.thymeleaf.servlet",
      "type": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Servlet",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "spring.transaction",
      "type": "org.springframework.boot.autoconfigure.transaction.TransactionProperties",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.TransactionProperties"
    },
    {
      "name": "spring.webflux",
      "type": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties"
    },
    {
      "name": "spring.webflux.format",
      "type": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties$Format",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties",
      "sourceMethod": "getFormat()"
    },
    {
      "name": "spring.webservices",
      "type": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties",
      "sourceType": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties"
    },
    {
      "name": "spring.webservices.servlet",
      "type": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties$Servlet",
      "sourceType": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties",
      "sourceMethod": "getServlet()"
    },
    {
      "name": "task.launch.request",
      "type": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties",
      "sourceType": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties"
    }
  ],
  "properties": [
    {
      "name": "cloud.aws.credentials.access-key",
      "type": "java.lang.String",
      "description": "The access key to be used with a static provider.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties"
    },
    {
      "name": "cloud.aws.credentials.instance-profile",
      "type": "java.lang.Boolean",
      "description": "Configures an instance profile credentials provider with no further configuration.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties",
      "defaultValue": true
    },
    {
      "name": "cloud.aws.credentials.profile-name",
      "type": "java.lang.String",
      "description": "The AWS profile name.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties"
    },
    {
      "name": "cloud.aws.credentials.profile-path",
      "type": "java.lang.String",
      "description": "The AWS profile path.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties"
    },
    {
      "name": "cloud.aws.credentials.secret-key",
      "type": "java.lang.String",
      "description": "The secret key to be used with a static provider.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties"
    },
    {
      "name": "cloud.aws.credentials.use-default-aws-credentials-chain",
      "type": "java.lang.Boolean",
      "description": "Use the DefaultAWSCredentials Chain instead of configuring a custom credentials chain.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties",
      "defaultValue": false
    },
    {
      "name": "cloud.aws.loader.core-pool-size",
      "type": "java.lang.Integer",
      "description": "The core pool size of the Task Executor used for parallel S3 interaction. @see org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor#setCorePoolSize(int)",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsS3ResourceLoaderProperties",
      "defaultValue": 1
    },
    {
      "name": "cloud.aws.loader.max-pool-size",
      "type": "java.lang.Integer",
      "description": "The maximum pool size of the Task Executor used for parallel S3 interaction. @see org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor#setMaxPoolSize(int)",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsS3ResourceLoaderProperties"
    },
    {
      "name": "cloud.aws.loader.queue-capacity",
      "type": "java.lang.Integer",
      "description": "The maximum queue capacity for backed up S3 requests. @see org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor#setQueueCapacity(int)",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsS3ResourceLoaderProperties"
    },
    {
      "name": "cloud.aws.region.auto",
      "type": "java.lang.Boolean",
      "description": "Enables automatic region detection based on the EC2 meta data service.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsRegionProperties",
      "defaultValue": true
    },
    {
      "name": "cloud.aws.region.static",
      "type": "java.lang.String",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsRegionProperties"
    },
    {
      "name": "cloud.aws.region.use-default-aws-region-chain",
      "type": "java.lang.Boolean",
      "description": "Whether default AWS SDK region provider chain should be used when auto is set to true.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsRegionProperties",
      "defaultValue": false
    },
    {
      "name": "cloud.aws.stack.auto",
      "type": "java.lang.Boolean",
      "description": "Enables the automatic stack name detection for the application.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsStackProperties",
      "defaultValue": true
    },
    {
      "name": "cloud.aws.stack.name",
      "type": "java.lang.String",
      "description": "The name of the manually configured stack name that will be used to retrieve the resources.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.context.properties.AwsStackProperties"
    },
    {
      "name": "debug",
      "type": "java.lang.Boolean",
      "description": "Enable debug logs.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": false
    },
    {
      "name": "file.consumer.markers-json",
      "type": "java.lang.Boolean",
      "description": "When 'fileMarkers == true', specify if they should be produced as FileSplitter.FileMarker objects or JSON.",
      "sourceType": "org.springframework.cloud.fn.common.file.FileConsumerProperties",
      "defaultValue": true
    },
    {
      "name": "file.consumer.mode",
      "type": "org.springframework.cloud.fn.common.file.FileReadingMode",
      "description": "The FileReadingMode to use for file reading sources. Values are 'ref' - The File object, 'lines' - a message per line, or 'contents' - the contents as bytes.",
      "sourceType": "org.springframework.cloud.fn.common.file.FileConsumerProperties"
    },
    {
      "name": "file.consumer.with-markers",
      "type": "java.lang.Boolean",
      "description": "Set to true to emit start of file\/end of file marker messages before\/after the data. Only valid with FileReadingMode 'lines'.",
      "sourceType": "org.springframework.cloud.fn.common.file.FileConsumerProperties"
    },
    {
      "name": "filter.function.expression",
      "type": "org.springframework.expression.Expression",
      "description": "Boolean SpEL expression to apply against request message to filter.",
      "sourceType": "org.springframework.cloud.fn.filter.FilterFunctionProperties"
    },
    {
      "name": "header.enricher.headers",
      "type": "java.util.Properties",
      "description": "\\n separated properties representing headers in which values are SpEL expressions, e.g foo='bar' \\n baz=payload.baz.",
      "sourceType": "org.springframework.cloud.fn.header.enricher.HeaderEnricherFunctionProperties"
    },
    {
      "name": "header.enricher.overwrite",
      "type": "java.lang.Boolean",
      "description": "set to true to overwrite any existing message headers.",
      "sourceType": "org.springframework.cloud.fn.header.enricher.HeaderEnricherFunctionProperties",
      "defaultValue": false
    },
    {
      "name": "info",
      "type": "java.util.Map<java.lang.String,java.lang.Object>",
      "description": "Arbitrary properties to add to the info endpoint."
    },
    {
      "name": "logging.config",
      "type": "java.lang.String",
      "description": "Location of the logging configuration file. For instance, `classpath:logback.xml` for Logback.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener"
    },
    {
      "name": "logging.exception-conversion-word",
      "type": "java.lang.String",
      "description": "Conversion word used when logging exceptions.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "%wEx"
    },
    {
      "name": "logging.file.clean-history-on-start",
      "type": "java.lang.Boolean",
      "description": "Whether to clean the archive log files on startup. Only supported with the default logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": false
    },
    {
      "name": "logging.file.max-history",
      "type": "java.lang.Integer",
      "description": "Maximum number of days archive log files are kept. Only supported with the default logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": 7
    },
    {
      "name": "logging.file.max-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum log file size. Only supported with the default logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "10MB"
    },
    {
      "name": "logging.file.name",
      "type": "java.lang.String",
      "description": "Log file name (for instance, `myapp.log`). Names can be an exact location or relative to the current directory.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener"
    },
    {
      "name": "logging.file.path",
      "type": "java.lang.String",
      "description": "Location of the log file. For instance, `\/var\/log`.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener"
    },
    {
      "name": "logging.file.total-size-cap",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Total size of log backups to be kept. Only supported with the default logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "0B"
    },
    {
      "name": "logging.group",
      "type": "java.util.Map<java.lang.String,java.util.List<java.lang.String>>",
      "description": "Log groups to quickly change multiple loggers at the same time. For instance, `logging.group.db=org.hibernate,org.springframework.jdbc`.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener"
    },
    {
      "name": "logging.level",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Log levels severity mapping. For instance, `logging.level.org.springframework=DEBUG`.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener"
    },
    {
      "name": "logging.pattern.console",
      "type": "java.lang.String",
      "description": "Appender pattern for output to the console. Supported only with the default Logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "%clr(%d{${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}}){faint} %clr(${LOG_LEVEL_PATTERN:-%5p}) %clr(${PID:- }){magenta} %clr(---){faint} %clr([%15.15t]){faint} %clr(%-40.40logger{39}){cyan} %clr(:){faint} %m%n${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}"
    },
    {
      "name": "logging.pattern.dateformat",
      "type": "java.lang.String",
      "description": "Appender pattern for log date format. Supported only with the default Logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "yyyy-MM-dd HH:mm:ss.SSS"
    },
    {
      "name": "logging.pattern.file",
      "type": "java.lang.String",
      "description": "Appender pattern for output to a file. Supported only with the default Logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "%d{${LOG_DATEFORMAT_PATTERN:-yyyy-MM-dd HH:mm:ss.SSS}} ${LOG_LEVEL_PATTERN:-%5p} ${PID:- } --- [%t] %-40.40logger{39} : %m%n${LOG_EXCEPTION_CONVERSION_WORD:-%wEx}"
    },
    {
      "name": "logging.pattern.level",
      "type": "java.lang.String",
      "description": "Appender pattern for log level. Supported only with the default Logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "%5p"
    },
    {
      "name": "logging.pattern.rolling-file-name",
      "type": "java.lang.String",
      "description": "Pattern for rolled-over log file names. Supported only with the default Logback setup.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": "${LOG_FILE}.%d{yyyy-MM-dd}.%i.gz"
    },
    {
      "name": "logging.register-shutdown-hook",
      "type": "java.lang.Boolean",
      "description": "Register a shutdown hook for the logging system when it is initialized.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": false
    },
    {
      "name": "management.auditevents.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable storage of audit events.",
      "defaultValue": true
    },
    {
      "name": "management.cloudfoundry.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable extended Cloud Foundry actuator endpoints.",
      "defaultValue": true
    },
    {
      "name": "management.cloudfoundry.skip-ssl-validation",
      "type": "java.lang.Boolean",
      "description": "Whether to skip SSL verification for Cloud Foundry actuator endpoint security calls.",
      "defaultValue": false
    },
    {
      "name": "management.endpoint.auditevents.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.audit.AuditEventsEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.auditevents.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the auditevents endpoint.",
      "sourceType": "org.springframework.boot.actuate.audit.AuditEventsEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.beans.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.beans.BeansEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.beans.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the beans endpoint.",
      "sourceType": "org.springframework.boot.actuate.beans.BeansEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.bindings.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.cloud.stream.endpoint.BindingsEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.bindings.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the bindings endpoint.",
      "sourceType": "org.springframework.cloud.stream.endpoint.BindingsEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.caches.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.cache.CachesEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.caches.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the caches endpoint.",
      "sourceType": "org.springframework.boot.actuate.cache.CachesEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.channels.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.cloud.stream.endpoint.ChannelsEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.channels.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the channels endpoint.",
      "sourceType": "org.springframework.cloud.stream.endpoint.ChannelsEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.conditions.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.condition.ConditionsReportEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.conditions.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the conditions endpoint.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.condition.ConditionsReportEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.configprops.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.context.properties.ConfigurationPropertiesReportEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.configprops.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the configprops endpoint.",
      "sourceType": "org.springframework.boot.actuate.context.properties.ConfigurationPropertiesReportEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.configprops.keys-to-sanitize",
      "type": "java.lang.String[]",
      "description": "Keys that should be sanitized. Keys can be simple strings that the property ends with or regular expressions.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.context.properties.ConfigurationPropertiesReportEndpointProperties",
      "defaultValue": [
        "password",
        "secret",
        "key",
        "token",
        ".*credentials.*",
        "vcap_services",
        "sun.java.command"
      ]
    },
    {
      "name": "management.endpoint.env.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.env.EnvironmentEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.env.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the env endpoint.",
      "sourceType": "org.springframework.boot.actuate.env.EnvironmentEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.env.keys-to-sanitize",
      "type": "java.lang.String[]",
      "description": "Keys that should be sanitized. Keys can be simple strings that the property ends with or regular expressions.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.env.EnvironmentEndpointProperties",
      "defaultValue": [
        "password",
        "secret",
        "key",
        "token",
        ".*credentials.*",
        "vcap_services",
        "sun.java.command"
      ]
    },
    {
      "name": "management.endpoint.flyway.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.flyway.FlywayEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.flyway.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the flyway endpoint.",
      "sourceType": "org.springframework.boot.actuate.flyway.FlywayEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.health.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.health.HealthEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.health.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the health endpoint.",
      "sourceType": "org.springframework.boot.actuate.health.HealthEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.health.group",
      "type": "java.util.Map<java.lang.String,org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties$Group>",
      "description": "Health endpoint groups.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties"
    },
    {
      "name": "management.endpoint.health.probes.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable liveness and readiness probes.",
      "defaultValue": false
    },
    {
      "name": "management.endpoint.health.roles",
      "type": "java.util.Set<java.lang.String>",
      "description": "Roles used to determine whether or not a user is authorized to be shown details. When empty, all authenticated users are authorized.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties"
    },
    {
      "name": "management.endpoint.health.show-components",
      "type": "org.springframework.boot.actuate.autoconfigure.health.HealthProperties$Show",
      "description": "When to show components. If not specified the 'show-details' setting will be used.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties"
    },
    {
      "name": "management.endpoint.health.show-details",
      "type": "org.springframework.boot.actuate.autoconfigure.health.HealthProperties$Show",
      "description": "When to show full health details.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthEndpointProperties",
      "defaultValue": "never"
    },
    {
      "name": "management.endpoint.health.status.http-mapping",
      "type": "java.util.Map<java.lang.String,java.lang.Integer>",
      "description": "Mapping of health statuses to HTTP status codes. By default, registered health statuses map to sensible defaults (for example, UP maps to 200).",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthProperties$Status"
    },
    {
      "name": "management.endpoint.health.status.order",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of health statuses in order of severity.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthProperties$Status",
      "defaultValue": [
        "DOWN",
        "OUT_OF_SERVICE",
        "UP",
        "UNKNOWN"
      ]
    },
    {
      "name": "management.endpoint.heapdump.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.management.HeapDumpWebEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.heapdump.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the heapdump endpoint.",
      "sourceType": "org.springframework.boot.actuate.management.HeapDumpWebEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.httptrace.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.trace.http.HttpTraceEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.httptrace.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the httptrace endpoint.",
      "sourceType": "org.springframework.boot.actuate.trace.http.HttpTraceEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.info.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.info.InfoEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.info.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the info endpoint.",
      "sourceType": "org.springframework.boot.actuate.info.InfoEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.integrationgraph.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.integration.IntegrationGraphEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.integrationgraph.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the integrationgraph endpoint.",
      "sourceType": "org.springframework.boot.actuate.integration.IntegrationGraphEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.jolokia.config",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Jolokia settings. Refer to the documentation of Jolokia for more details.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.jolokia.JolokiaProperties"
    },
    {
      "name": "management.endpoint.jolokia.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the jolokia endpoint.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.jolokia.JolokiaEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.liquibase.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.liquibase.LiquibaseEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.liquibase.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the liquibase endpoint.",
      "sourceType": "org.springframework.boot.actuate.liquibase.LiquibaseEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.logfile.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.logging.LogFileWebEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.logfile.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the logfile endpoint.",
      "sourceType": "org.springframework.boot.actuate.logging.LogFileWebEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.logfile.external-file",
      "type": "java.io.File",
      "description": "External Logfile to be accessed. Can be used if the logfile is written by output redirect and not by the logging system itself.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.logging.LogFileWebEndpointProperties"
    },
    {
      "name": "management.endpoint.loggers.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.logging.LoggersEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.loggers.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the loggers endpoint.",
      "sourceType": "org.springframework.boot.actuate.logging.LoggersEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.mappings.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.web.mappings.MappingsEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.mappings.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the mappings endpoint.",
      "sourceType": "org.springframework.boot.actuate.web.mappings.MappingsEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.metrics.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.metrics.MetricsEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.metrics.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the metrics endpoint.",
      "sourceType": "org.springframework.boot.actuate.metrics.MetricsEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.prometheus.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.metrics.export.prometheus.PrometheusScrapeEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.prometheus.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the prometheus endpoint.",
      "sourceType": "org.springframework.boot.actuate.metrics.export.prometheus.PrometheusScrapeEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.scheduledtasks.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.scheduling.ScheduledTasksEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.scheduledtasks.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the scheduledtasks endpoint.",
      "sourceType": "org.springframework.boot.actuate.scheduling.ScheduledTasksEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.sessions.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the sessions endpoint.",
      "sourceType": "org.springframework.boot.actuate.session.SessionsEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoint.shutdown.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the shutdown endpoint.",
      "sourceType": "org.springframework.boot.actuate.context.ShutdownEndpoint",
      "defaultValue": false
    },
    {
      "name": "management.endpoint.threaddump.cache.time-to-live",
      "type": "java.time.Duration",
      "description": "Maximum time that a response can be cached.",
      "sourceType": "org.springframework.boot.actuate.management.ThreadDumpEndpoint",
      "defaultValue": "0ms"
    },
    {
      "name": "management.endpoint.threaddump.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the threaddump endpoint.",
      "sourceType": "org.springframework.boot.actuate.management.ThreadDumpEndpoint",
      "defaultValue": true
    },
    {
      "name": "management.endpoints.enabled-by-default",
      "type": "java.lang.Boolean",
      "description": "Whether to enable or disable all endpoints by default."
    },
    {
      "name": "management.endpoints.jmx.domain",
      "type": "java.lang.String",
      "description": "Endpoints JMX domain name. Fallback to 'spring.jmx.default-domain' if set.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties",
      "defaultValue": "org.springframework.boot"
    },
    {
      "name": "management.endpoints.jmx.exposure.exclude",
      "type": "java.util.Set<java.lang.String>",
      "description": "Endpoint IDs that should be excluded or '*' for all.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties$Exposure"
    },
    {
      "name": "management.endpoints.jmx.exposure.include",
      "type": "java.util.Set<java.lang.String>",
      "description": "Endpoint IDs that should be included or '*' for all.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties$Exposure",
      "defaultValue": "*"
    },
    {
      "name": "management.endpoints.jmx.static-names",
      "type": "java.util.Properties",
      "description": "Additional static properties to append to all ObjectNames of MBeans representing Endpoints.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.jmx.JmxEndpointProperties"
    },
    {
      "name": "management.endpoints.migrate-legacy-ids",
      "type": "java.lang.Boolean",
      "description": "Whether to transparently migrate legacy endpoint IDs.",
      "defaultValue": false
    },
    {
      "name": "management.endpoints.web.base-path",
      "type": "java.lang.String",
      "description": "Base path for Web endpoints. Relative to server.servlet.context-path or management.server.servlet.context-path if management.server.port is configured.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties",
      "defaultValue": "\/actuator"
    },
    {
      "name": "management.endpoints.web.cors.allow-credentials",
      "type": "java.lang.Boolean",
      "description": "Whether credentials are supported. When not set, credentials are not supported.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties"
    },
    {
      "name": "management.endpoints.web.cors.allowed-headers",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of headers to allow in a request. '*' allows all headers.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties"
    },
    {
      "name": "management.endpoints.web.cors.allowed-methods",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of methods to allow. '*' allows all methods. When not set, defaults to GET.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties"
    },
    {
      "name": "management.endpoints.web.cors.allowed-origins",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of origins to allow. '*' allows all origins. When not set, CORS support is disabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties"
    },
    {
      "name": "management.endpoints.web.cors.exposed-headers",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of headers to include in a response.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties"
    },
    {
      "name": "management.endpoints.web.cors.max-age",
      "type": "java.time.Duration",
      "description": "How long the response from a pre-flight request can be cached by clients. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.CorsEndpointProperties",
      "defaultValue": "1800s"
    },
    {
      "name": "management.endpoints.web.exposure.exclude",
      "type": "java.util.Set<java.lang.String>",
      "description": "Endpoint IDs that should be excluded or '*' for all.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties$Exposure"
    },
    {
      "name": "management.endpoints.web.exposure.include",
      "type": "java.util.Set<java.lang.String>",
      "description": "Endpoint IDs that should be included or '*' for all.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties$Exposure",
      "defaultValue": [
        "health",
        "info"
      ]
    },
    {
      "name": "management.endpoints.web.path-mapping",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Mapping between endpoint IDs and the path that should expose them.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.endpoint.web.WebEndpointProperties"
    },
    {
      "name": "management.health.binders.enabled",
      "type": "java.lang.Boolean",
      "description": "Allows to enable\/disable binder's' health indicators. If you want to disable health indicator completely, then set it to `false`.",
      "defaultValue": "true"
    },
    {
      "name": "management.health.cassandra.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Cassandra health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.couchbase.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Couchbase health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.db.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable database health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.defaults.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable default health indicators.",
      "defaultValue": true
    },
    {
      "name": "management.health.diskspace.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable disk space health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.diskspace.path",
      "type": "java.io.File",
      "description": "Path used to compute the available disk space.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.system.DiskSpaceHealthIndicatorProperties"
    },
    {
      "name": "management.health.diskspace.threshold",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Minimum disk space that should be available.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.system.DiskSpaceHealthIndicatorProperties",
      "defaultValue": "10MB"
    },
    {
      "name": "management.health.elasticsearch.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Elasticsearch health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.influxdb.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable InfluxDB health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.jms.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JMS health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.ldap.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable LDAP health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.livenessstate.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable liveness state health check.",
      "defaultValue": false
    },
    {
      "name": "management.health.mail.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Mail health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.mongo.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable MongoDB health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.neo4j.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Neo4j health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.ping.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable ping health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.rabbit.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable RabbitMQ health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.readinessstate.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable readiness state health check.",
      "defaultValue": false
    },
    {
      "name": "management.health.redis.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Redis health check.",
      "defaultValue": true
    },
    {
      "name": "management.health.solr.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Solr health check.",
      "defaultValue": true
    },
    {
      "name": "management.info.build.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable build info.",
      "defaultValue": true
    },
    {
      "name": "management.info.defaults.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable default info contributors.",
      "defaultValue": true
    },
    {
      "name": "management.info.env.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable environment info.",
      "defaultValue": true
    },
    {
      "name": "management.info.git.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable git info.",
      "defaultValue": true
    },
    {
      "name": "management.info.git.mode",
      "type": "org.springframework.boot.actuate.info.InfoPropertiesInfoContributor$Mode",
      "description": "Mode to use to expose git information.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.info.InfoContributorProperties$Git",
      "defaultValue": "simple"
    },
    {
      "name": "management.metrics.distribution.maximum-expected-value",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Maximum value that meter IDs starting with the specified name are expected to observe. The longest match wins. Values can be specified as a long or as a Duration value (for timer meters, defaulting to ms if no unit specified).",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution"
    },
    {
      "name": "management.metrics.distribution.minimum-expected-value",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Minimum value that meter IDs starting with the specified name are expected to observe. The longest match wins. Values can be specified as a long or as a Duration value (for timer meters, defaulting to ms if no unit specified).",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution"
    },
    {
      "name": "management.metrics.distribution.percentiles",
      "type": "java.util.Map<java.lang.String,java.lang.Double[]>",
      "description": "Specific computed non-aggregable percentiles to ship to the backend for meter IDs starting-with the specified name. The longest match wins, the key `all` can also be used to configure all meters.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution"
    },
    {
      "name": "management.metrics.distribution.percentiles-histogram",
      "type": "java.util.Map<java.lang.String,java.lang.Boolean>",
      "description": "Whether meter IDs starting with the specified name should publish percentile histograms. For monitoring systems that support aggregable percentile calculation based on a histogram, this can be set to true. For other systems, this has no effect. The longest match wins, the key `all` can also be used to configure all meters.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution"
    },
    {
      "name": "management.metrics.distribution.slo",
      "type": "java.util.Map<java.lang.String,org.springframework.boot.actuate.autoconfigure.metrics.ServiceLevelObjectiveBoundary[]>",
      "description": "Specific service-level objective boundaries for meter IDs starting with the specified name. The longest match wins. Counters will be published for each specified boundary. Values can be specified as a long or as a Duration value (for timer meters, defaulting to ms if no unit specified).",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution"
    },
    {
      "name": "management.metrics.enable",
      "type": "java.util.Map<java.lang.String,java.lang.Boolean>",
      "description": "Whether meter IDs starting with the specified name should be enabled. The longest match wins, the key `all` can also be used to configure all meters.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties"
    },
    {
      "name": "management.metrics.export.appoptics.api-token",
      "type": "java.lang.String",
      "description": "AppOptics API token.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties"
    },
    {
      "name": "management.metrics.export.appoptics.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": 500
    },
    {
      "name": "management.metrics.export.appoptics.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": "5s"
    },
    {
      "name": "management.metrics.export.appoptics.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.appoptics.floor-times",
      "type": "java.lang.Boolean",
      "description": "Whether to ship a floored time, useful when sending measurements from multiple hosts to align them on a given time boundary.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": false
    },
    {
      "name": "management.metrics.export.appoptics.host-tag",
      "type": "java.lang.String",
      "description": "Tag that will be mapped to '@host' when shipping metrics to AppOptics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": "instance"
    },
    {
      "name": "management.metrics.export.appoptics.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.appoptics.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.appoptics.uri",
      "type": "java.lang.String",
      "description": "URI to ship metrics to.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.appoptics.AppOpticsProperties",
      "defaultValue": "https:\/\/api.appoptics.com\/v1\/measurements"
    },
    {
      "name": "management.metrics.export.atlas.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.atlas.config-refresh-frequency",
      "type": "java.time.Duration",
      "description": "Frequency for refreshing config settings from the LWC service.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.atlas.config-time-to-live",
      "type": "java.time.Duration",
      "description": "Time to live for subscriptions from the LWC service.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "150s"
    },
    {
      "name": "management.metrics.export.atlas.config-uri",
      "type": "java.lang.String",
      "description": "URI for the Atlas LWC endpoint to retrieve current subscriptions.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "http:\/\/localhost:7101\/lwc\/api\/v1\/expressions\/local-dev"
    },
    {
      "name": "management.metrics.export.atlas.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.atlas.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.atlas.eval-uri",
      "type": "java.lang.String",
      "description": "URI for the Atlas LWC endpoint to evaluate the data for a subscription.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "http:\/\/localhost:7101\/lwc\/api\/v1\/evaluate"
    },
    {
      "name": "management.metrics.export.atlas.lwc-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable streaming to Atlas LWC.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": false
    },
    {
      "name": "management.metrics.export.atlas.meter-time-to-live",
      "type": "java.time.Duration",
      "description": "Time to live for meters that do not have any activity. After this period the meter will be considered expired and will not get reported.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "15m"
    },
    {
      "name": "management.metrics.export.atlas.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": 4
    },
    {
      "name": "management.metrics.export.atlas.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.atlas.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.atlas.uri",
      "type": "java.lang.String",
      "description": "URI of the Atlas server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.atlas.AtlasProperties",
      "defaultValue": "http:\/\/localhost:7101\/api\/v1\/publish"
    },
    {
      "name": "management.metrics.export.cloudwatch.batch-size",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties"
    },
    {
      "name": "management.metrics.export.cloudwatch.connect-timeout",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties"
    },
    {
      "name": "management.metrics.export.cloudwatch.enabled",
      "type": "java.lang.Boolean",
      "description": "Enables cloud watch metrics.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.cloudwatch.namespace",
      "type": "java.lang.String",
      "description": "Cloud watch namespace.",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties",
      "defaultValue": ""
    },
    {
      "name": "management.metrics.export.cloudwatch.read-timeout",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties"
    },
    {
      "name": "management.metrics.export.cloudwatch.step",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.cloud.aws.autoconfigure.metrics.CloudWatchProperties"
    },
    {
      "name": "management.metrics.export.datadog.api-key",
      "type": "java.lang.String",
      "description": "Datadog API key.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties"
    },
    {
      "name": "management.metrics.export.datadog.application-key",
      "type": "java.lang.String",
      "description": "Datadog application key. Not strictly required, but improves the Datadog experience by sending meter descriptions, types, and base units to Datadog.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties"
    },
    {
      "name": "management.metrics.export.datadog.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.datadog.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.datadog.descriptions",
      "type": "java.lang.Boolean",
      "description": "Whether to publish descriptions metadata to Datadog. Turn this off to minimize the amount of metadata sent.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.datadog.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.datadog.host-tag",
      "type": "java.lang.String",
      "description": "Tag that will be mapped to 'host' when shipping metrics to Datadog.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": "instance"
    },
    {
      "name": "management.metrics.export.datadog.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.datadog.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.datadog.uri",
      "type": "java.lang.String",
      "description": "URI to ship metrics to. If you need to publish metrics to an internal proxy en-route to Datadog, you can define the location of the proxy with this.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.datadog.DatadogProperties",
      "defaultValue": "https:\/\/api.datadoghq.com"
    },
    {
      "name": "management.metrics.export.dynatrace.api-token",
      "type": "java.lang.String",
      "description": "Dynatrace authentication token.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties"
    },
    {
      "name": "management.metrics.export.dynatrace.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.dynatrace.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.dynatrace.device-id",
      "type": "java.lang.String",
      "description": "ID of the custom device that is exporting metrics to Dynatrace.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties"
    },
    {
      "name": "management.metrics.export.dynatrace.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.dynatrace.group",
      "type": "java.lang.String",
      "description": "Group for exported metrics. Used to specify custom device group name in the Dynatrace UI.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties"
    },
    {
      "name": "management.metrics.export.dynatrace.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.dynatrace.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.dynatrace.technology-type",
      "type": "java.lang.String",
      "description": "Technology type for exported metrics. Used to group metrics under a logical technology name in the Dynatrace UI.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties",
      "defaultValue": "java"
    },
    {
      "name": "management.metrics.export.dynatrace.uri",
      "type": "java.lang.String",
      "description": "URI to ship metrics to. Should be used for SaaS, self managed instances or to en-route through an internal proxy.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.dynatrace.DynatraceProperties"
    },
    {
      "name": "management.metrics.export.elastic.auto-create-index",
      "type": "java.lang.Boolean",
      "description": "Whether to create the index automatically if it does not exist.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.elastic.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.elastic.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.elastic.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.elastic.host",
      "type": "java.lang.String",
      "description": "Host to export metrics to.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "http:\/\/localhost:9200"
    },
    {
      "name": "management.metrics.export.elastic.index",
      "type": "java.lang.String",
      "description": "Index to export metrics to.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "metrics"
    },
    {
      "name": "management.metrics.export.elastic.index-date-format",
      "type": "java.lang.String",
      "description": "Index date format used for rolling indices. Appended to the index name.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "yyyy-MM"
    },
    {
      "name": "management.metrics.export.elastic.index-date-separator",
      "type": "java.lang.String",
      "description": "Prefix to separate the index name from the date format used for rolling indices.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "-"
    },
    {
      "name": "management.metrics.export.elastic.password",
      "type": "java.lang.String",
      "description": "Login password of the Elastic server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties"
    },
    {
      "name": "management.metrics.export.elastic.pipeline",
      "type": "java.lang.String",
      "description": "Ingest pipeline name. By default, events are not pre-processed.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties"
    },
    {
      "name": "management.metrics.export.elastic.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.elastic.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.elastic.timestamp-field-name",
      "type": "java.lang.String",
      "description": "Name of the timestamp field.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties",
      "defaultValue": "@timestamp"
    },
    {
      "name": "management.metrics.export.elastic.user-name",
      "type": "java.lang.String",
      "description": "Login user of the Elastic server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.elastic.ElasticProperties"
    },
    {
      "name": "management.metrics.export.ganglia.addressing-mode",
      "type": "info.ganglia.gmetric4j.gmetric.GMetric$UDPAddressingMode",
      "description": "UDP addressing mode, either unicast or multicast.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": "multicast"
    },
    {
      "name": "management.metrics.export.ganglia.duration-units",
      "type": "java.util.concurrent.TimeUnit",
      "description": "Base time unit used to report durations.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": "milliseconds"
    },
    {
      "name": "management.metrics.export.ganglia.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to Ganglia is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.ganglia.host",
      "type": "java.lang.String",
      "description": "Host of the Ganglia server to receive exported metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "management.metrics.export.ganglia.port",
      "type": "java.lang.Integer",
      "description": "Port of the Ganglia server to receive exported metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": 8649
    },
    {
      "name": "management.metrics.export.ganglia.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.ganglia.time-to-live",
      "type": "java.lang.Integer",
      "description": "Time to live for metrics on Ganglia. Set the multi-cast Time-To-Live to be one greater than the number of hops (routers) between the hosts.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": 1
    },
    {
      "name": "management.metrics.export.graphite.duration-units",
      "type": "java.util.concurrent.TimeUnit",
      "description": "Base time unit used to report durations.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": "milliseconds"
    },
    {
      "name": "management.metrics.export.graphite.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to Graphite is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.graphite.graphite-tags-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether Graphite tags should be used, as opposed to a hierarchical naming convention. Enabled by default unless 'tagsAsPrefix' is set.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties"
    },
    {
      "name": "management.metrics.export.graphite.host",
      "type": "java.lang.String",
      "description": "Host of the Graphite server to receive exported metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "management.metrics.export.graphite.port",
      "type": "java.lang.Integer",
      "description": "Port of the Graphite server to receive exported metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": 2004
    },
    {
      "name": "management.metrics.export.graphite.protocol",
      "type": "io.micrometer.graphite.GraphiteProtocol",
      "description": "Protocol to use while shipping data to Graphite.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": "pickled"
    },
    {
      "name": "management.metrics.export.graphite.rate-units",
      "type": "java.util.concurrent.TimeUnit",
      "description": "Base time unit used to report rates.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": "seconds"
    },
    {
      "name": "management.metrics.export.graphite.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.graphite.tags-as-prefix",
      "type": "java.lang.String[]",
      "description": "For the hierarchical naming convention, turn the specified tag keys into part of the metric prefix. Ignored if 'graphiteTagsEnabled' is true.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.graphite.GraphiteProperties",
      "defaultValue": []
    },
    {
      "name": "management.metrics.export.humio.api-token",
      "type": "java.lang.String",
      "description": "Humio API token.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties"
    },
    {
      "name": "management.metrics.export.humio.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.humio.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "defaultValue": "5s"
    },
    {
      "name": "management.metrics.export.humio.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.humio.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.humio.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.humio.tags",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Humio tags describing the data source in which metrics will be stored. Humio tags are a distinct concept from Micrometer's tags. Micrometer's tags are used to divide metrics along dimensional boundaries.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties"
    },
    {
      "name": "management.metrics.export.humio.uri",
      "type": "java.lang.String",
      "description": "URI to ship metrics to. If you need to publish metrics to an internal proxy en-route to Humio, you can define the location of the proxy with this.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.humio.HumioProperties",
      "defaultValue": "https:\/\/cloud.humio.com"
    },
    {
      "name": "management.metrics.export.influx.auto-create-db",
      "type": "java.lang.Boolean",
      "description": "Whether to create the Influx database if it does not exist before attempting to publish metrics to it.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.influx.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.influx.compressed",
      "type": "java.lang.Boolean",
      "description": "Whether to enable GZIP compression of metrics batches published to Influx.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.influx.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.influx.consistency",
      "type": "io.micrometer.influx.InfluxConsistency",
      "description": "Write consistency for each point.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": "one"
    },
    {
      "name": "management.metrics.export.influx.db",
      "type": "java.lang.String",
      "description": "Tag that will be mapped to 'host' when shipping metrics to Influx.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": "mydb"
    },
    {
      "name": "management.metrics.export.influx.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.influx.password",
      "type": "java.lang.String",
      "description": "Login password of the Influx server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.influx.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.influx.retention-duration",
      "type": "java.lang.String",
      "description": "Time period for which Influx should retain data in the current database. For instance 7d, check the influx documentation for more details on the duration format.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.influx.retention-policy",
      "type": "java.lang.String",
      "description": "Retention policy to use (Influx writes to the DEFAULT retention policy if one is not specified).",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.influx.retention-replication-factor",
      "type": "java.lang.Integer",
      "description": "How many copies of the data are stored in the cluster. Must be 1 for a single node instance.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.influx.retention-shard-duration",
      "type": "java.lang.String",
      "description": "Time range covered by a shard group. For instance 2w, check the influx documentation for more details on the duration format.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.influx.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.influx.uri",
      "type": "java.lang.String",
      "description": "URI of the Influx server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties",
      "defaultValue": "http:\/\/localhost:8086"
    },
    {
      "name": "management.metrics.export.influx.user-name",
      "type": "java.lang.String",
      "description": "Login user of the Influx server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.influx.InfluxProperties"
    },
    {
      "name": "management.metrics.export.jmx.domain",
      "type": "java.lang.String",
      "description": "Metrics JMX domain name.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.jmx.JmxProperties",
      "defaultValue": "metrics"
    },
    {
      "name": "management.metrics.export.jmx.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to JMX is enabled.",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.jmx.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.jmx.JmxProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.kairos.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.kairos.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.kairos.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.kairos.password",
      "type": "java.lang.String",
      "description": "Login password of the KairosDB server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties"
    },
    {
      "name": "management.metrics.export.kairos.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.kairos.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.kairos.uri",
      "type": "java.lang.String",
      "description": "URI of the KairosDB server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties",
      "defaultValue": "http:\/\/localhost:8080\/api\/v1\/datapoints"
    },
    {
      "name": "management.metrics.export.kairos.user-name",
      "type": "java.lang.String",
      "description": "Login user of the KairosDB server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.kairos.KairosProperties"
    },
    {
      "name": "management.metrics.export.newrelic.account-id",
      "type": "java.lang.String",
      "description": "New Relic account ID.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties"
    },
    {
      "name": "management.metrics.export.newrelic.api-key",
      "type": "java.lang.String",
      "description": "New Relic API key.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties"
    },
    {
      "name": "management.metrics.export.newrelic.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.newrelic.client-provider-type",
      "type": "io.micrometer.newrelic.ClientProviderType",
      "description": "Client provider type to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties"
    },
    {
      "name": "management.metrics.export.newrelic.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.newrelic.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.newrelic.event-type",
      "type": "java.lang.String",
      "description": "The event type that should be published. This property will be ignored if 'meter-name-event-type-enabled' is set to 'true'.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": "SpringBootSample"
    },
    {
      "name": "management.metrics.export.newrelic.meter-name-event-type-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to send the meter name as the event type instead of using the 'event-type' configuration property value. Can be set to 'true' if New Relic guidelines are not being followed or event types consistent with previous Spring Boot releases are required.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": false
    },
    {
      "name": "management.metrics.export.newrelic.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.newrelic.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.newrelic.uri",
      "type": "java.lang.String",
      "description": "URI to ship metrics to.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.newrelic.NewRelicProperties",
      "defaultValue": "https:\/\/insights-collector.newrelic.com"
    },
    {
      "name": "management.metrics.export.prometheus.descriptions",
      "type": "java.lang.Boolean",
      "description": "Whether to enable publishing descriptions as part of the scrape payload to Prometheus. Turn this off to minimize the amount of data sent on each scrape.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.prometheus.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to Prometheus is enabled.",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.prometheus.histogram-flavor",
      "type": "io.micrometer.prometheus.HistogramFlavor",
      "description": "Histogram type for backing DistributionSummary and Timer.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties",
      "defaultValue": "prometheus"
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway.base-url",
      "type": "java.lang.String",
      "description": "Base URL for the Pushgateway.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway",
      "defaultValue": "http:\/\/localhost:9091"
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway.enabled",
      "type": "java.lang.Boolean",
      "description": "Enable publishing via a Prometheus Pushgateway.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway",
      "defaultValue": false
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway.grouping-key",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Grouping key for the pushed metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway"
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway.job",
      "type": "java.lang.String",
      "description": "Job identifier for this application instance.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway"
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway.push-rate",
      "type": "java.time.Duration",
      "description": "Frequency with which to push metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.prometheus.pushgateway.shutdown-operation",
      "type": "org.springframework.boot.actuate.metrics.export.prometheus.PrometheusPushGatewayManager$ShutdownOperation",
      "description": "Operation that should be performed on shutdown.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties$Pushgateway",
      "defaultValue": "none"
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.first-backoff",
      "type": "java.time.Duration",
      "description": "The first connection attempt backoff delay to apply, then grow exponentially.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.host",
      "type": "java.lang.String",
      "description": "The host name of the proxy to connect to.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.max-backoff",
      "type": "java.time.Duration",
      "description": "The maximum connection attempt delay to apply despite exponential growth.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties",
      "defaultValue": "10m"
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.max-retries",
      "type": "java.lang.Long",
      "description": "The maximum number of connection attempts to make.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties"
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.port",
      "type": "java.lang.Integer",
      "description": "The port to make a connection on.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties",
      "defaultValue": 7001
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.secure",
      "type": "java.lang.Boolean",
      "description": "Whether to use a secured protocol.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties",
      "defaultValue": false
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.transport",
      "type": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties$Transport",
      "description": "RSocket transport protocol.",
      "sourceType": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties"
    },
    {
      "name": "management.metrics.export.prometheus.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.prometheus.PrometheusProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.signalfx.access-token",
      "type": "java.lang.String",
      "description": "SignalFX access token.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties"
    },
    {
      "name": "management.metrics.export.signalfx.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.signalfx.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.signalfx.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.signalfx.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.signalfx.source",
      "type": "java.lang.String",
      "description": "Uniquely identifies the app instance that is publishing metrics to SignalFx. Defaults to the local host name.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties"
    },
    {
      "name": "management.metrics.export.signalfx.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.signalfx.uri",
      "type": "java.lang.String",
      "description": "URI to ship metrics to.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.signalfx.SignalFxProperties",
      "defaultValue": "https:\/\/ingest.signalfx.com"
    },
    {
      "name": "management.metrics.export.simple.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether, in the absence of any other exporter, exporting of metrics to an in-memory backend is enabled.",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.simple.mode",
      "type": "io.micrometer.core.instrument.simple.CountingMode",
      "description": "Counting mode.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.simple.SimpleProperties",
      "defaultValue": "cumulative"
    },
    {
      "name": "management.metrics.export.simple.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.simple.SimpleProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.stackdriver.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.stackdriver.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.stackdriver.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.stackdriver.project-id",
      "type": "java.lang.String",
      "description": "Identifier of the Google Cloud project to monitor.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties"
    },
    {
      "name": "management.metrics.export.stackdriver.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.stackdriver.resource-type",
      "type": "java.lang.String",
      "description": "Monitored resource type.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "defaultValue": "global"
    },
    {
      "name": "management.metrics.export.stackdriver.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.stackdriver.StackdriverProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.statsd.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to StatsD is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.statsd.flavor",
      "type": "io.micrometer.statsd.StatsdFlavor",
      "description": "StatsD line protocol to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": "datadog"
    },
    {
      "name": "management.metrics.export.statsd.host",
      "type": "java.lang.String",
      "description": "Host of the StatsD server to receive exported metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "management.metrics.export.statsd.max-packet-length",
      "type": "java.lang.Integer",
      "description": "Total length of a single payload should be kept within your network's MTU.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": 1400
    },
    {
      "name": "management.metrics.export.statsd.polling-frequency",
      "type": "java.time.Duration",
      "description": "How often gauges will be polled. When a gauge is polled, its value is recalculated and if the value has changed (or publishUnchangedMeters is true), it is sent to the StatsD server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": "10s"
    },
    {
      "name": "management.metrics.export.statsd.port",
      "type": "java.lang.Integer",
      "description": "Port of the StatsD server to receive exported metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": 8125
    },
    {
      "name": "management.metrics.export.statsd.publish-unchanged-meters",
      "type": "java.lang.Boolean",
      "description": "Whether to send unchanged meters to the StatsD server.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.statsd.StatsdProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.wavefront.api-token",
      "type": "java.lang.String",
      "description": "API token used when publishing metrics directly to the Wavefront API host.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties"
    },
    {
      "name": "management.metrics.export.wavefront.batch-size",
      "type": "java.lang.Integer",
      "description": "Number of measurements per request to use for this backend. If more measurements are found, then multiple requests will be made.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "defaultValue": 10000
    },
    {
      "name": "management.metrics.export.wavefront.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether exporting of metrics to this backend is enabled.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.export.wavefront.global-prefix",
      "type": "java.lang.String",
      "description": "Global prefix to separate metrics originating from this app's white box instrumentation from those originating from other Wavefront integrations when viewed in the Wavefront UI.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties"
    },
    {
      "name": "management.metrics.export.wavefront.sender.flush-interval",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties$Sender",
      "defaultValue": "1s"
    },
    {
      "name": "management.metrics.export.wavefront.sender.max-queue-size",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties$Sender",
      "defaultValue": 50000
    },
    {
      "name": "management.metrics.export.wavefront.sender.message-size",
      "type": "org.springframework.util.unit.DataSize",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties$Sender"
    },
    {
      "name": "management.metrics.export.wavefront.source",
      "type": "java.lang.String",
      "description": "Unique identifier for the app instance that is the source of metrics being published to Wavefront. Defaults to the local host name.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties"
    },
    {
      "name": "management.metrics.export.wavefront.step",
      "type": "java.time.Duration",
      "description": "Step size (i.e. reporting frequency) to use.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "defaultValue": "1m"
    },
    {
      "name": "management.metrics.export.wavefront.uri",
      "type": "java.net.URI",
      "description": "URI to ship metrics to.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "defaultValue": "https:\/\/longboard.wavefront.com"
    },
    {
      "name": "management.metrics.tags",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Common tags that are applied to every meter.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties"
    },
    {
      "name": "management.metrics.use-global-registry",
      "type": "java.lang.Boolean",
      "description": "Whether auto-configured MeterRegistry implementations should be bound to the global static registry on Metrics. For testing, set this to 'false' to maximize test independence.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.web.client.max-uri-tags",
      "type": "java.lang.Integer",
      "description": "Maximum number of unique URI tag values allowed. After the max number of tag values is reached, metrics with additional tag values are denied by filter.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Client",
      "defaultValue": 100
    },
    {
      "name": "management.metrics.web.client.request.autotime.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to automatically time web client requests.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.web.client.request.autotime.percentiles",
      "type": "java.lang.Double[]",
      "description": "Computed non-aggregable percentiles to publish.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties"
    },
    {
      "name": "management.metrics.web.client.request.autotime.percentiles-histogram",
      "type": "java.lang.Boolean",
      "description": "Whether percentile histograms should be published.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties",
      "defaultValue": false
    },
    {
      "name": "management.metrics.web.client.request.metric-name",
      "type": "java.lang.String",
      "description": "Name of the metric for sent requests.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Client$ClientRequest",
      "defaultValue": "http.client.requests"
    },
    {
      "name": "management.metrics.web.server.max-uri-tags",
      "type": "java.lang.Integer",
      "description": "Maximum number of unique URI tag values allowed. After the max number of tag values is reached, metrics with additional tag values are denied by filter.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server",
      "defaultValue": 100
    },
    {
      "name": "management.metrics.web.server.request.autotime.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to automatically time web server requests.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties",
      "defaultValue": true
    },
    {
      "name": "management.metrics.web.server.request.autotime.percentiles",
      "type": "java.lang.Double[]",
      "description": "Computed non-aggregable percentiles to publish.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties"
    },
    {
      "name": "management.metrics.web.server.request.autotime.percentiles-histogram",
      "type": "java.lang.Boolean",
      "description": "Whether percentile histograms should be published.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.AutoTimeProperties",
      "defaultValue": false
    },
    {
      "name": "management.metrics.web.server.request.ignore-trailing-slash",
      "type": "java.lang.Boolean",
      "description": "Whether the trailing slash should be ignored when recording metrics.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server$ServerRequest",
      "defaultValue": true
    },
    {
      "name": "management.metrics.web.server.request.metric-name",
      "type": "java.lang.String",
      "description": "Name of the metric for received requests.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Web$Server$ServerRequest",
      "defaultValue": "http.server.requests"
    },
    {
      "name": "management.server.add-application-context-header",
      "type": "java.lang.Boolean",
      "description": "Add the 'X-Application-Context' HTTP header in each response.",
      "defaultValue": false
    },
    {
      "name": "management.server.address",
      "type": "java.net.InetAddress",
      "description": "Network address to which the management endpoints should bind. Requires a custom management.server.port.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties"
    },
    {
      "name": "management.server.port",
      "type": "java.lang.Integer",
      "description": "Management endpoint HTTP port (uses the same port as the application by default). Configure a different port to use management-specific SSL.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties"
    },
    {
      "name": "management.server.servlet.context-path",
      "type": "java.lang.String",
      "description": "Management endpoint context-path (for instance, `\/management`). Requires a custom management.server.port.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.web.server.ManagementServerProperties$Servlet",
      "defaultValue": ""
    },
    {
      "name": "management.server.ssl.ciphers",
      "type": "java.lang.String[]",
      "description": "Supported SSL ciphers.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.client-auth",
      "type": "org.springframework.boot.web.server.Ssl$ClientAuth",
      "description": "Client authentication mode. Requires a trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable SSL support.",
      "sourceType": "org.springframework.boot.web.server.Ssl",
      "defaultValue": true
    },
    {
      "name": "management.server.ssl.enabled-protocols",
      "type": "java.lang.String[]",
      "description": "Enabled SSL protocols.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.key-alias",
      "type": "java.lang.String",
      "description": "Alias that identifies the key in the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password used to access the key in the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.key-store",
      "type": "java.lang.String",
      "description": "Path to the key store that holds the SSL certificate (typically a jks file).",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.key-store-provider",
      "type": "java.lang.String",
      "description": "Provider for the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.web.server.Ssl",
      "defaultValue": "TLS"
    },
    {
      "name": "management.server.ssl.trust-store",
      "type": "java.lang.String",
      "description": "Trust store that holds SSL certificates.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.trust-store-provider",
      "type": "java.lang.String",
      "description": "Provider for the trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.server.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "management.trace.http.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable HTTP request-response tracing.",
      "defaultValue": true
    },
    {
      "name": "management.trace.http.include",
      "type": "java.util.Set<org.springframework.boot.actuate.trace.http.Include>",
      "description": "Items to be included in the trace. Defaults to request headers (excluding Authorization but including Cookie), response headers (including Set-Cookie), and time taken.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.trace.http.HttpTraceProperties",
      "defaultValue": [
        "request-headers",
        "response-headers",
        "cookies",
        "errors"
      ]
    },
    {
      "name": "metadata.store.dynamo-db.create-delay",
      "type": "java.lang.Integer",
      "description": "Delay between create table retries.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb",
      "defaultValue": 1
    },
    {
      "name": "metadata.store.dynamo-db.create-retries",
      "type": "java.lang.Integer",
      "description": "Retry number for create table request.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb",
      "defaultValue": 25
    },
    {
      "name": "metadata.store.dynamo-db.read-capacity",
      "type": "java.lang.Long",
      "description": "Read capacity on the table.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb",
      "defaultValue": 1
    },
    {
      "name": "metadata.store.dynamo-db.table",
      "type": "java.lang.String",
      "description": "Table name for metadata.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb"
    },
    {
      "name": "metadata.store.dynamo-db.time-to-live",
      "type": "java.lang.Integer",
      "description": "TTL for table entries.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb"
    },
    {
      "name": "metadata.store.dynamo-db.write-capacity",
      "type": "java.lang.Long",
      "description": "Write capacity on the table.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb",
      "defaultValue": 1
    },
    {
      "name": "metadata.store.gemfire.region",
      "type": "java.lang.String",
      "description": "Gemfire region name for metadata.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Gemfire"
    },
    {
      "name": "metadata.store.jdbc.region",
      "type": "java.lang.String",
      "description": "Unique grouping identifier for messages persisted with this store.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Jdbc",
      "defaultValue": "DEFAULT"
    },
    {
      "name": "metadata.store.jdbc.table-prefix",
      "type": "java.lang.String",
      "description": "Prefix for the custom table name.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Jdbc"
    },
    {
      "name": "metadata.store.mongo-db.collection",
      "type": "java.lang.String",
      "description": "MongoDB collection name for metadata.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Mongo",
      "defaultValue": "metadataStore"
    },
    {
      "name": "metadata.store.redis.key",
      "type": "java.lang.String",
      "description": "Redis key for metadata.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Redis"
    },
    {
      "name": "metadata.store.type",
      "type": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$StoreType",
      "description": "Indicates the type of metadata store to configure (default is 'memory'). You must include the corresponding Spring Integration dependency to use a persistent store.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties"
    },
    {
      "name": "metadata.store.zookeeper.connect-string",
      "type": "java.lang.String",
      "description": "Zookeeper connect string in form HOST:PORT.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Zookeeper",
      "defaultValue": "127.0.0.1:2181"
    },
    {
      "name": "metadata.store.zookeeper.encoding",
      "type": "java.nio.charset.Charset",
      "description": "Encoding to use when storing data in Zookeeper.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Zookeeper",
      "defaultValue": "UTF-8"
    },
    {
      "name": "metadata.store.zookeeper.retry-interval",
      "type": "java.lang.Integer",
      "description": "Retry interval for Zookeeper operations in milliseconds.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Zookeeper",
      "defaultValue": 1000
    },
    {
      "name": "metadata.store.zookeeper.root",
      "type": "java.lang.String",
      "description": "Root node - store entries are children of this node.",
      "sourceType": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Zookeeper",
      "defaultValue": "\/SpringIntegration-MetadataStore"
    },
    {
      "name": "s3.common.endpoint-url",
      "type": "java.lang.String",
      "description": "Optional endpoint url to connect to s3 compatible storage.",
      "sourceType": "org.springframework.cloud.fn.common.aws.s3.AmazonS3Properties"
    },
    {
      "name": "s3.common.path-style-access",
      "type": "java.lang.Boolean",
      "description": "Use path style access.",
      "sourceType": "org.springframework.cloud.fn.common.aws.s3.AmazonS3Properties",
      "defaultValue": false
    },
    {
      "name": "s3.supplier.auto-create-local-dir",
      "type": "java.lang.Boolean",
      "description": "Create or not the local directory.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": true
    },
    {
      "name": "s3.supplier.delete-remote-files",
      "type": "java.lang.Boolean",
      "description": "Delete or not remote files after processing.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": false
    },
    {
      "name": "s3.supplier.filename-pattern",
      "type": "java.lang.String",
      "description": "The pattern to filter remote files.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties"
    },
    {
      "name": "s3.supplier.filename-regex",
      "type": "java.util.regex.Pattern",
      "description": "The regexp to filter remote files.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties"
    },
    {
      "name": "s3.supplier.list-only",
      "type": "java.lang.Boolean",
      "description": "Set to true to return s3 object metadata without copying file to a local directory.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": false
    },
    {
      "name": "s3.supplier.local-dir",
      "type": "java.io.File",
      "description": "The local directory to store files.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties"
    },
    {
      "name": "s3.supplier.preserve-timestamp",
      "type": "java.lang.Boolean",
      "description": "To transfer or not the timestamp of the remote file to the local one.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": true
    },
    {
      "name": "s3.supplier.remote-dir",
      "type": "java.lang.String",
      "description": "AWS S3 bucket resource.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": "bucket"
    },
    {
      "name": "s3.supplier.remote-file-separator",
      "type": "java.lang.String",
      "description": "Remote File separator.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": "\/"
    },
    {
      "name": "s3.supplier.tmp-file-suffix",
      "type": "java.lang.String",
      "description": "Temporary file suffix.",
      "sourceType": "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
      "defaultValue": ".tmp"
    },
    {
      "name": "server.address",
      "type": "java.net.InetAddress",
      "description": "Network address to which the server should bind.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"
    },
    {
      "name": "server.compression.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether response compression is enabled.",
      "sourceType": "org.springframework.boot.web.server.Compression",
      "defaultValue": false
    },
    {
      "name": "server.compression.excluded-user-agents",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of user agents for which responses should not be compressed.",
      "sourceType": "org.springframework.boot.web.server.Compression"
    },
    {
      "name": "server.compression.mime-types",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of MIME types that should be compressed.",
      "sourceType": "org.springframework.boot.web.server.Compression",
      "defaultValue": [
        "text\/html",
        "text\/xml",
        "text\/plain",
        "text\/css",
        "text\/javascript",
        "application\/javascript",
        "application\/json",
        "application\/xml"
      ]
    },
    {
      "name": "server.compression.min-response-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Minimum 'Content-Length' value that is required for compression to be performed.",
      "sourceType": "org.springframework.boot.web.server.Compression",
      "defaultValue": "2KB"
    },
    {
      "name": "server.error.include-binding-errors",
      "type": "org.springframework.boot.autoconfigure.web.ErrorProperties$IncludeAttribute",
      "description": "When to include 'errors' attribute.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "defaultValue": "never"
    },
    {
      "name": "server.error.include-exception",
      "type": "java.lang.Boolean",
      "description": "Include the 'exception' attribute.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "defaultValue": false
    },
    {
      "name": "server.error.include-message",
      "type": "org.springframework.boot.autoconfigure.web.ErrorProperties$IncludeAttribute",
      "description": "When to include 'message' attribute.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "defaultValue": "never"
    },
    {
      "name": "server.error.include-stacktrace",
      "type": "org.springframework.boot.autoconfigure.web.ErrorProperties$IncludeStacktrace",
      "description": "When to include the 'trace' attribute.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "defaultValue": "never"
    },
    {
      "name": "server.error.path",
      "type": "java.lang.String",
      "description": "Path of the error controller.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties",
      "defaultValue": "\/error"
    },
    {
      "name": "server.error.whitelabel.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the default error page displayed in browsers in case of a server error.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ErrorProperties$Whitelabel",
      "defaultValue": true
    },
    {
      "name": "server.forward-headers-strategy",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$ForwardHeadersStrategy",
      "description": "Strategy for handling X-Forwarded-* headers.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"
    },
    {
      "name": "server.http2.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable HTTP\/2 support, if the current environment supports it.",
      "sourceType": "org.springframework.boot.web.server.Http2",
      "defaultValue": false
    },
    {
      "name": "server.jetty.accesslog.append",
      "type": "java.lang.Boolean",
      "description": "Append to log.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.jetty.accesslog.custom-format",
      "type": "java.lang.String",
      "description": "Custom log format, see org.eclipse.jetty.server.CustomRequestLog. If defined, overrides the 'format' configuration key.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog"
    },
    {
      "name": "server.jetty.accesslog.enabled",
      "type": "java.lang.Boolean",
      "description": "Enable access log.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.jetty.accesslog.file-date-format",
      "type": "java.lang.String",
      "description": "Date format to place in log file name.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog"
    },
    {
      "name": "server.jetty.accesslog.filename",
      "type": "java.lang.String",
      "description": "Log filename. If not specified, logs redirect to 'System.err'.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog"
    },
    {
      "name": "server.jetty.accesslog.format",
      "type": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog$FORMAT",
      "description": "Log format.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog",
      "defaultValue": "ncsa"
    },
    {
      "name": "server.jetty.accesslog.ignore-paths",
      "type": "java.util.List<java.lang.String>",
      "description": "Request paths that should not be logged.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog"
    },
    {
      "name": "server.jetty.accesslog.retention-period",
      "type": "java.lang.Integer",
      "description": "Number of days before rotated log files are deleted.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog",
      "defaultValue": 31
    },
    {
      "name": "server.jetty.connection-idle-timeout",
      "type": "java.time.Duration",
      "description": "Time that the connection can be idle before it is closed.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty"
    },
    {
      "name": "server.jetty.max-http-form-post-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum size of the form content in any HTTP post request.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "defaultValue": "200000B"
    },
    {
      "name": "server.jetty.threads.acceptors",
      "type": "java.lang.Integer",
      "description": "Number of acceptor threads to use. When the value is -1, the default, the number of acceptors is derived from the operating environment.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads",
      "defaultValue": -1
    },
    {
      "name": "server.jetty.threads.idle-timeout",
      "type": "java.time.Duration",
      "description": "Maximum thread idle time.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads",
      "defaultValue": "60000ms"
    },
    {
      "name": "server.jetty.threads.max",
      "type": "java.lang.Integer",
      "description": "Maximum number of threads.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads",
      "defaultValue": 200
    },
    {
      "name": "server.jetty.threads.max-queue-capacity",
      "type": "java.lang.Integer",
      "description": "Maximum capacity of the thread pool's backing queue. A default is computed based on the threading configuration.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads"
    },
    {
      "name": "server.jetty.threads.min",
      "type": "java.lang.Integer",
      "description": "Minimum number of threads.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads",
      "defaultValue": 8
    },
    {
      "name": "server.jetty.threads.selectors",
      "type": "java.lang.Integer",
      "description": "Number of selector threads to use. When the value is -1, the default, the number of selectors is derived from the operating environment.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Threads",
      "defaultValue": -1
    },
    {
      "name": "server.max-http-header-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum size of the HTTP message header.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "defaultValue": "8KB"
    },
    {
      "name": "server.netty.connection-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout of the Netty channel.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Netty"
    },
    {
      "name": "server.port",
      "type": "java.lang.Integer",
      "description": "Server HTTP port.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties",
      "defaultValue": 8080
    },
    {
      "name": "server.server-header",
      "type": "java.lang.String",
      "description": "Value to use for the Server response header (if empty, no header is sent).",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"
    },
    {
      "name": "server.servlet.application-display-name",
      "type": "java.lang.String",
      "description": "Display name of the application.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet",
      "defaultValue": "application"
    },
    {
      "name": "server.servlet.context-parameters",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Servlet context init parameters.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet"
    },
    {
      "name": "server.servlet.context-path",
      "type": "java.lang.String",
      "description": "Context path of the application.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet"
    },
    {
      "name": "server.servlet.encoding.charset",
      "type": "java.nio.charset.Charset",
      "sourceType": "org.springframework.boot.web.servlet.server.Encoding"
    },
    {
      "name": "server.servlet.encoding.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable http encoding support.",
      "defaultValue": true
    },
    {
      "name": "server.servlet.encoding.force",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.boot.web.servlet.server.Encoding"
    },
    {
      "name": "server.servlet.encoding.force-request",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.boot.web.servlet.server.Encoding"
    },
    {
      "name": "server.servlet.encoding.force-response",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.boot.web.servlet.server.Encoding"
    },
    {
      "name": "server.servlet.encoding.mapping",
      "type": "java.util.Map<java.util.Locale,java.nio.charset.Charset>",
      "sourceType": "org.springframework.boot.web.servlet.server.Encoding"
    },
    {
      "name": "server.servlet.jsp.class-name",
      "type": "java.lang.String",
      "description": "Class name of the servlet to use for JSPs. If registered is true and this class\n\t * is on the classpath then it will be registered.",
      "sourceType": "org.springframework.boot.web.servlet.server.Jsp",
      "defaultValue": "org.apache.jasper.servlet.JspServlet"
    },
    {
      "name": "server.servlet.jsp.init-parameters",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Init parameters used to configure the JSP servlet.",
      "sourceType": "org.springframework.boot.web.servlet.server.Jsp"
    },
    {
      "name": "server.servlet.jsp.registered",
      "type": "java.lang.Boolean",
      "description": "Whether the JSP servlet is registered.",
      "sourceType": "org.springframework.boot.web.servlet.server.Jsp",
      "defaultValue": true
    },
    {
      "name": "server.servlet.register-default-servlet",
      "type": "java.lang.Boolean",
      "description": "Whether to register the default Servlet with the container.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Servlet",
      "defaultValue": true
    },
    {
      "name": "server.servlet.session.cookie.comment",
      "type": "java.lang.String",
      "description": "Comment for the session cookie.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.cookie.domain",
      "type": "java.lang.String",
      "description": " Domain for the session cookie.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.cookie.http-only",
      "type": "java.lang.Boolean",
      "description": "Whether to use 'HttpOnly' cookies for session cookies.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.cookie.max-age",
      "type": "java.time.Duration",
      "description": "Maximum age of the session cookie. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.cookie.name",
      "type": "java.lang.String",
      "description": "Session cookie name.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.cookie.path",
      "type": "java.lang.String",
      "description": "Path of the session cookie.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.cookie.secure",
      "type": "java.lang.Boolean",
      "description": "Whether to always mark the session cookie as secure.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session$Cookie"
    },
    {
      "name": "server.servlet.session.persistent",
      "type": "java.lang.Boolean",
      "description": "Whether to persist session data between restarts.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session",
      "defaultValue": false
    },
    {
      "name": "server.servlet.session.store-dir",
      "type": "java.io.File",
      "description": "Directory used to store session data.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session"
    },
    {
      "name": "server.servlet.session.timeout",
      "type": "java.time.Duration",
      "description": "Session timeout. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session",
      "defaultValue": "30m"
    },
    {
      "name": "server.servlet.session.tracking-modes",
      "type": "java.util.Set<org.springframework.boot.web.servlet.server.Session$SessionTrackingMode>",
      "description": "Session tracking modes.",
      "sourceType": "org.springframework.boot.web.servlet.server.Session"
    },
    {
      "name": "server.shutdown",
      "type": "org.springframework.boot.web.server.Shutdown",
      "description": "Type of shutdown that the server will support.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties"
    },
    {
      "name": "server.ssl.ciphers",
      "type": "java.lang.String[]",
      "description": "Supported SSL ciphers.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.client-auth",
      "type": "org.springframework.boot.web.server.Ssl$ClientAuth",
      "description": "Client authentication mode. Requires a trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable SSL support.",
      "sourceType": "org.springframework.boot.web.server.Ssl",
      "defaultValue": true
    },
    {
      "name": "server.ssl.enabled-protocols",
      "type": "java.lang.String[]",
      "description": "Enabled SSL protocols.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.key-alias",
      "type": "java.lang.String",
      "description": "Alias that identifies the key in the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password used to access the key in the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.key-store",
      "type": "java.lang.String",
      "description": "Path to the key store that holds the SSL certificate (typically a jks file).",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.key-store-provider",
      "type": "java.lang.String",
      "description": "Provider for the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.web.server.Ssl",
      "defaultValue": "TLS"
    },
    {
      "name": "server.ssl.trust-store",
      "type": "java.lang.String",
      "description": "Trust store that holds SSL certificates.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.trust-store-provider",
      "type": "java.lang.String",
      "description": "Provider for the trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.web.server.Ssl"
    },
    {
      "name": "server.tomcat.accept-count",
      "type": "java.lang.Integer",
      "description": "Maximum queue length for incoming connection requests when all possible request processing threads are in use.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": 100
    },
    {
      "name": "server.tomcat.accesslog.buffered",
      "type": "java.lang.Boolean",
      "description": "Whether to buffer output such that it is flushed only periodically.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": true
    },
    {
      "name": "server.tomcat.accesslog.check-exists",
      "type": "java.lang.Boolean",
      "description": "Whether to check for log file existence so it can be recreated it if an external process has renamed it.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.tomcat.accesslog.condition-if",
      "type": "java.lang.String",
      "description": "Whether logging of the request will only be enabled if 'ServletRequest.getAttribute(conditionIf)' does not yield null.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog"
    },
    {
      "name": "server.tomcat.accesslog.condition-unless",
      "type": "java.lang.String",
      "description": "Whether logging of the request will only be enabled if 'ServletRequest.getAttribute(conditionUnless)' yield null.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog"
    },
    {
      "name": "server.tomcat.accesslog.directory",
      "type": "java.lang.String",
      "description": "Directory in which log files are created. Can be absolute or relative to the Tomcat base dir.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": "logs"
    },
    {
      "name": "server.tomcat.accesslog.enabled",
      "type": "java.lang.Boolean",
      "description": "Enable access log.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.tomcat.accesslog.encoding",
      "type": "java.lang.String",
      "description": "Character set used by the log file. Default to the system default character set.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog"
    },
    {
      "name": "server.tomcat.accesslog.file-date-format",
      "type": "java.lang.String",
      "description": "Date format to place in the log file name.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": ".yyyy-MM-dd"
    },
    {
      "name": "server.tomcat.accesslog.ipv6-canonical",
      "type": "java.lang.Boolean",
      "description": "Whether to use IPv6 canonical representation format as defined by RFC 5952.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.tomcat.accesslog.locale",
      "type": "java.lang.String",
      "description": "Locale used to format timestamps in log entries and in log file name suffix. Default to the default locale of the Java process.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog"
    },
    {
      "name": "server.tomcat.accesslog.max-days",
      "type": "java.lang.Integer",
      "description": "Number of days to retain the access log files before they are removed.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": -1
    },
    {
      "name": "server.tomcat.accesslog.pattern",
      "type": "java.lang.String",
      "description": "Format pattern for access logs.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": "common"
    },
    {
      "name": "server.tomcat.accesslog.prefix",
      "type": "java.lang.String",
      "description": "Log file name prefix.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": "access_log"
    },
    {
      "name": "server.tomcat.accesslog.rename-on-rotate",
      "type": "java.lang.Boolean",
      "description": "Whether to defer inclusion of the date stamp in the file name until rotate time.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.tomcat.accesslog.request-attributes-enabled",
      "type": "java.lang.Boolean",
      "description": "Set request attributes for the IP address, Hostname, protocol, and port used for the request.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.tomcat.accesslog.rotate",
      "type": "java.lang.Boolean",
      "description": "Whether to enable access log rotation.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": true
    },
    {
      "name": "server.tomcat.accesslog.suffix",
      "type": "java.lang.String",
      "description": "Log file name suffix.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Accesslog",
      "defaultValue": ".log"
    },
    {
      "name": "server.tomcat.additional-tld-skip-patterns",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of additional patterns that match jars to ignore for TLD scanning. The special '?' and '*' characters can be used in the pattern to match one and only one character and zero or more characters respectively.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat"
    },
    {
      "name": "server.tomcat.background-processor-delay",
      "type": "java.time.Duration",
      "description": "Delay between the invocation of backgroundProcess methods. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": "10s"
    },
    {
      "name": "server.tomcat.basedir",
      "type": "java.io.File",
      "description": "Tomcat base directory. If not specified, a temporary directory is used.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat"
    },
    {
      "name": "server.tomcat.connection-timeout",
      "type": "java.time.Duration",
      "description": "Amount of time the connector will wait, after accepting a connection, for the request URI line to be presented.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat"
    },
    {
      "name": "server.tomcat.max-connections",
      "type": "java.lang.Integer",
      "description": "Maximum number of connections that the server accepts and processes at any given time. Once the limit has been reached, the operating system may still accept connections based on the 'acceptCount' property.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": 8192
    },
    {
      "name": "server.tomcat.max-http-form-post-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum size of the form content in any HTTP post request.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": "2MB"
    },
    {
      "name": "server.tomcat.max-swallow-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum amount of request body to swallow.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": "2MB"
    },
    {
      "name": "server.tomcat.mbeanregistry.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether Tomcat's MBean Registry should be enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Mbeanregistry",
      "defaultValue": false
    },
    {
      "name": "server.tomcat.processor-cache",
      "type": "java.lang.Integer",
      "description": "Maximum number of idle processors that will be retained in the cache and reused with a subsequent request. When set to -1 the cache will be unlimited with a theoretical maximum size equal to the maximum number of connections.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": 200
    },
    {
      "name": "server.tomcat.redirect-context-root",
      "type": "java.lang.Boolean",
      "description": "Whether requests to the context root should be redirected by appending a \/ to the path.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": true
    },
    {
      "name": "server.tomcat.relaxed-path-chars",
      "type": "java.util.List<java.lang.Character>",
      "description": "Comma-separated list of additional unencoded characters that should be allowed in URI paths. Only '< > [ \\ ] ^ ` { | }' are allowed.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat"
    },
    {
      "name": "server.tomcat.relaxed-query-chars",
      "type": "java.util.List<java.lang.Character>",
      "description": "Comma-separated list of additional unencoded characters that should be allowed in URI query strings. Only '< > [ \\ ] ^ ` { | }' are allowed.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat"
    },
    {
      "name": "server.tomcat.remoteip.host-header",
      "type": "java.lang.String",
      "description": "Name of the HTTP header from which the remote host is extracted.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip",
      "defaultValue": "X-Forwarded-Host"
    },
    {
      "name": "server.tomcat.remoteip.internal-proxies",
      "type": "java.lang.String",
      "description": "Regular expression that matches proxies that are to be trusted.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip",
      "defaultValue": "10\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|192\\.168\\.\\d{1,3}\\.\\d{1,3}|169\\.254\\.\\d{1,3}\\.\\d{1,3}|127\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|172\\.1[6-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.2[0-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.3[0-1]{1}\\.\\d{1,3}\\.\\d{1,3}|0:0:0:0:0:0:0:1|::1"
    },
    {
      "name": "server.tomcat.remoteip.port-header",
      "type": "java.lang.String",
      "description": "Name of the HTTP header used to override the original port value.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip",
      "defaultValue": "X-Forwarded-Port"
    },
    {
      "name": "server.tomcat.remoteip.protocol-header",
      "type": "java.lang.String",
      "description": "Header that holds the incoming protocol, usually named 'X-Forwarded-Proto'.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip"
    },
    {
      "name": "server.tomcat.remoteip.protocol-header-https-value",
      "type": "java.lang.String",
      "description": "Value of the protocol header indicating whether the incoming request uses SSL.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip",
      "defaultValue": "https"
    },
    {
      "name": "server.tomcat.remoteip.remote-ip-header",
      "type": "java.lang.String",
      "description": "Name of the HTTP header from which the remote IP is extracted. For instance, `X-FORWARDED-FOR`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Remoteip"
    },
    {
      "name": "server.tomcat.resource.allow-caching",
      "type": "java.lang.Boolean",
      "description": "Whether static resource caching is permitted for this web application.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Resource",
      "defaultValue": true
    },
    {
      "name": "server.tomcat.resource.cache-ttl",
      "type": "java.time.Duration",
      "description": "Time-to-live of the static resource cache.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Resource"
    },
    {
      "name": "server.tomcat.threads.max",
      "type": "java.lang.Integer",
      "description": "Maximum amount of worker threads.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Threads",
      "defaultValue": 200
    },
    {
      "name": "server.tomcat.threads.min-spare",
      "type": "java.lang.Integer",
      "description": "Minimum amount of worker threads.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat$Threads",
      "defaultValue": 10
    },
    {
      "name": "server.tomcat.uri-encoding",
      "type": "java.nio.charset.Charset",
      "description": "Character encoding to use to decode the URI.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": "UTF-8"
    },
    {
      "name": "server.tomcat.use-relative-redirects",
      "type": "java.lang.Boolean",
      "description": "Whether HTTP 1.1 and later location headers generated by a call to sendRedirect will use relative or absolute redirects.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "defaultValue": false
    },
    {
      "name": "server.undertow.accesslog.dir",
      "type": "java.io.File",
      "description": "Undertow access log directory.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog"
    },
    {
      "name": "server.undertow.accesslog.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the access log.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog",
      "defaultValue": false
    },
    {
      "name": "server.undertow.accesslog.pattern",
      "type": "java.lang.String",
      "description": "Format pattern for access logs.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog",
      "defaultValue": "common"
    },
    {
      "name": "server.undertow.accesslog.prefix",
      "type": "java.lang.String",
      "description": "Log file name prefix.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog",
      "defaultValue": "access_log."
    },
    {
      "name": "server.undertow.accesslog.rotate",
      "type": "java.lang.Boolean",
      "description": "Whether to enable access log rotation.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog",
      "defaultValue": true
    },
    {
      "name": "server.undertow.accesslog.suffix",
      "type": "java.lang.String",
      "description": "Log file name suffix.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Accesslog",
      "defaultValue": "log"
    },
    {
      "name": "server.undertow.allow-encoded-slash",
      "type": "java.lang.Boolean",
      "description": "Whether the server should decode percent encoded slash characters. Enabling encoded slashes can have security implications due to different servers interpreting the slash differently. Only enable this if you have a legacy application that requires it.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": false
    },
    {
      "name": "server.undertow.always-set-keep-alive",
      "type": "java.lang.Boolean",
      "description": "Whether the 'Connection: keep-alive' header should be added to all responses, even if not required by the HTTP specification.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": true
    },
    {
      "name": "server.undertow.buffer-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Size of each buffer. The default is derived from the maximum amount of memory that is available to the JVM.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow"
    },
    {
      "name": "server.undertow.decode-url",
      "type": "java.lang.Boolean",
      "description": "Whether the URL should be decoded. When disabled, percent-encoded characters in the URL will be left as-is.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": true
    },
    {
      "name": "server.undertow.direct-buffers",
      "type": "java.lang.Boolean",
      "description": "Whether to allocate buffers outside the Java heap. The default is derived from the maximum amount of memory that is available to the JVM.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow"
    },
    {
      "name": "server.undertow.eager-filter-init",
      "type": "java.lang.Boolean",
      "description": "Whether servlet filters should be initialized on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": true
    },
    {
      "name": "server.undertow.max-cookies",
      "type": "java.lang.Integer",
      "description": "Maximum number of cookies that are allowed. This limit exists to prevent hash collision based DOS attacks.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": 200
    },
    {
      "name": "server.undertow.max-headers",
      "type": "java.lang.Integer",
      "description": "Maximum number of headers that are allowed. This limit exists to prevent hash collision based DOS attacks.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow"
    },
    {
      "name": "server.undertow.max-http-post-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum size of the HTTP post content. When the value is -1, the default, the size is unlimited.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": "-1B"
    },
    {
      "name": "server.undertow.max-parameters",
      "type": "java.lang.Integer",
      "description": "Maximum number of query or path parameters that are allowed. This limit exists to prevent hash collision based DOS attacks.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow"
    },
    {
      "name": "server.undertow.no-request-timeout",
      "type": "java.time.Duration",
      "description": "Amount of time a connection can sit idle without processing a request, before it is closed by the server.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow"
    },
    {
      "name": "server.undertow.options.server",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Options"
    },
    {
      "name": "server.undertow.options.socket",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Options"
    },
    {
      "name": "server.undertow.threads.io",
      "type": "java.lang.Integer",
      "description": "Number of I\/O threads to create for the worker. The default is derived from the number of available processors.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Threads"
    },
    {
      "name": "server.undertow.threads.worker",
      "type": "java.lang.Integer",
      "description": "Number of worker threads. The default is 8 times the number of I\/O threads.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow$Threads"
    },
    {
      "name": "server.undertow.url-charset",
      "type": "java.nio.charset.Charset",
      "description": "Charset used to decode URLs.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spel.function.expression",
      "type": "java.lang.String",
      "description": "A SpEL expression to apply.",
      "sourceType": "org.springframework.cloud.fn.spel.SpelFunctionProperties"
    },
    {
      "name": "spring.activemq.broker-url",
      "type": "java.lang.String",
      "description": "URL of the ActiveMQ broker. Auto-generated by default.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties"
    },
    {
      "name": "spring.activemq.close-timeout",
      "type": "java.time.Duration",
      "description": "Time to wait before considering a close complete.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "defaultValue": "15s"
    },
    {
      "name": "spring.activemq.in-memory",
      "type": "java.lang.Boolean",
      "description": "Whether the default broker URL should be in memory. Ignored if an explicit broker has been specified.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "defaultValue": true
    },
    {
      "name": "spring.activemq.non-blocking-redelivery",
      "type": "java.lang.Boolean",
      "description": "Whether to stop message delivery before re-delivering messages from a rolled back transaction. This implies that message order is not preserved when this is enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "defaultValue": false
    },
    {
      "name": "spring.activemq.packages.trust-all",
      "type": "java.lang.Boolean",
      "description": "Whether to trust all packages.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties$Packages"
    },
    {
      "name": "spring.activemq.packages.trusted",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of specific packages to trust (when not trusting all packages).",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties$Packages"
    },
    {
      "name": "spring.activemq.password",
      "type": "java.lang.String",
      "description": "Login password of the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties"
    },
    {
      "name": "spring.activemq.pool.block-if-full",
      "type": "java.lang.Boolean",
      "description": "Whether to block when a connection is requested and the pool is full. Set it to false to throw a 'JMSException' instead.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": true
    },
    {
      "name": "spring.activemq.pool.block-if-full-timeout",
      "type": "java.time.Duration",
      "description": "Blocking period before throwing an exception if the pool is still full.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": "-1ms"
    },
    {
      "name": "spring.activemq.pool.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether a JmsPoolConnectionFactory should be created, instead of a regular ConnectionFactory.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": false
    },
    {
      "name": "spring.activemq.pool.idle-timeout",
      "type": "java.time.Duration",
      "description": "Connection idle timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": "30s"
    },
    {
      "name": "spring.activemq.pool.max-connections",
      "type": "java.lang.Integer",
      "description": "Maximum number of pooled connections.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": 1
    },
    {
      "name": "spring.activemq.pool.max-sessions-per-connection",
      "type": "java.lang.Integer",
      "description": "Maximum number of pooled sessions per connection in the pool.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": 500
    },
    {
      "name": "spring.activemq.pool.time-between-expiration-check",
      "type": "java.time.Duration",
      "description": "Time to sleep between runs of the idle connection eviction thread. When negative, no idle connection eviction thread runs.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": "-1ms"
    },
    {
      "name": "spring.activemq.pool.use-anonymous-producers",
      "type": "java.lang.Boolean",
      "description": "Whether to use only one anonymous 'MessageProducer' instance. Set it to false to create one 'MessageProducer' every time one is required.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": true
    },
    {
      "name": "spring.activemq.send-timeout",
      "type": "java.time.Duration",
      "description": "Time to wait on message sends for a response. Set it to 0 to wait forever.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties",
      "defaultValue": "0ms"
    },
    {
      "name": "spring.activemq.user",
      "type": "java.lang.String",
      "description": "Login user of the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.activemq.ActiveMQProperties"
    },
    {
      "name": "spring.aop.auto",
      "type": "java.lang.Boolean",
      "description": "Add @EnableAspectJAutoProxy.",
      "defaultValue": true
    },
    {
      "name": "spring.aop.proxy-target-class",
      "type": "java.lang.Boolean",
      "description": "Whether subclass-based (CGLIB) proxies are to be created (true), as opposed to standard Java interface-based proxies (false).",
      "defaultValue": true
    },
    {
      "name": "spring.application.admin.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable admin features for the application.",
      "defaultValue": false
    },
    {
      "name": "spring.application.admin.jmx-name",
      "type": "java.lang.String",
      "description": "JMX name of the application admin MBean.",
      "defaultValue": "org.springframework.boot:type=Admin,name=SpringApplication"
    },
    {
      "name": "spring.application.name",
      "type": "java.lang.String",
      "description": "Application name.",
      "sourceType": "org.springframework.boot.context.ContextIdApplicationContextInitializer"
    },
    {
      "name": "spring.artemis.embedded.cluster-password",
      "type": "java.lang.String",
      "description": "Cluster password. Randomly generated on startup by default.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded"
    },
    {
      "name": "spring.artemis.embedded.data-directory",
      "type": "java.lang.String",
      "description": "Journal file directory. Not necessary if persistence is turned off.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded"
    },
    {
      "name": "spring.artemis.embedded.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable embedded mode if the Artemis server APIs are available.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded",
      "defaultValue": true
    },
    {
      "name": "spring.artemis.embedded.persistent",
      "type": "java.lang.Boolean",
      "description": "Whether to enable persistent store.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded",
      "defaultValue": false
    },
    {
      "name": "spring.artemis.embedded.queues",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of queues to create on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded",
      "defaultValue": []
    },
    {
      "name": "spring.artemis.embedded.server-id",
      "type": "java.lang.Integer",
      "description": "Server ID. By default, an auto-incremented counter is used.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded",
      "defaultValue": 0
    },
    {
      "name": "spring.artemis.embedded.topics",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of topics to create on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties$Embedded",
      "defaultValue": []
    },
    {
      "name": "spring.artemis.host",
      "type": "java.lang.String",
      "description": "Artemis broker host.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "spring.artemis.mode",
      "type": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisMode",
      "description": "Artemis deployment mode, auto-detected by default.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties"
    },
    {
      "name": "spring.artemis.password",
      "type": "java.lang.String",
      "description": "Login password of the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties"
    },
    {
      "name": "spring.artemis.pool.block-if-full",
      "type": "java.lang.Boolean",
      "description": "Whether to block when a connection is requested and the pool is full. Set it to false to throw a 'JMSException' instead.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": true
    },
    {
      "name": "spring.artemis.pool.block-if-full-timeout",
      "type": "java.time.Duration",
      "description": "Blocking period before throwing an exception if the pool is still full.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": "-1ms"
    },
    {
      "name": "spring.artemis.pool.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether a JmsPoolConnectionFactory should be created, instead of a regular ConnectionFactory.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": false
    },
    {
      "name": "spring.artemis.pool.idle-timeout",
      "type": "java.time.Duration",
      "description": "Connection idle timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": "30s"
    },
    {
      "name": "spring.artemis.pool.max-connections",
      "type": "java.lang.Integer",
      "description": "Maximum number of pooled connections.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": 1
    },
    {
      "name": "spring.artemis.pool.max-sessions-per-connection",
      "type": "java.lang.Integer",
      "description": "Maximum number of pooled sessions per connection in the pool.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": 500
    },
    {
      "name": "spring.artemis.pool.time-between-expiration-check",
      "type": "java.time.Duration",
      "description": "Time to sleep between runs of the idle connection eviction thread. When negative, no idle connection eviction thread runs.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": "-1ms"
    },
    {
      "name": "spring.artemis.pool.use-anonymous-producers",
      "type": "java.lang.Boolean",
      "description": "Whether to use only one anonymous 'MessageProducer' instance. Set it to false to create one 'MessageProducer' every time one is required.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsPoolConnectionFactoryProperties",
      "defaultValue": true
    },
    {
      "name": "spring.artemis.port",
      "type": "java.lang.Integer",
      "description": "Artemis broker port.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties",
      "defaultValue": 61616
    },
    {
      "name": "spring.artemis.user",
      "type": "java.lang.String",
      "description": "Login user of the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisProperties"
    },
    {
      "name": "spring.autoconfigure.exclude",
      "type": "java.util.List<java.lang.Class>",
      "description": "Auto-configuration classes to exclude."
    },
    {
      "name": "spring.banner.charset",
      "type": "java.nio.charset.Charset",
      "description": "Banner file encoding.",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.banner.image.bitdepth",
      "type": "java.lang.Integer",
      "description": "The bit depth to use for ANSI colors. Supported values are 4 (16 color) or 8 (256 color).",
      "defaultValue": 4
    },
    {
      "name": "spring.banner.image.height",
      "type": "java.lang.Integer",
      "description": "Height of the banner image in chars (default based on image height)."
    },
    {
      "name": "spring.banner.image.invert",
      "type": "java.lang.Boolean",
      "description": "Whether images should be inverted for dark terminal themes.",
      "defaultValue": false
    },
    {
      "name": "spring.banner.image.location",
      "type": "org.springframework.core.io.Resource",
      "description": "Banner image file location (jpg or png can also be used).",
      "defaultValue": "classpath:banner.gif"
    },
    {
      "name": "spring.banner.image.margin",
      "type": "java.lang.Integer",
      "description": "Left hand image margin in chars.",
      "defaultValue": 2
    },
    {
      "name": "spring.banner.image.pixelmode",
      "type": "org.springframework.boot.ImageBanner$PixelMode",
      "description": "The pixel mode to use when rendering the image.",
      "defaultValue": "TEXT"
    },
    {
      "name": "spring.banner.image.width",
      "type": "java.lang.Integer",
      "description": "Width of the banner image in chars.",
      "defaultValue": 76
    },
    {
      "name": "spring.banner.location",
      "type": "org.springframework.core.io.Resource",
      "description": "Banner text resource location.",
      "defaultValue": "classpath:banner.txt"
    },
    {
      "name": "spring.batch.initialize-schema",
      "type": "org.springframework.boot.jdbc.DataSourceInitializationMode",
      "description": "Database schema initialization mode.",
      "sourceType": "org.springframework.boot.autoconfigure.batch.BatchProperties",
      "defaultValue": "embedded"
    },
    {
      "name": "spring.batch.job.enabled",
      "type": "java.lang.Boolean",
      "description": "Execute all Spring Batch jobs in the context on startup.",
      "defaultValue": true
    },
    {
      "name": "spring.batch.job.names",
      "type": "java.lang.String",
      "description": "Comma-separated list of job names to execute on startup (for instance, `job1,job2`). By default, all Jobs found in the context are executed.",
      "sourceType": "org.springframework.boot.autoconfigure.batch.BatchProperties$Job",
      "defaultValue": ""
    },
    {
      "name": "spring.batch.schema",
      "type": "java.lang.String",
      "description": "Path to the SQL file to use to initialize the database schema.",
      "sourceType": "org.springframework.boot.autoconfigure.batch.BatchProperties",
      "defaultValue": "classpath:org\/springframework\/batch\/core\/schema-@@platform@@.sql"
    },
    {
      "name": "spring.batch.table-prefix",
      "type": "java.lang.String",
      "description": "Table prefix for all the batch meta-data tables.",
      "sourceType": "org.springframework.boot.autoconfigure.batch.BatchProperties"
    },
    {
      "name": "spring.beaninfo.ignore",
      "type": "java.lang.Boolean",
      "description": "Whether to skip search of BeanInfo classes.",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener",
      "defaultValue": true
    },
    {
      "name": "spring.cache.cache-names",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of cache names to create if supported by the underlying cache manager. Usually, this disables the ability to create additional caches on-the-fly.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties"
    },
    {
      "name": "spring.cache.caffeine.spec",
      "type": "java.lang.String",
      "description": "The spec to use to create caches. See CaffeineSpec for more details on the spec format.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Caffeine"
    },
    {
      "name": "spring.cache.couchbase.expiration",
      "type": "java.time.Duration",
      "description": "Entry expiration. By default the entries never expire. Note that this value is ultimately converted to seconds.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Couchbase"
    },
    {
      "name": "spring.cache.ehcache.config",
      "type": "org.springframework.core.io.Resource",
      "description": "The location of the configuration file to use to initialize EhCache.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$EhCache"
    },
    {
      "name": "spring.cache.infinispan.config",
      "type": "org.springframework.core.io.Resource",
      "description": "The location of the configuration file to use to initialize Infinispan.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Infinispan"
    },
    {
      "name": "spring.cache.jcache.config",
      "type": "org.springframework.core.io.Resource",
      "description": "The location of the configuration file to use to initialize the cache manager. The configuration file is dependent of the underlying cache implementation.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$JCache"
    },
    {
      "name": "spring.cache.jcache.provider",
      "type": "java.lang.String",
      "description": "Fully qualified name of the CachingProvider implementation to use to retrieve the JSR-107 compliant cache manager. Needed only if more than one JSR-107 implementation is available on the classpath.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$JCache"
    },
    {
      "name": "spring.cache.redis.cache-null-values",
      "type": "java.lang.Boolean",
      "description": "Allow caching null values.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Redis",
      "defaultValue": true
    },
    {
      "name": "spring.cache.redis.key-prefix",
      "type": "java.lang.String",
      "description": "Key prefix.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Redis"
    },
    {
      "name": "spring.cache.redis.time-to-live",
      "type": "java.time.Duration",
      "description": "Entry expiration. By default the entries never expire.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Redis"
    },
    {
      "name": "spring.cache.redis.use-key-prefix",
      "type": "java.lang.Boolean",
      "description": "Whether to use the key prefix when writing to Redis.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties$Redis",
      "defaultValue": true
    },
    {
      "name": "spring.cache.type",
      "type": "org.springframework.boot.autoconfigure.cache.CacheType",
      "description": "Cache type. By default, auto-detected according to the environment.",
      "sourceType": "org.springframework.boot.autoconfigure.cache.CacheProperties"
    },
    {
      "name": "spring.cloud.function.definition",
      "type": "java.lang.String",
      "description": "Definition of the function to be used. This could be function name (e.g., 'myFunction') or function composition definition (e.g., 'myFunction|yourFunction')",
      "sourceType": "org.springframework.cloud.function.context.FunctionProperties"
    },
    {
      "name": "spring.cloud.function.routing-expression",
      "type": "java.lang.String",
      "description": "SpEL expression which should result in function definition (e.g., function name or composition instruction). NOTE: SpEL evaluation context's root object is the input argument (e.g., Message).",
      "sourceType": "org.springframework.cloud.function.context.FunctionProperties"
    },
    {
      "name": "spring.cloud.stream.binders",
      "type": "java.util.Map<java.lang.String,org.springframework.cloud.stream.config.BinderProperties>",
      "description": "Additional per-binder properties (see {@link BinderProperties}) if more then one binder of the same type is used (i.e., connect to multiple instances of RabbitMq). Here you can specify multiple binder configurations, each with different environment settings. For example; spring.cloud.stream.binders.rabbit1.environment. . . , spring.cloud.stream.binders.rabbit2.environment. . .",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties"
    },
    {
      "name": "spring.cloud.stream.binding-retry-interval",
      "type": "java.lang.Integer",
      "description": "Retry interval (in seconds) used to schedule binding attempts. Default: 30 sec.",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties",
      "defaultValue": 30
    },
    {
      "name": "spring.cloud.stream.bindings",
      "type": "java.util.Map<java.lang.String,org.springframework.cloud.stream.config.BindingProperties>",
      "description": "Additional binding properties (see {@link BinderProperties}) per binding name (e.g., 'input`). For example; This sets the content-type for the 'input' binding of a Sink application: 'spring.cloud.stream.bindings.input.contentType=text\/plain'",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties"
    },
    {
      "name": "spring.cloud.stream.default-binder",
      "type": "java.lang.String",
      "description": "The name of the binder to use by all bindings in the event multiple binders available (e.g., 'rabbit').",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties"
    },
    {
      "name": "spring.cloud.stream.dynamic-destination-cache-size",
      "type": "java.lang.Integer",
      "description": "The maximum size of Least Recently Used (LRU) cache of dynamic destinations. Once this size is reached, new destinations will trigger the removal of old destinations. Default: 10",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties",
      "defaultValue": 10
    },
    {
      "name": "spring.cloud.stream.dynamic-destinations",
      "type": "java.lang.String[]",
      "description": "A list of destinations that can be bound dynamically. If set, only listed destinations can be bound.",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties",
      "defaultValue": []
    },
    {
      "name": "spring.cloud.stream.function.batch-mode",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.cloud.stream.function.StreamFunctionProperties",
      "defaultValue": false
    },
    {
      "name": "spring.cloud.stream.function.bindings",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "sourceType": "org.springframework.cloud.stream.function.StreamFunctionProperties"
    },
    {
      "name": "spring.cloud.stream.function.definition",
      "type": "java.lang.String",
      "description": "Definition of functions to bind. If several functions need to be composed into one, use pipes (e.g., 'fooFunc|barFunc')",
      "sourceType": "org.springframework.cloud.stream.function.StreamFunctionProperties"
    },
    {
      "name": "spring.cloud.stream.instance-count",
      "type": "java.lang.Integer",
      "description": "The number of deployed instances of an application. Default: 1. NOTE: Could also be managed per individual binding 'spring.cloud.stream.bindings.foo.consumer.instance-count' where 'foo' is the name of the binding.",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties",
      "defaultValue": 1
    },
    {
      "name": "spring.cloud.stream.instance-index",
      "type": "java.lang.Integer",
      "description": "The instance id of the application: a number from 0 to instanceCount-1. Used for partitioning and with Kafka. NOTE: Could also be managed per individual binding 'spring.cloud.stream.bindings.foo.consumer.instance-index' where 'foo' is the name of the binding.",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties",
      "defaultValue": 0
    },
    {
      "name": "spring.cloud.stream.instance-index-list",
      "type": "java.util.List<java.lang.Integer>",
      "description": "A list of instance id's from 0 to instanceCount-1. Used for partitioning and with Kafka. NOTE: Could also be managed per individual binding 'spring.cloud.stream.bindings.foo.consumer.instance-index-list' where 'foo' is the name of the binding. This setting will override the one set in 'spring.cloud.stream.instance-index'",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties"
    },
    {
      "name": "spring.cloud.stream.integration.message-handler-not-propagated-headers",
      "type": "java.lang.String[]",
      "description": "Message header names that will NOT be copied from the inbound message.",
      "sourceType": "org.springframework.cloud.stream.config.SpringIntegrationProperties"
    },
    {
      "name": "spring.cloud.stream.metrics.export-properties",
      "type": "java.util.Map<java.lang.String,java.lang.Object>",
      "description": "List of properties that are going to be appended to each message. This gets populate by onApplicationEvent, once the context refreshes to avoid overhead of doing per message basis.",
      "sourceType": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties"
    },
    {
      "name": "spring.cloud.stream.metrics.key",
      "type": "java.lang.String",
      "description": "The name of the metric being emitted. Should be an unique value per application. Defaults to: ${spring.application.name:${vcap.application.name:${spring.config.name:application}}}.",
      "sourceType": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties"
    },
    {
      "name": "spring.cloud.stream.metrics.meter-filter",
      "type": "java.lang.String",
      "description": "Pattern to control the 'meters' one wants to capture. By default all 'meters' will be captured. For example, 'spring.integration.*' will only capture metric information for meters whose name starts with 'spring.integration'.",
      "sourceType": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties"
    },
    {
      "name": "spring.cloud.stream.metrics.properties",
      "type": "java.lang.String[]",
      "description": "Application properties that should be added to the metrics payload For example: `spring.application**`.",
      "sourceType": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties"
    },
    {
      "name": "spring.cloud.stream.metrics.schedule-interval",
      "type": "java.time.Duration",
      "description": "Interval expressed as Duration for scheduling metrics snapshots publishing. Defaults to 60 seconds",
      "sourceType": "org.springframework.cloud.stream.micrometer.ApplicationMetricsProperties",
      "defaultValue": "60s"
    },
    {
      "name": "spring.cloud.stream.override-cloud-connectors",
      "type": "java.lang.Boolean",
      "description": "This property is only applicable when the cloud profile is active and Spring Cloud Connectors are provided with the application. If the property is false (the default), the binder detects a suitable bound service (for example, a RabbitMQ service bound in Cloud Foundry for the RabbitMQ binder) and uses it for creating connections (usually through Spring Cloud Connectors). When set to true, this property instructs binders to completely ignore the bound services and rely on Spring Boot properties (for example, relying on the spring.rabbitmq.* properties provided in the environment for the RabbitMQ binder). The typical usage of this property is to be nested in a customized environment when connecting to multiple systems.",
      "defaultValue": "false"
    },
    {
      "name": "spring.cloud.stream.poller.cron",
      "type": "java.lang.String",
      "description": "Cron expression value for the Cron Trigger.",
      "sourceType": "org.springframework.cloud.stream.config.DefaultPollerProperties"
    },
    {
      "name": "spring.cloud.stream.poller.fixed-delay",
      "type": "java.lang.Long",
      "description": "Fixed delay for default poller.",
      "sourceType": "org.springframework.cloud.stream.config.DefaultPollerProperties",
      "defaultValue": 1000
    },
    {
      "name": "spring.cloud.stream.poller.initial-delay",
      "type": "java.lang.Integer",
      "description": "Initial delay for periodic triggers.",
      "sourceType": "org.springframework.cloud.stream.config.DefaultPollerProperties",
      "defaultValue": 0
    },
    {
      "name": "spring.cloud.stream.poller.max-messages-per-poll",
      "type": "java.lang.Long",
      "description": "Maximum messages per poll for the default poller.",
      "sourceType": "org.springframework.cloud.stream.config.DefaultPollerProperties",
      "defaultValue": 1
    },
    {
      "name": "spring.cloud.stream.rabbit.binder.admin-addresses",
      "type": "java.lang.String[]",
      "description": "Urls for management plugins; only needed for queue affinity.",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties",
      "defaultValue": []
    },
    {
      "name": "spring.cloud.stream.rabbit.binder.compression-level",
      "type": "java.lang.Integer",
      "description": "Compression level for compressed bindings; see 'java.util.zip.Deflator'.",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties",
      "defaultValue": 0
    },
    {
      "name": "spring.cloud.stream.rabbit.binder.connection-name-prefix",
      "type": "java.lang.String",
      "description": "Prefix for connection names from this binder.",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties"
    },
    {
      "name": "spring.cloud.stream.rabbit.binder.nodes",
      "type": "java.lang.String[]",
      "description": "Cluster member node names; only needed for queue affinity.",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties",
      "defaultValue": []
    },
    {
      "name": "spring.cloud.stream.rabbit.bindings",
      "type": "java.util.Map<java.lang.String,org.springframework.cloud.stream.binder.rabbit.properties.RabbitBindingProperties>",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitExtendedBindingProperties"
    },
    {
      "name": "spring.cloud.stream.sendto.destination",
      "type": "java.lang.String",
      "description": "The name of the header used to determine the name of the output destination",
      "defaultValue": "none"
    },
    {
      "name": "spring.cloud.stream.source",
      "type": "java.lang.String",
      "description": "A colon delimited string representing the names of the sources based on which source bindings will be created.  This is primarily to support cases where source binding may be required without providing a corresponding Supplier.  (e.g., for cases where the actual source of data is outside of scope of spring-cloud-stream - HTTP -> Stream)",
      "sourceType": "org.springframework.cloud.stream.config.BindingServiceProperties"
    },
    {
      "name": "spring.cloud.streamapp.security.csrf-enabled",
      "type": "java.lang.Boolean",
      "description": "The security CSRF enabling flag. Makes sense only if security 'enabled` is `true'.",
      "sourceType": "org.springframework.cloud.stream.app.security.common.AppStarterWebSecurityAutoConfigurationProperties",
      "defaultValue": true
    },
    {
      "name": "spring.cloud.streamapp.security.enabled",
      "type": "java.lang.Boolean",
      "description": "The security enabling flag.",
      "sourceType": "org.springframework.cloud.stream.app.security.common.AppStarterWebSecurityAutoConfigurationProperties",
      "defaultValue": true
    },
    {
      "name": "spring.codec.log-request-details",
      "type": "java.lang.Boolean",
      "description": "Whether to log form data at DEBUG level, and headers at TRACE level.",
      "sourceType": "org.springframework.boot.autoconfigure.codec.CodecProperties",
      "defaultValue": false
    },
    {
      "name": "spring.codec.max-in-memory-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Limit on the number of bytes that can be buffered whenever the input stream needs to be aggregated. This applies only to the auto-configured WebFlux server and WebClient instances. By default this is not set, in which case individual codec defaults apply. Most codecs are limited to 256K by default.",
      "sourceType": "org.springframework.boot.autoconfigure.codec.CodecProperties"
    },
    {
      "name": "spring.config.additional-location",
      "type": "java.lang.String",
      "description": "Config file locations used in addition to the defaults.",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener"
    },
    {
      "name": "spring.config.location",
      "type": "java.lang.String",
      "description": "Config file locations that replace the defaults.",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener"
    },
    {
      "name": "spring.config.name",
      "type": "java.lang.String",
      "description": "Config file name.",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener",
      "defaultValue": "application"
    },
    {
      "name": "spring.couchbase.connection-string",
      "type": "java.lang.String",
      "description": "Connection string used to locate the Couchbase cluster.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties"
    },
    {
      "name": "spring.couchbase.env.io.idle-http-connection-timeout",
      "type": "java.time.Duration",
      "description": "Length of time an HTTP connection may remain idle before it is closed and removed from the pool.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Io",
      "defaultValue": "4500ms"
    },
    {
      "name": "spring.couchbase.env.io.max-endpoints",
      "type": "java.lang.Integer",
      "description": "Maximum number of sockets per node.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Io",
      "defaultValue": 12
    },
    {
      "name": "spring.couchbase.env.io.min-endpoints",
      "type": "java.lang.Integer",
      "description": "Minimum number of sockets per node.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Io",
      "defaultValue": 1
    },
    {
      "name": "spring.couchbase.env.ssl.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable SSL support. Enabled automatically if a 'keyStore' is provided unless specified otherwise.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Ssl"
    },
    {
      "name": "spring.couchbase.env.ssl.key-store",
      "type": "java.lang.String",
      "description": "Path to the JVM key store that holds the certificates.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Ssl"
    },
    {
      "name": "spring.couchbase.env.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Ssl"
    },
    {
      "name": "spring.couchbase.env.timeouts.analytics",
      "type": "java.time.Duration",
      "description": "Timeout for the analytics service.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "75s"
    },
    {
      "name": "spring.couchbase.env.timeouts.connect",
      "type": "java.time.Duration",
      "description": "Bucket connect timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "10s"
    },
    {
      "name": "spring.couchbase.env.timeouts.disconnect",
      "type": "java.time.Duration",
      "description": "Bucket disconnect timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "10s"
    },
    {
      "name": "spring.couchbase.env.timeouts.key-value",
      "type": "java.time.Duration",
      "description": "Timeout for operations on a specific key-value.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "2500ms"
    },
    {
      "name": "spring.couchbase.env.timeouts.key-value-durable",
      "type": "java.time.Duration",
      "description": "Timeout for operations on a specific key-value with a durability level.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "10s"
    },
    {
      "name": "spring.couchbase.env.timeouts.management",
      "type": "java.time.Duration",
      "description": "Timeout for the management operations.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "75s"
    },
    {
      "name": "spring.couchbase.env.timeouts.query",
      "type": "java.time.Duration",
      "description": "N1QL query operations timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "75s"
    },
    {
      "name": "spring.couchbase.env.timeouts.search",
      "type": "java.time.Duration",
      "description": "Timeout for the search service.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "75s"
    },
    {
      "name": "spring.couchbase.env.timeouts.view",
      "type": "java.time.Duration",
      "description": "Regular and geospatial view operations timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties$Timeouts",
      "defaultValue": "75s"
    },
    {
      "name": "spring.couchbase.password",
      "type": "java.lang.String",
      "description": "Cluster password.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties"
    },
    {
      "name": "spring.couchbase.username",
      "type": "java.lang.String",
      "description": "Cluster username.",
      "sourceType": "org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties"
    },
    {
      "name": "spring.dao.exceptiontranslation.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the PersistenceExceptionTranslationPostProcessor.",
      "defaultValue": true
    },
    {
      "name": "spring.data.cassandra.compression",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Compression",
      "description": "Compression supported by the Cassandra binary protocol.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "defaultValue": "none"
    },
    {
      "name": "spring.data.cassandra.connection.connect-timeout",
      "type": "java.time.Duration",
      "description": "Timeout to use when establishing driver connections.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Connection",
      "defaultValue": "5s"
    },
    {
      "name": "spring.data.cassandra.connection.init-query-timeout",
      "type": "java.time.Duration",
      "description": "Timeout to use for internal queries that run as part of the initialization process, just after a connection is opened.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Connection",
      "defaultValue": "500ms"
    },
    {
      "name": "spring.data.cassandra.contact-points",
      "type": "java.util.List<java.lang.String>",
      "description": "Cluster node addresses in the form 'host:port', or a simple 'host' to use the configured port.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "defaultValue": [
        "127.0.0.1:9042"
      ]
    },
    {
      "name": "spring.data.cassandra.keyspace-name",
      "type": "java.lang.String",
      "description": "Keyspace name to use.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties"
    },
    {
      "name": "spring.data.cassandra.local-datacenter",
      "type": "java.lang.String",
      "description": "Datacenter that is considered 'local'. Contact points should be from this datacenter.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties"
    },
    {
      "name": "spring.data.cassandra.password",
      "type": "java.lang.String",
      "description": "Login password of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties"
    },
    {
      "name": "spring.data.cassandra.pool.heartbeat-interval",
      "type": "java.time.Duration",
      "description": "Heartbeat interval after which a message is sent on an idle connection to make sure it's still alive.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Pool",
      "defaultValue": "30s"
    },
    {
      "name": "spring.data.cassandra.pool.idle-timeout",
      "type": "java.time.Duration",
      "description": "Idle timeout before an idle connection is removed.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Pool",
      "defaultValue": "120s"
    },
    {
      "name": "spring.data.cassandra.port",
      "type": "java.lang.Integer",
      "description": "Port to use if a contact point does not specify one.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "defaultValue": 9042
    },
    {
      "name": "spring.data.cassandra.repositories.type",
      "type": "org.springframework.boot.autoconfigure.data.RepositoryType",
      "description": "Type of Cassandra repositories to enable.",
      "defaultValue": "auto"
    },
    {
      "name": "spring.data.cassandra.request.consistency",
      "type": "com.datastax.oss.driver.api.core.DefaultConsistencyLevel",
      "description": "Queries consistency level.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Request"
    },
    {
      "name": "spring.data.cassandra.request.page-size",
      "type": "java.lang.Integer",
      "description": "How many rows will be retrieved simultaneously in a single network roundtrip.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Request",
      "defaultValue": 5000
    },
    {
      "name": "spring.data.cassandra.request.serial-consistency",
      "type": "com.datastax.oss.driver.api.core.DefaultConsistencyLevel",
      "description": "Queries serial consistency level.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Request"
    },
    {
      "name": "spring.data.cassandra.request.throttler.drain-interval",
      "type": "java.time.Duration",
      "description": "How often the throttler attempts to dequeue requests. Set this high enough that each attempt will process multiple entries in the queue, but not delay requests too much.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Throttler",
      "defaultValue": "10ms"
    },
    {
      "name": "spring.data.cassandra.request.throttler.max-concurrent-requests",
      "type": "java.lang.Integer",
      "description": "Maximum number of requests that are allowed to execute in parallel.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Throttler",
      "defaultValue": 10000
    },
    {
      "name": "spring.data.cassandra.request.throttler.max-queue-size",
      "type": "java.lang.Integer",
      "description": "Maximum number of requests that can be enqueued when the throttling threshold is exceeded.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Throttler",
      "defaultValue": 10000
    },
    {
      "name": "spring.data.cassandra.request.throttler.max-requests-per-second",
      "type": "java.lang.Integer",
      "description": "Maximum allowed request rate.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Throttler",
      "defaultValue": 10000
    },
    {
      "name": "spring.data.cassandra.request.throttler.type",
      "type": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$ThrottlerType",
      "description": "Request throttling type.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Throttler",
      "defaultValue": "none"
    },
    {
      "name": "spring.data.cassandra.request.timeout",
      "type": "java.time.Duration",
      "description": "How long the driver waits for a request to complete.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Request",
      "defaultValue": "2s"
    },
    {
      "name": "spring.data.cassandra.schema-action",
      "type": "java.lang.String",
      "description": "Schema action to take at startup.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "defaultValue": "none"
    },
    {
      "name": "spring.data.cassandra.session-name",
      "type": "java.lang.String",
      "description": "Name of the Cassandra session.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties"
    },
    {
      "name": "spring.data.cassandra.ssl",
      "type": "java.lang.Boolean",
      "description": "Enable SSL support.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "defaultValue": false
    },
    {
      "name": "spring.data.cassandra.username",
      "type": "java.lang.String",
      "description": "Login user of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties"
    },
    {
      "name": "spring.data.couchbase.auto-index",
      "type": "java.lang.Boolean",
      "description": "Automatically create views and indexes. Use the meta-data provided by '@ViewIndexed', '@N1qlPrimaryIndexed' and '@N1qlSecondaryIndexed'.",
      "sourceType": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties",
      "defaultValue": false
    },
    {
      "name": "spring.data.couchbase.bucket-name",
      "type": "java.lang.String",
      "description": "Name of the bucket to connect to.",
      "sourceType": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties"
    },
    {
      "name": "spring.data.couchbase.field-naming-strategy",
      "type": "java.lang.Class<?>",
      "description": "Fully qualified name of the FieldNamingStrategy to use.",
      "sourceType": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties"
    },
    {
      "name": "spring.data.couchbase.repositories.type",
      "type": "org.springframework.boot.autoconfigure.data.RepositoryType",
      "description": "Type of Couchbase repositories to enable.",
      "defaultValue": "auto"
    },
    {
      "name": "spring.data.couchbase.scope-name",
      "type": "java.lang.String",
      "description": "Name of the scope used for all collection access.",
      "sourceType": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties"
    },
    {
      "name": "spring.data.couchbase.type-key",
      "type": "java.lang.String",
      "description": "Name of the field that stores the type information for complex types when using 'MappingCouchbaseConverter'.",
      "sourceType": "org.springframework.boot.autoconfigure.data.couchbase.CouchbaseDataProperties",
      "defaultValue": "_class"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.connection-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.endpoints",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of the Elasticsearch endpoints to connect to.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.max-in-memory-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Limit on the number of bytes that can be buffered whenever the input stream needs to be aggregated.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.password",
      "type": "java.lang.String",
      "description": "Credentials password.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.socket-timeout",
      "type": "java.time.Duration",
      "description": "Read and Write Socket timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.use-ssl",
      "type": "java.lang.Boolean",
      "description": "Whether the client should use SSL to connect to the endpoints.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties",
      "defaultValue": false
    },
    {
      "name": "spring.data.elasticsearch.client.reactive.username",
      "type": "java.lang.String",
      "description": "Credentials username.",
      "sourceType": "org.springframework.boot.autoconfigure.data.elasticsearch.ReactiveElasticsearchRestClientProperties"
    },
    {
      "name": "spring.data.elasticsearch.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Elasticsearch repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.jdbc.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JDBC repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.jpa.repositories.bootstrap-mode",
      "type": "org.springframework.data.repository.config.BootstrapMode",
      "description": "Bootstrap mode for JPA repositories.",
      "defaultValue": "deferred"
    },
    {
      "name": "spring.data.jpa.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JPA repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.ldap.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable LDAP repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.mongodb.authentication-database",
      "type": "java.lang.String",
      "description": "Authentication database name.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.auto-index-creation",
      "type": "java.lang.Boolean",
      "description": "Whether to enable auto-index creation.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.database",
      "type": "java.lang.String",
      "description": "Database name.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.field-naming-strategy",
      "type": "java.lang.Class<?>",
      "description": "Fully qualified name of the FieldNamingStrategy to use.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.grid-fs-database",
      "type": "java.lang.String",
      "description": "GridFS database name.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.host",
      "type": "java.lang.String",
      "description": "Mongo server host. Cannot be set with URI.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.password",
      "type": "java.lang.Character[]",
      "description": "Login password of the mongo server. Cannot be set with URI.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.port",
      "type": "java.lang.Integer",
      "description": "Mongo server port. Cannot be set with URI.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.replica-set-name",
      "type": "java.lang.String",
      "description": "Required replica set name for the cluster. Cannot be set with URI.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.repositories.type",
      "type": "org.springframework.boot.autoconfigure.data.RepositoryType",
      "description": "Type of Mongo repositories to enable.",
      "defaultValue": "auto"
    },
    {
      "name": "spring.data.mongodb.uri",
      "type": "java.lang.String",
      "description": "Mongo database URI. Cannot be set with host, port, credentials and replica set name.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties",
      "defaultValue": "mongodb:\/\/localhost\/test"
    },
    {
      "name": "spring.data.mongodb.username",
      "type": "java.lang.String",
      "description": "Login user of the mongo server. Cannot be set with URI.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties"
    },
    {
      "name": "spring.data.mongodb.uuid-representation",
      "type": "org.bson.UuidRepresentation",
      "description": "Representation to use when converting a UUID to a BSON binary value.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.MongoProperties",
      "defaultValue": "java-legacy"
    },
    {
      "name": "spring.data.neo4j.auto-index",
      "type": "org.neo4j.ogm.config.AutoIndexMode",
      "description": "Auto index mode.",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties",
      "defaultValue": "none"
    },
    {
      "name": "spring.data.neo4j.embedded.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable embedded mode if the embedded driver is available.",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties$Embedded",
      "defaultValue": true
    },
    {
      "name": "spring.data.neo4j.open-in-view",
      "type": "java.lang.Boolean",
      "description": "Register OpenSessionInViewInterceptor that binds a Neo4j Session to the thread for the entire processing of the request.",
      "defaultValue": false
    },
    {
      "name": "spring.data.neo4j.password",
      "type": "java.lang.String",
      "description": "Login password of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties"
    },
    {
      "name": "spring.data.neo4j.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Neo4j repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.neo4j.uri",
      "type": "java.lang.String",
      "description": "URI used by the driver. Auto-detected by default.",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties"
    },
    {
      "name": "spring.data.neo4j.use-native-types",
      "type": "java.lang.Boolean",
      "description": "Whether to use Neo4j native types wherever possible.",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties",
      "defaultValue": false
    },
    {
      "name": "spring.data.neo4j.username",
      "type": "java.lang.String",
      "description": "Login user of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.data.neo4j.Neo4jProperties"
    },
    {
      "name": "spring.data.r2dbc.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable R2DBC repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.redis.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Redis repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.rest.base-path",
      "type": "java.lang.String",
      "description": "Base path to be used by Spring Data REST to expose repository resources.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.default-media-type",
      "type": "org.springframework.http.MediaType",
      "description": "Content type to use as a default when none is specified.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.default-page-size",
      "type": "java.lang.Integer",
      "description": "Default size of pages.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.detection-strategy",
      "type": "org.springframework.data.rest.core.mapping.RepositoryDetectionStrategy$RepositoryDetectionStrategies",
      "description": "Strategy to use to determine which repositories get exposed.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties",
      "defaultValue": "default"
    },
    {
      "name": "spring.data.rest.enable-enum-translation",
      "type": "java.lang.Boolean",
      "description": "Whether to enable enum value translation through the Spring Data REST default resource bundle.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.limit-param-name",
      "type": "java.lang.String",
      "description": "Name of the URL query string parameter that indicates how many results to return at once.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.max-page-size",
      "type": "java.lang.Integer",
      "description": "Maximum size of pages.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.page-param-name",
      "type": "java.lang.String",
      "description": "Name of the URL query string parameter that indicates what page to return.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.return-body-on-create",
      "type": "java.lang.Boolean",
      "description": "Whether to return a response body after creating an entity.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.return-body-on-update",
      "type": "java.lang.Boolean",
      "description": "Whether to return a response body after updating an entity.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.rest.sort-param-name",
      "type": "java.lang.String",
      "description": "Name of the URL query string parameter that indicates what direction to sort results.",
      "sourceType": "org.springframework.boot.autoconfigure.data.rest.RepositoryRestProperties"
    },
    {
      "name": "spring.data.solr.host",
      "type": "java.lang.String",
      "description": "Solr host. Ignored if 'zk-host' is set.",
      "sourceType": "org.springframework.boot.autoconfigure.solr.SolrProperties",
      "defaultValue": "http:\/\/127.0.0.1:8983\/solr"
    },
    {
      "name": "spring.data.solr.repositories.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Solr repositories.",
      "defaultValue": true
    },
    {
      "name": "spring.data.solr.zk-host",
      "type": "java.lang.String",
      "description": "ZooKeeper host address in the form HOST:PORT.",
      "sourceType": "org.springframework.boot.autoconfigure.solr.SolrProperties"
    },
    {
      "name": "spring.data.web.pageable.default-page-size",
      "type": "java.lang.Integer",
      "description": "Default page size.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": 20
    },
    {
      "name": "spring.data.web.pageable.max-page-size",
      "type": "java.lang.Integer",
      "description": "Maximum page size to be accepted.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": 2000
    },
    {
      "name": "spring.data.web.pageable.one-indexed-parameters",
      "type": "java.lang.Boolean",
      "description": "Whether to expose and assume 1-based page number indexes. Defaults to 'false', meaning a page number of 0 in the request equals the first page.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": false
    },
    {
      "name": "spring.data.web.pageable.page-parameter",
      "type": "java.lang.String",
      "description": "Page index parameter name.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": "page"
    },
    {
      "name": "spring.data.web.pageable.prefix",
      "type": "java.lang.String",
      "description": "General prefix to be prepended to the page number and page size parameters.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": ""
    },
    {
      "name": "spring.data.web.pageable.qualifier-delimiter",
      "type": "java.lang.String",
      "description": "Delimiter to be used between the qualifier and the actual page number and size properties.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": "_"
    },
    {
      "name": "spring.data.web.pageable.size-parameter",
      "type": "java.lang.String",
      "description": "Page size parameter name.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Pageable",
      "defaultValue": "size"
    },
    {
      "name": "spring.data.web.sort.sort-parameter",
      "type": "java.lang.String",
      "description": "Sort parameter name.",
      "sourceType": "org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties$Sort",
      "defaultValue": "sort"
    },
    {
      "name": "spring.datasource.continue-on-error",
      "type": "java.lang.Boolean",
      "description": "Whether to stop if an error occurs while initializing the database.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "defaultValue": false
    },
    {
      "name": "spring.datasource.data",
      "type": "java.util.List<java.lang.String>",
      "description": "Data (DML) script resource references.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.data-password",
      "type": "java.lang.String",
      "description": "Password of the database to execute DML scripts (if different).",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.data-username",
      "type": "java.lang.String",
      "description": "Username of the database to execute DML scripts (if different).",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.dbcp2.abandoned-usage-tracking",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.access-to-underlying-connection-allowed",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.auto-commit-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.cache-state",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.connection-factory-class-name",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.connection-init-sqls",
      "type": "java.util.List<java.lang.String>",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.default-auto-commit",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.default-catalog",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.default-query-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.default-read-only",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.default-schema",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.default-transaction-isolation",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.disconnection-sql-codes",
      "type": "java.util.Set<java.lang.String>",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.driver",
      "type": "java.sql.Driver",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.driver-class-name",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.eviction-policy-class-name",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.fast-fail-validation",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.initial-size",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.jmx-name",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.lifo",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.log-abandoned",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.log-expired-connections",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.login-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.max-conn-lifetime-millis",
      "type": "java.lang.Long",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.max-idle",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.max-open-prepared-statements",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.max-total",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.max-wait-millis",
      "type": "java.lang.Long",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.min-evictable-idle-time-millis",
      "type": "java.lang.Long",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.min-idle",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.num-tests-per-eviction-run",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.password",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.pool-prepared-statements",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.remove-abandoned-on-borrow",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.remove-abandoned-on-maintenance",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.remove-abandoned-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.rollback-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.soft-min-evictable-idle-time-millis",
      "type": "java.lang.Long",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.test-on-borrow",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.test-on-create",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.test-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.test-while-idle",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.time-between-eviction-runs-millis",
      "type": "java.lang.Long",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.url",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.username",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.validation-query",
      "type": "java.lang.String",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.dbcp2.validation-query-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource"
    },
    {
      "name": "spring.datasource.driver-class-name",
      "type": "java.lang.String",
      "description": "Fully qualified name of the JDBC driver. Auto-detected based on the URL by default.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.generate-unique-name",
      "type": "java.lang.Boolean",
      "description": "Whether to generate a random datasource name.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "defaultValue": true
    },
    {
      "name": "spring.datasource.hikari.allow-pool-suspension",
      "type": "java.lang.Boolean",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.auto-commit",
      "type": "java.lang.Boolean",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.catalog",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.connection-init-sql",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.connection-test-query",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.connection-timeout",
      "type": "java.lang.Long",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.data-source-class-name",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.data-source-j-n-d-i",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.data-source-properties",
      "type": "java.util.Properties",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.driver-class-name",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.exception-override-class-name",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.health-check-properties",
      "type": "java.util.Properties",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.health-check-registry",
      "type": "java.lang.Object",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.idle-timeout",
      "type": "java.lang.Long",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.initialization-fail-timeout",
      "type": "java.lang.Long",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.isolate-internal-queries",
      "type": "java.lang.Boolean",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.jdbc-url",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.leak-detection-threshold",
      "type": "java.lang.Long",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.login-timeout",
      "type": "java.lang.Integer",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.max-lifetime",
      "type": "java.lang.Long",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.maximum-pool-size",
      "type": "java.lang.Integer",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.metric-registry",
      "type": "java.lang.Object",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.metrics-tracker-factory",
      "type": "com.zaxxer.hikari.metrics.MetricsTrackerFactory",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.minimum-idle",
      "type": "java.lang.Integer",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.password",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.pool-name",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.read-only",
      "type": "java.lang.Boolean",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.register-mbeans",
      "type": "java.lang.Boolean",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.scheduled-executor",
      "type": "java.util.concurrent.ScheduledExecutorService",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.schema",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.transaction-isolation",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.username",
      "type": "java.lang.String",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.hikari.validation-timeout",
      "type": "java.lang.Long",
      "sourceType": "com.zaxxer.hikari.HikariDataSource"
    },
    {
      "name": "spring.datasource.initialization-mode",
      "type": "org.springframework.boot.jdbc.DataSourceInitializationMode",
      "description": "Initialize the datasource with available DDL and DML scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "defaultValue": "embedded"
    },
    {
      "name": "spring.datasource.jndi-name",
      "type": "java.lang.String",
      "description": "JNDI location of the datasource. Class, url, username and password are ignored when set.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.name",
      "type": "java.lang.String",
      "description": "Name of the datasource. Default to 'testdb' when using an embedded database.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.password",
      "type": "java.lang.String",
      "description": "Login password of the database.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.platform",
      "type": "java.lang.String",
      "description": "Platform to use in the DDL or DML scripts (such as schema-${platform}.sql or data-${platform}.sql).",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "defaultValue": "all"
    },
    {
      "name": "spring.datasource.schema",
      "type": "java.util.List<java.lang.String>",
      "description": "Schema (DDL) script resource references.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.schema-password",
      "type": "java.lang.String",
      "description": "Password of the database to execute DDL scripts (if different).",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.schema-username",
      "type": "java.lang.String",
      "description": "Username of the database to execute DDL scripts (if different).",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.separator",
      "type": "java.lang.String",
      "description": "Statement separator in SQL initialization scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties",
      "defaultValue": ";"
    },
    {
      "name": "spring.datasource.sql-script-encoding",
      "type": "java.nio.charset.Charset",
      "description": "SQL scripts encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.tomcat.abandon-when-percentage-full",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.access-to-underlying-connection-allowed",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.alternate-username-allowed",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.commit-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.connection-properties",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.data-source",
      "type": "java.lang.Object",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.data-source-j-n-d-i",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.db-properties",
      "type": "java.util.Properties",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.default-auto-commit",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.default-catalog",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.default-read-only",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.default-transaction-isolation",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.driver-class-name",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.fair-queue",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.ignore-exception-on-pre-load",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.init-s-q-l",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.initial-size",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.jdbc-interceptors",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.jmx-enabled",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.log-abandoned",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.log-validation-errors",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.login-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.max-active",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.max-age",
      "type": "java.lang.Long",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.max-idle",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.max-wait",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.min-evictable-idle-time-millis",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.min-idle",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.name",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.num-tests-per-eviction-run",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.password",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.propagate-interrupt-state",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.remove-abandoned",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.remove-abandoned-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.rollback-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.suspect-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.test-on-borrow",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.test-on-connect",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.test-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.test-while-idle",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.time-between-eviction-runs-millis",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.url",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.use-disposable-connection-facade",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.use-equals",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.use-lock",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.use-statement-facade",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.username",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.validation-interval",
      "type": "java.lang.Long",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.validation-query",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.validation-query-timeout",
      "type": "java.lang.Integer",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.tomcat.validator-class-name",
      "type": "java.lang.String",
      "sourceType": "org.apache.tomcat.jdbc.pool.DataSource"
    },
    {
      "name": "spring.datasource.type",
      "type": "java.lang.Class<? extends javax.sql.DataSource>",
      "description": "Fully qualified name of the connection pool implementation to use. By default, it is auto-detected from the classpath.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.url",
      "type": "java.lang.String",
      "description": "JDBC URL of the database.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.username",
      "type": "java.lang.String",
      "description": "Login username of the database.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties"
    },
    {
      "name": "spring.datasource.xa.data-source-class-name",
      "type": "java.lang.String",
      "description": "XA datasource fully qualified name.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties$Xa"
    },
    {
      "name": "spring.datasource.xa.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Properties to pass to the XA data source.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.DataSourceProperties$Xa"
    },
    {
      "name": "spring.elasticsearch.rest.connection-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties",
      "defaultValue": "1s"
    },
    {
      "name": "spring.elasticsearch.rest.password",
      "type": "java.lang.String",
      "description": "Credentials password.",
      "sourceType": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties"
    },
    {
      "name": "spring.elasticsearch.rest.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties",
      "defaultValue": "30s"
    },
    {
      "name": "spring.elasticsearch.rest.uris",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of the Elasticsearch instances to use.",
      "sourceType": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties",
      "defaultValue": [
        "http:\/\/localhost:9200"
      ]
    },
    {
      "name": "spring.elasticsearch.rest.username",
      "type": "java.lang.String",
      "description": "Credentials username.",
      "sourceType": "org.springframework.boot.autoconfigure.elasticsearch.ElasticsearchRestClientProperties"
    },
    {
      "name": "spring.flyway.baseline-description",
      "type": "java.lang.String",
      "description": "Description to tag an existing schema with when applying a baseline.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "<< Flyway Baseline >>"
    },
    {
      "name": "spring.flyway.baseline-on-migrate",
      "type": "java.lang.Boolean",
      "description": "Whether to automatically call baseline when migrating a non-empty schema.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.baseline-version",
      "type": "java.lang.String",
      "description": "Version to tag an existing schema with when executing baseline.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "1"
    },
    {
      "name": "spring.flyway.batch",
      "type": "java.lang.Boolean",
      "description": "Whether to batch SQL statements when executing them. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.check-location",
      "type": "java.lang.Boolean",
      "description": "Whether to check that migration scripts location exists.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": true
    },
    {
      "name": "spring.flyway.clean-disabled",
      "type": "java.lang.Boolean",
      "description": "Whether to disable cleaning of the database.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.clean-on-validation-error",
      "type": "java.lang.Boolean",
      "description": "Whether to automatically call clean when a validation error occurs.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.connect-retries",
      "type": "java.lang.Integer",
      "description": "Maximum number of retries when attempting to connect to the database.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": 0
    },
    {
      "name": "spring.flyway.default-schema",
      "type": "java.lang.String",
      "description": "Default schema name managed by Flyway (case-sensitive).",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable flyway.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": true
    },
    {
      "name": "spring.flyway.encoding",
      "type": "java.nio.charset.Charset",
      "description": "Encoding of SQL migrations.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.flyway.error-overrides",
      "type": "java.lang.String[]",
      "description": "Rules for the built-in error handling to override specific SQL states and error codes. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.group",
      "type": "java.lang.Boolean",
      "description": "Whether to group all pending migrations together in the same transaction when applying them.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.ignore-future-migrations",
      "type": "java.lang.Boolean",
      "description": "Whether to ignore future migrations when reading the schema history table.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": true
    },
    {
      "name": "spring.flyway.ignore-ignored-migrations",
      "type": "java.lang.Boolean",
      "description": "Whether to ignore ignored migrations when reading the schema history table.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.ignore-missing-migrations",
      "type": "java.lang.Boolean",
      "description": "Whether to ignore missing migrations when reading the schema history table.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.ignore-pending-migrations",
      "type": "java.lang.Boolean",
      "description": "Whether to ignore pending migrations when reading the schema history table.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.init-sqls",
      "type": "java.util.List<java.lang.String>",
      "description": "SQL statements to execute to initialize a connection immediately after obtaining it.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.installed-by",
      "type": "java.lang.String",
      "description": "Username recorded in the schema history table as having applied the migration.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.license-key",
      "type": "java.lang.String",
      "description": "Licence key for Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.locations",
      "type": "java.util.List<java.lang.String>",
      "description": "Locations of migrations scripts. Can contain the special '{vendor}' placeholder to use vendor-specific locations.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": [
        "classpath:db\/migration"
      ]
    },
    {
      "name": "spring.flyway.mixed",
      "type": "java.lang.Boolean",
      "description": "Whether to allow mixing transactional and non-transactional statements within the same migration.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.oracle-sqlplus",
      "type": "java.lang.Boolean",
      "description": "Whether to enable support for Oracle SQL*Plus commands. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.oracle-sqlplus-warn",
      "type": "java.lang.Boolean",
      "description": "Whether to issue a warning rather than an error when a not-yet-supported Oracle SQL*Plus statement is encountered. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.out-of-order",
      "type": "java.lang.Boolean",
      "description": "Whether to allow migrations to be run out of order.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.password",
      "type": "java.lang.String",
      "description": "Login password of the database to migrate.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.placeholder-prefix",
      "type": "java.lang.String",
      "description": "Prefix of placeholders in migration scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "${"
    },
    {
      "name": "spring.flyway.placeholder-replacement",
      "type": "java.lang.Boolean",
      "description": "Perform placeholder replacement in migration scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": true
    },
    {
      "name": "spring.flyway.placeholder-suffix",
      "type": "java.lang.String",
      "description": "Suffix of placeholders in migration scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "}"
    },
    {
      "name": "spring.flyway.placeholders",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Placeholders and their replacements to apply to sql migration scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.repeatable-sql-migration-prefix",
      "type": "java.lang.String",
      "description": "File name prefix for repeatable SQL migrations.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "R"
    },
    {
      "name": "spring.flyway.schemas",
      "type": "java.util.List<java.lang.String>",
      "description": "Scheme names managed by Flyway (case-sensitive).",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.skip-default-callbacks",
      "type": "java.lang.Boolean",
      "description": "Whether to skip default callbacks. If true, only custom callbacks are used.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.skip-default-resolvers",
      "type": "java.lang.Boolean",
      "description": "Whether to skip default resolvers. If true, only custom resolvers are used.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.sql-migration-prefix",
      "type": "java.lang.String",
      "description": "File name prefix for SQL migrations.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "V"
    },
    {
      "name": "spring.flyway.sql-migration-separator",
      "type": "java.lang.String",
      "description": "File name separator for SQL migrations.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "__"
    },
    {
      "name": "spring.flyway.sql-migration-suffixes",
      "type": "java.util.List<java.lang.String>",
      "description": "File name suffix for SQL migrations.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": [
        ".sql"
      ]
    },
    {
      "name": "spring.flyway.stream",
      "type": "java.lang.Boolean",
      "description": "Whether to stream SQL migrations when executing them. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.table",
      "type": "java.lang.String",
      "description": "Name of the schema history table that will be used by Flyway.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": "flyway_schema_history"
    },
    {
      "name": "spring.flyway.tablespace",
      "type": "java.lang.String",
      "description": "Tablespace in which the schema history table is created. Ignored when using a database that does not support tablespaces. Defaults to the default tablespace of the connection used by Flyway.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.target",
      "type": "java.lang.String",
      "description": "Target version up to which migrations should be considered.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.url",
      "type": "java.lang.String",
      "description": "JDBC url of the database to migrate. If not set, the primary configured data source is used.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.user",
      "type": "java.lang.String",
      "description": "Login user of the database to migrate.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties"
    },
    {
      "name": "spring.flyway.validate-migration-naming",
      "type": "java.lang.Boolean",
      "description": "Whether to validate migrations and callbacks whose scripts do not obey the correct naming convention.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": false
    },
    {
      "name": "spring.flyway.validate-on-migrate",
      "type": "java.lang.Boolean",
      "description": "Whether to automatically call validate when performing a migration.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "defaultValue": true
    },
    {
      "name": "spring.freemarker.allow-request-override",
      "type": "java.lang.Boolean",
      "description": "Whether HttpServletRequest attributes are allowed to override (hide) controller generated model attributes of the same name.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": false
    },
    {
      "name": "spring.freemarker.allow-session-override",
      "type": "java.lang.Boolean",
      "description": "Whether HttpSession attributes are allowed to override (hide) controller generated model attributes of the same name.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": false
    },
    {
      "name": "spring.freemarker.cache",
      "type": "java.lang.Boolean",
      "description": "Whether to enable template caching.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": false
    },
    {
      "name": "spring.freemarker.charset",
      "type": "java.nio.charset.Charset",
      "description": "Template encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.freemarker.check-template-location",
      "type": "java.lang.Boolean",
      "description": "Whether to check that the templates location exists.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": true
    },
    {
      "name": "spring.freemarker.content-type",
      "type": "org.springframework.util.MimeType",
      "description": "Content-Type value.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": "text\/html"
    },
    {
      "name": "spring.freemarker.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable MVC view resolution for this technology.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": true
    },
    {
      "name": "spring.freemarker.expose-request-attributes",
      "type": "java.lang.Boolean",
      "description": "Whether all request attributes should be added to the model prior to merging with the template.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": false
    },
    {
      "name": "spring.freemarker.expose-session-attributes",
      "type": "java.lang.Boolean",
      "description": "Whether all HttpSession attributes should be added to the model prior to merging with the template.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": false
    },
    {
      "name": "spring.freemarker.expose-spring-macro-helpers",
      "type": "java.lang.Boolean",
      "description": "Whether to expose a RequestContext for use by Spring's macro library, under the name 'springMacroRequestContext'.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": true
    },
    {
      "name": "spring.freemarker.prefer-file-system-access",
      "type": "java.lang.Boolean",
      "description": "Whether to prefer file system access for template loading. File system access enables hot detection of template changes.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": true
    },
    {
      "name": "spring.freemarker.prefix",
      "type": "java.lang.String",
      "description": "Prefix that gets prepended to view names when building a URL.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": ""
    },
    {
      "name": "spring.freemarker.request-context-attribute",
      "type": "java.lang.String",
      "description": "Name of the RequestContext attribute for all views.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties"
    },
    {
      "name": "spring.freemarker.settings",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Well-known FreeMarker keys which are passed to FreeMarker's Configuration.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties"
    },
    {
      "name": "spring.freemarker.suffix",
      "type": "java.lang.String",
      "description": "Suffix that gets appended to view names when building a URL.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": ".ftlh"
    },
    {
      "name": "spring.freemarker.template-loader-path",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of template paths.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties",
      "defaultValue": [
        "classpath:\/templates\/"
      ]
    },
    {
      "name": "spring.freemarker.view-names",
      "type": "java.lang.String[]",
      "description": "View names that can be resolved.",
      "sourceType": "org.springframework.boot.autoconfigure.freemarker.FreeMarkerProperties"
    },
    {
      "name": "spring.groovy.template.allow-request-override",
      "type": "java.lang.Boolean",
      "description": "Whether HttpServletRequest attributes are allowed to override (hide) controller generated model attributes of the same name.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": false
    },
    {
      "name": "spring.groovy.template.allow-session-override",
      "type": "java.lang.Boolean",
      "description": "Whether HttpSession attributes are allowed to override (hide) controller generated model attributes of the same name.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": false
    },
    {
      "name": "spring.groovy.template.cache",
      "type": "java.lang.Boolean",
      "description": "Whether to enable template caching.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": false
    },
    {
      "name": "spring.groovy.template.charset",
      "type": "java.nio.charset.Charset",
      "description": "Template encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.groovy.template.check-template-location",
      "type": "java.lang.Boolean",
      "description": "Whether to check that the templates location exists.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": true
    },
    {
      "name": "spring.groovy.template.configuration.auto-escape",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.auto-indent",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.auto-indent-string",
      "type": "java.lang.String",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.auto-new-line",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.base-template-class",
      "type": "java.lang.Class<? extends groovy.text.markup.BaseTemplate>",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.cache-templates",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.declaration-encoding",
      "type": "java.lang.String",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.expand-empty-elements",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.locale",
      "type": "java.util.Locale",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.new-line-string",
      "type": "java.lang.String",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.resource-loader-path",
      "type": "java.lang.String",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.configuration.use-double-quotes",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.web.servlet.view.groovy.GroovyMarkupConfigurer"
    },
    {
      "name": "spring.groovy.template.content-type",
      "type": "org.springframework.util.MimeType",
      "description": "Content-Type value.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": "text\/html"
    },
    {
      "name": "spring.groovy.template.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable MVC view resolution for this technology.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": true
    },
    {
      "name": "spring.groovy.template.expose-request-attributes",
      "type": "java.lang.Boolean",
      "description": "Whether all request attributes should be added to the model prior to merging with the template.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": false
    },
    {
      "name": "spring.groovy.template.expose-session-attributes",
      "type": "java.lang.Boolean",
      "description": "Whether all HttpSession attributes should be added to the model prior to merging with the template.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": false
    },
    {
      "name": "spring.groovy.template.expose-spring-macro-helpers",
      "type": "java.lang.Boolean",
      "description": "Whether to expose a RequestContext for use by Spring's macro library, under the name 'springMacroRequestContext'.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": true
    },
    {
      "name": "spring.groovy.template.prefix",
      "type": "java.lang.String",
      "description": "Prefix that gets prepended to view names when building a URL.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": ""
    },
    {
      "name": "spring.groovy.template.request-context-attribute",
      "type": "java.lang.String",
      "description": "Name of the RequestContext attribute for all views.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties"
    },
    {
      "name": "spring.groovy.template.resource-loader-path",
      "type": "java.lang.String",
      "description": "Template path.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": "classpath:\/templates\/"
    },
    {
      "name": "spring.groovy.template.suffix",
      "type": "java.lang.String",
      "description": "Suffix that gets appended to view names when building a URL.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties",
      "defaultValue": ".tpl"
    },
    {
      "name": "spring.groovy.template.view-names",
      "type": "java.lang.String[]",
      "description": "View names that can be resolved.",
      "sourceType": "org.springframework.boot.autoconfigure.groovy.template.GroovyTemplateProperties"
    },
    {
      "name": "spring.gson.date-format",
      "type": "java.lang.String",
      "description": "Format to use when serializing Date objects.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.disable-html-escaping",
      "type": "java.lang.Boolean",
      "description": "Whether to disable the escaping of HTML characters such as '<', '>', etc.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.disable-inner-class-serialization",
      "type": "java.lang.Boolean",
      "description": "Whether to exclude inner classes during serialization.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.enable-complex-map-key-serialization",
      "type": "java.lang.Boolean",
      "description": "Whether to enable serialization of complex map keys (i.e. non-primitives).",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.exclude-fields-without-expose-annotation",
      "type": "java.lang.Boolean",
      "description": "Whether to exclude all fields from consideration for serialization or deserialization that do not have the 'Expose' annotation.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.field-naming-policy",
      "type": "com.google.gson.FieldNamingPolicy",
      "description": "Naming policy that should be applied to an object's field during serialization and deserialization.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.generate-non-executable-json",
      "type": "java.lang.Boolean",
      "description": "Whether to generate non executable JSON by prefixing the output with some special text.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.lenient",
      "type": "java.lang.Boolean",
      "description": "Whether to be lenient about parsing JSON that doesn't conform to RFC 4627.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.long-serialization-policy",
      "type": "com.google.gson.LongSerializationPolicy",
      "description": "Serialization policy for Long and long types.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.pretty-printing",
      "type": "java.lang.Boolean",
      "description": "Whether to output serialized JSON that fits in a page for pretty printing.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.gson.serialize-nulls",
      "type": "java.lang.Boolean",
      "description": "Whether to serialize null fields.",
      "sourceType": "org.springframework.boot.autoconfigure.gson.GsonProperties"
    },
    {
      "name": "spring.h2.console.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the console.",
      "sourceType": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties",
      "defaultValue": false
    },
    {
      "name": "spring.h2.console.path",
      "type": "java.lang.String",
      "description": "Path at which the console is available.",
      "sourceType": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties",
      "defaultValue": "\/h2-console"
    },
    {
      "name": "spring.h2.console.settings.trace",
      "type": "java.lang.Boolean",
      "description": "Whether to enable trace output.",
      "sourceType": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties$Settings",
      "defaultValue": false
    },
    {
      "name": "spring.h2.console.settings.web-allow-others",
      "type": "java.lang.Boolean",
      "description": "Whether to enable remote access.",
      "sourceType": "org.springframework.boot.autoconfigure.h2.H2ConsoleProperties$Settings",
      "defaultValue": false
    },
    {
      "name": "spring.hateoas.use-hal-as-default-json-media-type",
      "type": "java.lang.Boolean",
      "description": "Whether application\/hal+json responses should be sent to requests that accept application\/json.",
      "sourceType": "org.springframework.boot.autoconfigure.hateoas.HateoasProperties",
      "defaultValue": true
    },
    {
      "name": "spring.hazelcast.config",
      "type": "org.springframework.core.io.Resource",
      "description": "The location of the configuration file to use to initialize Hazelcast.",
      "sourceType": "org.springframework.boot.autoconfigure.hazelcast.HazelcastProperties"
    },
    {
      "name": "spring.influx.password",
      "type": "java.lang.String",
      "description": "Login password.",
      "sourceType": "org.springframework.boot.autoconfigure.influx.InfluxDbProperties"
    },
    {
      "name": "spring.influx.url",
      "type": "java.lang.String",
      "description": "URL of the InfluxDB instance to which to connect.",
      "sourceType": "org.springframework.boot.autoconfigure.influx.InfluxDbProperties"
    },
    {
      "name": "spring.influx.user",
      "type": "java.lang.String",
      "description": "Login user.",
      "sourceType": "org.springframework.boot.autoconfigure.influx.InfluxDbProperties"
    },
    {
      "name": "spring.info.build.encoding",
      "type": "java.nio.charset.Charset",
      "description": "File encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties$Build",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.info.build.location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the generated build-info.properties file.",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties$Build",
      "defaultValue": "classpath:META-INF\/build-info.properties"
    },
    {
      "name": "spring.info.git.encoding",
      "type": "java.nio.charset.Charset",
      "description": "File encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties$Git",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.info.git.location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the generated git.properties file.",
      "sourceType": "org.springframework.boot.autoconfigure.info.ProjectInfoProperties$Git",
      "defaultValue": "classpath:git.properties"
    },
    {
      "name": "spring.integration.jdbc.initialize-schema",
      "type": "org.springframework.boot.jdbc.DataSourceInitializationMode",
      "description": "Database schema initialization mode.",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$Jdbc",
      "defaultValue": "embedded"
    },
    {
      "name": "spring.integration.jdbc.schema",
      "type": "java.lang.String",
      "description": "Path to the SQL file to use to initialize the database schema.",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$Jdbc",
      "defaultValue": "classpath:org\/springframework\/integration\/jdbc\/schema-@@platform@@.sql"
    },
    {
      "name": "spring.integration.rsocket.client.host",
      "type": "java.lang.String",
      "description": "TCP RSocket server host to connect to.",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket$Client"
    },
    {
      "name": "spring.integration.rsocket.client.port",
      "type": "java.lang.Integer",
      "description": "TCP RSocket server port to connect to.",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket$Client"
    },
    {
      "name": "spring.integration.rsocket.client.uri",
      "type": "java.net.URI",
      "description": "WebSocket RSocket server uri to connect to.",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket$Client"
    },
    {
      "name": "spring.integration.rsocket.server.message-mapping-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to handle message mapping for RSocket via Spring Integration.",
      "sourceType": "org.springframework.boot.autoconfigure.integration.IntegrationProperties$RSocket$Server",
      "defaultValue": false
    },
    {
      "name": "spring.jackson.date-format",
      "type": "java.lang.String",
      "description": "Date format string or a fully-qualified date format class name. For instance, `yyyy-MM-dd HH:mm:ss`.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.default-property-inclusion",
      "type": "com.fasterxml.jackson.annotation.JsonInclude$Include",
      "description": "Controls the inclusion of properties during serialization. Configured with one of the values in Jackson's JsonInclude.Include enumeration.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.deserialization",
      "type": "java.util.Map<com.fasterxml.jackson.databind.DeserializationFeature,java.lang.Boolean>",
      "description": "Jackson on\/off features that affect the way Java objects are deserialized.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.generator",
      "type": "java.util.Map<com.fasterxml.jackson.core.JsonGenerator$Feature,java.lang.Boolean>",
      "description": "Jackson on\/off features for generators.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.locale",
      "type": "java.util.Locale",
      "description": "Locale used for formatting.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.mapper",
      "type": "java.util.Map<com.fasterxml.jackson.databind.MapperFeature,java.lang.Boolean>",
      "description": "Jackson general purpose on\/off features.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.parser",
      "type": "java.util.Map<com.fasterxml.jackson.core.JsonParser$Feature,java.lang.Boolean>",
      "description": "Jackson on\/off features for parsers.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.property-naming-strategy",
      "type": "java.lang.String",
      "description": "One of the constants on Jackson's PropertyNamingStrategy. Can also be a fully-qualified class name of a PropertyNamingStrategy subclass.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.serialization",
      "type": "java.util.Map<com.fasterxml.jackson.databind.SerializationFeature,java.lang.Boolean>",
      "description": "Jackson on\/off features that affect the way Java objects are serialized.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.time-zone",
      "type": "java.util.TimeZone",
      "description": "Time zone used when formatting dates. For instance, 'America\/Los_Angeles' or 'GMT+10'.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jackson.visibility",
      "type": "java.util.Map<com.fasterxml.jackson.annotation.PropertyAccessor,com.fasterxml.jackson.annotation.JsonAutoDetect$Visibility>",
      "description": "Jackson visibility thresholds that can be used to limit which methods (and fields) are auto-detected.",
      "sourceType": "org.springframework.boot.autoconfigure.jackson.JacksonProperties"
    },
    {
      "name": "spring.jdbc.template.fetch-size",
      "type": "java.lang.Integer",
      "description": "Number of rows that should be fetched from the database when more rows are needed. Use -1 to use the JDBC driver's default configuration.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties$Template",
      "defaultValue": -1
    },
    {
      "name": "spring.jdbc.template.max-rows",
      "type": "java.lang.Integer",
      "description": "Maximum number of rows. Use -1 to use the JDBC driver's default configuration.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties$Template",
      "defaultValue": -1
    },
    {
      "name": "spring.jdbc.template.query-timeout",
      "type": "java.time.Duration",
      "description": "Query timeout. Default is to use the JDBC driver's default configuration. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.jdbc.JdbcProperties$Template"
    },
    {
      "name": "spring.jersey.application-path",
      "type": "java.lang.String",
      "description": "Path that serves as the base URI for the application. If specified, overrides the value of '@ApplicationPath'.",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties"
    },
    {
      "name": "spring.jersey.filter.order",
      "type": "java.lang.Integer",
      "description": "Jersey filter chain order.",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties$Filter",
      "defaultValue": 0
    },
    {
      "name": "spring.jersey.init",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Init parameters to pass to Jersey through the servlet or filter.",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties"
    },
    {
      "name": "spring.jersey.servlet.load-on-startup",
      "type": "java.lang.Integer",
      "description": "Load on startup priority of the Jersey servlet.",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties$Servlet",
      "defaultValue": -1
    },
    {
      "name": "spring.jersey.type",
      "type": "org.springframework.boot.autoconfigure.jersey.JerseyProperties$Type",
      "description": "Jersey integration type.",
      "sourceType": "org.springframework.boot.autoconfigure.jersey.JerseyProperties",
      "defaultValue": "servlet"
    },
    {
      "name": "spring.jms.cache.consumers",
      "type": "java.lang.Boolean",
      "description": "Whether to cache message consumers.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Cache",
      "defaultValue": false
    },
    {
      "name": "spring.jms.cache.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to cache sessions.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Cache",
      "defaultValue": true
    },
    {
      "name": "spring.jms.cache.producers",
      "type": "java.lang.Boolean",
      "description": "Whether to cache message producers.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Cache",
      "defaultValue": true
    },
    {
      "name": "spring.jms.cache.session-cache-size",
      "type": "java.lang.Integer",
      "description": "Size of the session cache (per JMS Session type).",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Cache",
      "defaultValue": 1
    },
    {
      "name": "spring.jms.jndi-name",
      "type": "java.lang.String",
      "description": "Connection factory JNDI name. When set, takes precedence to others connection factory auto-configurations.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties"
    },
    {
      "name": "spring.jms.listener.acknowledge-mode",
      "type": "org.springframework.boot.autoconfigure.jms.JmsProperties$AcknowledgeMode",
      "description": "Acknowledge mode of the container. By default, the listener is transacted with automatic acknowledgment.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Listener"
    },
    {
      "name": "spring.jms.listener.auto-startup",
      "type": "java.lang.Boolean",
      "description": "Start the container automatically on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Listener",
      "defaultValue": true
    },
    {
      "name": "spring.jms.listener.concurrency",
      "type": "java.lang.Integer",
      "description": "Minimum number of concurrent consumers.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Listener"
    },
    {
      "name": "spring.jms.listener.max-concurrency",
      "type": "java.lang.Integer",
      "description": "Maximum number of concurrent consumers.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Listener"
    },
    {
      "name": "spring.jms.listener.receive-timeout",
      "type": "java.time.Duration",
      "description": "Timeout to use for receive calls. Use -1 for a no-wait receive or 0 for no timeout at all. The latter is only feasible if not running within a transaction manager and is generally discouraged since it prevents clean shutdown.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Listener",
      "defaultValue": "1s"
    },
    {
      "name": "spring.jms.pub-sub-domain",
      "type": "java.lang.Boolean",
      "description": "Whether the default destination type is topic.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties",
      "defaultValue": false
    },
    {
      "name": "spring.jms.template.default-destination",
      "type": "java.lang.String",
      "description": "Default destination to use on send and receive operations that do not have a destination parameter.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jms.template.delivery-delay",
      "type": "java.time.Duration",
      "description": "Delivery delay to use for send calls.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jms.template.delivery-mode",
      "type": "org.springframework.boot.autoconfigure.jms.JmsProperties$DeliveryMode",
      "description": "Delivery mode. Enables QoS (Quality of Service) when set.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jms.template.priority",
      "type": "java.lang.Integer",
      "description": "Priority of a message when sending. Enables QoS (Quality of Service) when set.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jms.template.qos-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable explicit QoS (Quality of Service) when sending a message. When enabled, the delivery mode, priority and time-to-live properties will be used when sending a message. QoS is automatically enabled when at least one of those settings is customized.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jms.template.receive-timeout",
      "type": "java.time.Duration",
      "description": "Timeout to use for receive calls.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jms.template.time-to-live",
      "type": "java.time.Duration",
      "description": "Time-to-live of a message when sending. Enables QoS (Quality of Service) when set.",
      "sourceType": "org.springframework.boot.autoconfigure.jms.JmsProperties$Template"
    },
    {
      "name": "spring.jmx.default-domain",
      "type": "java.lang.String",
      "description": "JMX domain name."
    },
    {
      "name": "spring.jmx.enabled",
      "type": "java.lang.Boolean",
      "description": "Expose management beans to the JMX domain.",
      "defaultValue": false
    },
    {
      "name": "spring.jmx.server",
      "type": "java.lang.String",
      "description": "MBeanServer bean name.",
      "defaultValue": "mbeanServer"
    },
    {
      "name": "spring.jmx.unique-names",
      "type": "java.lang.Boolean",
      "description": "Whether unique runtime object names should be ensured.",
      "defaultValue": false
    },
    {
      "name": "spring.jooq.sql-dialect",
      "type": "org.jooq.SQLDialect",
      "description": "SQL dialect to use. Auto-detected by default.",
      "sourceType": "org.springframework.boot.autoconfigure.jooq.JooqProperties"
    },
    {
      "name": "spring.jpa.database",
      "type": "org.springframework.orm.jpa.vendor.Database",
      "description": "Target database to operate on, auto-detected by default. Can be alternatively set using the 'databasePlatform' property.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties"
    },
    {
      "name": "spring.jpa.database-platform",
      "type": "java.lang.String",
      "description": "Name of the target database to operate on, auto-detected by default. Can be alternatively set using the 'Database' enum.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties"
    },
    {
      "name": "spring.jpa.generate-ddl",
      "type": "java.lang.Boolean",
      "description": "Whether to initialize the schema on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties",
      "defaultValue": false
    },
    {
      "name": "spring.jpa.hibernate.ddl-auto",
      "type": "java.lang.String",
      "description": "DDL mode. This is actually a shortcut for the 'hibernate.hbm2ddl.auto' property. Defaults to 'create-drop' when using an embedded database and no schema manager was detected. Otherwise, defaults to 'none'.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties"
    },
    {
      "name": "spring.jpa.hibernate.naming.implicit-strategy",
      "type": "java.lang.String",
      "description": "Fully qualified name of the implicit naming strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties$Naming"
    },
    {
      "name": "spring.jpa.hibernate.naming.physical-strategy",
      "type": "java.lang.String",
      "description": "Fully qualified name of the physical naming strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties$Naming"
    },
    {
      "name": "spring.jpa.hibernate.use-new-id-generator-mappings",
      "type": "java.lang.Boolean",
      "description": "Whether to use Hibernate's newer IdentifierGenerator for AUTO, TABLE and SEQUENCE. This is actually a shortcut for the 'hibernate.id.new_generator_mappings' property. When not specified will default to 'true'.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.HibernateProperties"
    },
    {
      "name": "spring.jpa.mapping-resources",
      "type": "java.util.List<java.lang.String>",
      "description": "Mapping resources (equivalent to 'mapping-file' entries in persistence.xml).",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties"
    },
    {
      "name": "spring.jpa.open-in-view",
      "type": "java.lang.Boolean",
      "description": "Register OpenEntityManagerInViewInterceptor. Binds a JPA EntityManager to the thread for the entire processing of the request.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties",
      "defaultValue": true
    },
    {
      "name": "spring.jpa.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional native properties to set on the JPA provider.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties"
    },
    {
      "name": "spring.jpa.show-sql",
      "type": "java.lang.Boolean",
      "description": "Whether to enable logging of SQL statements.",
      "sourceType": "org.springframework.boot.autoconfigure.orm.jpa.JpaProperties",
      "defaultValue": false
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.borrow-connection-timeout",
      "type": "java.lang.Integer",
      "description": "Timeout, in seconds, for borrowing connections from the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 30
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.ignore-session-transacted-flag",
      "type": "java.lang.Boolean",
      "description": "Whether to ignore the transacted flag when creating session.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.local-transaction-mode",
      "type": "java.lang.Boolean",
      "description": "Whether local transactions are desired.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.maintenance-interval",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, between runs of the pool's maintenance thread.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 60
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.max-idle-time",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, after which connections are cleaned up from the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 60
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.max-lifetime",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, that a connection can be pooled for before being destroyed. 0 denotes no limit.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.max-pool-size",
      "type": "java.lang.Integer",
      "description": "Maximum size of the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.min-pool-size",
      "type": "java.lang.Integer",
      "description": "Minimum size of the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.reap-timeout",
      "type": "java.lang.Integer",
      "description": "Reap timeout, in seconds, for borrowed connections. 0 denotes no limit.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.unique-resource-name",
      "type": "java.lang.String",
      "description": "Unique name used to identify the resource during recovery.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean",
      "defaultValue": "jmsConnectionFactory"
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.xa-connection-factory-class-name",
      "type": "java.lang.String",
      "description": "Vendor-specific implementation of XAConnectionFactory.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean"
    },
    {
      "name": "spring.jta.atomikos.connectionfactory.xa-properties",
      "type": "java.util.Properties",
      "description": "Vendor-specific XA properties.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosConnectionFactoryBean"
    },
    {
      "name": "spring.jta.atomikos.datasource.borrow-connection-timeout",
      "type": "java.lang.Integer",
      "description": "Timeout, in seconds, for borrowing connections from the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 30
    },
    {
      "name": "spring.jta.atomikos.datasource.concurrent-connection-validation",
      "type": "java.lang.Boolean",
      "description": "Whether to use concurrent connection validation.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.atomikos.datasource.default-isolation-level",
      "type": "java.lang.Integer",
      "description": "Default isolation level of connections provided by the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean"
    },
    {
      "name": "spring.jta.atomikos.datasource.login-timeout",
      "type": "java.lang.Integer",
      "description": "Timeout, in seconds, for establishing a database connection.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.atomikos.datasource.maintenance-interval",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, between runs of the pool's maintenance thread.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 60
    },
    {
      "name": "spring.jta.atomikos.datasource.max-idle-time",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, after which connections are cleaned up from the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 60
    },
    {
      "name": "spring.jta.atomikos.datasource.max-lifetime",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, that a connection can be pooled for before being destroyed. 0 denotes no limit.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.atomikos.datasource.max-pool-size",
      "type": "java.lang.Integer",
      "description": "Maximum size of the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.atomikos.datasource.min-pool-size",
      "type": "java.lang.Integer",
      "description": "Minimum size of the pool.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.atomikos.datasource.reap-timeout",
      "type": "java.lang.Integer",
      "description": "Reap timeout, in seconds, for borrowed connections. 0 denotes no limit.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.atomikos.datasource.test-query",
      "type": "java.lang.String",
      "description": "SQL query or statement used to validate a connection before returning it.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean"
    },
    {
      "name": "spring.jta.atomikos.datasource.unique-resource-name",
      "type": "java.lang.String",
      "description": "Unique name used to identify the resource during recovery.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean",
      "defaultValue": "dataSource"
    },
    {
      "name": "spring.jta.atomikos.datasource.xa-data-source-class-name",
      "type": "java.lang.String",
      "description": "Vendor-specific implementation of XAConnectionFactory.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean"
    },
    {
      "name": "spring.jta.atomikos.datasource.xa-properties",
      "type": "java.util.Properties",
      "description": "Vendor-specific XA properties.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosDataSourceBean"
    },
    {
      "name": "spring.jta.atomikos.properties.allow-sub-transactions",
      "type": "java.lang.Boolean",
      "description": "Specify whether sub-transactions are allowed.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": true
    },
    {
      "name": "spring.jta.atomikos.properties.checkpoint-interval",
      "type": "java.lang.Long",
      "description": "Interval between checkpoints, expressed as the number of log writes between two checkpoints. A checkpoint reduces the log file size at the expense of adding some overhead in the runtime.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": 500
    },
    {
      "name": "spring.jta.atomikos.properties.default-jta-timeout",
      "type": "java.time.Duration",
      "description": "Default timeout for JTA transactions.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": "10000ms"
    },
    {
      "name": "spring.jta.atomikos.properties.default-max-wait-time-on-shutdown",
      "type": "java.lang.Long",
      "description": "How long should normal shutdown (no-force) wait for transactions to complete.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties"
    },
    {
      "name": "spring.jta.atomikos.properties.enable-logging",
      "type": "java.lang.Boolean",
      "description": "Whether to enable disk logging.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": true
    },
    {
      "name": "spring.jta.atomikos.properties.force-shutdown-on-vm-exit",
      "type": "java.lang.Boolean",
      "description": "Whether a VM shutdown should trigger forced shutdown of the transaction core.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": false
    },
    {
      "name": "spring.jta.atomikos.properties.log-base-dir",
      "type": "java.lang.String",
      "description": "Directory in which the log files should be stored. Defaults to the current working directory.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties"
    },
    {
      "name": "spring.jta.atomikos.properties.log-base-name",
      "type": "java.lang.String",
      "description": "Transactions log file base name.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": "tmlog"
    },
    {
      "name": "spring.jta.atomikos.properties.max-actives",
      "type": "java.lang.Integer",
      "description": "Maximum number of active transactions.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": 50
    },
    {
      "name": "spring.jta.atomikos.properties.max-timeout",
      "type": "java.time.Duration",
      "description": "Maximum timeout that can be allowed for transactions.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": "300000ms"
    },
    {
      "name": "spring.jta.atomikos.properties.recovery.delay",
      "type": "java.time.Duration",
      "description": "Delay between two recovery scans.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties$Recovery",
      "defaultValue": "10000ms"
    },
    {
      "name": "spring.jta.atomikos.properties.recovery.forget-orphaned-log-entries-delay",
      "type": "java.time.Duration",
      "description": "Delay after which recovery can cleanup pending ('orphaned') log entries.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties$Recovery",
      "defaultValue": "86400000ms"
    },
    {
      "name": "spring.jta.atomikos.properties.recovery.max-retries",
      "type": "java.lang.Integer",
      "description": "Number of retry attempts to commit the transaction before throwing an exception.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties$Recovery",
      "defaultValue": 5
    },
    {
      "name": "spring.jta.atomikos.properties.recovery.retry-interval",
      "type": "java.time.Duration",
      "description": "Delay between retry attempts.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties$Recovery",
      "defaultValue": "10000ms"
    },
    {
      "name": "spring.jta.atomikos.properties.serial-jta-transactions",
      "type": "java.lang.Boolean",
      "description": "Whether sub-transactions should be joined when possible.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": true
    },
    {
      "name": "spring.jta.atomikos.properties.service",
      "type": "java.lang.String",
      "description": "Transaction manager implementation that should be started.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties"
    },
    {
      "name": "spring.jta.atomikos.properties.threaded-two-phase-commit",
      "type": "java.lang.Boolean",
      "description": "Whether to use different (and concurrent) threads for two-phase commit on the participating resources.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties",
      "defaultValue": false
    },
    {
      "name": "spring.jta.atomikos.properties.transaction-manager-unique-name",
      "type": "java.lang.String",
      "description": "The transaction manager's unique name. Defaults to the machine's IP address. If you plan to run more than one transaction manager against one database you must set this property to a unique value.",
      "sourceType": "org.springframework.boot.jta.atomikos.AtomikosProperties"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.acquire-increment",
      "type": "java.lang.Integer",
      "description": "Number of connections to create when growing the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.acquisition-interval",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, to wait before trying to acquire a connection again after an invalid connection was acquired.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.acquisition-timeout",
      "type": "java.lang.Integer",
      "description": "Timeout, in seconds, for acquiring connections from the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 30
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.allow-local-transactions",
      "type": "java.lang.Boolean",
      "description": "Whether the transaction manager should allow mixing XA and non-XA transactions.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.apply-transaction-timeout",
      "type": "java.lang.Boolean",
      "description": "Whether the transaction timeout should be set on the XAResource when it is enlisted.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.automatic-enlisting-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether resources should be enlisted and delisted automatically.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.cache-producers-consumers",
      "type": "java.lang.Boolean",
      "description": "Whether producers and consumers should be cached.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.class-name",
      "type": "java.lang.String",
      "description": "Underlying implementation class name of the XA resource.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.defer-connection-release",
      "type": "java.lang.Boolean",
      "description": "Whether the provider can run many transactions on the same connection and supports transaction interleaving.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.disabled",
      "type": "java.lang.Boolean",
      "description": "Whether this resource is disabled, meaning it's temporarily forbidden to acquire a connection from its pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.driver-properties",
      "type": "java.util.Properties",
      "description": "Properties that should be set on the underlying implementation.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.failed",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.ignore-recovery-failures",
      "type": "java.lang.Boolean",
      "description": "Whether recovery failures should be ignored.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.max-idle-time",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, after which connections are cleaned up from the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 60
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.max-pool-size",
      "type": "java.lang.Integer",
      "description": "Maximum size of the pool. 0 denotes no limit.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.min-pool-size",
      "type": "java.lang.Integer",
      "description": "Minimum size of the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.password",
      "type": "java.lang.String",
      "description": "Password to use to connect to the JMS provider.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.share-transaction-connections",
      "type": "java.lang.Boolean",
      "description": "Whether connections in the ACCESSIBLE state can be shared within the context of a transaction.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.test-connections",
      "type": "java.lang.Boolean",
      "description": "Whether connections should be tested when acquired from the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.two-pc-ordering-position",
      "type": "java.lang.Integer",
      "description": "Position that this resource should take during two-phase commit (always first is Integer.MIN_VALUE, always last is Integer.MAX_VALUE).",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.unique-name",
      "type": "java.lang.String",
      "description": "Unique name used to identify the resource during recovery.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": "jmsConnectionFactory"
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.use-tm-join",
      "type": "java.lang.Boolean",
      "description": "Whether TMJOIN should be used when starting XAResources.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.bitronix.connectionfactory.user",
      "type": "java.lang.String",
      "description": "User to use to connect to the JMS provider.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingConnectionFactoryBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.acquire-increment",
      "type": "java.lang.Integer",
      "description": "Number of connections to create when growing the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.bitronix.datasource.acquisition-interval",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, to wait before trying to acquire a connection again after an invalid connection was acquired.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.bitronix.datasource.acquisition-timeout",
      "type": "java.lang.Integer",
      "description": "Timeout, in seconds, for acquiring connections from the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 30
    },
    {
      "name": "spring.jta.bitronix.datasource.allow-local-transactions",
      "type": "java.lang.Boolean",
      "description": "Whether the transaction manager should allow mixing XA and non-XA transactions.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.datasource.apply-transaction-timeout",
      "type": "java.lang.Boolean",
      "description": "Whether the transaction timeout should be set on the XAResource when it is enlisted.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": "false"
    },
    {
      "name": "spring.jta.bitronix.datasource.automatic-enlisting-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether resources should be enlisted and delisted automatically.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.bitronix.datasource.class-name",
      "type": "java.lang.String",
      "description": "Underlying implementation class name of the XA resource.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.cursor-holdability",
      "type": "java.lang.String",
      "description": "Default cursor holdability for connections.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.defer-connection-release",
      "type": "java.lang.Boolean",
      "description": "Whether the database can run many transactions on the same connection and supports transaction interleaving.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.bitronix.datasource.disabled",
      "type": "java.lang.Boolean",
      "description": "Whether this resource is disabled, meaning it's temporarily forbidden to acquire a connection from its pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.datasource.driver-properties",
      "type": "java.util.Properties",
      "description": "Properties that should be set on the underlying implementation.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.enable-jdbc4-connection-test",
      "type": "java.lang.Boolean",
      "description": "Whether Connection.isValid() is called when acquiring a connection from the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.datasource.failed",
      "type": "java.lang.Boolean",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.ignore-recovery-failures",
      "type": "java.lang.Boolean",
      "description": "Whether recovery failures should be ignored.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.datasource.isolation-level",
      "type": "java.lang.String",
      "description": "Default isolation level for connections.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.local-auto-commit",
      "type": "java.lang.String",
      "description": "Default auto-commit mode for local transactions.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.login-timeout",
      "type": "java.lang.Integer",
      "description": "Timeout, in seconds, for establishing a database connection.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.max-idle-time",
      "type": "java.lang.Integer",
      "description": "Time, in seconds, after which connections are cleaned up from the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 60
    },
    {
      "name": "spring.jta.bitronix.datasource.max-pool-size",
      "type": "java.lang.Integer",
      "description": "Maximum size of the pool. 0 denotes no limit.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.bitronix.datasource.min-pool-size",
      "type": "java.lang.Integer",
      "description": "Minimum size of the pool.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.bitronix.datasource.prepared-statement-cache-size",
      "type": "java.lang.Integer",
      "description": "Target size of the prepared statement cache. 0 disables the cache.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 0
    },
    {
      "name": "spring.jta.bitronix.datasource.share-transaction-connections",
      "type": "java.lang.Boolean",
      "description": "Whether connections in the ACCESSIBLE state can be shared within the context of a transaction.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": false
    },
    {
      "name": "spring.jta.bitronix.datasource.test-query",
      "type": "java.lang.String",
      "description": "SQL query or statement used to validate a connection before returning it.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean"
    },
    {
      "name": "spring.jta.bitronix.datasource.two-pc-ordering-position",
      "type": "java.lang.Integer",
      "description": "Position that this resource should take during two-phase commit (always first is Integer.MIN_VALUE, and always last is Integer.MAX_VALUE).",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": 1
    },
    {
      "name": "spring.jta.bitronix.datasource.unique-name",
      "type": "java.lang.String",
      "description": "Unique name used to identify the resource during recovery.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": "dataSource"
    },
    {
      "name": "spring.jta.bitronix.datasource.use-tm-join",
      "type": "java.lang.Boolean",
      "description": "Whether TMJOIN should be used when starting XAResources.",
      "sourceType": "org.springframework.boot.jta.bitronix.PoolingDataSourceBean",
      "defaultValue": true
    },
    {
      "name": "spring.jta.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JTA support.",
      "defaultValue": true
    },
    {
      "name": "spring.jta.log-dir",
      "type": "java.lang.String",
      "description": "Transaction logs directory.",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.jta.JtaProperties"
    },
    {
      "name": "spring.jta.transaction-manager-id",
      "type": "java.lang.String",
      "description": "Transaction manager unique identifier.",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.jta.JtaProperties"
    },
    {
      "name": "spring.kafka.admin.client-id",
      "type": "java.lang.String",
      "description": "ID to pass to the server when making requests. Used for server-side logging.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Admin"
    },
    {
      "name": "spring.kafka.admin.fail-fast",
      "type": "java.lang.Boolean",
      "description": "Whether to fail fast if the broker is not available on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Admin",
      "defaultValue": false
    },
    {
      "name": "spring.kafka.admin.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional admin-specific properties used to configure the client.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Admin"
    },
    {
      "name": "spring.kafka.admin.security.protocol",
      "type": "java.lang.String",
      "description": "Security protocol used to communicate with brokers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security"
    },
    {
      "name": "spring.kafka.admin.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password of the private key in the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.key-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.trust-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.admin.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.bootstrap-servers",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Applies to all components unless overridden.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties"
    },
    {
      "name": "spring.kafka.client-id",
      "type": "java.lang.String",
      "description": "ID to pass to the server when making requests. Used for server-side logging.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties"
    },
    {
      "name": "spring.kafka.consumer.auto-commit-interval",
      "type": "java.time.Duration",
      "description": "Frequency with which the consumer offsets are auto-committed to Kafka if 'enable.auto.commit' is set to true.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.auto-offset-reset",
      "type": "java.lang.String",
      "description": "What to do when there is no initial offset in Kafka or if the current offset no longer exists on the server.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.bootstrap-servers",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for consumers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.client-id",
      "type": "java.lang.String",
      "description": "ID to pass to the server when making requests. Used for server-side logging.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.enable-auto-commit",
      "type": "java.lang.Boolean",
      "description": "Whether the consumer's offset is periodically committed in the background.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.fetch-max-wait",
      "type": "java.time.Duration",
      "description": "Maximum amount of time the server blocks before answering the fetch request if there isn't sufficient data to immediately satisfy the requirement given by 'fetch-min-size'.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.fetch-min-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Minimum amount of data the server should return for a fetch request.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.group-id",
      "type": "java.lang.String",
      "description": "Unique string that identifies the consumer group to which this consumer belongs.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.heartbeat-interval",
      "type": "java.time.Duration",
      "description": "Expected time between heartbeats to the consumer coordinator.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.isolation-level",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$IsolationLevel",
      "description": "Isolation level for reading messages that have been written transactionally.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.key-deserializer",
      "type": "java.lang.Class<?>",
      "description": "Deserializer class for keys.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.max-poll-records",
      "type": "java.lang.Integer",
      "description": "Maximum number of records returned in a single call to poll().",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional consumer-specific properties used to configure the client.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.consumer.security.protocol",
      "type": "java.lang.String",
      "description": "Security protocol used to communicate with brokers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security"
    },
    {
      "name": "spring.kafka.consumer.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password of the private key in the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.key-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.trust-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.consumer.value-deserializer",
      "type": "java.lang.Class<?>",
      "description": "Deserializer class for values.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Consumer"
    },
    {
      "name": "spring.kafka.jaas.control-flag",
      "type": "org.springframework.kafka.security.jaas.KafkaJaasLoginModuleInitializer$ControlFlag",
      "description": "Control flag for login configuration.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Jaas",
      "defaultValue": "required"
    },
    {
      "name": "spring.kafka.jaas.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JAAS configuration.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Jaas",
      "defaultValue": false
    },
    {
      "name": "spring.kafka.jaas.login-module",
      "type": "java.lang.String",
      "description": "Login module.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Jaas",
      "defaultValue": "com.sun.security.auth.module.Krb5LoginModule"
    },
    {
      "name": "spring.kafka.jaas.options",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional JAAS options.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Jaas"
    },
    {
      "name": "spring.kafka.listener.ack-count",
      "type": "java.lang.Integer",
      "description": "Number of records between offset commits when ackMode is 'COUNT' or 'COUNT_TIME'.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.ack-mode",
      "type": "org.springframework.kafka.listener.ContainerProperties$AckMode",
      "description": "Listener AckMode. See the spring-kafka documentation.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.ack-time",
      "type": "java.time.Duration",
      "description": "Time between offset commits when ackMode is 'TIME' or 'COUNT_TIME'.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.client-id",
      "type": "java.lang.String",
      "description": "Prefix for the listener's consumer client.id property.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.concurrency",
      "type": "java.lang.Integer",
      "description": "Number of threads to run in the listener containers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.idle-event-interval",
      "type": "java.time.Duration",
      "description": "Time between publishing idle consumer events (no data received).",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.log-container-config",
      "type": "java.lang.Boolean",
      "description": "Whether to log the container configuration during initialization (INFO level).",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.missing-topics-fatal",
      "type": "java.lang.Boolean",
      "description": "Whether the container should fail to start if at least one of the configured topics are not present on the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener",
      "defaultValue": false
    },
    {
      "name": "spring.kafka.listener.monitor-interval",
      "type": "java.time.Duration",
      "description": "Time between checks for non-responsive consumers. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.no-poll-threshold",
      "type": "java.lang.Float",
      "description": "Multiplier applied to 'pollTimeout' to determine if a consumer is non-responsive.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.poll-timeout",
      "type": "java.time.Duration",
      "description": "Timeout to use when polling the consumer.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener"
    },
    {
      "name": "spring.kafka.listener.type",
      "type": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener$Type",
      "description": "Listener type.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener",
      "defaultValue": "single"
    },
    {
      "name": "spring.kafka.producer.acks",
      "type": "java.lang.String",
      "description": "Number of acknowledgments the producer requires the leader to have received before considering a request complete.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.batch-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Default batch size. A small batch size will make batching less common and may reduce throughput (a batch size of zero disables batching entirely).",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.bootstrap-servers",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for producers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.buffer-memory",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Total memory size the producer can use to buffer records waiting to be sent to the server.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.client-id",
      "type": "java.lang.String",
      "description": "ID to pass to the server when making requests. Used for server-side logging.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.compression-type",
      "type": "java.lang.String",
      "description": "Compression type for all data generated by the producer.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.key-serializer",
      "type": "java.lang.Class<?>",
      "description": "Serializer class for keys.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional producer-specific properties used to configure the client.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.retries",
      "type": "java.lang.Integer",
      "description": "When greater than zero, enables retrying of failed sends.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.security.protocol",
      "type": "java.lang.String",
      "description": "Security protocol used to communicate with brokers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security"
    },
    {
      "name": "spring.kafka.producer.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password of the private key in the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.key-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.trust-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.producer.transaction-id-prefix",
      "type": "java.lang.String",
      "description": "When non empty, enables transaction support for producer.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.producer.value-serializer",
      "type": "java.lang.Class<?>",
      "description": "Serializer class for values.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Producer"
    },
    {
      "name": "spring.kafka.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional properties, common to producers and consumers, used to configure the client.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties"
    },
    {
      "name": "spring.kafka.security.protocol",
      "type": "java.lang.String",
      "description": "Security protocol used to communicate with brokers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security"
    },
    {
      "name": "spring.kafka.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password of the private key in the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.key-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.trust-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.application-id",
      "type": "java.lang.String",
      "description": "Kafka streams application.id property; default spring.application.name.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.streams.auto-startup",
      "type": "java.lang.Boolean",
      "description": "Whether or not to auto-start the streams factory bean.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams",
      "defaultValue": true
    },
    {
      "name": "spring.kafka.streams.bootstrap-servers",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-delimited list of host:port pairs to use for establishing the initial connections to the Kafka cluster. Overrides the global property, for streams.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.streams.cache-max-size-buffering",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum memory size to be used for buffering across all threads.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.streams.client-id",
      "type": "java.lang.String",
      "description": "ID to pass to the server when making requests. Used for server-side logging.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.streams.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional Kafka properties used to configure the streams.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.streams.replication-factor",
      "type": "java.lang.Integer",
      "description": "The replication factor for change log topics and repartition topics created by the stream processing application.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.streams.security.protocol",
      "type": "java.lang.String",
      "description": "Security protocol used to communicate with brokers.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Security"
    },
    {
      "name": "spring.kafka.streams.ssl.key-password",
      "type": "java.lang.String",
      "description": "Password of the private key in the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.key-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Type of the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.protocol",
      "type": "java.lang.String",
      "description": "SSL protocol to use.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.trust-store-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Type of the trust store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Ssl"
    },
    {
      "name": "spring.kafka.streams.state-dir",
      "type": "java.lang.String",
      "description": "Directory location for the state store.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Streams"
    },
    {
      "name": "spring.kafka.template.default-topic",
      "type": "java.lang.String",
      "description": "Default topic to which messages are sent.",
      "sourceType": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Template"
    },
    {
      "name": "spring.ldap.anonymous-read-only",
      "type": "java.lang.Boolean",
      "description": "Whether read-only operations should use an anonymous environment. Disabled by default unless a username is set.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.ldap.base",
      "type": "java.lang.String",
      "description": "Base suffix from which all operations should originate.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.ldap.base-environment",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "LDAP specification settings.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.ldap.embedded.base-dn",
      "type": "java.util.List<java.lang.String>",
      "description": "List of base DNs.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties"
    },
    {
      "name": "spring.ldap.embedded.credential.password",
      "type": "java.lang.String",
      "description": "Embedded LDAP password.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties$Credential"
    },
    {
      "name": "spring.ldap.embedded.credential.username",
      "type": "java.lang.String",
      "description": "Embedded LDAP username.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties$Credential"
    },
    {
      "name": "spring.ldap.embedded.ldif",
      "type": "java.lang.String",
      "description": "Schema (LDIF) script resource reference.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties",
      "defaultValue": "classpath:schema.ldif"
    },
    {
      "name": "spring.ldap.embedded.port",
      "type": "java.lang.Integer",
      "description": "Embedded LDAP port.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties",
      "defaultValue": 0
    },
    {
      "name": "spring.ldap.embedded.validation.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable LDAP schema validation.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties$Validation",
      "defaultValue": true
    },
    {
      "name": "spring.ldap.embedded.validation.schema",
      "type": "org.springframework.core.io.Resource",
      "description": "Path to the custom schema.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.embedded.EmbeddedLdapProperties$Validation"
    },
    {
      "name": "spring.ldap.password",
      "type": "java.lang.String",
      "description": "Login password of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.ldap.urls",
      "type": "java.lang.String[]",
      "description": "LDAP URLs of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.ldap.username",
      "type": "java.lang.String",
      "description": "Login username of the server.",
      "sourceType": "org.springframework.boot.autoconfigure.ldap.LdapProperties"
    },
    {
      "name": "spring.lifecycle.timeout-per-shutdown-phase",
      "type": "java.time.Duration",
      "description": "Timeout for the shutdown of any phase (group of SmartLifecycle beans with the same 'phase' value).",
      "sourceType": "org.springframework.boot.autoconfigure.context.LifecycleProperties",
      "defaultValue": "30s"
    },
    {
      "name": "spring.liquibase.change-log",
      "type": "java.lang.String",
      "description": "Change log configuration path.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": "classpath:\/db\/changelog\/db.changelog-master.yaml"
    },
    {
      "name": "spring.liquibase.clear-checksums",
      "type": "java.lang.Boolean",
      "description": "Whether to clear all checksums in the current changelog, so they will be recalculated upon the next update.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": false
    },
    {
      "name": "spring.liquibase.contexts",
      "type": "java.lang.String",
      "description": "Comma-separated list of runtime contexts to use.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.database-change-log-lock-table",
      "type": "java.lang.String",
      "description": "Name of table to use for tracking concurrent Liquibase usage.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": "DATABASECHANGELOGLOCK"
    },
    {
      "name": "spring.liquibase.database-change-log-table",
      "type": "java.lang.String",
      "description": "Name of table to use for tracking change history.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": "DATABASECHANGELOG"
    },
    {
      "name": "spring.liquibase.default-schema",
      "type": "java.lang.String",
      "description": "Default database schema.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.drop-first",
      "type": "java.lang.Boolean",
      "description": "Whether to first drop the database schema.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": false
    },
    {
      "name": "spring.liquibase.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Liquibase support.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": true
    },
    {
      "name": "spring.liquibase.labels",
      "type": "java.lang.String",
      "description": "Comma-separated list of runtime labels to use.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.liquibase-schema",
      "type": "java.lang.String",
      "description": "Schema to use for Liquibase objects.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.liquibase-tablespace",
      "type": "java.lang.String",
      "description": "Tablespace to use for Liquibase objects.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.parameters",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Change log parameters.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.password",
      "type": "java.lang.String",
      "description": "Login password of the database to migrate.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.rollback-file",
      "type": "java.io.File",
      "description": "File to which rollback SQL is written when an update is performed.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.tag",
      "type": "java.lang.String",
      "description": "Tag name to use when applying database changes. Can also be used with 'rollbackFile' to generate a rollback script for all existing changes associated with that tag.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.test-rollback-on-update",
      "type": "java.lang.Boolean",
      "description": "Whether rollback should be tested before update is performed.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties",
      "defaultValue": false
    },
    {
      "name": "spring.liquibase.url",
      "type": "java.lang.String",
      "description": "JDBC URL of the database to migrate. If not set, the primary configured data source is used.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.liquibase.user",
      "type": "java.lang.String",
      "description": "Login user of the database to migrate.",
      "sourceType": "org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties"
    },
    {
      "name": "spring.mail.default-encoding",
      "type": "java.nio.charset.Charset",
      "description": "Default MimeMessage encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.mail.host",
      "type": "java.lang.String",
      "description": "SMTP server host. For instance, `smtp.example.com`.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.mail.jndi-name",
      "type": "java.lang.String",
      "description": "Session JNDI name. When set, takes precedence over other Session settings.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.mail.password",
      "type": "java.lang.String",
      "description": "Login password of the SMTP server.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.mail.port",
      "type": "java.lang.Integer",
      "description": "SMTP server port.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.mail.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional JavaMail Session properties.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.mail.protocol",
      "type": "java.lang.String",
      "description": "Protocol used by the SMTP server.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties",
      "defaultValue": "smtp"
    },
    {
      "name": "spring.mail.test-connection",
      "type": "java.lang.Boolean",
      "description": "Whether to test that the mail server is available on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mail.username",
      "type": "java.lang.String",
      "description": "Login user of the SMTP server.",
      "sourceType": "org.springframework.boot.autoconfigure.mail.MailProperties"
    },
    {
      "name": "spring.main.allow-bean-definition-overriding",
      "type": "java.lang.Boolean",
      "description": "Whether bean definition overriding, by registering a definition with the same name as an existing definition, is allowed.",
      "sourceType": "org.springframework.boot.SpringApplication",
      "defaultValue": false
    },
    {
      "name": "spring.main.banner-mode",
      "type": "org.springframework.boot.Banner$Mode",
      "description": "Mode used to display the banner when the application runs.",
      "sourceType": "org.springframework.boot.SpringApplication",
      "defaultValue": "console"
    },
    {
      "name": "spring.main.cloud-platform",
      "type": "org.springframework.boot.cloud.CloudPlatform",
      "description": "Override the Cloud Platform auto-detection."
    },
    {
      "name": "spring.main.lazy-initialization",
      "type": "java.lang.Boolean",
      "description": "Whether initialization should be performed lazily.",
      "sourceType": "org.springframework.boot.SpringApplication",
      "defaultValue": false
    },
    {
      "name": "spring.main.log-startup-info",
      "type": "java.lang.Boolean",
      "description": "Whether to log information about the application when it starts.",
      "sourceType": "org.springframework.boot.SpringApplication",
      "defaultValue": true
    },
    {
      "name": "spring.main.register-shutdown-hook",
      "type": "java.lang.Boolean",
      "description": "Whether the application should have a shutdown hook registered.",
      "sourceType": "org.springframework.boot.SpringApplication",
      "defaultValue": true
    },
    {
      "name": "spring.main.sources",
      "type": "java.util.Set<java.lang.String>",
      "description": "Sources (class names, package names, or XML resource locations) to include in the ApplicationContext.",
      "sourceType": "org.springframework.boot.SpringApplication"
    },
    {
      "name": "spring.main.web-application-type",
      "type": "org.springframework.boot.WebApplicationType",
      "description": "Flag to explicitly request a specific type of web application. If not set, auto-detected based on the classpath.",
      "sourceType": "org.springframework.boot.SpringApplication"
    },
    {
      "name": "spring.mandatory-file-encoding",
      "type": "java.nio.charset.Charset",
      "description": "Expected character encoding the application must use.",
      "sourceType": "org.springframework.boot.context.FileEncodingApplicationListener"
    },
    {
      "name": "spring.messages.always-use-message-format",
      "type": "java.lang.Boolean",
      "description": "Whether to always apply the MessageFormat rules, parsing even messages without arguments.",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceProperties",
      "defaultValue": false
    },
    {
      "name": "spring.messages.basename",
      "type": "java.lang.String",
      "description": "Comma-separated list of basenames (essentially a fully-qualified classpath location), each following the ResourceBundle convention with relaxed support for slash based locations. If it doesn't contain a package qualifier (such as 'org.mypackage'), it will be resolved from the classpath root.",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceProperties",
      "defaultValue": "messages"
    },
    {
      "name": "spring.messages.cache-duration",
      "type": "java.time.Duration",
      "description": "Loaded resource bundle files cache duration. When not set, bundles are cached forever. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceProperties"
    },
    {
      "name": "spring.messages.encoding",
      "type": "java.nio.charset.Charset",
      "description": "Message bundles encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.messages.fallback-to-system-locale",
      "type": "java.lang.Boolean",
      "description": "Whether to fall back to the system Locale if no files for a specific Locale have been found. if this is turned off, the only fallback will be the default file (e.g. 'messages.properties' for basename 'messages').",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceProperties",
      "defaultValue": true
    },
    {
      "name": "spring.messages.use-code-as-default-message",
      "type": "java.lang.Boolean",
      "description": "Whether to use the message code as the default message instead of throwing a 'NoSuchMessageException'. Recommended during development only.",
      "sourceType": "org.springframework.boot.autoconfigure.context.MessageSourceProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mongodb.embedded.features",
      "type": "java.util.Set<de.flapdoodle.embed.mongo.distribution.Feature>",
      "description": "Comma-separated list of features to enable. Uses the defaults of the configured version by default.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties",
      "defaultValue": [
        "sync_delay"
      ]
    },
    {
      "name": "spring.mongodb.embedded.storage.database-dir",
      "type": "java.lang.String",
      "description": "Directory used for data storage.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties$Storage"
    },
    {
      "name": "spring.mongodb.embedded.storage.oplog-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum size of the oplog.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties$Storage"
    },
    {
      "name": "spring.mongodb.embedded.storage.repl-set-name",
      "type": "java.lang.String",
      "description": "Name of the replica set.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties$Storage"
    },
    {
      "name": "spring.mongodb.embedded.version",
      "type": "java.lang.String",
      "description": "Version of Mongo to use.",
      "sourceType": "org.springframework.boot.autoconfigure.mongo.embedded.EmbeddedMongoProperties",
      "defaultValue": "3.5.5"
    },
    {
      "name": "spring.mustache.allow-request-override",
      "type": "java.lang.Boolean",
      "description": "Whether HttpServletRequest attributes are allowed to override (hide) controller generated model attributes of the same name.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mustache.allow-session-override",
      "type": "java.lang.Boolean",
      "description": "Whether HttpSession attributes are allowed to override (hide) controller generated model attributes of the same name.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mustache.cache",
      "type": "java.lang.Boolean",
      "description": "Whether to enable template caching.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mustache.charset",
      "type": "java.nio.charset.Charset",
      "description": "Template encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.mustache.check-template-location",
      "type": "java.lang.Boolean",
      "description": "Whether to check that the templates location exists.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": true
    },
    {
      "name": "spring.mustache.content-type",
      "type": "org.springframework.util.MimeType",
      "description": "Content-Type value.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": "text\/html"
    },
    {
      "name": "spring.mustache.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable MVC view resolution for this technology.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": true
    },
    {
      "name": "spring.mustache.expose-request-attributes",
      "type": "java.lang.Boolean",
      "description": "Whether all request attributes should be added to the model prior to merging with the template.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mustache.expose-session-attributes",
      "type": "java.lang.Boolean",
      "description": "Whether all HttpSession attributes should be added to the model prior to merging with the template.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mustache.expose-spring-macro-helpers",
      "type": "java.lang.Boolean",
      "description": "Whether to expose a RequestContext for use by Spring's macro library, under the name 'springMacroRequestContext'.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": true
    },
    {
      "name": "spring.mustache.prefix",
      "type": "java.lang.String",
      "description": "Prefix to apply to template names.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": "classpath:\/templates\/"
    },
    {
      "name": "spring.mustache.request-context-attribute",
      "type": "java.lang.String",
      "description": "Name of the RequestContext attribute for all views.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties"
    },
    {
      "name": "spring.mustache.suffix",
      "type": "java.lang.String",
      "description": "Suffix to apply to template names.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties",
      "defaultValue": ".mustache"
    },
    {
      "name": "spring.mustache.view-names",
      "type": "java.lang.String[]",
      "description": "View names that can be resolved.",
      "sourceType": "org.springframework.boot.autoconfigure.mustache.MustacheProperties"
    },
    {
      "name": "spring.mvc.async.request-timeout",
      "type": "java.time.Duration",
      "description": "Amount of time before asynchronous request handling times out. If this value is not set, the default timeout of the underlying implementation is used.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Async"
    },
    {
      "name": "spring.mvc.contentnegotiation.favor-parameter",
      "type": "java.lang.Boolean",
      "description": "Whether a request parameter ('format' by default) should be used to determine the requested media type.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Contentnegotiation",
      "defaultValue": false
    },
    {
      "name": "spring.mvc.contentnegotiation.media-types",
      "type": "java.util.Map<java.lang.String,org.springframework.http.MediaType>",
      "description": "Map file extensions to media types for content negotiation. For instance, yml to text\/yaml.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Contentnegotiation"
    },
    {
      "name": "spring.mvc.contentnegotiation.parameter-name",
      "type": "java.lang.String",
      "description": "Query parameter name to use when 'favor-parameter' is enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Contentnegotiation"
    },
    {
      "name": "spring.mvc.converters.preferred-json-mapper",
      "type": "java.lang.String",
      "description": "Preferred JSON mapper to use for HTTP message conversion. By default, auto-detected according to the environment."
    },
    {
      "name": "spring.mvc.dispatch-options-request",
      "type": "java.lang.Boolean",
      "description": "Whether to dispatch OPTIONS requests to the FrameworkServlet doService method.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": true
    },
    {
      "name": "spring.mvc.dispatch-trace-request",
      "type": "java.lang.Boolean",
      "description": "Whether to dispatch TRACE requests to the FrameworkServlet doService method.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mvc.format.date",
      "type": "java.lang.String",
      "description": "Date format to use, for example `dd\/MM\/yyyy`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Format"
    },
    {
      "name": "spring.mvc.format.date-time",
      "type": "java.lang.String",
      "description": "Date-time format to use, for example `yyyy-MM-dd HH:mm:ss`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Format"
    },
    {
      "name": "spring.mvc.format.time",
      "type": "java.lang.String",
      "description": "Time format to use, for example `HH:mm:ss`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Format"
    },
    {
      "name": "spring.mvc.formcontent.filter.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Spring's FormContentFilter.",
      "defaultValue": true
    },
    {
      "name": "spring.mvc.hiddenmethod.filter.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Spring's HiddenHttpMethodFilter.",
      "defaultValue": false
    },
    {
      "name": "spring.mvc.ignore-default-model-on-redirect",
      "type": "java.lang.Boolean",
      "description": "Whether the content of the 'default' model should be ignored during redirect scenarios.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": true
    },
    {
      "name": "spring.mvc.locale",
      "type": "java.util.Locale",
      "description": "Locale to use. By default, this locale is overridden by the 'Accept-Language' header.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties"
    },
    {
      "name": "spring.mvc.locale-resolver",
      "type": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$LocaleResolver",
      "description": "Define how the locale should be resolved.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": "accept-header"
    },
    {
      "name": "spring.mvc.log-request-details",
      "type": "java.lang.Boolean",
      "description": "Whether logging of (potentially sensitive) request details at DEBUG and TRACE level is allowed.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mvc.log-resolved-exception",
      "type": "java.lang.Boolean",
      "description": "Whether to enable warn logging of exceptions resolved by a 'HandlerExceptionResolver', except for 'DefaultHandlerExceptionResolver'.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mvc.message-codes-resolver-format",
      "type": "org.springframework.validation.DefaultMessageCodesResolver$Format",
      "description": "Formatting strategy for message codes. For instance, `PREFIX_ERROR_CODE`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties"
    },
    {
      "name": "spring.mvc.publish-request-handled-events",
      "type": "java.lang.Boolean",
      "description": "Whether to publish a ServletRequestHandledEvent at the end of each request.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": true
    },
    {
      "name": "spring.mvc.servlet.load-on-startup",
      "type": "java.lang.Integer",
      "description": "Load on startup priority of the dispatcher servlet.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Servlet",
      "defaultValue": -1
    },
    {
      "name": "spring.mvc.servlet.path",
      "type": "java.lang.String",
      "description": "Path of the dispatcher servlet.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Servlet",
      "defaultValue": "\/"
    },
    {
      "name": "spring.mvc.static-path-pattern",
      "type": "java.lang.String",
      "description": "Path pattern used for static resources.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": "\/**"
    },
    {
      "name": "spring.mvc.throw-exception-if-no-handler-found",
      "type": "java.lang.Boolean",
      "description": "Whether a 'NoHandlerFoundException' should be thrown if no Handler was found to process a request.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "defaultValue": false
    },
    {
      "name": "spring.mvc.view.prefix",
      "type": "java.lang.String",
      "description": "Spring MVC view prefix.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$View"
    },
    {
      "name": "spring.mvc.view.suffix",
      "type": "java.lang.String",
      "description": "Spring MVC view suffix.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$View"
    },
    {
      "name": "spring.output.ansi.enabled",
      "type": "org.springframework.boot.ansi.AnsiOutput$Enabled",
      "description": "Configures the ANSI output.",
      "defaultValue": "detect"
    },
    {
      "name": "spring.pid.fail-on-write-error",
      "type": "java.lang.Boolean",
      "description": "Fails if ApplicationPidFileWriter is used but it cannot write the PID file.",
      "sourceType": "org.springframework.boot.context.ApplicationPidFileWriter"
    },
    {
      "name": "spring.pid.file",
      "type": "java.lang.String",
      "description": "Location of the PID file to write (if ApplicationPidFileWriter is used).",
      "sourceType": "org.springframework.boot.context.ApplicationPidFileWriter"
    },
    {
      "name": "spring.profiles",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of profile expressions that at least one should match for the document to be included.",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener"
    },
    {
      "name": "spring.profiles.active",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of active profiles. Can be overridden by a command line switch.",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener"
    },
    {
      "name": "spring.profiles.include",
      "type": "java.util.List<java.lang.String>",
      "description": "Unconditionally activate the specified comma-separated list of profiles (or list of profiles if using YAML).",
      "sourceType": "org.springframework.boot.context.config.ConfigFileApplicationListener"
    },
    {
      "name": "spring.quartz.auto-startup",
      "type": "java.lang.Boolean",
      "description": "Whether to automatically start the scheduler after initialization.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "defaultValue": true
    },
    {
      "name": "spring.quartz.jdbc.comment-prefix",
      "type": "java.util.List<java.lang.String>",
      "description": "Prefixes for single-line comments in SQL initialization scripts.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties$Jdbc",
      "defaultValue": [
        "#",
        "--"
      ]
    },
    {
      "name": "spring.quartz.jdbc.initialize-schema",
      "type": "org.springframework.boot.jdbc.DataSourceInitializationMode",
      "description": "Database schema initialization mode.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties$Jdbc",
      "defaultValue": "embedded"
    },
    {
      "name": "spring.quartz.jdbc.schema",
      "type": "java.lang.String",
      "description": "Path to the SQL file to use to initialize the database schema.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties$Jdbc",
      "defaultValue": "classpath:org\/quartz\/impl\/jdbcjobstore\/tables_@@platform@@.sql"
    },
    {
      "name": "spring.quartz.job-store-type",
      "type": "org.springframework.boot.autoconfigure.quartz.JobStoreType",
      "description": "Quartz job store type.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "defaultValue": "memory"
    },
    {
      "name": "spring.quartz.overwrite-existing-jobs",
      "type": "java.lang.Boolean",
      "description": "Whether configured jobs should overwrite existing job definitions.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "defaultValue": false
    },
    {
      "name": "spring.quartz.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional Quartz Scheduler properties.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties"
    },
    {
      "name": "spring.quartz.scheduler-name",
      "type": "java.lang.String",
      "description": "Name of the scheduler.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "defaultValue": "quartzScheduler"
    },
    {
      "name": "spring.quartz.startup-delay",
      "type": "java.time.Duration",
      "description": "Delay after which the scheduler is started once initialization completes. Setting this property makes sense if no jobs should be run before the entire application has started up.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "defaultValue": "0s"
    },
    {
      "name": "spring.quartz.wait-for-jobs-to-complete-on-shutdown",
      "type": "java.lang.Boolean",
      "description": "Whether to wait for running jobs to complete on shutdown.",
      "sourceType": "org.springframework.boot.autoconfigure.quartz.QuartzProperties",
      "defaultValue": false
    },
    {
      "name": "spring.r2dbc.generate-unique-name",
      "type": "java.lang.Boolean",
      "description": "Whether to generate a random database name. Ignore any configured name when enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties",
      "defaultValue": false
    },
    {
      "name": "spring.r2dbc.name",
      "type": "java.lang.String",
      "description": "Database name. Set if no name is specified in the url. Default to 'testdb' when using an embedded database.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties"
    },
    {
      "name": "spring.r2dbc.password",
      "type": "java.lang.String",
      "description": "Login password of the database. Set if no password is specified in the url.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties"
    },
    {
      "name": "spring.r2dbc.pool.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether pooling is enabled. Enabled automatically if 'r2dbc-pool' is on the classpath."
    },
    {
      "name": "spring.r2dbc.pool.initial-size",
      "type": "java.lang.Integer",
      "description": "Initial connection pool size.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties$Pool",
      "defaultValue": 10
    },
    {
      "name": "spring.r2dbc.pool.max-idle-time",
      "type": "java.time.Duration",
      "description": "Maximum amount of time that a connection is allowed to sit idle in the pool.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties$Pool",
      "defaultValue": "30m"
    },
    {
      "name": "spring.r2dbc.pool.max-size",
      "type": "java.lang.Integer",
      "description": "Maximal connection pool size.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties$Pool",
      "defaultValue": 10
    },
    {
      "name": "spring.r2dbc.pool.validation-query",
      "type": "java.lang.String",
      "description": "Validation query.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties$Pool"
    },
    {
      "name": "spring.r2dbc.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional R2DBC options.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties"
    },
    {
      "name": "spring.r2dbc.url",
      "type": "java.lang.String",
      "description": "R2DBC URL of the database. database name, username, password and pooling options specified in the url take precedence over individual options.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties"
    },
    {
      "name": "spring.r2dbc.username",
      "type": "java.lang.String",
      "description": "Login username of the database. Set if no username is specified in the url.",
      "sourceType": "org.springframework.boot.autoconfigure.r2dbc.R2dbcProperties"
    },
    {
      "name": "spring.rabbitmq.addresses",
      "type": "java.lang.String",
      "description": "Comma-separated list of addresses to which the client should connect. When set, the host and port are ignored.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.rabbitmq.cache.channel.checkout-timeout",
      "type": "java.time.Duration",
      "description": "Duration to wait to obtain a channel if the cache size has been reached. If 0, always create a new channel.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache$Channel"
    },
    {
      "name": "spring.rabbitmq.cache.channel.size",
      "type": "java.lang.Integer",
      "description": "Number of channels to retain in the cache. When 'check-timeout' > 0, max channels per connection.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache$Channel"
    },
    {
      "name": "spring.rabbitmq.cache.connection.mode",
      "type": "org.springframework.amqp.rabbit.connection.CachingConnectionFactory$CacheMode",
      "description": "Connection factory cache mode.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache$Connection",
      "defaultValue": "channel"
    },
    {
      "name": "spring.rabbitmq.cache.connection.size",
      "type": "java.lang.Integer",
      "description": "Number of connections to cache. Only applies when mode is CONNECTION.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Cache$Connection"
    },
    {
      "name": "spring.rabbitmq.connection-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout. Set it to zero to wait forever.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.rabbitmq.dynamic",
      "type": "java.lang.Boolean",
      "description": "Whether to create an AmqpAdmin bean.",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.host",
      "type": "java.lang.String",
      "description": "RabbitMQ host. Ignored if an address is set.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "spring.rabbitmq.listener.direct.acknowledge-mode",
      "type": "org.springframework.amqp.core.AcknowledgeMode",
      "description": "Acknowledge mode of container.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer"
    },
    {
      "name": "spring.rabbitmq.listener.direct.auto-startup",
      "type": "java.lang.Boolean",
      "description": "Whether to start the container automatically on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.listener.direct.consumers-per-queue",
      "type": "java.lang.Integer",
      "description": "Number of consumers per queue.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer"
    },
    {
      "name": "spring.rabbitmq.listener.direct.default-requeue-rejected",
      "type": "java.lang.Boolean",
      "description": "Whether rejected deliveries are re-queued by default.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer"
    },
    {
      "name": "spring.rabbitmq.listener.direct.idle-event-interval",
      "type": "java.time.Duration",
      "description": "How often idle container events should be published.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer"
    },
    {
      "name": "spring.rabbitmq.listener.direct.missing-queues-fatal",
      "type": "java.lang.Boolean",
      "description": "Whether to fail if the queues declared by the container are not available on the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer",
      "defaultValue": false
    },
    {
      "name": "spring.rabbitmq.listener.direct.prefetch",
      "type": "java.lang.Integer",
      "description": "Maximum number of unacknowledged messages that can be outstanding at each consumer.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$DirectContainer"
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether publishing retries are enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": false
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry.initial-interval",
      "type": "java.time.Duration",
      "description": "Duration between the first and second attempt to deliver a message.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": "1000ms"
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry.max-attempts",
      "type": "java.lang.Integer",
      "description": "Maximum number of attempts to deliver a message.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": 3
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry.max-interval",
      "type": "java.time.Duration",
      "description": "Maximum duration between attempts.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": "10000ms"
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry.multiplier",
      "type": "java.lang.Double",
      "description": "Multiplier to apply to the previous retry interval.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": 1
    },
    {
      "name": "spring.rabbitmq.listener.direct.retry.stateless",
      "type": "java.lang.Boolean",
      "description": "Whether retries are stateless or stateful.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.listener.simple.acknowledge-mode",
      "type": "org.springframework.amqp.core.AcknowledgeMode",
      "description": "Acknowledge mode of container.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.auto-startup",
      "type": "java.lang.Boolean",
      "description": "Whether to start the container automatically on startup.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.listener.simple.batch-size",
      "type": "java.lang.Integer",
      "description": "Batch size, expressed as the number of physical messages, to be used by the container.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.concurrency",
      "type": "java.lang.Integer",
      "description": "Minimum number of listener invoker threads.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.default-requeue-rejected",
      "type": "java.lang.Boolean",
      "description": "Whether rejected deliveries are re-queued by default.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.idle-event-interval",
      "type": "java.time.Duration",
      "description": "How often idle container events should be published.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.max-concurrency",
      "type": "java.lang.Integer",
      "description": "Maximum number of listener invoker threads.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.missing-queues-fatal",
      "type": "java.lang.Boolean",
      "description": "Whether to fail if the queues declared by the container are not available on the broker and\/or whether to stop the container if one or more queues are deleted at runtime.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.listener.simple.prefetch",
      "type": "java.lang.Integer",
      "description": "Maximum number of unacknowledged messages that can be outstanding at each consumer.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$SimpleContainer"
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether publishing retries are enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": false
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry.initial-interval",
      "type": "java.time.Duration",
      "description": "Duration between the first and second attempt to deliver a message.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": "1000ms"
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry.max-attempts",
      "type": "java.lang.Integer",
      "description": "Maximum number of attempts to deliver a message.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": 3
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry.max-interval",
      "type": "java.time.Duration",
      "description": "Maximum duration between attempts.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": "10000ms"
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry.multiplier",
      "type": "java.lang.Double",
      "description": "Multiplier to apply to the previous retry interval.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": 1
    },
    {
      "name": "spring.rabbitmq.listener.simple.retry.stateless",
      "type": "java.lang.Boolean",
      "description": "Whether retries are stateless or stateful.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ListenerRetry",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.listener.type",
      "type": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ContainerType",
      "description": "Listener container type.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Listener",
      "defaultValue": "simple"
    },
    {
      "name": "spring.rabbitmq.password",
      "type": "java.lang.String",
      "description": "Login to authenticate against the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "defaultValue": "guest"
    },
    {
      "name": "spring.rabbitmq.port",
      "type": "java.lang.Integer",
      "description": "RabbitMQ port. Ignored if an address is set. Default to 5672, or 5671 if SSL is enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.rabbitmq.publisher-confirm-type",
      "type": "org.springframework.amqp.rabbit.connection.CachingConnectionFactory$ConfirmType",
      "description": "Type of publisher confirms to use.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.rabbitmq.publisher-returns",
      "type": "java.lang.Boolean",
      "description": "Whether to enable publisher returns.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "defaultValue": false
    },
    {
      "name": "spring.rabbitmq.requested-channel-max",
      "type": "java.lang.Integer",
      "description": "Number of channels per connection requested by the client. Use 0 for unlimited.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "defaultValue": 2047
    },
    {
      "name": "spring.rabbitmq.requested-heartbeat",
      "type": "java.time.Duration",
      "description": "Requested heartbeat timeout; zero for none. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.rabbitmq.ssl.algorithm",
      "type": "java.lang.String",
      "description": "SSL algorithm to use. By default, configured by the Rabbit client library.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl"
    },
    {
      "name": "spring.rabbitmq.ssl.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable SSL support. Determined automatically if an address is provided with the protocol (amqp:\/\/ vs. amqps:\/\/).",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl"
    },
    {
      "name": "spring.rabbitmq.ssl.key-store",
      "type": "java.lang.String",
      "description": "Path to the key store that holds the SSL certificate.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl"
    },
    {
      "name": "spring.rabbitmq.ssl.key-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the key store.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl"
    },
    {
      "name": "spring.rabbitmq.ssl.key-store-type",
      "type": "java.lang.String",
      "description": "Key store type.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl",
      "defaultValue": "PKCS12"
    },
    {
      "name": "spring.rabbitmq.ssl.trust-store",
      "type": "java.lang.String",
      "description": "Trust store that holds SSL certificates.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl"
    },
    {
      "name": "spring.rabbitmq.ssl.trust-store-password",
      "type": "java.lang.String",
      "description": "Password used to access the trust store.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl"
    },
    {
      "name": "spring.rabbitmq.ssl.trust-store-type",
      "type": "java.lang.String",
      "description": "Trust store type.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl",
      "defaultValue": "JKS"
    },
    {
      "name": "spring.rabbitmq.ssl.validate-server-certificate",
      "type": "java.lang.Boolean",
      "description": "Whether to enable server side certificate validation.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.ssl.verify-hostname",
      "type": "java.lang.Boolean",
      "description": "Whether to enable hostname verification.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Ssl",
      "defaultValue": true
    },
    {
      "name": "spring.rabbitmq.template.default-receive-queue",
      "type": "java.lang.String",
      "description": "Name of the default queue to receive messages from when none is specified explicitly.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template"
    },
    {
      "name": "spring.rabbitmq.template.exchange",
      "type": "java.lang.String",
      "description": "Name of the default exchange to use for send operations.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template",
      "defaultValue": ""
    },
    {
      "name": "spring.rabbitmq.template.mandatory",
      "type": "java.lang.Boolean",
      "description": "Whether to enable mandatory messages.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template"
    },
    {
      "name": "spring.rabbitmq.template.receive-timeout",
      "type": "java.time.Duration",
      "description": "Timeout for `receive()` operations.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template"
    },
    {
      "name": "spring.rabbitmq.template.reply-timeout",
      "type": "java.time.Duration",
      "description": "Timeout for `sendAndReceive()` operations.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template"
    },
    {
      "name": "spring.rabbitmq.template.retry.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether publishing retries are enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Retry",
      "defaultValue": false
    },
    {
      "name": "spring.rabbitmq.template.retry.initial-interval",
      "type": "java.time.Duration",
      "description": "Duration between the first and second attempt to deliver a message.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Retry",
      "defaultValue": "1000ms"
    },
    {
      "name": "spring.rabbitmq.template.retry.max-attempts",
      "type": "java.lang.Integer",
      "description": "Maximum number of attempts to deliver a message.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Retry",
      "defaultValue": 3
    },
    {
      "name": "spring.rabbitmq.template.retry.max-interval",
      "type": "java.time.Duration",
      "description": "Maximum duration between attempts.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Retry",
      "defaultValue": "10000ms"
    },
    {
      "name": "spring.rabbitmq.template.retry.multiplier",
      "type": "java.lang.Double",
      "description": "Multiplier to apply to the previous retry interval.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Retry",
      "defaultValue": 1
    },
    {
      "name": "spring.rabbitmq.template.routing-key",
      "type": "java.lang.String",
      "description": "Value of a default routing key to use for send operations.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$Template",
      "defaultValue": ""
    },
    {
      "name": "spring.rabbitmq.username",
      "type": "java.lang.String",
      "description": "Login user to authenticate to the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties",
      "defaultValue": "guest"
    },
    {
      "name": "spring.rabbitmq.virtual-host",
      "type": "java.lang.String",
      "description": "Virtual host to use when connecting to the broker.",
      "sourceType": "org.springframework.boot.autoconfigure.amqp.RabbitProperties"
    },
    {
      "name": "spring.reactor.debug-agent.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether the Reactor Debug Agent should be enabled when reactor-tools is present.",
      "sourceType": "org.springframework.boot.reactor.DebugAgentEnvironmentPostProcessor",
      "defaultValue": true
    },
    {
      "name": "spring.redis.client-name",
      "type": "java.lang.String",
      "description": "Client name to be set on connections with CLIENT SETNAME.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties"
    },
    {
      "name": "spring.redis.cluster.max-redirects",
      "type": "java.lang.Integer",
      "description": "Maximum number of redirects to follow when executing commands across the cluster.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Cluster"
    },
    {
      "name": "spring.redis.cluster.nodes",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of 'host:port' pairs to bootstrap from. This represents an 'initial' list of cluster nodes and is required to have at least one entry.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Cluster"
    },
    {
      "name": "spring.redis.database",
      "type": "java.lang.Integer",
      "description": "Database index used by the connection factory.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "defaultValue": 0
    },
    {
      "name": "spring.redis.host",
      "type": "java.lang.String",
      "description": "Redis server host.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "defaultValue": "localhost"
    },
    {
      "name": "spring.redis.jedis.pool.max-active",
      "type": "java.lang.Integer",
      "description": "Maximum number of connections that can be allocated by the pool at a given time. Use a negative value for no limit.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": 8
    },
    {
      "name": "spring.redis.jedis.pool.max-idle",
      "type": "java.lang.Integer",
      "description": "Maximum number of 'idle' connections in the pool. Use a negative value to indicate an unlimited number of idle connections.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": 8
    },
    {
      "name": "spring.redis.jedis.pool.max-wait",
      "type": "java.time.Duration",
      "description": "Maximum amount of time a connection allocation should block before throwing an exception when the pool is exhausted. Use a negative value to block indefinitely.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": "-1ms"
    },
    {
      "name": "spring.redis.jedis.pool.min-idle",
      "type": "java.lang.Integer",
      "description": "Target for the minimum number of idle connections to maintain in the pool. This setting only has an effect if both it and time between eviction runs are positive.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": 0
    },
    {
      "name": "spring.redis.jedis.pool.time-between-eviction-runs",
      "type": "java.time.Duration",
      "description": "Time between runs of the idle object evictor thread. When positive, the idle object evictor thread starts, otherwise no idle object eviction is performed.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool"
    },
    {
      "name": "spring.redis.lettuce.cluster.refresh.adaptive",
      "type": "java.lang.Boolean",
      "description": "Whether adaptive topology refreshing using all available refresh triggers should be used.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce$Cluster$Refresh",
      "defaultValue": false
    },
    {
      "name": "spring.redis.lettuce.cluster.refresh.period",
      "type": "java.time.Duration",
      "description": "Cluster topology refresh period.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce$Cluster$Refresh"
    },
    {
      "name": "spring.redis.lettuce.pool.max-active",
      "type": "java.lang.Integer",
      "description": "Maximum number of connections that can be allocated by the pool at a given time. Use a negative value for no limit.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": 8
    },
    {
      "name": "spring.redis.lettuce.pool.max-idle",
      "type": "java.lang.Integer",
      "description": "Maximum number of 'idle' connections in the pool. Use a negative value to indicate an unlimited number of idle connections.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": 8
    },
    {
      "name": "spring.redis.lettuce.pool.max-wait",
      "type": "java.time.Duration",
      "description": "Maximum amount of time a connection allocation should block before throwing an exception when the pool is exhausted. Use a negative value to block indefinitely.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": "-1ms"
    },
    {
      "name": "spring.redis.lettuce.pool.min-idle",
      "type": "java.lang.Integer",
      "description": "Target for the minimum number of idle connections to maintain in the pool. This setting only has an effect if both it and time between eviction runs are positive.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool",
      "defaultValue": 0
    },
    {
      "name": "spring.redis.lettuce.pool.time-between-eviction-runs",
      "type": "java.time.Duration",
      "description": "Time between runs of the idle object evictor thread. When positive, the idle object evictor thread starts, otherwise no idle object eviction is performed.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Pool"
    },
    {
      "name": "spring.redis.lettuce.shutdown-timeout",
      "type": "java.time.Duration",
      "description": "Shutdown timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Lettuce",
      "defaultValue": "100ms"
    },
    {
      "name": "spring.redis.password",
      "type": "java.lang.String",
      "description": "Login password of the redis server.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties"
    },
    {
      "name": "spring.redis.port",
      "type": "java.lang.Integer",
      "description": "Redis server port.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "defaultValue": 6379
    },
    {
      "name": "spring.redis.sentinel.master",
      "type": "java.lang.String",
      "description": "Name of the Redis server.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Sentinel"
    },
    {
      "name": "spring.redis.sentinel.nodes",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of 'host:port' pairs.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Sentinel"
    },
    {
      "name": "spring.redis.sentinel.password",
      "type": "java.lang.String",
      "description": "Password for authenticating with sentinel(s).",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties$Sentinel"
    },
    {
      "name": "spring.redis.ssl",
      "type": "java.lang.Boolean",
      "description": "Whether to enable SSL support.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties",
      "defaultValue": false
    },
    {
      "name": "spring.redis.timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout.",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties"
    },
    {
      "name": "spring.redis.url",
      "type": "java.lang.String",
      "description": "Connection URL. Overrides host, port, and password. User is ignored. Example: redis:\/\/user:password@example.com:6379",
      "sourceType": "org.springframework.boot.autoconfigure.data.redis.RedisProperties"
    },
    {
      "name": "spring.resources.add-mappings",
      "type": "java.lang.Boolean",
      "description": "Whether to enable default resource handling.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties",
      "defaultValue": true
    },
    {
      "name": "spring.resources.cache.cachecontrol.cache-private",
      "type": "java.lang.Boolean",
      "description": "Indicate that the response message is intended for a single user and must not be stored by a shared cache.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.cache-public",
      "type": "java.lang.Boolean",
      "description": "Indicate that any cache may store the response.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.max-age",
      "type": "java.time.Duration",
      "description": "Maximum time the response should be cached, in seconds if no duration suffix is not specified.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.must-revalidate",
      "type": "java.lang.Boolean",
      "description": "Indicate that once it has become stale, a cache must not use the response without re-validating it with the server.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.no-cache",
      "type": "java.lang.Boolean",
      "description": "Indicate that the cached response can be reused only if re-validated with the server.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.no-store",
      "type": "java.lang.Boolean",
      "description": "Indicate to not cache the response in any case.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.no-transform",
      "type": "java.lang.Boolean",
      "description": "Indicate intermediaries (caches and others) that they should not transform the response content.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.proxy-revalidate",
      "type": "java.lang.Boolean",
      "description": "Same meaning as the 'must-revalidate' directive, except that it does not apply to private caches.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.s-max-age",
      "type": "java.time.Duration",
      "description": "Maximum time the response should be cached by shared caches, in seconds if no duration suffix is not specified.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.stale-if-error",
      "type": "java.time.Duration",
      "description": "Maximum time the response may be used when errors are encountered, in seconds if no duration suffix is not specified.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.cachecontrol.stale-while-revalidate",
      "type": "java.time.Duration",
      "description": "Maximum time the response can be served after it becomes stale, in seconds if no duration suffix is not specified.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache$Cachecontrol"
    },
    {
      "name": "spring.resources.cache.period",
      "type": "java.time.Duration",
      "description": "Cache period for the resources served by the resource handler. If a duration suffix is not specified, seconds will be used. Can be overridden by the 'spring.resources.cache.cachecontrol' properties.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Cache"
    },
    {
      "name": "spring.resources.chain.cache",
      "type": "java.lang.Boolean",
      "description": "Whether to enable caching in the Resource chain.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Chain",
      "defaultValue": true
    },
    {
      "name": "spring.resources.chain.compressed",
      "type": "java.lang.Boolean",
      "description": "Whether to enable resolution of already compressed resources (gzip, brotli). Checks for a resource name with the '.gz' or '.br' file extensions.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Chain",
      "defaultValue": false
    },
    {
      "name": "spring.resources.chain.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the Spring Resource Handling chain. By default, disabled unless at least one strategy has been enabled.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Chain"
    },
    {
      "name": "spring.resources.chain.html-application-cache",
      "type": "java.lang.Boolean",
      "description": "Whether to enable HTML5 application cache manifest rewriting.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Chain",
      "defaultValue": false
    },
    {
      "name": "spring.resources.chain.strategy.content.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the content Version Strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Content",
      "defaultValue": false
    },
    {
      "name": "spring.resources.chain.strategy.content.paths",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of patterns to apply to the content Version Strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Content",
      "defaultValue": [
        "\/**"
      ]
    },
    {
      "name": "spring.resources.chain.strategy.fixed.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable the fixed Version Strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Fixed",
      "defaultValue": false
    },
    {
      "name": "spring.resources.chain.strategy.fixed.paths",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of patterns to apply to the fixed Version Strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Fixed",
      "defaultValue": [
        "\/**"
      ]
    },
    {
      "name": "spring.resources.chain.strategy.fixed.version",
      "type": "java.lang.String",
      "description": "Version string to use for the fixed Version Strategy.",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties$Fixed"
    },
    {
      "name": "spring.resources.static-locations",
      "type": "java.lang.String[]",
      "description": "Locations of static resources. Defaults to classpath:[\/META-INF\/resources\/, \/resources\/, \/static\/, \/public\/].",
      "sourceType": "org.springframework.boot.autoconfigure.web.ResourceProperties",
      "defaultValue": [
        "classpath:\/META-INF\/resources\/",
        "classpath:\/resources\/",
        "classpath:\/static\/",
        "classpath:\/public\/"
      ]
    },
    {
      "name": "spring.rsocket.server.address",
      "type": "java.net.InetAddress",
      "description": "Network address to which the server should bind.",
      "sourceType": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties$Server"
    },
    {
      "name": "spring.rsocket.server.mapping-path",
      "type": "java.lang.String",
      "description": "Path under which RSocket handles requests (only works with websocket transport).",
      "sourceType": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties$Server"
    },
    {
      "name": "spring.rsocket.server.port",
      "type": "java.lang.Integer",
      "description": "Server port.",
      "sourceType": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties$Server"
    },
    {
      "name": "spring.rsocket.server.transport",
      "type": "org.springframework.boot.rsocket.server.RSocketServer$Transport",
      "description": "RSocket transport protocol.",
      "sourceType": "org.springframework.boot.autoconfigure.rsocket.RSocketProperties$Server",
      "defaultValue": "tcp"
    },
    {
      "name": "spring.security.filter.dispatcher-types",
      "type": "java.util.Set<org.springframework.boot.web.servlet.DispatcherType>",
      "description": "Security filter chain dispatcher types.",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties$Filter",
      "defaultValue": [
        "async",
        "error",
        "request"
      ]
    },
    {
      "name": "spring.security.filter.order",
      "type": "java.lang.Integer",
      "description": "Security filter chain order.",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties$Filter",
      "defaultValue": -100
    },
    {
      "name": "spring.security.oauth2.client.provider",
      "type": "java.util.Map<java.lang.String,org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties$Provider>",
      "description": "OAuth provider details.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties"
    },
    {
      "name": "spring.security.oauth2.client.registration",
      "type": "java.util.Map<java.lang.String,org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties$Registration>",
      "description": "OAuth client registrations.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties"
    },
    {
      "name": "spring.security.oauth2.resourceserver.jwt.issuer-uri",
      "type": "java.lang.String",
      "description": "URI that can either be an OpenID Connect discovery endpoint or an OAuth 2.0 Authorization Server Metadata endpoint defined by RFC 8414.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Jwt"
    },
    {
      "name": "spring.security.oauth2.resourceserver.jwt.jwk-set-uri",
      "type": "java.lang.String",
      "description": "JSON Web Key URI to use to verify the JWT token.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Jwt"
    },
    {
      "name": "spring.security.oauth2.resourceserver.jwt.jws-algorithm",
      "type": "java.lang.String",
      "description": "JSON Web Algorithm used for verifying the digital signatures.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Jwt",
      "defaultValue": "RS256"
    },
    {
      "name": "spring.security.oauth2.resourceserver.jwt.public-key-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the file containing the public key used to verify a JWT.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Jwt"
    },
    {
      "name": "spring.security.oauth2.resourceserver.opaquetoken.client-id",
      "type": "java.lang.String",
      "description": "Client id used to authenticate with the token introspection endpoint.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Opaquetoken"
    },
    {
      "name": "spring.security.oauth2.resourceserver.opaquetoken.client-secret",
      "type": "java.lang.String",
      "description": "Client secret used to authenticate with the token introspection endpoint.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Opaquetoken"
    },
    {
      "name": "spring.security.oauth2.resourceserver.opaquetoken.introspection-uri",
      "type": "java.lang.String",
      "description": "OAuth 2.0 endpoint through which token introspection is accomplished.",
      "sourceType": "org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties$Opaquetoken"
    },
    {
      "name": "spring.security.saml2.relyingparty.registration",
      "type": "java.util.Map<java.lang.String,org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties$Registration>",
      "description": "SAML2 relying party registrations.",
      "sourceType": "org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties"
    },
    {
      "name": "spring.security.user.name",
      "type": "java.lang.String",
      "description": "Default user name.",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties$User",
      "defaultValue": "user"
    },
    {
      "name": "spring.security.user.password",
      "type": "java.lang.String",
      "description": "Password for the default user name.",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties$User"
    },
    {
      "name": "spring.security.user.roles",
      "type": "java.util.List<java.lang.String>",
      "description": "Granted roles for the default user name.",
      "sourceType": "org.springframework.boot.autoconfigure.security.SecurityProperties$User"
    },
    {
      "name": "spring.sendgrid.api-key",
      "type": "java.lang.String",
      "description": "SendGrid API key.",
      "sourceType": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties"
    },
    {
      "name": "spring.sendgrid.proxy.host",
      "type": "java.lang.String",
      "description": "SendGrid proxy host.",
      "sourceType": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties$Proxy"
    },
    {
      "name": "spring.sendgrid.proxy.port",
      "type": "java.lang.Integer",
      "description": "SendGrid proxy port.",
      "sourceType": "org.springframework.boot.autoconfigure.sendgrid.SendGridProperties$Proxy"
    },
    {
      "name": "spring.servlet.multipart.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable support of multipart uploads.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties",
      "defaultValue": true
    },
    {
      "name": "spring.servlet.multipart.file-size-threshold",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Threshold after which files are written to disk.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties",
      "defaultValue": "0B"
    },
    {
      "name": "spring.servlet.multipart.location",
      "type": "java.lang.String",
      "description": "Intermediate location of uploaded files.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties"
    },
    {
      "name": "spring.servlet.multipart.max-file-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Max file size.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties",
      "defaultValue": "1MB"
    },
    {
      "name": "spring.servlet.multipart.max-request-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Max request size.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties",
      "defaultValue": "10MB"
    },
    {
      "name": "spring.servlet.multipart.resolve-lazily",
      "type": "java.lang.Boolean",
      "description": "Whether to resolve the multipart request lazily at the time of file or parameter access.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.MultipartProperties",
      "defaultValue": false
    },
    {
      "name": "spring.session.hazelcast.flush-mode",
      "type": "org.springframework.session.FlushMode",
      "description": "Sessions flush mode. Determines when session changes are written to the session store.",
      "sourceType": "org.springframework.boot.autoconfigure.session.HazelcastSessionProperties",
      "defaultValue": "on-save"
    },
    {
      "name": "spring.session.hazelcast.map-name",
      "type": "java.lang.String",
      "description": "Name of the map used to store sessions.",
      "sourceType": "org.springframework.boot.autoconfigure.session.HazelcastSessionProperties",
      "defaultValue": "spring:session:sessions"
    },
    {
      "name": "spring.session.hazelcast.save-mode",
      "type": "org.springframework.session.SaveMode",
      "description": "Sessions save mode. Determines how session changes are tracked and saved to the session store.",
      "sourceType": "org.springframework.boot.autoconfigure.session.HazelcastSessionProperties",
      "defaultValue": "on-set-attribute"
    },
    {
      "name": "spring.session.jdbc.cleanup-cron",
      "type": "java.lang.String",
      "description": "Cron expression for expired session cleanup job.",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "defaultValue": "0 * * * * *"
    },
    {
      "name": "spring.session.jdbc.flush-mode",
      "type": "org.springframework.session.FlushMode",
      "description": "Sessions flush mode. Determines when session changes are written to the session store.",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "defaultValue": "on-save"
    },
    {
      "name": "spring.session.jdbc.initialize-schema",
      "type": "org.springframework.boot.jdbc.DataSourceInitializationMode",
      "description": "Database schema initialization mode.",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "defaultValue": "embedded"
    },
    {
      "name": "spring.session.jdbc.save-mode",
      "type": "org.springframework.session.SaveMode",
      "description": "Sessions save mode. Determines how session changes are tracked and saved to the session store.",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "defaultValue": "on-set-attribute"
    },
    {
      "name": "spring.session.jdbc.schema",
      "type": "java.lang.String",
      "description": "Path to the SQL file to use to initialize the database schema.",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "defaultValue": "classpath:org\/springframework\/session\/jdbc\/schema-@@platform@@.sql"
    },
    {
      "name": "spring.session.jdbc.table-name",
      "type": "java.lang.String",
      "description": "Name of the database table used to store sessions.",
      "sourceType": "org.springframework.boot.autoconfigure.session.JdbcSessionProperties",
      "defaultValue": "SPRING_SESSION"
    },
    {
      "name": "spring.session.mongodb.collection-name",
      "type": "java.lang.String",
      "description": "Collection name used to store sessions.",
      "sourceType": "org.springframework.boot.autoconfigure.session.MongoSessionProperties",
      "defaultValue": "sessions"
    },
    {
      "name": "spring.session.redis.cleanup-cron",
      "type": "java.lang.String",
      "description": "Cron expression for expired session cleanup job.",
      "sourceType": "org.springframework.boot.autoconfigure.session.RedisSessionProperties",
      "defaultValue": "0 * * * * *"
    },
    {
      "name": "spring.session.redis.configure-action",
      "type": "org.springframework.boot.autoconfigure.session.RedisSessionProperties$ConfigureAction",
      "description": "The configure action to apply when no user defined ConfigureRedisAction bean is present.",
      "sourceType": "org.springframework.boot.autoconfigure.session.RedisSessionProperties",
      "defaultValue": "notify-keyspace-events"
    },
    {
      "name": "spring.session.redis.flush-mode",
      "type": "org.springframework.session.FlushMode",
      "description": "Sessions flush mode. Determines when session changes are written to the session store.",
      "sourceType": "org.springframework.boot.autoconfigure.session.RedisSessionProperties",
      "defaultValue": "on-save"
    },
    {
      "name": "spring.session.redis.namespace",
      "type": "java.lang.String",
      "description": "Namespace for keys used to store sessions.",
      "sourceType": "org.springframework.boot.autoconfigure.session.RedisSessionProperties",
      "defaultValue": "spring:session"
    },
    {
      "name": "spring.session.redis.save-mode",
      "type": "org.springframework.session.SaveMode",
      "description": "Sessions save mode. Determines how session changes are tracked and saved to the session store.",
      "sourceType": "org.springframework.boot.autoconfigure.session.RedisSessionProperties",
      "defaultValue": "on-set-attribute"
    },
    {
      "name": "spring.session.servlet.filter-dispatcher-types",
      "type": "java.util.Set<org.springframework.boot.web.servlet.DispatcherType>",
      "description": "Session repository filter dispatcher types.",
      "sourceType": "org.springframework.boot.autoconfigure.session.SessionProperties$Servlet",
      "defaultValue": [
        "async",
        "error",
        "request"
      ]
    },
    {
      "name": "spring.session.servlet.filter-order",
      "type": "java.lang.Integer",
      "description": "Session repository filter order.",
      "sourceType": "org.springframework.boot.autoconfigure.session.SessionProperties$Servlet"
    },
    {
      "name": "spring.session.store-type",
      "type": "org.springframework.boot.autoconfigure.session.StoreType",
      "description": "Session store type.",
      "sourceType": "org.springframework.boot.autoconfigure.session.SessionProperties"
    },
    {
      "name": "spring.session.timeout",
      "type": "java.time.Duration",
      "description": "Session timeout. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.session.SessionProperties"
    },
    {
      "name": "spring.task.execution.pool.allow-core-thread-timeout",
      "type": "java.lang.Boolean",
      "description": "Whether core threads are allowed to time out. This enables dynamic growing and shrinking of the pool.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Pool",
      "defaultValue": true
    },
    {
      "name": "spring.task.execution.pool.core-size",
      "type": "java.lang.Integer",
      "description": "Core number of threads.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Pool",
      "defaultValue": 8
    },
    {
      "name": "spring.task.execution.pool.keep-alive",
      "type": "java.time.Duration",
      "description": "Time limit for which threads may remain idle before being terminated.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Pool",
      "defaultValue": "60s"
    },
    {
      "name": "spring.task.execution.pool.max-size",
      "type": "java.lang.Integer",
      "description": "Maximum allowed number of threads. If tasks are filling up the queue, the pool can expand up to that size to accommodate the load. Ignored if the queue is unbounded.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Pool"
    },
    {
      "name": "spring.task.execution.pool.queue-capacity",
      "type": "java.lang.Integer",
      "description": "Queue capacity. An unbounded capacity does not increase the pool and therefore ignores the 'max-size' property.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Pool"
    },
    {
      "name": "spring.task.execution.shutdown.await-termination",
      "type": "java.lang.Boolean",
      "description": "Whether the executor should wait for scheduled tasks to complete on shutdown.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Shutdown",
      "defaultValue": false
    },
    {
      "name": "spring.task.execution.shutdown.await-termination-period",
      "type": "java.time.Duration",
      "description": "Maximum time the executor should wait for remaining tasks to complete.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties$Shutdown"
    },
    {
      "name": "spring.task.execution.thread-name-prefix",
      "type": "java.lang.String",
      "description": "Prefix to use for the names of newly created threads.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskExecutionProperties",
      "defaultValue": "task-"
    },
    {
      "name": "spring.task.scheduling.pool.size",
      "type": "java.lang.Integer",
      "description": "Maximum allowed number of threads.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties$Pool",
      "defaultValue": 1
    },
    {
      "name": "spring.task.scheduling.shutdown.await-termination",
      "type": "java.lang.Boolean",
      "description": "Whether the executor should wait for scheduled tasks to complete on shutdown.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties$Shutdown",
      "defaultValue": false
    },
    {
      "name": "spring.task.scheduling.shutdown.await-termination-period",
      "type": "java.time.Duration",
      "description": "Maximum time the executor should wait for remaining tasks to complete.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties$Shutdown"
    },
    {
      "name": "spring.task.scheduling.thread-name-prefix",
      "type": "java.lang.String",
      "description": "Prefix to use for the names of newly created threads.",
      "sourceType": "org.springframework.boot.autoconfigure.task.TaskSchedulingProperties",
      "defaultValue": "scheduling-"
    },
    {
      "name": "spring.thymeleaf.cache",
      "type": "java.lang.Boolean",
      "description": "Whether to enable template caching.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": true
    },
    {
      "name": "spring.thymeleaf.check-template",
      "type": "java.lang.Boolean",
      "description": "Whether to check that the template exists before rendering it.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": true
    },
    {
      "name": "spring.thymeleaf.check-template-location",
      "type": "java.lang.Boolean",
      "description": "Whether to check that the templates location exists.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": true
    },
    {
      "name": "spring.thymeleaf.enable-spring-el-compiler",
      "type": "java.lang.Boolean",
      "description": "Enable the SpringEL compiler in SpringEL expressions.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": false
    },
    {
      "name": "spring.thymeleaf.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Thymeleaf view resolution for Web frameworks.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": true
    },
    {
      "name": "spring.thymeleaf.encoding",
      "type": "java.nio.charset.Charset",
      "description": "Template files encoding.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": "UTF-8"
    },
    {
      "name": "spring.thymeleaf.excluded-view-names",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of view names (patterns allowed) that should be excluded from resolution.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties"
    },
    {
      "name": "spring.thymeleaf.mode",
      "type": "java.lang.String",
      "description": "Template mode to be applied to templates. See also Thymeleaf's TemplateMode enum.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": "HTML"
    },
    {
      "name": "spring.thymeleaf.prefix",
      "type": "java.lang.String",
      "description": "Prefix that gets prepended to view names when building a URL.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": "classpath:\/templates\/"
    },
    {
      "name": "spring.thymeleaf.reactive.chunked-mode-view-names",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of view names (patterns allowed) that should be the only ones executed in CHUNKED mode when a max chunk size is set.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Reactive"
    },
    {
      "name": "spring.thymeleaf.reactive.full-mode-view-names",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of view names (patterns allowed) that should be executed in FULL mode even if a max chunk size is set.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Reactive"
    },
    {
      "name": "spring.thymeleaf.reactive.max-chunk-size",
      "type": "org.springframework.util.unit.DataSize",
      "description": "Maximum size of data buffers used for writing to the response. Templates will execute in CHUNKED mode by default if this is set.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Reactive",
      "defaultValue": "0B"
    },
    {
      "name": "spring.thymeleaf.reactive.media-types",
      "type": "java.util.List<org.springframework.http.MediaType>",
      "description": "Media types supported by the view technology.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Reactive"
    },
    {
      "name": "spring.thymeleaf.render-hidden-markers-before-checkboxes",
      "type": "java.lang.Boolean",
      "description": "Whether hidden form inputs acting as markers for checkboxes should be rendered before the checkbox element itself.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": false
    },
    {
      "name": "spring.thymeleaf.servlet.content-type",
      "type": "org.springframework.util.MimeType",
      "description": "Content-Type value written to HTTP responses.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Servlet",
      "defaultValue": "text\/html"
    },
    {
      "name": "spring.thymeleaf.servlet.produce-partial-output-while-processing",
      "type": "java.lang.Boolean",
      "description": "Whether Thymeleaf should start writing partial output as soon as possible or buffer until template processing is finished.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties$Servlet",
      "defaultValue": true
    },
    {
      "name": "spring.thymeleaf.suffix",
      "type": "java.lang.String",
      "description": "Suffix that gets appended to view names when building a URL.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties",
      "defaultValue": ".html"
    },
    {
      "name": "spring.thymeleaf.template-resolver-order",
      "type": "java.lang.Integer",
      "description": "Order of the template resolver in the chain. By default, the template resolver is first in the chain. Order start at 1 and should only be set if you have defined additional 'TemplateResolver' beans.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties"
    },
    {
      "name": "spring.thymeleaf.view-names",
      "type": "java.lang.String[]",
      "description": "Comma-separated list of view names (patterns allowed) that can be resolved.",
      "sourceType": "org.springframework.boot.autoconfigure.thymeleaf.ThymeleafProperties"
    },
    {
      "name": "spring.transaction.default-timeout",
      "type": "java.time.Duration",
      "description": "Default transaction timeout. If a duration suffix is not specified, seconds will be used.",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.TransactionProperties"
    },
    {
      "name": "spring.transaction.rollback-on-commit-failure",
      "type": "java.lang.Boolean",
      "description": "Whether to roll back on commit failures.",
      "sourceType": "org.springframework.boot.autoconfigure.transaction.TransactionProperties"
    },
    {
      "name": "spring.webflux.base-path",
      "type": "java.lang.String",
      "description": "Base path for all web handlers.",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties"
    },
    {
      "name": "spring.webflux.format.date",
      "type": "java.lang.String",
      "description": "Date format to use, for example `dd\/MM\/yyyy`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties$Format"
    },
    {
      "name": "spring.webflux.format.date-time",
      "type": "java.lang.String",
      "description": "Date-time format to use, for example `yyyy-MM-dd HH:mm:ss`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties$Format"
    },
    {
      "name": "spring.webflux.format.time",
      "type": "java.lang.String",
      "description": "Time format to use, for example `HH:mm:ss`.",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties$Format"
    },
    {
      "name": "spring.webflux.hiddenmethod.filter.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Spring's HiddenHttpMethodFilter.",
      "defaultValue": false
    },
    {
      "name": "spring.webflux.static-path-pattern",
      "type": "java.lang.String",
      "description": "Path pattern used for static resources.",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties",
      "defaultValue": "\/**"
    },
    {
      "name": "spring.webservices.path",
      "type": "java.lang.String",
      "description": "Path that serves as the base URI for the services.",
      "sourceType": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties",
      "defaultValue": "\/services"
    },
    {
      "name": "spring.webservices.servlet.init",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Servlet init parameters to pass to Spring Web Services.",
      "sourceType": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties$Servlet"
    },
    {
      "name": "spring.webservices.servlet.load-on-startup",
      "type": "java.lang.Integer",
      "description": "Load on startup priority of the Spring Web Services servlet.",
      "sourceType": "org.springframework.boot.autoconfigure.webservices.WebServicesProperties$Servlet",
      "defaultValue": -1
    },
    {
      "name": "spring.webservices.wsdl-locations",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of locations of WSDLs and accompanying XSDs to be exposed as beans."
    },
    {
      "name": "task.launch.request.arg-expressions",
      "type": "java.lang.String",
      "description": "Comma separated list of option args as SpEL expressions in key=value format.",
      "sourceType": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties",
      "defaultValue": ""
    },
    {
      "name": "task.launch.request.args",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma separated list of optional args in key=value format.",
      "sourceType": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties"
    },
    {
      "name": "task.launch.request.deployment-properties",
      "type": "java.lang.String",
      "description": "Comma delimited list of deployment properties to be applied to the TaskLaunchRequest.",
      "sourceType": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties",
      "defaultValue": ""
    },
    {
      "name": "task.launch.request.task-name",
      "type": "java.lang.String",
      "description": "The Data Flow task name.",
      "sourceType": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties"
    },
    {
      "name": "task.launch.request.task-name-expression",
      "type": "java.lang.String",
      "description": "A SpEL expression to extract the task name from each Message, using the Message as the evaluation context.",
      "sourceType": "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties"
    },
    {
      "name": "trace",
      "type": "java.lang.Boolean",
      "description": "Enable trace logs.",
      "sourceType": "org.springframework.boot.context.logging.LoggingApplicationListener",
      "defaultValue": false
    },
    {
      "name": "logging.file",
      "type": "java.lang.String",
      "description": "Log file name (for instance, `myapp.log`). Names can be an exact location or relative to the current directory.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "logging.file.name"
      }
    },
    {
      "name": "logging.path",
      "type": "java.lang.String",
      "description": "Location of the log file. For instance, `\/var\/log`.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "logging.file.path"
      }
    },
    {
      "name": "management.endpoints.jmx.unique-names",
      "type": "java.lang.Boolean",
      "description": "Whether unique runtime object names should be ensured.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.jmx.unique-names"
      }
    },
    {
      "name": "management.health.couchbase.timeout",
      "type": "java.time.Duration",
      "description": "Timeout for getting the Bucket information from the server.",
      "defaultValue": "1000ms",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.health.elasticsearch.indices",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated index names.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.health.elasticsearch.response-timeout",
      "type": "java.time.Duration",
      "description": "Time to wait for a response from the cluster.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.health.probes.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable liveness and readiness probes.",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "replacement": "management.endpoint.health.probes.enabled"
      }
    },
    {
      "name": "management.health.status.http-mapping",
      "type": "java.util.Map<java.lang.String,java.lang.Integer>",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthIndicatorProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "management.endpoint.health.status.http-mapping"
      }
    },
    {
      "name": "management.health.status.order",
      "type": "java.util.List<java.lang.String>",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.health.HealthIndicatorProperties",
      "defaultValue": [
        "DOWN",
        "OUT_OF_SERVICE",
        "UP",
        "UNKNOWN"
      ],
      "deprecated": true,
      "deprecation": {
        "replacement": "management.endpoint.health.status.order"
      }
    },
    {
      "name": "management.metrics.binders.files.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable files metrics.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Instead, filter 'process.files' metrics.",
        "replacement": "management.metrics.enable.process.files"
      }
    },
    {
      "name": "management.metrics.binders.jvm.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JVM metrics.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Instead, disable JvmMetricsAutoConfiguration or filter 'jvm' metrics.",
        "replacement": "management.metrics.enable.jvm"
      }
    },
    {
      "name": "management.metrics.binders.logback.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Logback metrics.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Instead, disable LogbackMetricsAutoConfiguration or filter 'logback' metrics.",
        "replacement": "management.metrics.enable.logback"
      }
    },
    {
      "name": "management.metrics.binders.processor.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable processor metrics.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Instead, filter 'system.cpu' and 'process.cpu' metrics."
      }
    },
    {
      "name": "management.metrics.binders.uptime.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable uptime metrics.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Instead, filter 'process.uptime' and 'process.start.time' metrics."
      }
    },
    {
      "name": "management.metrics.distribution.sla",
      "type": "java.util.Map<java.lang.String,org.springframework.boot.actuate.autoconfigure.metrics.ServiceLevelObjectiveBoundary[]>",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.MetricsProperties$Distribution",
      "deprecated": true,
      "deprecation": {
        "replacement": "management.metrics.distribution.slo"
      }
    },
    {
      "name": "management.metrics.export.appoptics.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.datadog.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.dynatrace.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.elastic.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.ganglia.protocol-version",
      "type": "java.lang.String",
      "description": "Ganglia protocol version. Must be either 3.1 or 3.0.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "deprecated": true,
      "deprecation": {
        "reason": "No longer used by Micrometer."
      }
    },
    {
      "name": "management.metrics.export.ganglia.rate-units",
      "type": "java.util.concurrent.TimeUnit",
      "description": "Base time unit used to report rates.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.ganglia.GangliaProperties",
      "defaultValue": "seconds",
      "deprecated": true,
      "deprecation": {
        "reason": "No longer used by Micrometer."
      }
    },
    {
      "name": "management.metrics.export.humio.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.humio.repository",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.influx.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.kairos.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.newrelic.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.signalfx.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.stackdriver.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.statsd.queue-size",
      "defaultValue": 2147483647,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.wavefront.connect-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "defaultValue": "1s",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.wavefront.num-threads",
      "type": "java.lang.Integer",
      "description": "Number of threads to use with the metrics publishing scheduler.",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.export.wavefront.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout for requests to this backend.",
      "sourceType": "org.springframework.boot.actuate.autoconfigure.metrics.export.wavefront.WavefrontProperties",
      "defaultValue": "10s",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "management.metrics.web.client.requests-metric-name",
      "type": "java.lang.String",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "management.metrics.web.client.request.metric-name"
      }
    },
    {
      "name": "management.metrics.web.server.auto-time-requests",
      "type": "java.lang.Boolean",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "management.metrics.web.server.request.autotime.enabled"
      }
    },
    {
      "name": "management.metrics.web.server.requests-metric-name",
      "type": "java.lang.String",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "management.metrics.web.server.request.metric-name"
      }
    },
    {
      "name": "management.trace.include",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "management.trace.http.include"
      }
    },
    {
      "name": "server.connection-timeout",
      "type": "java.time.Duration",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Each server behaves differently. Use server specific properties instead."
      }
    },
    {
      "name": "server.jetty.acceptors",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.jetty.threads.acceptors"
      }
    },
    {
      "name": "server.jetty.accesslog.date-format",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.custom-format"
      }
    },
    {
      "name": "server.jetty.accesslog.extended-format",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.format"
      }
    },
    {
      "name": "server.jetty.accesslog.locale",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.custom-format"
      }
    },
    {
      "name": "server.jetty.accesslog.log-cookies",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.custom-format"
      }
    },
    {
      "name": "server.jetty.accesslog.log-latency",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.custom-format"
      }
    },
    {
      "name": "server.jetty.accesslog.log-server",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.custom-format"
      }
    },
    {
      "name": "server.jetty.accesslog.time-zone",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.accesslog.custom-format"
      }
    },
    {
      "name": "server.jetty.max-http-post-size",
      "type": "org.springframework.util.unit.DataSize",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.jetty.max-http-form-post-size"
      }
    },
    {
      "name": "server.jetty.max-queue-capacity",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.jetty.threads.max-queue-capacity"
      }
    },
    {
      "name": "server.jetty.max-threads",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.jetty.threads.max"
      }
    },
    {
      "name": "server.jetty.min-threads",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.jetty.threads.min"
      }
    },
    {
      "name": "server.jetty.selectors",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.jetty.threads.selectors"
      }
    },
    {
      "name": "server.jetty.thread-idle-timeout",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.jetty.threads.idle-timeout"
      }
    },
    {
      "name": "server.max-http-post-size",
      "type": "java.lang.Integer",
      "description": "Maximum size in bytes of the HTTP post content.",
      "defaultValue": 0,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Use dedicated property for each container."
      }
    },
    {
      "name": "server.servlet.path",
      "type": "java.lang.String",
      "description": "Path of the main dispatcher servlet.",
      "defaultValue": "\/",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.mvc.servlet.path"
      }
    },
    {
      "name": "server.tomcat.host-header",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.remoteip.host-header"
      }
    },
    {
      "name": "server.tomcat.internal-proxies",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.remoteip.internal-proxies"
      }
    },
    {
      "name": "server.tomcat.max-http-post-size",
      "type": "org.springframework.util.unit.DataSize",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.tomcat.max-http-form-post-size"
      }
    },
    {
      "name": "server.tomcat.max-threads",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.threads.max"
      }
    },
    {
      "name": "server.tomcat.min-spare-threads",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.threads.min-spare"
      }
    },
    {
      "name": "server.tomcat.port-header",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.remote.port-header"
      }
    },
    {
      "name": "server.tomcat.protocol-header",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.remoteip.protocol-header"
      }
    },
    {
      "name": "server.tomcat.protocol-header-https-value",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.remoteip.protocol-header-https-value"
      }
    },
    {
      "name": "server.tomcat.remote-ip-header",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Tomcat",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.tomcat.remoteip.remote-ip-header"
      }
    },
    {
      "name": "server.undertow.buffers-per-region",
      "type": "java.lang.Integer",
      "description": "Number of buffer per region.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "server.undertow.io-threads",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.undertow.threads.io"
      }
    },
    {
      "name": "server.undertow.worker-threads",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.web.ServerProperties$Undertow",
      "deprecated": true,
      "deprecation": {
        "replacement": "server.undertow.threads.worker"
      }
    },
    {
      "name": "server.use-forward-headers",
      "type": "java.lang.Boolean",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Replaced to support additional strategies.",
        "replacement": "server.forward-headers-strategy"
      }
    },
    {
      "name": "spring.activemq.pool.create-connection-on-startup",
      "type": "java.lang.Boolean",
      "description": "Whether to create a connection on startup. Can be used to warm up the pool on startup.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.activemq.pool.expiry-timeout",
      "type": "java.time.Duration",
      "description": "Connection expiration timeout.",
      "defaultValue": "0ms",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.activemq.pool.maximum-active-session-per-connection",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.activemq.pool.max-sessions-per-connection"
      }
    },
    {
      "name": "spring.activemq.pool.reconnect-on-exception",
      "type": "java.lang.Boolean",
      "description": "Reset the connection when a 'JMSException' occurs.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.application.index",
      "type": "java.lang.Integer",
      "description": "Application index.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Application context ids are now unique by default."
      }
    },
    {
      "name": "spring.artemis.pool.maximum-active-session-per-connection",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.artemis.pool.max-sessions-per-connection"
      }
    },
    {
      "name": "spring.batch.initializer.enabled",
      "type": "java.lang.Boolean",
      "description": "Create the required batch tables on startup if necessary. Enabled automatically\n if no custom table prefix is set or if a custom schema is configured.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.batch.initialize-schema"
      }
    },
    {
      "name": "spring.cloud.stream.rabbit.binder.admin-adresses",
      "type": "java.lang.String[]",
      "sourceType": "org.springframework.cloud.stream.binder.rabbit.properties.RabbitBinderConfigurationProperties",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.couchbase.bootstrap-hosts",
      "type": "java.util.List<java.lang.String>",
      "description": "Couchbase nodes (host or IP address) to bootstrap from.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.couchbase.connection-string"
      }
    },
    {
      "name": "spring.couchbase.bucket.name",
      "type": "java.lang.String",
      "description": "Name of the bucket to connect to.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "A bucket is no longer auto-configured."
      }
    },
    {
      "name": "spring.couchbase.bucket.password",
      "type": "java.lang.String",
      "description": "Password of the bucket.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "A bucket is no longer auto-configured."
      }
    },
    {
      "name": "spring.couchbase.env.bootstrap.http-direct-port",
      "type": "java.lang.Integer",
      "description": "Port for the HTTP bootstrap.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.couchbase.env.bootstrap.http-ssl-port",
      "type": "java.lang.Integer",
      "description": "Port for the HTTPS bootstrap.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.key-value",
      "type": "java.lang.Integer",
      "description": "Number of sockets per node against the key\/value service.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.query",
      "type": "java.lang.Integer",
      "description": "Number of sockets per node against the query (N1QL) service.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.queryservice.max-endpoints",
      "type": "java.lang.Integer",
      "description": "Maximum number of sockets per node.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.couchbase.env.io.max-endpoints"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.queryservice.min-endpoints",
      "type": "java.lang.Integer",
      "description": "Minimum number of sockets per node.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.couchbase.env.io.min-endpoints"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.view",
      "type": "java.lang.Integer",
      "description": "Number of sockets per node against the view service.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.viewservice.max-endpoints",
      "type": "java.lang.Integer",
      "description": "Maximum number of sockets per node.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.couchbase.env.io.max-endpoints"
      }
    },
    {
      "name": "spring.couchbase.env.endpoints.viewservice.min-endpoints",
      "type": "java.lang.Integer",
      "description": "Minimum number of sockets per node.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.couchbase.env.io.min-endpoints"
      }
    },
    {
      "name": "spring.couchbase.env.timeouts.socket-connect",
      "type": "java.time.Duration",
      "description": "Socket connect connections timeout.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.cassandra.cluster-name",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.data.cassandra.session-name"
      }
    },
    {
      "name": "spring.data.cassandra.connect-timeout",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.data.cassandra.connection.init-query-timeout"
      }
    },
    {
      "name": "spring.data.cassandra.consistency-level",
      "type": "com.datastax.oss.driver.api.core.DefaultConsistencyLevel",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.data.cassandra.request.consistency"
      }
    },
    {
      "name": "spring.data.cassandra.fetch-size",
      "type": "java.lang.Integer",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.data.cassandra.request.page-size"
      }
    },
    {
      "name": "spring.data.cassandra.jmx-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JMX reporting. Default to false as Cassandra JMX reporting is not compatible with Dropwizard Metrics.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Cassandra no longer provides JMX metrics."
      }
    },
    {
      "name": "spring.data.cassandra.load-balancing-policy",
      "type": "java.lang.Class",
      "description": "Class name of the load balancing policy. The class must have a default constructor.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.cassandra.pool.max-queue-size",
      "type": "java.lang.Integer",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.data.cassandra.request.throttler.max-queue-size"
      }
    },
    {
      "name": "spring.data.cassandra.pool.pool-timeout",
      "type": "java.time.Duration",
      "description": "Pool timeout when trying to acquire a connection from a host's pool.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "No longer available."
      }
    },
    {
      "name": "spring.data.cassandra.read-timeout",
      "type": "java.time.Duration",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.data.cassandra.request.timeout"
      }
    },
    {
      "name": "spring.data.cassandra.reconnection-policy",
      "type": "java.lang.Class",
      "description": "Class name of the reconnection policy. The class must have a default constructor.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.cassandra.retry-policy",
      "type": "java.lang.Class",
      "description": "Class name of the retry policy. The class must have a default constructor.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.cassandra.serial-consistency-level",
      "type": "com.datastax.oss.driver.api.core.DefaultConsistencyLevel",
      "sourceType": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.data.cassandra.request.serial-consistency"
      }
    },
    {
      "name": "spring.data.couchbase.consistency",
      "type": "org.springframework.data.couchbase.core.query.Consistency",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.elasticsearch.cluster-name",
      "type": "java.lang.String",
      "description": "Elasticsearch cluster name.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.elasticsearch.cluster-nodes",
      "type": "java.lang.String",
      "description": "Comma-separated list of cluster node addresses.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.data.elasticsearch.properties",
      "type": "java.util.Map<java.lang.String,java.lang.String>",
      "description": "Additional properties used to configure the client.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.datasource.dbcp2.enable-auto-commit-on-return",
      "type": "java.lang.Boolean",
      "sourceType": "org.apache.commons.dbcp2.BasicDataSource",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.datasource.jmx-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JMX support (if provided by the underlying pool).",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.datasource.tomcat.jmx-enabled"
      }
    },
    {
      "name": "spring.elasticsearch.jest.connection-timeout",
      "type": "java.time.Duration",
      "description": "Connection timeout.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.multi-threaded",
      "type": "java.lang.Boolean",
      "description": "Whether to enable connection requests from multiple execution threads.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.password",
      "type": "java.lang.String",
      "description": "Login password.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.proxy.host",
      "type": "java.lang.String",
      "description": "Proxy host the HTTP client should use.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.proxy.port",
      "type": "java.lang.Integer",
      "description": "Proxy port the HTTP client should use.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.read-timeout",
      "type": "java.time.Duration",
      "description": "Read timeout.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.uris",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of the Elasticsearch instances to use.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.elasticsearch.jest.username",
      "type": "java.lang.String",
      "description": "Login username.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.flyway.dry-run-output",
      "type": "java.io.File",
      "description": "File to which the SQL statements of a migration dry run should be output. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Flyway pro edition only."
      }
    },
    {
      "name": "spring.flyway.error-handlers",
      "type": "org.flywaydb.core.api.errorhandler.ErrorHandler[]",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Flyway pro edition only."
      }
    },
    {
      "name": "spring.flyway.sql-migration-suffix",
      "type": "java.lang.String",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.flyway.sql-migration-suffixes"
      }
    },
    {
      "name": "spring.flyway.undo-sql-migration-prefix",
      "type": "java.lang.String",
      "description": "File name prefix for undo SQL migrations. Requires Flyway Pro or Flyway Enterprise.",
      "sourceType": "org.springframework.boot.autoconfigure.flyway.FlywayProperties",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Flyway pro edition only."
      }
    },
    {
      "name": "spring.git.properties",
      "type": "java.lang.String",
      "description": "Resource reference to a generated git info properties file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.info.git.location"
      }
    },
    {
      "name": "spring.http.converters.preferred-json-mapper",
      "type": "java.lang.String",
      "description": "Preferred JSON mapper to use for HTTP message conversion. By default, auto-detected according to the environment.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.mvc.converters.preferred-json-mapper"
      }
    },
    {
      "name": "spring.http.encoding.charset",
      "type": "java.nio.charset.Charset",
      "description": "Charset of HTTP requests and responses. Added to the Content-Type header if not set explicitly.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.servlet.encoding.charset"
      }
    },
    {
      "name": "spring.http.encoding.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable http encoding support.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.servlet.encoding.enabled"
      }
    },
    {
      "name": "spring.http.encoding.force",
      "type": "java.lang.Boolean",
      "description": "Whether to force the encoding to the configured charset on HTTP requests and responses.",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.servlet.encoding.force"
      }
    },
    {
      "name": "spring.http.encoding.force-request",
      "type": "java.lang.Boolean",
      "description": "Whether to force the encoding to the configured charset on HTTP requests. Defaults to true when force has not been specified.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.servlet.encoding.force-request"
      }
    },
    {
      "name": "spring.http.encoding.force-response",
      "type": "java.lang.Boolean",
      "description": "Whether to force the encoding to the configured charset on HTTP responses.",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.servlet.encoding.force-response"
      }
    },
    {
      "name": "spring.http.encoding.mapping",
      "type": "java.util.Map<java.util.Locale,java.nio.charset.Charset>",
      "description": "Locale in which to encode mapping.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "server.servlet.encoding.mapping"
      }
    },
    {
      "name": "spring.http.log-request-details",
      "type": "java.lang.Boolean",
      "description": "Whether logging of (potentially sensitive) request details at DEBUG and TRACE level is allowed.",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.mvc.log-request-details"
      }
    },
    {
      "name": "spring.jackson.joda-date-time-format",
      "type": "java.lang.String",
      "description": "Joda date time format string. If not configured, 'date-format' is used as a fallback if it is configured with a format string.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.jta.bitronix.properties.allow-multiple-lrc",
      "type": "java.lang.Boolean",
      "description": "Whether to allow multiple LRC resources to be enlisted into the same transaction.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.asynchronous2-pc",
      "type": "java.lang.Boolean",
      "description": "Whether to enable asynchronously execution of two phase commit.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.background-recovery-interval",
      "type": "java.lang.Integer",
      "description": "Interval in minutes at which to run the recovery process in the background.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": 1,
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.jta.bitronix.properties.background-recovery-interval-seconds"
      }
    },
    {
      "name": "spring.jta.bitronix.properties.background-recovery-interval-seconds",
      "type": "java.lang.Integer",
      "description": "Interval in seconds at which to run the recovery process in the background.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": 60,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.current-node-only-recovery",
      "type": "java.lang.Boolean",
      "description": "Whether to recover only the current node. Should be enabled if you run multiple instances of the transaction manager on the same JMS and JDBC resources.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.debug-zero-resource-transaction",
      "type": "java.lang.Boolean",
      "description": "Whether to log the creation and commit call stacks of transactions executed without a single enlisted resource.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.default-transaction-timeout",
      "type": "java.lang.Integer",
      "description": "Default transaction timeout, in seconds.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": 60,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.disable-jmx",
      "type": "java.lang.Boolean",
      "description": "Whether to enable JMX support.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.exception-analyzer",
      "type": "java.lang.String",
      "description": "Set the fully qualified name of the exception analyzer implementation to use.",
      "sourceType": "bitronix.tm.Configuration",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.filter-log-status",
      "type": "java.lang.Boolean",
      "description": "Whether to enable filtering of logs so that only mandatory logs are written.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.force-batching-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether disk forces are batched.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.forced-write-enabled",
      "type": "java.lang.Boolean",
      "description": "Whether logs are forced to disk.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.graceful-shutdown-interval",
      "type": "java.lang.Integer",
      "description": "Maximum amount of seconds the TM waits for transactions to get done before aborting them at shutdown time.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": 60,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.jndi-transaction-synchronization-registry-name",
      "type": "java.lang.String",
      "description": "JNDI name of the TransactionSynchronizationRegistry.",
      "sourceType": "bitronix.tm.Configuration",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.jndi-user-transaction-name",
      "type": "java.lang.String",
      "description": "JNDI name of the UserTransaction.",
      "sourceType": "bitronix.tm.Configuration",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.journal",
      "type": "java.lang.String",
      "description": "Name of the journal. Can be 'disk', 'null', or a class name.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": "disk",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.log-part1-filename",
      "type": "java.lang.String",
      "description": "Name of the first fragment of the journal.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": "btm1.tlog",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.log-part2-filename",
      "type": "java.lang.String",
      "description": "Name of the second fragment of the journal.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": "btm2.tlog",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.max-log-size-in-mb",
      "type": "java.lang.Integer",
      "description": "Maximum size in megabytes of the journal fragments.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": 2,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.resource-configuration-filename",
      "type": "java.lang.String",
      "description": "ResourceLoader configuration file name.",
      "sourceType": "bitronix.tm.Configuration",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.server-id",
      "type": "java.lang.String",
      "description": "ASCII ID that must uniquely identify this TM instance. Defaults to the machine's IP address.",
      "sourceType": "bitronix.tm.Configuration",
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.skip-corrupted-logs",
      "type": "java.lang.Boolean",
      "description": "Skip corrupted transactions log entries. Use only at last resort when all you have to recover is a pair of corrupted files.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.bitronix.properties.warn-about-zero-resource-transaction",
      "type": "java.lang.Boolean",
      "description": "Whether to log a warning for transactions executed without a single enlisted resource.",
      "sourceType": "bitronix.tm.Configuration",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {}
    },
    {
      "name": "spring.jta.narayana.default-timeout",
      "type": "java.time.Duration",
      "description": "Transaction timeout. If a duration suffix is not specified, seconds will be used.",
      "defaultValue": "60s",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.expiry-scanners",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of expiry scanners.",
      "defaultValue": [
        "com.arjuna.ats.internal.arjuna.recovery.ExpiredTransactionStatusManagerScanner"
      ],
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.log-dir",
      "type": "java.lang.String",
      "description": "Transaction object store directory.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.one-phase-commit",
      "type": "java.lang.Boolean",
      "description": "Whether to enable one phase commit optimization.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.periodic-recovery-period",
      "type": "java.time.Duration",
      "description": "Interval in which periodic recovery scans are performed. If a duration suffix is not specified, seconds will be used.",
      "defaultValue": "120s",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.recovery-backoff-period",
      "type": "java.time.Duration",
      "description": "Back off period between first and second phases of the recovery scan. If a duration suffix is not specified, seconds will be used.",
      "defaultValue": "10s",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.recovery-db-pass",
      "type": "java.lang.String",
      "description": "Database password to be used by the recovery manager.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.recovery-db-user",
      "type": "java.lang.String",
      "description": "Database username to be used by the recovery manager.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.recovery-jms-pass",
      "type": "java.lang.String",
      "description": "JMS password to be used by the recovery manager.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.recovery-jms-user",
      "type": "java.lang.String",
      "description": "JMS username to be used by the recovery manager.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.recovery-modules",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of recovery modules.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.transaction-manager-id",
      "type": "java.lang.String",
      "description": "Unique transaction manager id.",
      "defaultValue": "1",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.jta.narayana.xa-resource-orphan-filters",
      "type": "java.util.List<java.lang.String>",
      "description": "Comma-separated list of orphan filters.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Narayana support has moved to third party starter."
      }
    },
    {
      "name": "spring.kafka.admin.ssl.keystore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.admin.ssl.key-store-location"
      }
    },
    {
      "name": "spring.kafka.admin.ssl.keystore-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.admin.ssl.key-store-password"
      }
    },
    {
      "name": "spring.kafka.admin.ssl.truststore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.admin.ssl.trust-store-location"
      }
    },
    {
      "name": "spring.kafka.admin.ssl.truststore-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.admin.ssl.trust-store-password"
      }
    },
    {
      "name": "spring.kafka.consumer.ssl.keystore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.consumer.ssl.key-store-location"
      }
    },
    {
      "name": "spring.kafka.consumer.ssl.keystore-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.consumer.ssl.key-store-password"
      }
    },
    {
      "name": "spring.kafka.consumer.ssl.truststore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.consumer.ssl.trust-store-location"
      }
    },
    {
      "name": "spring.kafka.consumer.ssl.truststore-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.consumer.ssl.trust-store-password"
      }
    },
    {
      "name": "spring.kafka.producer.ssl.keystore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.producer.ssl.key-store-location"
      }
    },
    {
      "name": "spring.kafka.producer.ssl.keystore-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.producer.ssl.key-store-password"
      }
    },
    {
      "name": "spring.kafka.producer.ssl.truststore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.producer.ssl.trust-store-location"
      }
    },
    {
      "name": "spring.kafka.producer.ssl.truststore-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.producer.ssl.trust-store-password"
      }
    },
    {
      "name": "spring.kafka.ssl.keystore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.ssl.key-store-location"
      }
    },
    {
      "name": "spring.kafka.ssl.keystore-password",
      "type": "java.lang.String",
      "description": "Store password for the key store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.ssl.key-store-password"
      }
    },
    {
      "name": "spring.kafka.ssl.truststore-location",
      "type": "org.springframework.core.io.Resource",
      "description": "Location of the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.ssl.trust-store-location"
      }
    },
    {
      "name": "spring.kafka.ssl.truststore-password",
      "type": "java.lang.String",
      "description": "Store password for the trust store file.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.ssl.trust-store-password"
      }
    },
    {
      "name": "spring.kafka.streams.cache-max-bytes-buffering",
      "type": "java.lang.Integer",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.kafka.streams.cache-max-size-buffering"
      }
    },
    {
      "name": "spring.liquibase.check-change-log-location",
      "type": "java.lang.Boolean",
      "description": "Check the change log location exists.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "reason": "Liquibase has it's own check that checks if the change log location exists making this property redundant."
      }
    },
    {
      "name": "spring.main.show-banner",
      "type": "java.lang.Boolean",
      "description": "Display the banner when the application runs.",
      "sourceType": "org.springframework.boot.SpringApplication",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.main.banner-mode"
      }
    },
    {
      "name": "spring.main.web-environment",
      "type": "java.lang.Boolean",
      "description": "Run the application in a web environment (auto-detected by default).",
      "sourceType": "org.springframework.boot.SpringApplication",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.main.web-application-type"
      }
    },
    {
      "name": "spring.mvc.contentnegotiation.favor-path-extension",
      "type": "java.lang.Boolean",
      "description": "Whether the path extension in the URL path should be used to determine the requested media type. If enabled a request '\/users.pdf' will be interpreted as a request for 'application\/pdf' regardless of the 'Accept' header.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Contentnegotiation",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "reason": "Use of path extensions for request mapping and for content negotiation is discouraged."
      }
    },
    {
      "name": "spring.mvc.date-format",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.mvc.format.date"
      }
    },
    {
      "name": "spring.mvc.favicon.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable resolution of favicon.ico.",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.mvc.formcontent.putfilter.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether to enable Spring's HttpPutFormContentFilter.",
      "defaultValue": true,
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.mvc.formcontent.filter.enabled"
      }
    },
    {
      "name": "spring.mvc.pathmatch.use-registered-suffix-pattern",
      "type": "java.lang.Boolean",
      "description": "Whether suffix pattern matching should work only against extensions registered with 'spring.mvc.contentnegotiation.media-types.*'. This is generally recommended to reduce ambiguity and to avoid issues such as when a '.' appears in the path for other reasons.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Pathmatch",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "reason": "Use of path extensions for request mapping and for content negotiation is discouraged."
      }
    },
    {
      "name": "spring.mvc.pathmatch.use-suffix-pattern",
      "type": "java.lang.Boolean",
      "description": "Whether to use suffix pattern match ('.*') when matching patterns to requests. If enabled a method mapped to '\/users' also matches to '\/users.*'.",
      "sourceType": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$Pathmatch",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "reason": "Use of path extensions for request mapping and for content negotiation is discouraged."
      }
    },
    {
      "name": "spring.rabbitmq.listener.simple.transaction-size",
      "type": "java.lang.Integer",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.rabbitmq.publisher-confirms",
      "type": "java.lang.Boolean",
      "deprecated": true,
      "deprecation": {
        "level": "error"
      }
    },
    {
      "name": "spring.rabbitmq.template.queue",
      "type": "java.lang.String",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.rabbitmq.template.default-receive-queue"
      }
    },
    {
      "name": "spring.reactor.stacktrace-mode.enabled",
      "description": "Whether Reactor should collect stacktrace information at runtime.",
      "defaultValue": false,
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.reactor.debug-agent.enabled"
      }
    },
    {
      "name": "spring.resources.chain.gzipped",
      "type": "java.lang.Boolean",
      "description": "Whether to enable resolution of already gzipped resources. Checks for a resource name variant with the '*.gz' extension.",
      "deprecated": true,
      "deprecation": {
        "level": "error",
        "replacement": "spring.resources.chain.compressed"
      }
    },
    {
      "name": "spring.webflux.date-format",
      "type": "java.lang.String",
      "sourceType": "org.springframework.boot.autoconfigure.web.reactive.WebFluxProperties",
      "deprecated": true,
      "deprecation": {
        "replacement": "spring.webflux.format.date"
      }
    }
  ],
  "hints": [
    {
      "name": "file.consumer.mode",
      "values": [
        {
          "value": "ref"
        },
        {
          "value": "lines"
        },
        {
          "value": "contents"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.cloud.fn.common.file.FileReadingMode"
        }
      ]
    },
    {
      "name": "logging.group.values",
      "providers": [
        {
          "name": "logger-name",
          "parameters": {
            "group": false
          }
        }
      ]
    },
    {
      "name": "logging.level.keys",
      "values": [
        {
          "value": "root",
          "description": "Root logger used to assign the default logging level."
        },
        {
          "value": "sql",
          "description": "SQL logging group including Hibernate SQL logger."
        },
        {
          "value": "web",
          "description": "Web logging group including codecs."
        }
      ],
      "providers": [
        {
          "name": "logger-name"
        }
      ]
    },
    {
      "name": "logging.level.values",
      "values": [
        {
          "value": "trace"
        },
        {
          "value": "debug"
        },
        {
          "value": "info"
        },
        {
          "value": "warn"
        },
        {
          "value": "error"
        },
        {
          "value": "fatal"
        },
        {
          "value": "off"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "management.endpoint.health.show-details",
      "values": [
        {
          "value": "NEVER"
        },
        {
          "value": "WHEN_AUTHORIZED"
        },
        {
          "value": "ALWAYS"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.actuate.autoconfigure.health.HealthProperties$Show"
        }
      ]
    },
    {
      "name": "management.endpoints.web.cors.allowed-headers",
      "values": [
        {
          "value": "*"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "management.endpoints.web.cors.allowed-methods",
      "values": [
        {
          "value": "*"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "management.endpoints.web.cors.allowed-origins",
      "values": [
        {
          "value": "*"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "management.health.status.order",
      "values": [
        {
          "value": "UNKNOWN"
        },
        {
          "value": "UP"
        },
        {
          "value": "DOWN"
        },
        {
          "value": "OUT_OF_SERVICE"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "management.metrics.export.graphite.rate-units",
      "values": [
        {
          "value": "NANOSECONDS"
        },
        {
          "value": "MICROSECONDS"
        },
        {
          "value": "MILLISECONDS"
        },
        {
          "value": "SECONDS"
        },
        {
          "value": "MINUTES"
        },
        {
          "value": "HOURS"
        },
        {
          "value": "DAYS"
        }
      ],
      "providers": [
        {
          "name": "java.util.concurrent.TimeUnit"
        }
      ]
    },
    {
      "name": "management.metrics.export.prometheus.rsocket.transport",
      "values": [
        {
          "value": "TCP"
        },
        {
          "value": "WEBSOCKET"
        }
      ],
      "providers": [
        {
          "name": "io.micrometer.prometheus.rsocket.autoconfigure.PrometheusRSocketProperties$Transport"
        }
      ]
    },
    {
      "name": "metadata.store.type",
      "values": [
        {
          "value": "mongodb"
        },
        {
          "value": "gemfire"
        },
        {
          "value": "redis"
        },
        {
          "value": "dynamodb"
        },
        {
          "value": "jdbc"
        },
        {
          "value": "zookeeper"
        },
        {
          "value": "hazelcast"
        },
        {
          "value": "memory"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$StoreType"
        }
      ]
    },
    {
      "name": "server.error.include-message",
      "values": [
        {
          "value": "NEVER"
        },
        {
          "value": "ALWAYS"
        },
        {
          "value": "ON_PARAM"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.web.ErrorProperties$IncludeAttribute"
        }
      ]
    },
    {
      "name": "server.error.include-stacktrace",
      "values": [
        {
          "value": "NEVER"
        },
        {
          "value": "ALWAYS"
        },
        {
          "value": "ON_PARAM"
        },
        {
          "value": "ON_TRACE_PARAM"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.web.ErrorProperties$IncludeStacktrace"
        }
      ]
    },
    {
      "name": "server.forward-headers-strategy",
      "values": [
        {
          "value": "NATIVE"
        },
        {
          "value": "FRAMEWORK"
        },
        {
          "value": "NONE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.web.ServerProperties$ForwardHeadersStrategy"
        }
      ]
    },
    {
      "name": "server.jetty.accesslog.format",
      "values": [
        {
          "value": "NCSA"
        },
        {
          "value": "EXTENDED_NCSA"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.web.ServerProperties$Jetty$Accesslog$FORMAT"
        }
      ]
    },
    {
      "name": "server.servlet.jsp.class-name",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "javax.servlet.http.HttpServlet"
          }
        }
      ]
    },
    {
      "name": "server.tomcat.accesslog.encoding",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "java.nio.charset.Charset"
          }
        }
      ]
    },
    {
      "name": "server.tomcat.accesslog.locale",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "java.util.Locale"
          }
        }
      ]
    },
    {
      "name": "server.tomcat.relaxed-path-chars",
      "values": [
        {
          "value": "<"
        },
        {
          "value": ">"
        },
        {
          "value": "["
        },
        {
          "value": "\\"
        },
        {
          "value": "]"
        },
        {
          "value": "^"
        },
        {
          "value": "`"
        },
        {
          "value": "{"
        },
        {
          "value": "|"
        },
        {
          "value": "}"
        }
      ]
    },
    {
      "name": "server.tomcat.relaxed-query-chars",
      "values": [
        {
          "value": "<"
        },
        {
          "value": ">"
        },
        {
          "value": "["
        },
        {
          "value": "\\"
        },
        {
          "value": "]"
        },
        {
          "value": "^"
        },
        {
          "value": "`"
        },
        {
          "value": "{"
        },
        {
          "value": "|"
        },
        {
          "value": "}"
        }
      ]
    },
    {
      "name": "spring.artemis.mode",
      "values": [
        {
          "value": "NATIVE"
        },
        {
          "value": "EMBEDDED"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.jms.artemis.ArtemisMode"
        }
      ]
    },
    {
      "name": "spring.banner.image.pixelmode",
      "values": [
        {
          "value": "TEXT"
        },
        {
          "value": "BLOCK"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.ImageBanner$PixelMode"
        }
      ]
    },
    {
      "name": "spring.cache.jcache.provider",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "javax.cache.spi.CachingProvider"
          }
        }
      ]
    },
    {
      "name": "spring.cache.type",
      "values": [
        {
          "value": "GENERIC"
        },
        {
          "value": "JCACHE"
        },
        {
          "value": "EHCACHE"
        },
        {
          "value": "HAZELCAST"
        },
        {
          "value": "INFINISPAN"
        },
        {
          "value": "COUCHBASE"
        },
        {
          "value": "REDIS"
        },
        {
          "value": "CAFFEINE"
        },
        {
          "value": "SIMPLE"
        },
        {
          "value": "NONE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.cache.CacheType"
        }
      ]
    },
    {
      "name": "spring.data.cassandra.compression",
      "values": [
        {
          "value": "LZ4"
        },
        {
          "value": "SNAPPY"
        },
        {
          "value": "NONE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$Compression"
        }
      ]
    },
    {
      "name": "spring.data.cassandra.request.throttler.type",
      "values": [
        {
          "value": "CONCURRENCY_LIMITING"
        },
        {
          "value": "RATE_LIMITING"
        },
        {
          "value": "NONE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.cassandra.CassandraProperties$ThrottlerType"
        }
      ]
    },
    {
      "name": "spring.data.cassandra.schema-action",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "org.springframework.data.cassandra.config.SchemaAction"
          }
        }
      ]
    },
    {
      "name": "spring.data.mongodb.field-naming-strategy",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "org.springframework.data.mapping.model.FieldNamingStrategy"
          }
        }
      ]
    },
    {
      "name": "spring.data.mongodb.repositories.type",
      "values": [
        {
          "value": "AUTO"
        },
        {
          "value": "IMPERATIVE"
        },
        {
          "value": "NONE"
        },
        {
          "value": "REACTIVE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.data.RepositoryType"
        }
      ]
    },
    {
      "name": "spring.datasource.data",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "java.util.List<org.springframework.core.io.Resource>"
          }
        }
      ]
    },
    {
      "name": "spring.datasource.driver-class-name",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "java.sql.Driver"
          }
        }
      ]
    },
    {
      "name": "spring.datasource.schema",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "java.util.List<org.springframework.core.io.Resource>"
          }
        }
      ]
    },
    {
      "name": "spring.datasource.xa.data-source-class-name",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "javax.sql.XADataSource"
          }
        }
      ]
    },
    {
      "name": "spring.jersey.type",
      "values": [
        {
          "value": "SERVLET"
        },
        {
          "value": "FILTER"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.jersey.JerseyProperties$Type"
        }
      ]
    },
    {
      "name": "spring.jms.listener.acknowledge-mode",
      "values": [
        {
          "value": "AUTO"
        },
        {
          "value": "CLIENT"
        },
        {
          "value": "DUPS_OK"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.jms.JmsProperties$AcknowledgeMode"
        }
      ]
    },
    {
      "name": "spring.jms.template.delivery-mode",
      "values": [
        {
          "value": "NON_PERSISTENT"
        },
        {
          "value": "PERSISTENT"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.jms.JmsProperties$DeliveryMode"
        }
      ]
    },
    {
      "name": "spring.jmx.server",
      "providers": [
        {
          "name": "spring-bean-reference",
          "parameters": {
            "target": "javax.management.MBeanServer"
          }
        }
      ]
    },
    {
      "name": "spring.jpa.hibernate.ddl-auto",
      "values": [
        {
          "value": "none",
          "description": "Disable DDL handling."
        },
        {
          "value": "validate",
          "description": "Validate the schema, make no changes to the database."
        },
        {
          "value": "update",
          "description": "Update the schema if necessary."
        },
        {
          "value": "create",
          "description": "Create the schema and destroy previous data."
        },
        {
          "value": "create-drop",
          "description": "Create and then destroy the schema at the end of the session."
        }
      ]
    },
    {
      "name": "spring.jpa.hibernate.naming.implicit-strategy",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "org.hibernate.boot.model.naming.ImplicitNamingStrategy"
          }
        }
      ]
    },
    {
      "name": "spring.jpa.hibernate.naming.physical-strategy",
      "providers": [
        {
          "name": "class-reference",
          "parameters": {
            "target": "org.hibernate.boot.model.naming.PhysicalNamingStrategy"
          }
        }
      ]
    },
    {
      "name": "spring.kafka.consumer.auto-offset-reset",
      "values": [
        {
          "value": "earliest",
          "description": "Automatically reset the offset to the earliest offset."
        },
        {
          "value": "latest",
          "description": "Automatically reset the offset to the latest offset."
        },
        {
          "value": "none",
          "description": "Throw exception to the consumer if no previous offset is found for the consumer's group."
        },
        {
          "value": "exception",
          "description": "Throw exception to the consumer."
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.kafka.consumer.isolation-level",
      "values": [
        {
          "value": "READ_UNCOMMITTED"
        },
        {
          "value": "READ_COMMITTED"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$IsolationLevel"
        }
      ]
    },
    {
      "name": "spring.kafka.consumer.key-deserializer",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "org.apache.kafka.common.serialization.Deserializer"
          }
        }
      ]
    },
    {
      "name": "spring.kafka.consumer.value-deserializer",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "org.apache.kafka.common.serialization.Deserializer"
          }
        }
      ]
    },
    {
      "name": "spring.kafka.listener.type",
      "values": [
        {
          "value": "SINGLE"
        },
        {
          "value": "BATCH"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.kafka.KafkaProperties$Listener$Type"
        }
      ]
    },
    {
      "name": "spring.kafka.producer.key-serializer",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "org.apache.kafka.common.serialization.Serializer"
          }
        }
      ]
    },
    {
      "name": "spring.kafka.producer.value-serializer",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "org.apache.kafka.common.serialization.Serializer"
          }
        }
      ]
    },
    {
      "name": "spring.liquibase.change-log",
      "providers": [
        {
          "name": "handle-as",
          "parameters": {
            "target": "org.springframework.core.io.Resource"
          }
        }
      ]
    },
    {
      "name": "spring.main.banner-mode",
      "values": [
        {
          "value": "OFF"
        },
        {
          "value": "CONSOLE"
        },
        {
          "value": "LOG"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.Banner$Mode"
        }
      ]
    },
    {
      "name": "spring.main.cloud-platform",
      "values": [
        {
          "value": "NONE"
        },
        {
          "value": "CLOUD_FOUNDRY"
        },
        {
          "value": "HEROKU"
        },
        {
          "value": "SAP"
        },
        {
          "value": "KUBERNETES"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.cloud.CloudPlatform"
        }
      ]
    },
    {
      "name": "spring.main.web-application-type",
      "values": [
        {
          "value": "NONE"
        },
        {
          "value": "SERVLET"
        },
        {
          "value": "REACTIVE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.WebApplicationType"
        }
      ]
    },
    {
      "name": "spring.mvc.converters.preferred-json-mapper",
      "values": [
        {
          "value": "gson"
        },
        {
          "value": "jackson"
        },
        {
          "value": "jsonb"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.mvc.format.date",
      "values": [
        {
          "value": "dd\/MM\/yyyy",
          "description": "Example date format. Any format supported by DateTimeFormatter.parse can be used."
        },
        {
          "value": "iso",
          "description": "ISO-8601 extended local date format."
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.mvc.format.date-time",
      "values": [
        {
          "value": "yyyy-MM-dd HH:mm:ss",
          "description": "Example date-time format. Any format supported by DateTimeFormatter.parse can be used."
        },
        {
          "value": "iso",
          "description": "ISO-8601 extended local date-time format."
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.mvc.format.time",
      "values": [
        {
          "value": "HH:mm:ss",
          "description": "Example time format. Any format supported by DateTimeFormatter.parse can be used."
        },
        {
          "value": "iso",
          "description": "ISO-8601 extended local time format"
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.mvc.locale-resolver",
      "values": [
        {
          "value": "FIXED"
        },
        {
          "value": "ACCEPT_HEADER"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties$LocaleResolver"
        }
      ]
    },
    {
      "name": "spring.output.ansi.enabled",
      "values": [
        {
          "value": "DETECT"
        },
        {
          "value": "ALWAYS"
        },
        {
          "value": "NEVER"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.ansi.AnsiOutput$Enabled"
        }
      ]
    },
    {
      "name": "spring.profiles.active",
      "providers": [
        {
          "name": "spring-profile-name"
        }
      ]
    },
    {
      "name": "spring.profiles.include",
      "providers": [
        {
          "name": "spring-profile-name"
        }
      ]
    },
    {
      "name": "spring.quartz.job-store-type",
      "values": [
        {
          "value": "MEMORY"
        },
        {
          "value": "JDBC"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.quartz.JobStoreType"
        }
      ]
    },
    {
      "name": "spring.rabbitmq.listener.type",
      "values": [
        {
          "value": "SIMPLE"
        },
        {
          "value": "DIRECT"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.amqp.RabbitProperties$ContainerType"
        }
      ]
    },
    {
      "name": "spring.session.redis.configure-action",
      "values": [
        {
          "value": "NOTIFY_KEYSPACE_EVENTS"
        },
        {
          "value": "NONE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.session.RedisSessionProperties$ConfigureAction"
        }
      ]
    },
    {
      "name": "spring.session.store-type",
      "values": [
        {
          "value": "REDIS"
        },
        {
          "value": "MONGODB"
        },
        {
          "value": "JDBC"
        },
        {
          "value": "HAZELCAST"
        },
        {
          "value": "NONE"
        }
      ],
      "providers": [
        {
          "name": "org.springframework.boot.autoconfigure.session.StoreType"
        }
      ]
    },
    {
      "name": "spring.webflux.format.date",
      "values": [
        {
          "value": "dd\/MM\/yyyy",
          "description": "Example date format. Any format supported by DateTimeFormatter.parse can be used."
        },
        {
          "value": "iso",
          "description": "ISO-8601 extended local date format."
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.webflux.format.date-time",
      "values": [
        {
          "value": "yyyy-MM-dd HH:mm:ss",
          "description": "Example date-time format. Any format supported by DateTimeFormatter.parse can be used."
        },
        {
          "value": "iso",
          "description": "ISO-8601 extended local date-time format."
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    },
    {
      "name": "spring.webflux.format.time",
      "values": [
        {
          "value": "HH:mm:ss",
          "description": "Example time format. Any format supported by DateTimeFormatter.parse can be used."
        },
        {
          "value": "iso",
          "description": "ISO-8601 extended local time format."
        }
      ],
      "providers": [
        {
          "name": "any"
        }
      ]
    }
  ]
}