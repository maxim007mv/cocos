import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { State15Component } from '../state15/state15.component';
@Component({
  selector: 'app-state',
  standalone: true,
  imports: [],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
      event.preventDefault();
  }
 
  constructor(private router: Router) {}

  goToOtherComponent() {
    this.router.navigate(['/your-other-component']);
  }

}








const routes: Routes = [
  // ... other routes ...
  { path: 'state15', component: State15Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }