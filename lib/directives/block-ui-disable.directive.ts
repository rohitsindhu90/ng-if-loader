// import { ComponentFactoryResolver, Directive, HostListener, OnInit, Renderer2, TemplateRef, ViewContainerRef } from "@angular/core";
// import { BlockUIInstanceService } from "../services/block-ui-instance.service";

// @Directive({ selector: '[blockUIDisable]' })
// export class BlockUIDisableDirective implements OnInit {

//     constructor(  private blockUIService: BlockUIInstanceService,
//         private viewRef: ViewContainerRef,
//         private templateRef: TemplateRef<any>,
//         private renderer: Renderer2,
//         private componentFactoryResolver: ComponentFactoryResolver ){

//     }
//     @HostListener("click", ["$event"])
//     public onClick(event: any): void
//     {
//         alert('event triggered')
//         event.stopPropagation();
//     }

//     ngOnInit(){
//     }
// }