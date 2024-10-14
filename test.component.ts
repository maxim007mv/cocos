import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
  template: `
  <div [innerHTML]="trustedHtml"></div>

<a [href]="trustedUrl">Safe Link</a>
`
})
export class TestComponent {
  isArticleVisible: boolean = false;

  toggleArticle() {
    this.isArticleVisible = !this.isArticleVisible;
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





