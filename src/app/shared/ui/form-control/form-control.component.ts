import { Component,
        Input,
        Renderer2,
        ViewChild,
        forwardRef,
        HostBinding,
        OnInit } from '@angular/core';
import { ControlValueAccessor,
        NG_VALUE_ACCESSOR,
        NG_VALIDATORS,
        FormControl,
        Validator } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  providers: [
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef( () => FormControlComponent ),
          multi: true
      },
      {
          provide: NG_VALIDATORS,
          useExisting: forwardRef( () => FormControlComponent ),
          multi: true
      }
  ]
})

export class FormControlComponent implements OnInit,  ControlValueAccessor, Validator {
    @Input()
    type: string;
    @Input()
    label: string;
    @Input()
    message: string;
    @Input()
    min: string;
    @Input()
    max: string;
    @Input()
    step: string;

    @ViewChild('input') input;

    @HostBinding('class') classes;
    @HostBinding('class.form_control__focus') isFocus: boolean;
    @HostBinding('class.form_control__fill') isFill: boolean;
    @HostBinding('class.form_control__error') isError: boolean;

    public value: any;
    public $control: any;
    public propagateChange = (_: any) => {};

    constructor(
        public renderer: Renderer2
    ) { }

    onInput(event) {
        let newValue = this.$control.value;
        this.isFill = newValue ? true : false;
        try {
            this.value = newValue;
            this.isError = false;
        } catch (ex) {
            this.isError = true;
        }
        this.propagateChange(this.value);
    }

    writeValue(val: any) {
        this.value = val;
        this.isFill = val ? true : false;
    }

    registerOnChange(fn: any) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any) {}

    validate(c: FormControl) {
        return (!this.isError) ? null : { valid: false };
    }

    ngOnInit() {
        this.$control = this.input.nativeElement;
        this.classes = `form_control form_${this.type}`;
        if (this.min) {
            this.renderer.setAttribute(this.$control, 'min', this.min);
        }
        if (this.max) {
            this.renderer.setAttribute(this.$control, 'max', this.max);
        }
        if (this.step) {
            this.renderer.setAttribute(this.$control, 'step', this.step);
        }
        this.renderer.listen(this.$control, 'focus', () => this.isFocus = true );
        this.renderer.listen(this.$control, 'blur', () => this.isFocus = false );
    }
}
