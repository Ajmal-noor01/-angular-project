import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, RouterLink, LoginComponent, RouterLinkActive, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  router: Router = inject(Router);
  userForm!: FormGroup
  formBuilder: FormBuilder = inject(FormBuilder)
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength]],
    })
  }
  isSubmitted: boolean = false
  submit() {

    console.log();
    this.isSubmitted = true

    console.log(this.userForm)
    if (this.userForm.valid) {
      console.log('Form is valid:', this.userForm.value);
      this.router.navigate(['/log-in']); // Navigate programmatically
    } else {
      console.log('Form is invalid:', this.userForm);
    }
  }


}
