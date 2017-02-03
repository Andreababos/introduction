import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { appService } from '../app.service';
import { Songs } from '../songs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  song: Songs[];
  constructor(private appService: appService,
              private route: ActivatedRoute,
              private location: Location) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.load(params['id'])
    });
  }
  public load(id) {
    this.appService.getSong(id).subscribe(
        data => this.song = data
    );
  }
  goBack(): void {
    this.location.back();
  }
}