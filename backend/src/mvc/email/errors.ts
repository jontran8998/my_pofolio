import { HttpError } from "../httpError";

export namespace Errors{
  export class InvalidCapcha extends HttpError {
    constructor() {
      super(414, `Invalid captcha. Please try again.`);
    }
  }

  export class InternalEmailService extends HttpError {
    constructor() {
      super(503, `Internal Email Service. Please try again later.`);
    }
  }

  export class OnlyOneMessage extends HttpError {
    constructor(minute, remaining) {
      let val1 = (minute > 1) ? `${minute} minutes` : `a minute`
      let val2 = (remaining > 1) ? `${remaining} minutes` : `a minute`
      super(414, `You already sent a message ${val1} ago. Please use your personal email or try again after ${val2}`);
    }
  }
}