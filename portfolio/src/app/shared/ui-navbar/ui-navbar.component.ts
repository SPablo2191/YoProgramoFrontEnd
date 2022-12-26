import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactMeComponent } from '../contact-me/contact-me.component';

@Component({
  selector: 'app-ui-navbar',
  templateUrl: './ui-navbar.component.html',
  styleUrls: ['./ui-navbar.component.css']
})
export class UiNavbarComponent implements OnInit {
  ref!: DynamicDialogRef;
  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
  }
  showContactDialog(){
    this.ref = this.dialogService.open(ContactMeComponent, {
      header: 'Contáctame',
      width: '50%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true
  });
  }
}
