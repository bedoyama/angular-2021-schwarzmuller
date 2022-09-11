import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Caribbean Chicken', 
              'Pollo asado', 
              'https://www.foodandwine.com/thmb/oir67NBP66GIcb8rexePDB3Fx_g=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg'),
              new Recipe('Mediterranean Pasta', 
              'La pasta', 
              'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg?resize=960,872?quality=90&webp=true&resize=300,272'),
              new Recipe('Avocado Toast',
              'Toasty avocado',
              'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=1.00xw:0.303xh;0,0.322xh&resize=2000:*')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
