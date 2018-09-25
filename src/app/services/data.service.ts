import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class DataService {
  private url: string = "https://sistemasw.com.ar/smf.v2/dataServer/api/";
  private cachedData;

  constructor( private http: HttpClient ) { }

  getData(){
    if (this.cachedData) {
      console.log("returning cached data !")
      return of(this.cachedData);
    }
    else {
      console.log("no cached data, making http call !")

      const headers = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Accept', 'application/json')

      return this.http.get<any>(
                    this.url + 'values',
                    { headers: headers }
                  ).pipe( 
                    tap( data => this.cachedData = data )
                  );

    }
  }

}
