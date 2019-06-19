import { Controller } from 'egg';
export default class MovieController extends Controller {
  public async getVod() {
    const { ctx } = this;
    const { id } = ctx.params;
    const res = await ctx.service.movie.getMovie(id);
    ctx.body = res;
  }
  public async getTypeVod() {
    const { ctx } = this;
    const q = ctx.query;
    const res = await ctx.service.movie.getMovies(q);
    ctx.body = res;
  }
  public async searchMove() {
    const { ctx } = this;
    const q = ctx.request.body;
    const res = await ctx.service.movie.searchMovie(q);
    ctx.body = res;
  }
}
