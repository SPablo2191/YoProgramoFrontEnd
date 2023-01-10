import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {
  protected formGroup!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userName: [],
      password: [],
    });
  }
  submit(): void {
      console.log(this.formGroup.value);

  }
}
