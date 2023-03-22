import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GunService} from "../gun.service";


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private _snackBar: MatSnackBar,
             private gunService:GunService ) {

    this.gPublicTexts.map().on((d, k) => {
      if(d== null) return
      if (!this.texte.map(e => e.name).includes(d.name))
        this.texte.push(d)
    })
  }
  texte: { name:string,text:string }[]= []
  gPublicTexts = this.gunService.getPublicTexts()
  delete(d: string) {
    this.gPublicTexts.get(d).put(null)
    this.texte = this.texte.filter(e => e.name != d)
  }
}
