import { AbstractControl  } from '@angular/forms';

export function IsNumberValidator(control: AbstractControl) {
    if (isNaN(+control.value)) {
        return {
            isNumber: {
                valid: false,
            },
        };
    }
    return null;
}
