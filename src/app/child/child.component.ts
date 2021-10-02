import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy} from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked 
{
  @Input() public parentData : string = "";

  constructor() { }

  ngOnInit(): void 
  { console.log(" Inside ngOnInit ..."); }

  ngOnChanges()
  { console.log(" Inside ngOnChanges ..."); }

  ngDoCheck()
  { console.log(" Inside ngDoCheck ...");  }

  ngOnDestroy()
  { console.log(" Inside  ngOnDestroy ...");  }

  ngAfterContentInit()
  { console.log(" Inside ngAfterContentInit ...");  }

  ngAfterContentChecked()
  { console.log(" Inside ngAfterContentChecked ...");  }

  ngAfterViewInit()
  { console.log(" Inside ngAfterViewInit ...");  }

  ngAfterViewChecked()
  { console.log(" Inside ngAfterViewChecked ...");  }

}
