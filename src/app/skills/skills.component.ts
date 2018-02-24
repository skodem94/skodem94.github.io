import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

 
  public skills = [];
  public skill =[];
  public desc = [];
  public errorMsg;
  constructor(private _skillService: SkillsService) { }

  ngOnInit() {
    this._skillService.getSkills()
        .subscribe(data => this.skills = data.skills, 
                   error => this.errorMsg = error);

    this._skillService.getSkill()
        .subscribe(data => this.skill = data.skills.skill,
                  data => this.desc = data.skills.desc);
  }


}
