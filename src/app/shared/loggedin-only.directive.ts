import { Directive, TemplateRef, ViewContainerRef, effect, inject } from '@angular/core';

import { AuthService } from './auth.service';

@Directive({
  selector: '[bmLoggedinOnly]',
  standalone: true
})
export class LoggedinOnlyDirective {
  private template = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);
  private authService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.isAuthenticated()) {
        this.viewContainer.createEmbeddedView(this.template);
      } else {
        this.viewContainer.clear();
      }
    });
  }
}
