import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
    public str : string = "Hello Child";

    //implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
    constructor()
    {}

    // ngOnInit(): void 
    // { console.log(" Inside ngOnInit ..."); }

    // ngOnChanges()
    // { console.log(" Inside ngOnChanges ..."); }
  
    // ngDoCheck()
    // { console.log(" Inside ngDoCheck ...");  }
  
    // ngOnDestroy()
    // { console.log(" Inside  ngOnDestroy ...");  }
  
    // ngAfterContentInit()
    // { console.log(" Inside ngAfterContentInit ...");  }
  
    // ngAfterContentChecked()
    // { console.log(" Inside ngAfterContentChecked ...");  }
  
    // ngAfterViewInit()
    // { console.log(" Inside ngAfterViewInit ...");  }
  
    // ngAfterViewChecked()
    // { console.log(" Inside ngAfterViewChecked ...");  }
}
