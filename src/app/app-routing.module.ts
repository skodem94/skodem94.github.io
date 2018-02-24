import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  { path: 'Aboutme',component: AboutmeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'skills',component: SkillsComponent },
   { path: 'education', component: EducationComponent },
   { path: 'projects', component: ProjectsComponent },
   { path: 'work', component: WorkComponent},
   { path: 'footer', component: FooterComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [AboutmeComponent, HeaderComponent, SkillsComponent, EducationComponent, FooterComponent,WorkComponent, ProjectsComponent];
