import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
              'Test', 
              'https://www.foodandwine.com/thmb/oir67NBP66GIcb8rexePDB3Fx_g=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
