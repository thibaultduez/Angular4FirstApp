import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = '';
  resetUserName = false;

  constructor() { }

  ngOnInit() {
  }

  onUpdateUserName(event: Event) {
    // if ((<HTMLInputElement>event.target).value.length > 0) {
    //   this.resetUserName = true;
    // } else {
    //   this.resetUserName = false;
    // }
    // OR
    this.resetUserName = ((<HTMLInputElement>event.target).value !== '');
  }
  onResetUserName() {
    this.userName = '';
    this.resetUserName = false;
  }

}
