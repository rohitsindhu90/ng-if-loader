import { Component, ComponentRef } from '@angular/core';
import { BlockUI, NgBlockUI, BlockUIService } from 'ng-if-block-ui';

@Component({
  selector: 'default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  moduleId: __moduleName
})
export class DeafultComponent {
  @BlockUI() blockUI: NgBlockUI;
  @BlockUI('block-element') elementBlockUI: NgBlockUI;

  defaultMessage: string = 'Default Message...';
  timeout: number = 5000;
  blockInstances = [ 'block-element-2', 'block-element-3'];

  constructor(
    private blockUIService: BlockUIService
  ) {
    // blockUIService.actionEvent().subscribe((x:any)=>{
    //   alert(x.action);
      
      let service=this.blockUIService
    
    let subject=service.blockUIInstance.blockUISubject;
    service.blockUIInstance.blockUISubject.subscribe((y:any)=>{
      console.log(JSON.stringify(y));
      
      let t=y;
    });

    setTimeout(() => {
      this.blockUIService.stop(this.blockInstances);
        }, 10000);

    // });
  }

  
  getInstance(){
    
    let service=this.blockUIService
    // let instances=service.getAllInstances();
    let subject=service.blockUIInstance.blockUISubject;
    service.blockUIInstance.blockUISubject.subscribe((x:any)=>{
    
      console.log(x);
      let t=x;
    })

  }
  blockMain(message: string) {
    this.blockUI.start(message);

    setTimeout(() => {
      this.blockUI.stop();
    }, this.timeout);
  }

  blockElement() {
    this.elementBlockUI.start();

    setTimeout((blockUI) => {
      this.elementBlockUI.stop();
    }, this.timeout);
  }

  blockAllElements() {
    alert('BlockUI Enabled');
    this.blockUIService.start(this.blockInstances, 'Loading All');
    setTimeout((blockUI) => {
      this.blockUIService.stop(this.blockInstances);
    }, this.timeout);
  }

  blockUpdate() {
    let messages: string[] = ['Logining In', 'Loading Settings', 'Loading Widgets'],
      i = 0,
      interval: any;

    this.elementBlockUI.start('Welcome');

    interval = setInterval(() => {
      this.elementBlockUI.update(messages[i]);
      i++;

      if (i > messages.length) {
        this.elementBlockUI.stop();
        clearInterval(interval);
      }
    }, 850);
  }
}
