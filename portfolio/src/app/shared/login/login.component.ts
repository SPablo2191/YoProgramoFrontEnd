import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent extends abstractForm implements OnInit {
  constructor(private fb: FormBuilder, messageService: MessageService,  userService : UserService) {
    super(messageService, userService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userName: [],
      password: [],
    });
  }
}
