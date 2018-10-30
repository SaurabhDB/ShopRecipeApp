import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
new Recipe('Mexican Chicken Soup', 'Mexican chicken tortilla soup' , 'http://cdn.recipes100.com/v/3d71d60ce0e34b774f9cce09c10db85d.jpg'),
new Recipe('Chicken Chilli', 'Chicken chilli' , 'https://i.ytimg.com/vi/DtvDRWzcaj8/hqdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
