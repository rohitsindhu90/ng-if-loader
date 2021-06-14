export const template = `
<div [@fade]="getAnimationState()" class="block-ui-wrapper  {{name}} {{className}} {{customClass}}" [ngClass]="{ 'active': state.blockCount > 0,'in-active':state.blockCount==0 }" [ngStyle]="{'min-height': (height && state.blockCount > 0?height:'auto'),'min-width': (width && state.blockCount > 0?width:'auto')}">
<div class="block-ui-spinner" *ngIf="!templateCmp">
     <div *ngIf="loader" class="loader"></div>
    <div *ngIf="!loader" class="loader_animate_line"><div></div><div></div><div></div><div></div><div></div></div>
    <div *ngIf="message || defaultMessage" class="message">
      {{ message || defaultMessage }}
    </div>
  </div>
  <ng-template *ngIf="templateCmp" #templateOutlet></ng-template>
</div>
`;
