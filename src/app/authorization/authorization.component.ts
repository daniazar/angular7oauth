import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OauthService } from '@app/oauth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  code: string;

  constructor(
    private oauthService: OauthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {
        this.code = params['code'];
        console.log(this.code);
        this.oauthService.authtoken = this.code;
        if (this.code === '') {
          this.router.navigate(['']);
        }
        this.oauthService.getLoginForm();

      });
  }
  loadLogin() {
    this.oauthService.getLoginForm();
  }
}
