import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  isSubmitted: boolean = false
  userForm!: FormGroup
  router: Router = inject(Router);
  formBuilder: FormBuilder = inject(FormBuilder)
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength]],
    })
  }
  submit() {
    this.isSubmitted = true
    if (this.userForm.valid) {
      this.router.navigate(['/log-in']);
    }
    return this.userForm
  }


}
