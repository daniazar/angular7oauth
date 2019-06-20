export class OAuthProvider {
    public client_id: string;
    public client_secret: string;
    public authorizeUrl: string;
    public authtoken: string;
    public tokenUrl: string;

    public getURLAutorization(): string {
        return this.authorizeUrl + this.client_id;
    }
}
