import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const PHONE_PATTERN = '^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../styles/styles.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null,
        [Validators.required, Validators.email]),
      phone: new FormControl(null,
        [Validators.required, Validators.pattern(PHONE_PATTERN)]),
    });
    this.form.valueChanges.subscribe(() => {
      this.formSubmitted = false;
    });

  }


  isFieldValid = (field: string): boolean => !this.form.get(field).valid && this.form.get(field).touched;

  displayFieldCss(field: string): object {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };

  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('form submitted !!');
      this.formSubmitted = true;
    } else {
      // validate all form fields
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({onlySelf: true});
      });
    }
  }
}
