import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }
  public name = "Sree Kodem";
  public summary = "I am Web Developer with good analytical thinking, problem-solving skills, and a quick learner. I am passionate about designing and learning new technologies.";
  ngOnInit() {
  }

}
