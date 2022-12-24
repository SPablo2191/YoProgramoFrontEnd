import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/Project.interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$! : Observable<Project[]>;
  constructor(private projectsService : ProjectsService) { }

  ngOnInit(): void {
    this.get();
  }
  get(){
    this.projects$ = this.projectsService.get();
  }

}
