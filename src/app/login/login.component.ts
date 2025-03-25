import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isSubmitted: boolean = false
  userForm!: FormGroup
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder)
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength(8)]],
    })
  }
  submit() {
    this.isSubmitted = true
    if (this.userForm.valid) {
      this.router.navigate(['/log-in']); // Navigate programmatically
    }
    return this.userForm
  }

}
