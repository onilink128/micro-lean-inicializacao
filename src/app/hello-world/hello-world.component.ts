import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.sass']
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
