import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async home() {
    const { ctx } = this;
    await ctx.render('home.js', {
      title: '首页',
      keywords: '这是首页'
    });
  }
}
