import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MarvelService {

  timeStamp: string = '1628777330'
  publicKey: string = '8c46191e9459f84e995791bd153041a6'
  md5: string = '8dbd7472538cd5e8eecec000c2933513'
  url: string =  `http://gateway.marvel.com/v1/public/characters?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.md5}`

  constructor(private http: HttpClient) { }

  public listMarvelHeroes(): Observable<any> {
    return this.http.get(this.url)
  }

/*   public CreateHero(charImg: string, charName: string, div: ElementRef) {
    const divParent = document.createElement('div');
    const divChild = document.createElement('div');
    const textName = document.createElement('text');
    const img = document.createElement('img');

    textName.textContent = charName;
    img.src = charImg;

    divChild.appendChild(img);
    divChild.appendChild(textName);
    divParent.appendChild(divChild);
    div.nativeElement.appendChild(divParent);
    console.log(div)

    divParent.classList.add('char');
  } */
}
