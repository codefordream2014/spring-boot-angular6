import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  githubapi: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getGithubUser();
    //this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }

  getGithubUser(): void{
    this.heroService.getGithubUser().subscribe(apis => this.githubapi = apis);
  }
}
