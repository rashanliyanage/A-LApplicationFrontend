import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-hedder.scss'],
})
export class AppHeaderComponent { 

  constructor(
    private router: Router
  ) { }
  logout():void{

   
      localStorage.clear();
      this.router.navigate(['/login']);
      window.location.reload();
    
  }

}
