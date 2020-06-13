import { ServerLoader } from "@tsed/common";
import { Server } from "./Server";

async function bootstrap() {
  try {
    console.log("Start server...");
    const server = await ServerLoader.bootstrap(Server);

    await server.listen();
    console.log("Server initialized");
  } catch (er) {
    console.log(er);
  }
}

bootstrap();
