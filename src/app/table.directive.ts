import {
  Directive,
  HostListener,
  ViewContainerRef,
  Input,
  ElementRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { SubTableComponent } from './sub-table/sub-table.component';

@Directive({
  selector: '[innerTable]'
})
export class TableDirective {
  @Input('innerTableDirective') innerTableDirective: any[];
  loadInputToComponent: ComponentRef<SubTableComponent>;

  @HostListener('click') onClick() {
    if (this.el.nativeElement.textContent.includes('Less')) {
      console.log(this.el);
      this.createTable();
    }
    if (this.el.nativeElement.textContent.includes('View More')) {
      this.destoryTable();
    }
  }

  constructor(
    public viewContainerRef: ViewContainerRef,
    private el: ElementRef,
    private resolver: ComponentFactoryResolver
  ) {}

  /* Creating Component */
  private createTable() {
    console.log('Create the component');
    const dynamicInputComponent = this.resolver.resolveComponentFactory(
      SubTableComponent
    );

    this.loadInputToComponent = this.viewContainerRef.createComponent(
      dynamicInputComponent
    );
    this.loadInputToComponent.instance.innerTableDetails = this.innerTableDirective;
  }

  /* Destroy Component */
  private destoryTable() {
    console.log('Destroy the component');
    this.viewContainerRef.clear();
  }
}
