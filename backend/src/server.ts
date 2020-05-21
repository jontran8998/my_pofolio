import App from './app';
import { EmailController } from './mvc/email';

const app = new App([
  new EmailController(),
]);

app.listen();
