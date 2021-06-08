import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-if-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  // Wires up BlockUI instance
  @BlockUI() blockUI: NgBlockUI;

  constructor() {}

  toggleBlocking() {
    this.blockUI.start('Loading...');

    setTimeout(() => {
      this.blockUI.stop();
    }, 2500);
  }

}
