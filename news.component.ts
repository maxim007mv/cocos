import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
      event.preventDefault();
  }
}
