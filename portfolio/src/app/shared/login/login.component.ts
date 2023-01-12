import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Subscription } from 'rxjs';
import { User } from 'src/app/models/User.interface';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  protected formGroup!: FormGroup;
  private suscriptions$: Subscription = new Subscription();
  constructor(
    private ref: DynamicDialogRef,
    private fb: FormBuilder,
    private userService: UserService,
    private auth: AuthService
  ) {}
  ngOnDestroy(): void {
    this.suscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  submit(): void {
    if (this.formGroup.invalid) {
      return;
    }
    let CryptoJS = require('crypto-js');
    let encryptedPassword = CryptoJS.AES.encrypt(
      this.formGroup.get('password')?.value,
      this.formGroup.get('password')?.value
    ).toString();
    let data: User = {
      userName: this.formGroup.get('userName')?.value,
      password: encryptedPassword,
    } as User;
    this.suscriptions$.add(
      this.userService
        .post(data)
        .pipe(
          map((response: any) => {
            if (response.authToken != 'ACCESS_DENIED') {
              let data: User = {
                authToken: response.authToken,
                userName: response.user.userName,
              } as User;
              sessionStorage.setItem('currentUser', JSON.stringify(data));
              this.auth.setUserSession(data);
              this.ref.close();
            }
          })
        )
        .subscribe()
    );
  }
}
