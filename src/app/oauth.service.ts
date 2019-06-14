import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  public client_id = '710ad2f1170e9c02ff3ac840c3b700616be319efd8edecb7f8f873dc7ca25430';
  public client_secret = '1f5e108d31149a09eb5d9621b5e2a7da328a11737c4637ed8397f6adb809f553';
  public authorizeUrl = 'https://dribbble.com/oauth/authorize?client_id=';
  public authtoken: string = null;
  public tokenUrl = 'https://dribbble.com/oauth/token';
  constructor(private http: HttpClient) {

  }

  async getAuthorizationToken() {
    window.location.href = this.authorizeUrl + this.client_id;
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
    params.set('client_id', this.client_id);
    params.set('client_secret', this.client_secret);
    params.set('scope', '[public]');
    const headers = new HttpHeaders();
    headers.set('bearer', this.authtoken);
    const options = { params: params, headers: headers };
    const response = await this.http.post(this.tokenUrl, options).toPromise();
    console.log(response);

  }
}
