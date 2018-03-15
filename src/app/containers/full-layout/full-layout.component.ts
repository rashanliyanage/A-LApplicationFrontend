import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }
}
