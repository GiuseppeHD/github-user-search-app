import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent implements OnInit {
  @Input() theme: string | null = 'light-theme';
  constructor() {}

  ngOnInit(): void {}
}
