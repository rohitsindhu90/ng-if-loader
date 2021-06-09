import { ComponentRef, TemplateRef } from '@angular/core';

export interface BlockUISettings {
  message?: string;
  delayStart?: number;
  delayStop?: number;
  loader?:boolean;
  customClass?: string;
  template?: ComponentRef<{ message?: any }> | any;
}
