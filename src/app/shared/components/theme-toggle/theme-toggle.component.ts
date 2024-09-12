import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatSlideToggle, FormsModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  isDarkModeActived = false;
  constructor(@Inject(DOCUMENT) private document: Document){}

  onChange(newValue: boolean): void {
    if (newValue){
      this.document.body.classList.add('light-mode');
    }else{
      this.document.body.classList.remove('light-mode');
    }
  }
}
