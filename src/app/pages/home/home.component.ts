import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('homeHeroeImg') hero: ElementRef<HTMLElement>;
  @ViewChild('card') card: ElementRef<HTMLElement>;
  heroesName: Array<string> = [];
  heroesImg: Array<string> = [];
  heroes: Array<Hero> = []

  constructor(private marvelService: MarvelService) {}

  ngOnInit() {
    this.heroesThumbnail()
    console.log(this.heroes)
  }

  public heroesThumbnail() {
    this.marvelService.listMarvelHeroes().subscribe(
      (res) => {
        const data = res.data.results;
        data.map((res: any) => this.heroes.push(res))

        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          this.heroesImg.push(element.thumbnail.path + '.' + element.thumbnail.extension);
          this.heroesName.push(element.name);
        }
      },
      (err) => {
        console.log('error fetching Marvel Heroes', err);
      }
    );
  }

  public showCard(hero: Hero) {

    this.card.nativeElement.innerHTML = ''

    const divParent = document.createElement('div');
    const divChild = document.createElement('div');
    const img = document.createElement('img');

    img.src = hero.thumbnail.path + '.' + hero.thumbnail.extension;

    divChild.appendChild(img);
    divParent.appendChild(divChild);
    this.card.nativeElement.appendChild(divParent)

    divParent.classList.add('char');
  }

}
