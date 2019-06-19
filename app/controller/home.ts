import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async page() {
    const { ctx } = this;
    console.log('这个是函数=====>', 1);
    await ctx.render('index.js', {
      title: '影音',
      keywords: '影音',
      // list: res,
    });
  }
  public async home() {
    const { ctx } = this;
    await ctx.render('home.js', {
      title: '影音-首页',
      keywords: '影音首页',
    });
  }
}
