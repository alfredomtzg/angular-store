import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afa: AngularFireAuth
  ) { }

  createUser(email: string, password: string){
    this.afa.createUserWithEmailAndPassword(email, password)
  }
}
