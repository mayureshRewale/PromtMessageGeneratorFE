import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {

  public baseUrl = "http://localhost:8080/prompt/generate-test-prompt";

  constructor(private httpClient : HttpClient) { }

  public restApiGet(message : string) : Observable<any>{
    console.log("URL : " + this.baseUrl + "/" + message);
    return this.httpClient.get(this.baseUrl + "/" + message);
  }
}
