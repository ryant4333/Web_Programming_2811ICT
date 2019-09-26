import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor(private http:HttpClient) {

   }

   add(product:Products){
     return this.http.post<any>('http://localhost:3000/add', product);
   }
   getlist(){
     return this.http.get<any>('http://localhost:3000/read');
   }
   deleteitem(productID){
     return this.http.post<any>('http://localhost:3000/update', product);
   }
   updateitem(product:Products){
     return this.http.post<any>('http://localhost:3000/update', product);
   }

}
