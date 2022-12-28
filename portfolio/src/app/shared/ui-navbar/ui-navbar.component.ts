import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.css'],
})
export class UiNavbarComponent implements OnInit {
  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}
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
}
