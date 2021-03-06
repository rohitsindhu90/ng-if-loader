import {
  Directive,
  Input,
  OnInit,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  TemplateRef,
  Renderer2
} from '@angular/core';
import { BlockUIContentComponent } from '../components/block-ui-content/block-ui-content.component';
import { BlockUIInstanceService } from '../services/block-ui-instance.service';
import { BlockUIDefaultName } from '../constants/block-ui-default-name.constant';

@Directive({ selector: '[blockUI]' })
export class BlockUIDirective implements OnInit {
  private blockUIComponentRef: ComponentRef<BlockUIContentComponent>;
  blockTarget: string;
  message: any;
  template: any;
  delayStart: any;
  delayStop: any;
  loader:boolean;
  customClass: string;
  height:string;
  width:string;
  defaultEnabled:boolean;
  fakeLoderForDisableActionButton:boolean;

  @Input()
  set blockUI(name: any) { this.blockTarget = name; };
   @Input()
  set blockUIDefaultEnabled(defaultEnabled: any) { this.defaultEnabled = defaultEnabled };
  @Input()
  set blockUIFakeLoderForDisableActionButton(fakeLoderForDisableActionButton: any) { this.fakeLoderForDisableActionButton = fakeLoderForDisableActionButton };
  @Input()
  set blockUICustomClass(customClass: any) { this.customClass = customClass; };
  @Input()
  set blockUIHeight(height: any) { this.height = height; };
  @Input()
  set blockUIWidth(width: any) { this.width = width; };
  @Input()
  set blockUILoader(loader: any) { this.loader = loader; };
  @Input()
  set blockUIMessage(message: any) { this.message = message; };
  @Input()
  set blockUITemplate(template: any) { this.template = template; };
  @Input()
  set blockUIDelayStart(delayStart: any) {
     this.delayStart = delayStart ? Number(delayStart) : null;
  };
  @Input()
  set blockUIDelayStop(delayStop: any) {
    this.delayStop = delayStop ? Number(delayStop) : null;
  };

  constructor(
    private blockUIService: BlockUIInstanceService,
    private viewRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    try {
      this.viewRef.createEmbeddedView(this.templateRef);
      const parentElement = this.viewRef.element.nativeElement.nextSibling;

      if (parentElement && !this.isComponentInTemplate(parentElement)) {
        this.renderer.addClass(parentElement, 'block-ui__element');

        this.blockUIComponentRef = this.createComponent();

        let blockUIContent = this.findContentNode(this.viewRef.element.nativeElement);

        if (blockUIContent) {
          const settings = this.blockUIService.getSettings();

          parentElement.appendChild(blockUIContent);
          this.blockUIComponentRef.instance.className = 'block-ui-wrapper--element';
          this.blockUIComponentRef.instance.name = this.blockTarget || BlockUIDefaultName;
          if (this.message) this.blockUIComponentRef.instance.defaultMessage = this.message;
          if (this.delayStart) this.blockUIComponentRef.instance.delayStart = this.delayStart;
          if (this.delayStop) this.blockUIComponentRef.instance.delayStop = this.delayStop;
          if (this.customClass) this.blockUIComponentRef.instance.customClass = this.customClass;
          if (this.height) this.blockUIComponentRef.instance.height= this.height;
          if (this.width) this.blockUIComponentRef.instance.width= this.width;
          if (this.loader) this.blockUIComponentRef.instance.loader = this.loader;
          if (this.defaultEnabled) this.blockUIComponentRef.instance.defaultEnabled = this.defaultEnabled;
          if (this.fakeLoderForDisableActionButton) this.blockUIComponentRef.instance.fakeLoderForDisableActionButton = this.fakeLoderForDisableActionButton;

          if (this.template || settings.template)
            this.blockUIComponentRef.instance.templateCmp = this.template || settings.template;
        }
      }
    } catch (error) {
      console.error('ng-if-block-ui:', error);
    }
  }

  private isComponentInTemplate(element: any): boolean {
    let { children } = element || [];
    children = Array.from(children).reverse();
    return children.some((el: any) => el.localName === 'block-ui');
  }

  // Needed for IE (#17)
  private findContentNode(element: any) {
    const { nextSibling } = element;
    return [nextSibling, nextSibling.nextSibling].find((e) => e.localName === 'block-ui-content');
  }

  private createComponent() {
    const resolvedBlockUIComponent = this.componentFactoryResolver.resolveComponentFactory(BlockUIContentComponent);
    return this.viewRef.createComponent(resolvedBlockUIComponent);
  }
}
