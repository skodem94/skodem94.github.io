import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ISkill } from './skills';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class SkillsService {

  private _url: string = "assets/skills.json";

  constructor(private http:HttpClient) { }

      getSkills(): Observable<any>{
        return this.http.get<any>(this._url)
                        .catch(this.errorHandler);
      }

      getSkill(): Observable<any>{
        return this.http.get<any>(this._url)
                        .catch(this.errorHandler);
      }
   
      errorHandler(error: HttpErrorResponse){
          return Observable.throw(error.message || "Server Error");
          
      }
      
}
