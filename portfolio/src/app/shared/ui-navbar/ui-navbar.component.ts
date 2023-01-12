import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map, Subscription } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { User } from 'src/app/models/User.interface';
import { AuthService } from 'src/app/services/auth.service';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.css'],
})
export class UiNavbarComponent implements OnInit, OnDestroy {
  subscriptions$: Subscription = new Subscription();
  isLogged!: boolean;
  ref!: DynamicDialogRef;
  constructor(
    public dialogService: DialogService,
    protected authService: AuthService
  ) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions$.add(
      this.authService
        .getUserSession()
        .pipe(
          map((response) => {
            this.isLogged = response.authToken ? true : false;
          })
        )
        .subscribe()
    );
  }
  showContactDialog() {
    this.ref = this.dialogService.open(ContactMeComponent, {
      header: 'Contáctame',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
  }
  showLogin() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Iniciar Sesión',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
    });
  }
  logOut() {
    sessionStorage.clear();
    this.authService.setUserSession({} as User);
  }
}
