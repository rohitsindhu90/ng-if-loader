import { ComponentRef, TemplateRef } from '@angular/core';

export interface BlockUISettings {
  message?: string;
  delayStart?: number;
  delayStop?: number;
  loader?:boolean;
  customClass?: string;
  height?:string;
  width?:string;
  defaultEnabled?:boolean;
  template?: ComponentRef<{ message?: any }> | any;
  enable?:boolean;
  fakeLoderForDisableActionButton?:boolean;
}

export interface DisableModelSettings{
  keys?:string[];
  className?:string;
}
