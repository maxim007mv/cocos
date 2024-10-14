import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-state25',
  standalone: true,
  imports: [],
  templateUrl: './state25.component.html',
  styleUrl: './state25.component.css',
  template: `
  <div [innerHTML]="trustedHtml"></div>

<a [href]="trustedUrl">Safe Link</a>
`
})
export class State25Component {
  untrustedHtml = '<script>alert("XSS attack!")</script>';
  trustedHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.untrustedHtml);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.untrustedUrl);
  }

  untrustedUrl = 'javascript:alert("XSS attack!")';
  trustedUrl: SafeUrl;


}
