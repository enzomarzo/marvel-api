import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class mainCardComponent implements OnInit {
  @ViewChild('card') card: ElementRef<HTMLElement>;
  heroes: Array<Hero> = []
  HeroIsClicked: boolean = false

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.marvelService.createHero(this.heroes)
  }

  public showCard(hero: Hero) {
    this.card.nativeElement.innerHTML = '';

    const divParent = document.createElement('div');
    const divChild = document.createElement('div');
    const img = document.createElement('img');
    img.classList.add('homeImg')

    img.src = hero.thumbnail.path + '.' + hero.thumbnail.extension;

    divChild.appendChild(img);
    divParent.appendChild(divChild);
    this.card.nativeElement.appendChild(divParent);

    divParent.classList.add('char');
    this.marvelService.changeHero(hero)
    this.HeroIsClicked = true
  }
}
