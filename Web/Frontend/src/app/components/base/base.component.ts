import { Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

export abstract class AppBaseComponent<TValue> implements ControlValueAccessor {
    @Input() autofocus = false;
    @Input() class = "";
    @Input() disabled = false;
    @Input() formControlName!: string;
    @Input() required = false;
    @Input() text = "";

    private onChange!: (value: TValue) => void;

    private VALUE!: TValue;

    get value(): TValue {
        return this.VALUE;
    }

    set value(value: TValue) {
        if (this.value === value) { return; }

        this.VALUE = value;

        if (this.onChange) {
            this.onChange(value);
        }
    }

    registerOnChange(onChange: (value: TValue) => void) {
        this.onChange = onChange;
    }

    // tslint:disable-next-line: no-empty
    registerOnTouched(_: () => void) { }

    writeValue(value: TValue) {
        this.value = value;
    }
}
