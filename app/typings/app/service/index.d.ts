// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGood from '../../../service/Good';
import ExportTest from '../../../service/Test';

declare module 'egg' {
  interface IService {
    good: ExportGood;
    test: ExportTest;
  }
}
