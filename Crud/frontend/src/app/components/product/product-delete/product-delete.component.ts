import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private router :Router,
    private route: ActivatedRoute
    ) { }

  product:Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ProductService.readById(id).subscribe(product=>{
      this.product = product
    })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }
  deleteProduct():void{
   this.ProductService.deletar(`${this.product.id}`).subscribe(()=>{
    this.ProductService.showMenssage('Produto excluido com sucesso!')
    this.router.navigate(['/products'])
   })
  }
  
}
