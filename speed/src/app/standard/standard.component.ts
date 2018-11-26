import { Component, Output, EventEmitter, Input, ChangeDetectorRef, OnChanges,
  SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-standard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnChanges {

  @Input() public appTitle: string;
  @Output() public getStatus = new EventEmitter();
  @Output() public getAgencies = new EventEmitter();
  @Output() public getTypes = new EventEmitter();

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChangesStandard: ' + changes);
  }

  public getStatusClicked = () => {this.getStatus.next(); this.cdRef.detectChanges(); };
  public getAgenciesClicked = () => {this.getAgencies.next(); this.cdRef.detectChanges(); };
  public getTypesClicked = () => {this.getTypes.next(); this.cdRef.detectChanges(); };
}
