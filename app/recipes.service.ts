import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

recipes: any[] = [
  {
    id:1,
    recipe_name:'Pav Bhaji',
    recipe_time:'30 Min',
    recipe_ingredients:'onion, ginger-garlic paste, tomatoes,bread',
    recipe_details:'Pav bhaji is an iconic dish from Mumbai and hugely popular all over India as a street food. It first originated in Mumbai as a quick lunch option for textile mill workers.',
    recipe_image:'./../assets/images/pavbhaji.jpg'
  },
  {
    id:2,
    recipe_name:'Samosa',
    recipe_time:'30 Min',
    recipe_details:'Our personal favorite is and will always be a Punjabi samosa which is what this recipe is all about. The classic potato and green peas stuffing in this recipe is adapted from my cooking school notes.',
    recipe_ingredients:' maida,potatoes and peas.',
    recipe_image:'./../assets/images/samosa.jpg'
  },
  {
    id:3,
    recipe_name:'Panner Tikka',
    recipe_time:'45 Min',
    recipe_details:'Paneer Tikka is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
    recipe_ingredients:'Panner,mariande,veggies,oil',
    recipe_image:'./../assets/images/pannertikka.jpg'
  },
  {
    id:4,
    recipe_name:'Burger',
    recipe_time:'20 Min',
    recipe_details:'a sandwich consisting of one or more cooked patties, placed inside a sliced bread roll or bun roll',
    recipe_ingredients:' bun,beans, chickpeas, lentils, tofu, tempeh, quinoa and a mix of different vegetables',
    recipe_image:'./../assets/images/burger.jpg'
  },
  {
    id:5  ,
    recipe_name:'Spring Roll',
    recipe_time:'40 Min',
    recipe_details:'Spring rolls are called so as they were made during the spring season and also for the Spring Festival in China. They are made with some of the fresh vegetables that appear during the spring season. ',
    recipe_ingredients:'Noodles,chilli sauce,garlic sauce,maida',
    recipe_image:'./../assets/images/springroll.jpg'
  },
];

getrecipes():any[]{
  return this.recipes;
}

  constructor() { }

}
