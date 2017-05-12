import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit {



  constructor(private productService: ProductService) {}

  getProductData() {
    this.productService.getProductData()
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

}
