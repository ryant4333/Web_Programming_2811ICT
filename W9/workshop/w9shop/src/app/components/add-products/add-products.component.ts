import { Component, OnInit } from '@angular/core';
import { Products } from '../../products';
import { ProductdataService } from 'src/app/services/productdata.service';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productname:string = "";
  productunits:number=null;
  productid:number=null;
  productobjid:string = "";
  newprod:Products;
  newProductMessage="";
  iderrormsg:string = "This id already exists & New ID is required.";
  iderrormsg2:string="";
  iderrorshow:boolean = false;
  noticeshow:boolean = false;

  constructor(private proddata:ProductdataService) { }

  ngOnInit() {
  }

  addnewProduct(event){
    event.preventDefault();
    if(this.productid ==null){
      this.iderrorshow = !this.iderrorshow;
    }else{
    this.newprod = new Products("",this.productid,this.productname,this.productunits);
    this.proddata.add(this.newprod).subscribe((data)=>{
      console.log(data);
      this.noticeshow = true;
      if(data.err == null){
        this.newProductMessage = data.num + " new product (" + this.productname + ") was added";
      }else{
        this.newProductMessage = data.err;
      }
      
      this.productid = null;
      this.productname="";
      this.productunits = null;
     
    });
  }
}

}
