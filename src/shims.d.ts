import { ElectronLog } from 'electron-log'
declare global {
  namespace NodeJS {
    interface Global {
      log: ElectronLog
    }
  }
  interface Window {
    login: Function;
  }
}