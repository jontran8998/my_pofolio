import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {
  @Input() mdPath : string
  constructor() { }

  ngOnInit(): void {
  }

}
