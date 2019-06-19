import { Service } from 'egg';
export default class Test extends Service {
  // 获取单个电影
  public async go(id: string | number) {
    const { ctx } = this;
    try {
      return 1;
    } catch (error) {
      console.log(error);
    }
  }

  public async nice(id: string | number) {
    const { ctx } = this;
    try {
      return 1;
    } catch (error) {
      console.log(error);
    }
  }
}
