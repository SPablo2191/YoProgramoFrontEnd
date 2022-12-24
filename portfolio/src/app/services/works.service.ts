import { Injectable } from '@angular/core';
import { baseService } from '../core/services/base.service';
import { Work } from '../models/Work.interface';

@Injectable({
  providedIn: 'root'
})
export class WorksService extends baseService {
  constructor() {
    super();
    this.items = [
      {
        idWork : 1,
        businessName : "Siltium",
        releaseDate : new Date(),
        role : 'Web Developer',
        source : ''
      } as Work,
      {
        idWork : 1,
        businessName : "Siltium",
        releaseDate : new Date(),
        role : 'Web Developer',
        source : ''
      } as Work,
      {
        idWork : 1,
        businessName : "Siltium",
        releaseDate : new Date(),
        role : 'Web Developer',
        source : ''
      } as Work
    ];
  }
}
