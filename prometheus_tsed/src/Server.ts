import {
  GlobalAcceptMimesMiddleware,
  ServerLoader,
  ServerSettings,
} from "@tsed/common";
import * as bodyParser from "body-parser";
import * as compress from "compression";
import * as cookieParser from "cookie-parser";
import * as methodOverride from "method-override";
import * as Prometheus from "prom-client";
const gcStats = require("prometheus-gc-stats");

const rootDir = __dirname;

@ServerSettings({
  rootDir,
  acceptMimes: ["application/json"],
  // mount controller + routing
  mount: {
    "/metrics": `${rootDir}/controllers/MetricController.ts`,
    "/users": `${rootDir}/controllers/UserController.ts`,
  },
})
export class Server extends ServerLoader {
  /**
   * This method let you configure the express middleware required by your application to works.
   * @returns {Server}
   */
  public $beforeRoutesInit(): void | Promise<any> {
    this.use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        })
      );
    Prometheus.collectDefaultMetrics();
    gcStats()();
  }
}
