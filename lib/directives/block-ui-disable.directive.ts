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
   @Input('blockUIDisable') DisableUISetting: DisableModelSettings;
    // className:string='disabled';
    ActiveCount:number=0;
    subscription=new Subscription();
    blockUISubscription=new Subscription();
    element:any;
    destroy$: Subject<any> = new Subject<any>();
    className:string='disabled';
    keys:string[]=[];

    constructor(private blockUIService: BlockUIInstanceService,
        private renderer: Renderer2,
        private elRef: ElementRef) {
        this.element= this.elRef.nativeElement;
        
        
    }

    ngOnInit() {
        debugger;
        //Input property Default Values
        if (this.DisableUISetting) {
            if (this.DisableUISetting.className) {
                this.className = this.DisableUISetting.className;
            }
            if (this.DisableUISetting.keys) {
                this.keys = this.DisableUISetting.keys;
            }
        }

        let service = this.blockUIService;
        this.blockUISubscription = service.blockUISubject.subscribe((y: any) => {
            //Count Active Class
            this.getActiveInstance();
            this.toggleDisableClass();
        });

        this.subscription = fromEvent(this.element.parentNode, 'click', { capture: true })
            .subscribe((e: any) => {
                if (e.target === this.element && this.ActiveCount > 0) {
                    e.stopPropagation()
                }
            });
    }

    toggleDisableClass(){
        if(this.ActiveCount>0){
        this.element.disabled = true;
        this.addClass(this.className,this.element);
        }
        else{
            this.element.disabled = false;
            this.removeClass(this.className,this.element);
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
    getArraysIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
    }

    //Get Active Instance count based on keys
    getActiveInstance(){
        let count=0;
        let instances=this.blockUIService.blockUIInstances;
        let keys=Object.keys(instances);
        if (this.keys && this.keys.length > 0) {
            let _keys=this.getArraysIntersection(keys,this.keys)
            // let _keys = keys.filter(value => 
            //     this.keys.filter(x=>x==value) && this.keys.filter(x=>x==value).length>0
            //     );
            keys = _keys;
        }
        if(keys && keys.length>0){
            keys.forEach(x=>{
                if(instances[x]==true){
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