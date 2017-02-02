import { Component,  OnInit  } from '@angular/core';
import { appService } from './app.service';
import { Songs } from './songs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent implements OnInit {
  public songs : Songs[] = [];
  public search:string;

  constructor(private appService: appService) { }
  public searchSong(){
    this.search;
  }
ngOnInit(){
  this.appService.getData(this.search).subscribe(
      data => {this.songs = data, console.log(this.search)},
  );
}

}