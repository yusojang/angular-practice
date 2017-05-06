import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../Hero';
import { Hero}

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

@Input()
hero:Hero;

  constructor(
    private _heroService : HeroService,


  ) { }

  ngOnInit() {
  }

}
