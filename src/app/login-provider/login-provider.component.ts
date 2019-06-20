import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OauthService } from '@app/oauth.service';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  constructor(
    private router: Router,
    private oauthService: OauthService

  ) { }

  ngOnInit() {
  }

  f5Login() {
    this.oauthService.getAuthorizationToken(this.oauthService.f5);
  }

loadDribble() {
  this.oauthService.getAuthorizationToken(this.oauthService.dribble);
}

}
