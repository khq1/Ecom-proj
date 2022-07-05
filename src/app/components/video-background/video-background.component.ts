import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.sass'],
})
export class VideoBackgroundComponent implements OnInit {
  @Input()
  title!: string;
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
