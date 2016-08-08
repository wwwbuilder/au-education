import { Directive, ElementRef, OnInit, OnDestroy  } from '@angular/core';
declare var $:any;

@Directive({
  selector: '[edDatepicker]'
})
export class EdDatepickerDirective implements OnInit, OnDestroy  {
  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
  public ngOnInit() {
    let self = this;
    $(self.el).daterangepicker({singleDatePicker: true});
  }

  public ngOnDestroy() {
  	if ($(this.el).data('daterangepicker')) {
  		$(this.el).data('daterangepicker').remove();
  	}
  }
}
