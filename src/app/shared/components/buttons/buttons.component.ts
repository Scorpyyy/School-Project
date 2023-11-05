import { Component } from '@angular/core';

import { type Link } from 'src/app/shared/types/shared-types';

@Component({
  selector: 'shared-buttons',
  templateUrl: './buttons.component.html',
  styles: [],
})
export class ButtonsComponent {
  public links: Link[] = [
    {
      alt: 'Curriculum',
      href: 'http://scorpyzx.net/',
      img: './assets/logotypes/link.svg',
      styles: 'bg-custom-200 hover:bg-custom-700',
      text: 'Curriculum',
    },
    {
      alt: 'GitHub',
      href: 'https://github.com/Scorpyyy',
      img: './assets/logotypes/github.svg',
      styles: 'bg-gray-700 [&>img]:invert hover:bg-gray-800',
      text: 'GitHub',
    },
  ];
}
