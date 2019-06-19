// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccess from '../../../middleware/access';

declare module 'egg' {
  interface IMiddleware {
    access: typeof ExportAccess;
  }
}
