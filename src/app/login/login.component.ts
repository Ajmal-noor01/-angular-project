import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router: Router = inject(Router);
  userForm!: FormGroup
  formBuilder: FormBuilder = inject(FormBuilder)
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      // name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.maxLength(8)]],
    })
  }
  isSubmitted: boolean = false
  submit() {

    console.log();
    this.isSubmitted = true

    console.log(this.userForm)
    if (this.userForm.valid) {
      console.log('Form is valid:', this.userForm.value);

      console.log(this.router.navigate(["/home"]));
      alert("Login Successfull")

    } else {
      console.log('Form is invalid:', this.userForm);
    }
  }

}
