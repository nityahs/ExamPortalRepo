import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private authService: AuthService
  ) {}

  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]]
    })
  }

  submitForm(): void {
    this.authService.register(this.validateForm.value).subscribe({
      next: (res) => {
        console.log('Signup Successful:', res); // Logs the user data
        this.message.success('Signup Successful!', { nzDuration: 5000 });
        this.router.navigateByUrl('/login');
      },
      error: (error) => {
        console.log('Signup Error:', error);
        this.message.error(error.error?.message || 'Signup failed.', { nzDuration: 5000 });
      }
    });
  
  
  
}
 
}