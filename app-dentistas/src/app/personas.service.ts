import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  constructor(private http:HttpClient) { }

  // getPersonas():any {
  //   const request$ = new Observable(observer => {
  //     const request = new XMLHttpRequest();
  //     const url = "http://localhost:3006/personas";
  //     request.addEventListener("load", () => {
  //       if (request.readyState === 4 && request.status === 200) {
  //         observer.next(JSON.parse(request.responseText));
  //         observer.complete();
  //       } 
  //       else {
  //         observer.error('An error has occured');
  //       }
  //     });
  //     request.open("GET", url);
  //     request.send();
  //   });

    // let personas:Person[] = [
    //   { ID: 1, nombre: 'Ricardo', apellido: 'Orozco', ciudad: 'Guadalajara', moneda: 1000},
    //   { ID: 2, nombre: 'Jair', apellido: 'Alvarez', ciudad: 'Zapopan', moneda: 2000},
    //   { ID: 3, nombre: 'Orozco', apellido: 'Ruiz', ciudad: 'Tijuana', moneda: 2000},
    //   { ID: 4, nombre: 'Alvarez', apellido: 'Alarcon', ciudad: 'Sahuayo', moneda: 2000}
    //   ];

    //return personas;

    getPersonas():Observable<Person[]> {
      return this.http.get<Person[]>('http://localhost:3006/personas')
    }
  }
