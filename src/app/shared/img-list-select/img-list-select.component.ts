import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-img-list-select',
  templateUrl: './img-list-select.component.html',
  styleUrls: ['./img-list-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImgListSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ImgListSelectComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgListSelectComponent implements ControlValueAccessor {

  selected: string;
  @Input() title = 'Please choose a cover';
  @Input() items: string[] = [];
  @Input() cols = 8;
  @Input() rowHeight = '64px';
  @Input() itemWidth = '80px';
  @Input() useSvgIcon = false;
  @Output('itemChange') itemChange = new EventEmitter<string>();

  private propagateChange = (_: any) => {};

  public writeValue(obj: any) {
    if (obj && obj !== '') {
      this.selected = obj;
    }
  }

  public registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  public validate(c: FormControl) {
    return this.selected ? null : {
      imageListSelect: {
        valid: false,
      },
    };
  }

  // todo touched 
  public registerOnTouched() {
  }


  onChange(i) {
    this.selected = this.items[i];
    this.propagateChange(this.items[i]);
    this.itemChange.emit(this.items[i]);
  }

}
