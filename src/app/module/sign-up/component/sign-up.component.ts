import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../services/alert.service';
import { UserFormService } from '../../user/service/user-form.service';

@Component({
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserFormService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop disini jika form invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.doRegister(this.registerForm.value)
      .pipe(first())
      .subscribe(data => {
        this.alertService.success('Registrasi sukses', true);
        this.router.navigate(['/login]']);
      },
        error1 => {
        this.alertService.error(error1);
        this.loading = false;
        });
  }

}
