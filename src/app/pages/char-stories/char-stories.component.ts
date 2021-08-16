import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-char-stories',
  templateUrl: './char-stories.component.html',
  styleUrls: ['./char-stories.component.scss']
})
export class CharStoriesComponent implements OnInit {
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
    console.log(this.hero)
  }

}
