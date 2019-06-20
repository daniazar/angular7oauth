import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {OAuthProvider} from '@app/_models';
@Injectable({
  providedIn: 'root'
})
export class OauthService {

  public dribble: OAuthProvider = new OAuthProvider();
  public f5: OAuthProvider = new OAuthProvider();
  public authtoken: string = null;

  constructor(private http: HttpClient) {
    this.dribble.client_id = '710ad2f1170e9c02ff3ac840c3b700616be319efd8edecb7f8f873dc7ca25430';
    this.dribble.client_secret = '1f5e108d31149a09eb5d9621b5e2a7da328a11737c4637ed8397f6adb809f553';
    this.dribble.authorizeUrl = 'https://dribbble.com/oauth/authorize?client_id=';
    this.dribble.authtoken = null;
    this.dribble.tokenUrl = 'https://dribbble.com/oauth/token';

    this.f5.client_id = '1b5b34839dc1e696d14aea00729c005056abc74af8f70b5d';
    this.f5.client_secret = '857d62e0c9f4bdf2b70e3b8c9af9005056abc74aaa44005d';
    this.f5.authorizeUrl = 'https://201.234.38.209/f5-oauth2/v1/authorize?client_id=';
    this.f5.authtoken = null;
    this.f5.tokenUrl = 'https://201.234.38.209/f5-oauth2/v1/token';

  }

  async getAuthorizationToken(provider: OAuthProvider) {
    window.location.href = provider.authorizeUrl + provider.client_id;
  }

  login() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
  }
  // const params = new HttpParams();
  // params.set('client_id', this.client_id);
  // const options = { params: params };
  // const response = await this.http.get(this.authorizeUrl, options);
  async getLoginForm() {
    const params = new HttpParams();
    params.set('client_id', this.dribble.client_id);
    params.set('client_secret', this.dribble.client_secret);
    params.set('scope', '[public]');
    const headers = new HttpHeaders();
    headers.set('bearer', this.dribble.authtoken);
    const options = { params: params, headers: headers };
    const response = await this.http.post(this.dribble.tokenUrl, options).toPromise();
    console.log(response);

  }
  async getLoginForm2(provider: OAuthProvider) {
    const params = new HttpParams();
    let url = provider.tokenUrl;
    url += '?client_id=' + provider.client_id;
    url += '&client_secret=' + provider.client_id;
    url += '&code' + provider.authtoken;
    const response = await this.http.get(url).toPromise();
    console.log(response);

  }
  // https://dribbble.com/oauth/token?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&code=COPIED_CODE


}
