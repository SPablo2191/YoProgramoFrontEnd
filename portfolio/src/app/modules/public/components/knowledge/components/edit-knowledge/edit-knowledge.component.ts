import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { colors } from 'src/app/consts/color.const';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-edit-knowledge',
  templateUrl: './edit-knowledge.component.html',
  styleUrls: ['./edit-knowledge.component.css'],
})
export class EditKnowledgeComponent extends abstractForm implements OnInit {
  public colors = colors;
  override title: string ='Conocimiento';
  constructor(
    private fb : FormBuilder,
    ref: DynamicDialogRef,
    messageService: MessageService,
    knowledgeService: KnowledgeService
  ) {
    super(ref,messageService,knowledgeService);
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name : [],
      value : [],
      color : []
    })
  }
}
