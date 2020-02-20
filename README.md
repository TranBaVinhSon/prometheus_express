<h1 align="center">Welcome to prometheus_express 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install
```

## Running

```sh
node index.js
```

Go to `localhost:3000/metrics`

```
# HELP process_cpu_user_seconds_total Total user CPU time spent in seconds.
# TYPE process_cpu_user_seconds_total counter
process_cpu_user_seconds_total{app="MyAppName"} 0.001054 1582170343506

# HELP process_cpu_system_seconds_total Total system CPU time spent in seconds.
# TYPE process_cpu_system_seconds_total counter
process_cpu_system_seconds_total{app="MyAppName"} 0.000045 1582170343506

# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total{app="MyAppName"} 0.001099 1582170343506

# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds{app="MyAppName"} 1582170343

# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes{app="MyAppName"} 39895040 1582170343507

# HELP nodejs_eventloop_lag_seconds Lag of event loop in seconds.
# TYPE nodejs_eventloop_lag_seconds gauge
nodejs_eventloop_lag_seconds{app="MyAppName"} 0.00422322 1582170343511

# HELP nodejs_active_handles Number of active libuv handles grouped by handle type. Every handle type is C++ class name.
# TYPE nodejs_active_handles gauge
nodejs_active_handles{type="WriteStream",app="MyAppName"} 2 1582170343507

# HELP nodejs_active_handles_total Total number of active handles.
# TYPE nodejs_active_handles_total gauge
nodejs_active_handles_total{app="MyAppName"} 2 1582170343508

# HELP nodejs_active_requests Number of active libuv requests grouped by request type. Every request type is C++ class name.
# TYPE nodejs_active_requests gauge

# HELP nodejs_active_requests_total Total number of active requests.
# TYPE nodejs_active_requests_total gauge
nodejs_active_requests_total{app="MyAppName"} 0 1582170343508

# HELP nodejs_heap_size_total_bytes Process heap size from node.js in bytes.
# TYPE nodejs_heap_size_total_bytes gauge
nodejs_heap_size_total_bytes{app="MyAppName"} 20692992 1582170343508

# HELP nodejs_heap_size_used_bytes Process heap size used from node.js in bytes.
# TYPE nodejs_heap_size_used_bytes gauge
nodejs_heap_size_used_bytes{app="MyAppName"} 12287544 1582170343508

# HELP nodejs_external_memory_bytes Nodejs external memory size in bytes.
# TYPE nodejs_external_memory_bytes gauge
nodejs_external_memory_bytes{app="MyAppName"} 408560 1582170343508

# HELP nodejs_heap_space_size_total_bytes Process heap space size total from node.js in bytes.
# TYPE nodejs_heap_space_size_total_bytes gauge
nodejs_heap_space_size_total_bytes{space="read_only",app="MyAppName"} 524288 1582170343508
nodejs_heap_space_size_total_bytes{space="new",app="MyAppName"} 8388608 1582170343508
nodejs_heap_space_size_total_bytes{space="old",app="MyAppName"} 7573504 1582170343508
nodejs_heap_space_size_total_bytes{space="code",app="MyAppName"} 1572864 1582170343508
nodejs_heap_space_size_total_bytes{space="map",app="MyAppName"} 1060864 1582170343508
nodejs_heap_space_size_total_bytes{space="large_object",app="MyAppName"} 1572864 1582170343508

# HELP nodejs_heap_space_size_used_bytes Process heap space size used from node.js in bytes.
# TYPE nodejs_heap_space_size_used_bytes gauge
nodejs_heap_space_size_used_bytes{space="read_only",app="MyAppName"} 35200 1582170343508
nodejs_heap_space_size_used_bytes{space="new",app="MyAppName"} 3627992 1582170343508
nodejs_heap_space_size_used_bytes{space="old",app="MyAppName"} 6807032 1582170343508
nodejs_heap_space_size_used_bytes{space="code",app="MyAppName"} 901696 1582170343508
nodejs_heap_space_size_used_bytes{space="map",app="MyAppName"} 671792 1582170343508
nodejs_heap_space_size_used_bytes{space="large_object",app="MyAppName"} 249120 1582170343508

# HELP nodejs_heap_space_size_available_bytes Process heap space size available from node.js in bytes.
# TYPE nodejs_heap_space_size_available_bytes gauge
nodejs_heap_space_size_available_bytes{space="read_only",app="MyAppName"} 480384 1582170343508
nodejs_heap_space_size_available_bytes{space="new",app="MyAppName"} 496680 1582170343508
nodejs_heap_space_size_available_bytes{space="old",app="MyAppName"} 258800 1582170343508
nodejs_heap_space_size_available_bytes{space="code",app="MyAppName"} 5216 1582170343508
nodejs_heap_space_size_available_bytes{space="map",app="MyAppName"} 80 1582170343508
nodejs_heap_space_size_available_bytes{space="large_object",app="MyAppName"} 1506024960 1582170343508

# HELP nodejs_version_info Node.js version info.
# TYPE nodejs_version_info gauge
nodejs_version_info{version="v10.16.3",major="10",minor="16",patch="3",app="MyAppName"} 1

# HELP nodejs_gc_runs_total Count of total garbage collections.
# TYPE nodejs_gc_runs_total counter
nodejs_gc_runs_total{gctype="Scavenge",app="MyAppName"} 1

# HELP nodejs_gc_pause_seconds_total Time spent in GC Pause in seconds.
# TYPE nodejs_gc_pause_seconds_total counter
nodejs_gc_pause_seconds_total{gctype="Scavenge",app="MyAppName"} 0.001004196

# HELP nodejs_gc_reclaimed_bytes_total Total number of bytes reclaimed by GC.
# TYPE nodejs_gc_reclaimed_bytes_total counter
nodejs_gc_reclaimed_bytes_total{gctype="Scavenge",app="MyAppName"} 2470016

# HELP http_requests_total Total number of requests
# TYPE http_requests_total counter
http_requests_total{method="GET",hostname="localhost",app="MyAppName"} 6

```

## Show your support

Give a ⭐️ if this project helped you!
