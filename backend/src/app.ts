

import cors from 'cors'
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { Constants } from './constants'
import getRouteList from './utilities/logRegisteredRoutes'
import { errorMiddleware } from './middleware/error';
import { Controller } from './mvc/controller';



class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.initializeCors()
    this.app.use(bodyParser.json())
    this.app.use(cookieParser());
    this.initializeControllers(controllers);
    this.app.use(errorMiddleware);
  }

  public listen() {
    this.app.listen(Constants.Env.PORT, () => {
      console.info(`Listening on the port ${Constants.Env.PORT}`);
      console.info(getRouteList(this.app))
    });
  }

  private initializeCors() {
    const corsOptions = {
      origin: function (origin, callback) {
        if (Constants.Env.ALLOWED_HOSTS.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error(`${origin} is not allowed`));
        }
      },
      optionsSuccessStatus: 200,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    };

    this.app.use(cors(corsOptions));
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use('/api/', controller.router);
    });
  }

}


export default App;