import { Component, OnInit } from '@angular/core';
import { FruitsService } from './fruits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fruit-web';
  fruits: string[];

  constructor(private fruitService: FruitsService) {}

  ngOnInit() {
    this.loadFruits();
  }

  loadFruits() {
    this.fruitService.getFruits().subscribe((res: string[]) => {
      this.fruits = res;
    });
  }
}
