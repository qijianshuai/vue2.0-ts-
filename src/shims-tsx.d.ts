import Vue, { VNode } from 'vue'
import { IpcRenderer } from 'electron'
import { ElectronLog } from 'electron-log'
declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare global {
  interface Window {
    ipcRenderer: IpcRenderer;
    ERRORCODE: any;
    [key: string]: any;
  }
}

declare module 'three'
declare module 'vue/types/vue' {
  interface Vue {
    $bus: any
  }
}