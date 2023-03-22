import {Injectable} from '@angular/core';
import GUN from "gun";
import SEA from "gun/sea"

@Injectable({
  providedIn: 'root'
})
export class GunService {

  constructor() {
    this.gun = GUN()
    let sea = SEA


  }


  gun = GUN()
  user = this.gun.user()

  public getPublicTexts() {
    return this.gun.get("text-master-public-texts")
  }

  public logIn(name: string, password: string) {
    let me = this.user.auth(name, password)
  }

}
