import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Hulk';
  }

  changeAge(): void {
    this.age = 100;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age=45;
  }

}
