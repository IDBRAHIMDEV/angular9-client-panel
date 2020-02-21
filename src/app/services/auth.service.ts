import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  register(data: any) {
    return this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  login(data: any) {
    return this.afAuth.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  userAuthenticated() {
    return this.afAuth.user;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }
}
