import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MarvelService {

  timeStamp: string = '1628777330';
  publicKey: string = '8c46191e9459f84e995791bd153041a6';
  md5: string = '8dbd7472538cd5e8eecec000c2933513';
  url: string = `http://gateway.marvel.com/v1/public/characters?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.md5}`;

  private getHero = new BehaviorSubject({});
  heroClicked = this.getHero.asObservable();

  constructor(private http: HttpClient) {}

  public getMarvelHeroes(): Observable<any> {
    return this.http.get(this.url);
  }

  public createHero(heroes: Array<Hero>) {
    this.getMarvelHeroes().subscribe((res) => {
      const data = res.data.results;
      data.map((res: any) => {
        const heroImg = res.thumbnail.path
        if(heroImg.substr(heroImg.length-19, 19) != "image_not_available")
        heroes.push(res)
      });
    });
  }

  public changeHero(hero: Hero) {
    this.getHero.next(hero)
  }

}
