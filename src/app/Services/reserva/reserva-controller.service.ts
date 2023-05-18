import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { canchas } from 'src/app/Modelo/canchas';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ReservaControllerService {

  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) { 
    
  }
}
