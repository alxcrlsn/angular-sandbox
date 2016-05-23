import { Component } from '@angular/core';
import { CoursesComponent } from './course.component';
import { AuthorComponent } from './author.component';
import { FavoriteComponent } from './favorite.component';

@Component({
  moduleId: module.id,
  selector: 'test-udemy-app-app',
  template: `
  <h1>Welcome!</h1>
  <favorite></favorite>
  <courses></courses>
  <authors></authors>
  `,
  styleUrls: ['test-udemy-app.component.css'],
  directives: [CoursesComponent, AuthorComponent, FavoriteComponent]
})
export class TestUdemyAppAppComponent {
  title: "test-udemy-app works!";
  onDivClick($event) {
    console.log("Div Clicked!", $event)
  }
  onClick($event) {
    //$event.stopPropagation();
    console.log("Button Clicked!", $event);
  }
}
