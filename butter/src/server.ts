import config from "./config";
import initalizeServer from "./app";

const startUpServer = () => {
  const app = initalizeServer();

  app.listen(config.port, () => {
    console.log(
      `Listening on http://localhost:${config.port} in ${config.env} mode`
    );
  });
};

startUpServer();
