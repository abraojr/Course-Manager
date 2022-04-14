import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
  providedIn: "root"
})
export class CourseService {

  retrieveAll(): Course[] {
    return COURSES;
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: "Angular: CLI",
    releaseDate: "November 2, 2019",
    description: "In this course, students will gain a great deal of knowledge in the main features of the CLI.",
    duration: 120,
    code: "XLF-1212",
    rating: 3,
    price: 12.99,
    imageUrl: "/assets/images/cli.png",
  },
  {
    id: 2,
    name: "Angular: Forms",
    releaseDate: "November 4, 2019",
    description: "In this course, students will gain in-depth knowledge about the features available in the Forms module.",
    duration: 80,
    code: "DWQ-3412",
    rating: 3.5,
    price: 24.99,
    imageUrl: "/assets/images/forms.png",
  },
  {
    id: 3,
    name: "Angular: HTTP",
    releaseDate: "November 8, 2019",
    description: "In this course, students will gain in-depth knowledge about the features available in the HTTP module.",
    duration: 80,
    code: "QPL-0913",
    rating: 4.0,
    price: 36.99,
    imageUrl: "/assets/images/http.png",
  },
  {
    id: 4,
    name: "Angular: Router",
    releaseDate: "November 16, 2019",
    description: "In this course, students will gain in-depth knowledge about the features available in the Router module.",
    duration: 80,
    code: "OHP-1095",
    rating: 4.5,
    price: 46.99,
    imageUrl: "/assets/images/router.png",
  },
  {
    id: 5,
    name: "Angular: Animations",
    releaseDate: "November 25, 2019",
    description: "In this course, students will gain in-depth knowledge about the resources available on Animation.",
    duration: 80,
    code: "PWY-9381",
    rating: 5,
    price: 56.99,
    imageUrl: "/assets/images/animations.png",
  }
];
