import { Controller, Get } from "@tsed/common";
import * as Prometheus from "prom-client";

@Controller("/metrics")
export class MetricController {
  @Get()
  public metrics(): string {
    console.log("123");
    return Prometheus.register.metrics();
  }
}
