import {Component} from '@angular/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';



@Component({
    template: `
    <h2>Courses!</h2>
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li> 
    </ul>
   `,
    selector: 'courses',
   providers: [CourseService],
   directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "The title of the course module.";
    courses = [];
    constructor(courseService : CourseService) {
        this.courses = courseService.getCourses();
    }
}
