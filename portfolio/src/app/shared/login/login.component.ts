import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { abstractForm } from 'src/app/core/classes/abstract-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends abstractForm implements OnInit {

  constructor(private fb : FormBuilder, messageService: MessageService) { 
    super(messageService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userName : [],
      password : []
    });
  }

}
