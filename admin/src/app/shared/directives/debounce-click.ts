import { Directive } from '@angular/core';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClick {
  constructor() {}
}
