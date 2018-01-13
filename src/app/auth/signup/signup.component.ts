import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public AuthForm: any;
  public username = '';
  public password = '';
  public cpassword = '';
  public lastName = '';
  public firstName = '';
  public email = '';
  public isLoginFocus = false;
  public isPassFocus = false;
  public isLoginError = false;
  public isPassError = false;

  public loginErrorMessage  = '';
  public passErrorMessage  = '';
  public cpassErrorMessage  = '';
  public emailErrorMessage  = '';
  public responseError = '';

  @HostBinding( 'class.form' ) true;
  @HostBinding( 'class.form__error' ) isResponseErros;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public storageService: StorageService
  ) { }

  checkInput () {
    const username = this.AuthForm.get('username');
    const password = this.AuthForm.get('password');
    const cpassword = this.AuthForm.get('cpassword');
    this.isLoginError = false;
    this.isPassError = false;
    this.loginErrorMessage = '';
    this.passErrorMessage = '';

    if (username.hasError('required') && username.touched) {
        this.isLoginError = true;
        // this.loginErrorMessage = this.translateService.instant( 'auth.login.requiredError');
    }

    if (username.hasError('username') && username.value) {
        this.isLoginError = true;
        // this.loginErrorMessage = this.translateService.instant( 'auth.login.invalidError' );
    }

    if (password.hasError('required') && password.touched) {
        this.isPassError = true;
        // this.passErrorMessage = this.translateService.instant( 'password is required' );
    }

    if (password.hasError('minlength')) {
        this.isPassError = true;
        // this.passErrorMessage = this.translateService.instant( 'auth.pass.lengthError' );
    }
  }

  formSubmit( data: any, valid: boolean): void {
    if (!valid) { return; }
    // this.authService.login( data.email, data.pass )
    //     .then(
    //         (d) => {
    //             this.isResponseErros = false;
                // this.router.navigate(['/cabinet']
    //         },(e) => {
    //             this.isResponseErros = true;
    //             this.responseError = JSON.parse(e._body).message;
    //         }
    //     );
  }

  ngOnInit() {
    this.AuthForm = this.fb.group({
        username: [this.username, [ Validators.required, Validators.minLength(3) ]],
        password: [this.password, [ Validators.required, Validators.minLength(6) ]],
        cpassword: [this.password, [ Validators.required, Validators.minLength(6) ]],
        firstName: [this.firstName ],
        lastName: [this.lastName ],
        email: [this.lastName, [ Validators.required, Validators.email ]]
    });
  }

}
