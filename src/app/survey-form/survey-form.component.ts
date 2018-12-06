import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IsNumberValidator } from '../is-number-validator';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss'],
})
export class SurveyFormComponent {
  surveyForm = this.fb.group({
    studyHours: [null, Validators.compose([Validators.required, Validators.min(0), IsNumberValidator])],
    currentYear: [null, Validators.compose([Validators.required, Validators.min(0), IsNumberValidator])],
    creditCount: [null, Validators.compose([Validators.required, Validators.min(0), IsNumberValidator])],
    gender: [null],
    ageRange: [null]
  });

  genders = [
    {option: 'Male', id: 'M'},
    {option : 'Female', id:'F'},
    {option : 'Other / Prefer not to answer', id:'O'}
  ];

  ages = [
    {id: 1, option:'<16'},
    {id: 2, option:'16-20'},
    {id: 3, option:'21-26'},
    {id: 4, option:'>26'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.surveyForm.value);
  }

  onReset()
  {
    alert("Reset Form");
    this.surveyForm.reset();
  }
}
