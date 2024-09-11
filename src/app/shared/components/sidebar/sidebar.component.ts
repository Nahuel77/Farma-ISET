import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import LoginComponent from "../../../business/authentication/login/login.component";



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule, MatIcon, MatDividerModule, MatButtonModule, LoginComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
