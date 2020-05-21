import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  title = 'portfolio';

  constructor(
  ) { }


  ngAfterViewInit() {
    $.getScript('assets/wf/js/webflow.js', function(){});
  }
}
