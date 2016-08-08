import { Directive, ElementRef, OnInit, OnDestroy  } from '@angular/core';
declare var $:any;

@Directive({
  selector: '[edInputMaterial]'
})
export class EdInputMaterialDirective implements OnInit, OnDestroy  {
  private el: HTMLElement;
  private showClass = 'is-visible';
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
  public ngOnInit() {
       let self = this;
    $(self.el).find('.form-control').on('checkval change input', (evt: any) => {
      var label = $(self.el).children('.control-label');
      if ($(evt.target).val() !== '') {
        label.addClass(self.showClass);
      } else {
        label.removeClass(self.showClass).addClass('animate');
      }
    }).on('keyup', (evt: any) => {
      $(evt.target).trigger('checkval');
    }).trigger('checkval').trigger('change');
    }

  public ngOnDestroy() {
    $(this.el).find('.form-control').off('checkval change input keyup');
  }
}
