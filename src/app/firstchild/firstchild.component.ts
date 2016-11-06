import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class FirstchildComponent implements OnInit {
  value;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  callfirst() {
    this.value = 1;
    this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);
  }

callsecond() {
    this.value = 2;
    this.router.navigate(['/second', {outlets: {'secondchild': [this.value]}}]);
  }

}
