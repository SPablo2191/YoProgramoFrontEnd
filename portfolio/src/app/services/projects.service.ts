import { Injectable } from '@angular/core';
import { baseService } from '../core/services/base.service';
import { Project } from '../models/Project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService extends baseService {
  constructor() {
    super();
    this.items = [
      {
        idProject: 1,
        description:
          'Página web diseñada en Angular para el cine "Cinemar".Proyecto diseñado para el curso "Mil Programadores 2022 - Python"',
        title: 'Cinemar Web',
        releaseDate: new Date(),
        source: 'https://cinemar.vercel.app/',
      } as Project,
      {
        idProject: 1,
        description:
          'Página web diseñada en Angular para el cine "Cinemar".Proyecto diseñado para el curso "Mil Programadores 2022 - Python"',
        title: 'Cinemar Web',
        releaseDate: new Date(),
        source: 'https://cinemar.vercel.app/',
      } as Project,
      {
        idProject: 1,
        description:
          'Página web diseñada en Angular para el cine "Cinemar".Proyecto diseñado para el curso "Mil Programadores 2022 - Python"',
        title: 'Cinemar Web',
        releaseDate: new Date(),
        source: 'https://cinemar.vercel.app/',
      } as Project,
      {
        idProject: 2,
        description: `API REST desarrollada en Python empleando el "micro-framework" Flask.
        Proyecto desarrollado para el curso "Mil Programadores 2022 - Python"`,
        title: 'Cinemar API',
        releaseDate: new Date(),
        source: 'https://cinemar.vercel.app/',
      } as Project,
    ];
  }
}
