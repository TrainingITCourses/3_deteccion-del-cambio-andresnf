import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-search-presenter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-presenter.component.html',
  styleUrls: ['./search-presenter.component.css']
})
export class SearchPresenterComponent implements OnInit {

  @Input() public searchItem: any = null;
  @Output() public searchButton = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public searchButtonClicked = () => {this.searchButton.next(); };

}
