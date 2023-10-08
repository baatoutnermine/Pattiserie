import { Component, OnInit } from '@angular/core';
import { SweetsService } from '../service/sweets.service';
import { Sweets } from 'src/sweets';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Categorie } from 'src/categorie';

@Component({
  selector: 'app-tab-sweets',
  templateUrl: './tab-sweets.component.html',
  styleUrls: ['./tab-sweets.component.css']
})


export class TabSweetsComponent  implements OnInit {
  produit:Sweets[]=[];
  mesProduitf:Sweets[]=[];
  product = new Sweets()
  categorie:Categorie[]=[];


   constructor( private service :SweetsService , private router:Router){}
   public getAllSweets()
  { this.service. getSweets().subscribe(data=>{
    this.produit=data;
    console.log(this.produit)
    this.mesProduitf=data;
    console.log(this.mesProduitf)
  })

  }
public AllCategorie(){
  this.service.getCategorie().subscribe(data=>{
    this.categorie=data
    console.log(this.categorie)
  })
}

  ngOnInit(): void {
this.getAllSweets()
this.AllCategorie()
  }



  onFileChange(event:any) {
    if (event.target.files.length > 0) {
      this.product.image = event.target.files[0];
    }

  }

  addProduct(productForm: NgForm) {
    // if (!this.file) {
    //   console.error('No image selected.');
    //   return;
    // }
    const formData = new FormData();
    formData.append('name', this.product.title);
    formData.append('description', this.product.description);
    formData.append('img', this.product.image);
    formData.append('price', this.product.prix.toString());

    formData.append('tags', this.product.tags);
    formData.append('gouts', this.product.gouts);
    console.log(productForm.value)
    this.service.addProduct(productForm.value).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
      },
      (error) => {
        console.error('Error adding product:', error);
      });
    }
}
