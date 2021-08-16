import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss'],
})
export class CharDetailsComponent implements OnInit {
  hero: any = [];
  heroImg: string;
  subscription: Subscription;

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    const hero = this.marvelService.heroClicked;
    this.subscription = hero.subscribe(
      (heroClicked) => (this.hero = Object.create(heroClicked))
    );
    this.heroImg = this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
  }
}
