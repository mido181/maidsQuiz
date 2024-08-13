import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuaryParamService {

  constructor(private route:ActivatedRoute) { }

  getQuaryParam(QuaryName:string){
   return this.route.queryParamMap.pipe(map(quary=> quary.get(QuaryName)))
  }

}
