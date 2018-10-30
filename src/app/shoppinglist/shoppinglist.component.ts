import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
ingredients: Ingredient[] = [
  new Ingredient('chicken', 500),
  new Ingredient('soup', 500),
];
  constructor() { }

  ngOnInit() {
  }

}
