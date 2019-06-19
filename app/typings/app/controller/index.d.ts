// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../controller/home';
import ExportMovie from '../../../controller/movie';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    movie: ExportMovie;
  }
}
