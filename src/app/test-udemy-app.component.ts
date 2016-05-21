import { Component } from '@angular/core';
import { CoursesComponent } from './course.component'
import { AuthorComponent } from './author.component'

@Component({
  moduleId: module.id,
  selector: 'test-udemy-app-app',
  template: `
  <h1>Welcome!</h1>
  <courses></courses>
  <authors></authors>
  `,
  styleUrls: ['test-udemy-app.component.css'],
  directives: [CoursesComponent, AuthorComponent]
})
export class TestUdemyAppAppComponent {
  title: "test-udemy-app works!"
}
