import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from 'src/app/models/Study.interface';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  studies$! : Observable<Study[]>;
  constructor(private studiesService : StudiesService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.studies$ = this.studiesService.get();
  }
}
