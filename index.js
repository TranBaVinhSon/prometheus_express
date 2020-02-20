const express = require("express");
// import { collectDefaultMetrics, register, Counter } from "prom-client";
const client = require("prom-client");
const gcStats = require("prometheus-gc-stats");

client.register.setDefaultLabels({
  app: "MyAppName"
});

// Initializing the express app
const app = express();

// Set prom-client to collect default metrics
client.collectDefaultMetrics({ timeout: 5000 });

// Set prometheus-gc-stats to collect GC stats
gcStats()();

// Custom metric - Counter for counting the number of requests
const totalRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of requests",
  labelNames: ["method", "hostname"]
});

app.use((req, res, next) => {
  totalRequests.inc({ method: req.method, hostname: req.hostname });
  next();
});

// Handle the metrics scraping on /metrics path
app.get("/metrics", (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(client.register.metrics());
});

// Starting the app
app.listen(3000);
