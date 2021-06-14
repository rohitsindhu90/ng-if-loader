import {
    ComponentFactoryResolver, Directive,
    ElementRef,
    Input, OnDestroy, OnInit, Renderer2,
    TemplateRef, ViewContainerRef
} from "@angular/core";
import { DisableModelSettings } from "../models/block-ui-settings.model";
import { fromEvent, Subject, Subscription } from "rxjs";
import { BlockUIInstanceService } from '../services/block-ui-instance.service';


@Directive({ selector: '[blockUIDisable]' })
export class BlockUIDisableDirective implements OnInit, OnDestroy {
   @Input('blockUIDisable') DisableUISetting: DisableModelSettings={
       className:'disabled'
   };
    // className:string='disabled';
    ActiveCount:number=0;
    subscription=new Subscription();
    blockUISubscription=new Subscription();
    element:any;
    destroy$: Subject<any> = new Subject<any>();

   

    constructor(private blockUIService: BlockUIInstanceService,
        private renderer: Renderer2,
        private elRef: ElementRef) {
        this.element= this.elRef.nativeElement;
    }

    ngOnInit() {
            let service = this.blockUIService;
            this.blockUISubscription=service.blockUISubject.subscribe((y: any) => {
                //Count Active Class
                this.getActiveInstance();
                this.toggleDisableClass();
            });
        
        this.subscription = fromEvent(this.element.parentNode, 'click', { capture: true })
            .subscribe((e: any) => {
                if (e.target === this.element && this.ActiveCount>0) {
                    e.stopPropagation()
                }
            });
    }

    toggleDisableClass(){
        if(this.ActiveCount>0){
        this.element.disabled = true;
        this.addClass(this.DisableUISetting.className,this.element);
        }
        else{
            this.element.disabled = false;
            this.removeClass(this.DisableUISetting.className,this.element);
        }

    }

    addClass(className: string, element: any) {
        this.renderer.addClass(element, className);
        // or use the host element directly
        // this.renderer.addClass(this.elementRef.nativeElement, className);
    }
 
    removeClass(className: string, element: any) {
        this.renderer.removeClass(element, className);
    }

    //Get Active Instance count based on keys
    getActiveInstance(){
        let count=0;
        let instances=this.blockUIService.blockUIInstances;
        let keys=Object.keys(instances);
        if(this.DisableUISetting.keys && this.DisableUISetting.keys.length>0){
          keys=  keys.filter(value => this.DisableUISetting.keys.indexOf(value)>0)
        }
        if(keys && keys.length>0){
            keys.forEach(x=>{
                if(instances[x].isActive==true){
                    count++;
                }
            });
        }
        
        this.ActiveCount=count;
        console.log('ActiveCount:'+this.ActiveCount);

        

    }
  
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.subscription.unsubscribe();
        this.blockUISubscription.unsubscribe();
    }
}