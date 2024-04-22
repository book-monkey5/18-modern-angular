import { Directive, HostListener, input, output } from '@angular/core';

@Directive({
  selector: '[bmConfirm]',
  standalone: true
})
export class ConfirmDirective {
  confirmText = input.required<string>({ alias: 'bmConfirm' });
  confirm = output();

  @HostListener('click') onClick() {
    if (window.confirm(this.confirmText())) {
      this.confirm.emit();
    }
  }
}
