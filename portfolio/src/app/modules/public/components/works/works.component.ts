import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Work } from 'src/app/models/Work.interface';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works$! : Observable<Work[]>;
  constructor(private worksService : WorksService) { }

  ngOnInit(): void {
    this.works$ = this.worksService.get();
  }

}
