import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    public name = ["DAIMLER TRUCK DATA VISUALIZATION", "ANALYSIS OF GLOBAL TERRORISM DATABASE","VIDEO GAME SALES ANALYSIS", "ROAD ACCIDENTS ANALYSIS", "FLIGHT DATA VISUALISATION"];
    public url = ["https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/DaimlerTruckVisualization/Dashboard1", "https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/GlobalTerrorismDatabase_3/Dashboard1","https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/VideoGameSalesAnalysis_1/Videogameanalysis","https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/RoadAccidents_6/Dashboard1","https://public.tableau.com/profile/sree.gouri.varshini.kodem#!/vizhome/FlightDelayVisualization_1/Dashboard1"]
    public image = ["/assets/images/daimler.PNG","/assets/images/global.PNG","/assets/images/videogame.PNG","/assets/images/roadaccidents.PNG","/assets/images/flightdelay.PNG"];
    constructor() { }

  ngOnInit() {
  }

}
