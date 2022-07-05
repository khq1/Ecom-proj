import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
@Input()
  title!:string;
  darkMode$ = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
 

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
