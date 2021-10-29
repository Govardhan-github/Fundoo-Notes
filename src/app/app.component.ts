import { Component } from '@angular/core';
import {UserService} from '../app/Services/UserService/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fundoo-Notes';
  constructor(private user:UserService){
  
  }
}
