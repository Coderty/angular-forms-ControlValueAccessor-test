import { Component, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi: true
    }
  ],
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements ControlValueAccessor {
  email: string;

  private onChangeFn: Function;
  constructor() {}

  changeText($event) {
    this.onChangeFn($event.target.value);
  }

  writeValue(obj: any): void {
    console.log(obj);
    this.email = obj;
  }

  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
