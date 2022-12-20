import { Injectable } from '@angular/core';
import { baseService } from '../core/services/base.service';
import { Study } from '../models/Study.interface';

@Injectable({
  providedIn: 'root',
})
export class StudiesService extends baseService {
  constructor() {
    super();
    this.items = [
      {
        idStudy: 1,
        description: 'Proximo a cursar 5to año',
        title: 'Ingenieria en Informática',
        image: 'assets/images/about-me-picture.jpeg',
      } as Study,
      {
        idStudy: 2,
        description: 'Cursado en la Universidad Catolica de Salta',
        title: 'Tecnico Universitario en Informática',
        image: 'assets/images/about-me-picture.jpeg',
      } as Study,
    ];
  }
}
