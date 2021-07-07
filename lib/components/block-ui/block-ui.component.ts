import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  ComponentRef
} from '@angular/core';
import { BlockUIInstanceService } from '../../services/block-ui-instance.service';
import { BlockUIDefaultName } from '../../constants/block-ui-default-name.constant';

@Component({
  selector: 'block-ui',
  template: `
    <ng-content></ng-content>
    <block-ui-content
      [name]="name"
      [loader]="loader"
      [customClass]="customClass"
      [height]="height"
      [width]="width"
      [message]="message"
      [template]="template"
      [delayStart]="delayStart"
      [delayStop]="delayStop"
      [defaultEnabled]="defaultEnabled"
      [fakeLoderForDisableActionButton]="fakeLoderForDisableActionButton"
    >
    </block-ui-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class BlockUIComponent implements OnInit {
  @Input() name: string;
  @Input() message: any;

  //Rohit Sindhu
  //20210608
  //Added Input Property 
  @Input() loader:boolean=false;
  @Input() customClass: string;
  @Input() height: string;
  @Input() width:string;
  @Input() defaultEnabled:boolean;
  @Input() fakeLoderForDisableActionButton:boolean=false;

  @Input() delayStart: number;
  @Input() delayStop: number;
  @Input() template: any;

  constructor(
    private blockUI: BlockUIInstanceService,
  ) { }

  ngOnInit() {

    this.name = this.name || BlockUIDefaultName;
    this.template = this.template || this.blockUI.blockUISettings.template;
    this.customClass = this.customClass || this.blockUI.blockUISettings.customClass;
    this.height = this.height || this.blockUI.blockUISettings.height;
    this.width=this.width||this.blockUI.blockUISettings.width;
    this.loader = this.loader || this.blockUI.blockUISettings.loader;
    this.defaultEnabled = this.defaultEnabled || this.blockUI.blockUISettings.defaultEnabled;
    this.fakeLoderForDisableActionButton = this.fakeLoderForDisableActionButton || this.blockUI.blockUISettings.fakeLoderForDisableActionButton;
  }
}
