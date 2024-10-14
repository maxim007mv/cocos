import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  template: `
  <div [innerHTML]="trustedHtml"></div>

<a [href]="trustedUrl">Safe Link</a>
`
})
export class HomeComponent {
toggleAccordion(_t178: any) {
throw new Error('Method not implemented.');
}
navigateTo: any;
@HostListener('contextmenu', ['$event'])
onRightClick(event: MouseEvent) {
    event.preventDefault();
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




