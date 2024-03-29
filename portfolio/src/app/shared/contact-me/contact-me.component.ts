import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent extends abstractForm implements OnInit {
  constructor(
    private fb: FormBuilder,
    ref: DynamicDialogRef,
    messageService: MessageService,
    userService: UserService
  ) {
    super(ref,messageService, userService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: [],
      message: [],
    });
  }
}
