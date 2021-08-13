import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('hero') hero: ElementRef<HTMLElement>

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.listMarvelHeroes();
  }

  listMarvelHeroes() {
    this.marvelService.listMarvelHeroes().subscribe(res => {
      const data = res.data.results;

      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const charImg = element.thumbnail.path + '.' + element.thumbnail.extension
        const charName = element.name;

        this.CreateHero(charImg, charName, this.hero)
      }
    }, err => {
      console.log('error fetching Marvel Heroes', err)
    })


  }
  public CreateHero(charImg:string, charName: string, div: ElementRef) {
    const divParent = document.createElement('div')
    const divChild = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = charName
    img.src = charImg

    divChild.appendChild(img)
    divChild.appendChild(textName)
    divParent.appendChild(divChild)
    div.nativeElement.appendChild(divParent)

    divParent.classList.add('char')
  }
}
