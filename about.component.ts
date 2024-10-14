import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  template: `
  <div [innerHTML]="trustedHtml"></div>

<a [href]="trustedUrl">Safe Link</a>
`
})
export class AboutComponent {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
      event.preventDefault();
  }
  showInfo: boolean = false;

  toggleInfo() {
      this.showInfo = !this.showInfo;
  }
  untrustedHtml = '<script>alert("XSS attack!")</script>';
  trustedHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.untrustedHtml);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.untrustedUrl);
  }

  untrustedUrl = 'javascript:alert("XSS attack!")';
  trustedUrl: SafeUrl;

}

