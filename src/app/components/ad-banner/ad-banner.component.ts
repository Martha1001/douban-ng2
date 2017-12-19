import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit {
  @Input() title: string
  
  constructor() { }

  ngOnInit() {
  }

}
