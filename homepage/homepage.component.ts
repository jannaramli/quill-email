import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  quote = 'Bermula kisah cinta Adam&Hawa'
  bghome:string="assets/images/WhatsApp Image 2021-10-24 at 10.57.38 PM.jpeg"

  constructor(private router:Router) { }

  ngOnInit(): void {}
  
  goRegister(){this.router.navigate(['/register']);};
}
