import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private http: HttpClient) { }

  //http email
  httpGet(url:any) {return this.http.get(url);}
  httpPost(url:any, {}) {return this.http.post(url, { name: "send mail" });}
  sendEmail(url:any, data:any) {return this.http.post(url, data);}
}
