import { Controller, Get, Res } from "@tsed/common";
import * as Express from "express";
import * as Prometheus from "prom-client";

@Controller("/metrics")
export class MetricController {
  @Get()
  public metrics(@Res() response: Express.Response): any {
    response.end(Prometheus.register.metrics());
  }
}
