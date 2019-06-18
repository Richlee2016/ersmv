import { Application } from 'egg';
export default (app: Application) => {
  app.get('/', app.controller.home.page);
  app.get('/home', app.controller.home.home);
};
