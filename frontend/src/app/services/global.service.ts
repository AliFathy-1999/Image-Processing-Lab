import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {



  constructor(private http:HttpClient) {

  }
  public year:any = new Date().getFullYear();
  ResizeImage(obj:any):Observable<any>{
    return this.http.post('http://localhost:2255/ResizeImage',obj)
  }
  RotateImage(obj:any):Observable<any>{
    return this.http.post('http://localhost:2255/RotateImage',obj)
  }
  BackgroundRemover(obj:any):Observable<any>{
    return this.http.post('http://localhost:2255/ImageTrans',obj)
  }
}
