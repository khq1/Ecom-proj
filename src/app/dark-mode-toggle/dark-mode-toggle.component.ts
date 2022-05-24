import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.sass']
})
export class DarkModeToggleComponent implements OnInit {
  darkMode$ = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }


}