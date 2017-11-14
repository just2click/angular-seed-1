import { Component, OnInit } from '@angular/core';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'cards-page',  // <home></home>

  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './cards.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './cards.component.html',
  host: {
    'class': 'page'
  }
})
export class CardsComponent implements OnInit {
  ngOnInit() {
    // this.title.getData().subscribe(data => this.data = data);
  }
}
