import {Component} from '@angular/core';

@Component ({
  selector: 'favorite',
  template: `
  <span>Favorite:</span>
  <span class= "glyphicon"
  [class.glyphicon-star-empty]="!isFavorite"
  [class.glyphicon-star]="isFavorite"
  (click)=onClick()>
  </span>
  `

})

export class FavoriteComponent {
  isFavorite = false;
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

/*
Other way to accomplish this is to avoid class binding, and set a variable string to name of correct icon.
On click event, if statement switches the value for icon, which switches the star on or off.
 */
  //icon = "glyphicon-star-empty"
  // <!--<span class="glyphicon {{icon}}" (click)="onClick()"></span>-->
  // onClick(){
  //   if (this.icon == "glyphicon-star-empty") {
  //     this.icon = "glyphicon-star";
  //   } else {
  //     this.icon = "glyphicon-star-empty";
  //   }
  // }
}







