import * as express from 'express';
import { Dto } from './dto';
import * as post from './handlers/post';
import { Controller } from '../controller';

export class EmailController extends Controller {
  public path = '/email';
  public router = express.Router();

  constructor() {
    super()
    this.router.post(
      this.path,
      this.logRoute,
      this.validator(Dto.Email),
      post.isInBlackList,
      post.cleanUp,
      post.verifyReCaptcha,
      post.sendConfirmation,
      post.forwardMessage);
  }
}
