import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';
import { MaindCardComponent } from 'src/app/shared/maind-card/maind-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(MaindCardComponent) MainCard: MaindCardComponent;
  heroes: Array<Hero> = [];
  heroChild: Hero;

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.marvelService.createHero(this.heroes);
  }

  ngAfterInit() {
    this.MainCard.showCard(this.heroChild);
  }
}
