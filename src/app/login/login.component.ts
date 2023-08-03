import { Component } from '@angular/core';
import { LoginService, UserResponse } from '../services/login.service';
import { SweetAlertService } from '../services/sweet-alert.service';
import { ValidationService } from '../services/validate.service';
import { ResponseBody } from '../models/config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(
    private loginService: LoginService,
    private sweetAlertService: SweetAlertService,
    private validateService: ValidationService
  ) { }

  onLogin() {
    if (this.validateInput()) {
      const payload = { username: this.username, password: this.password };
      this.loginService.login(payload).subscribe((response: ResponseBody) => {
        if (response.status === 201) {
          this.sweetAlertService.success(
            'Hello ' + this.username + '!',
            'This is a SweetAlert2 popup!',
          );
        }
      }, (err) => {
        this.sweetAlertService.error('Error!', err);
      });
    }
  }

  private validateInput(): boolean {
    if (this.validateService.isEmpty(this.username,'Please enter a username.')) {
      return false;
    }
    if (this.validateService.isEmpty(this.password,'Please enter a password.')) {
      return false;
    }
    return true;
  }
}
