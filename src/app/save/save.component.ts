import {Component, Inject, ChangeDetectorRef} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

import {MatSnackBar} from '@angular/material/snack-bar';
import {GunService} from "../gun.service";

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, private _snackBar: MatSnackBar,
              private dialogRef:MatDialogRef<SaveComponent>,
              private gunServie:GunService) {

    this.gPublicTexts.map().on((d, k) => {
      if(d==null) return
      if (!this.textNamen.includes(d.name))
        this.textNamen.push(d.name)
    })
  }

  save() {
    if (this.name == "") return
    if (this.textNamen.includes(this.name)) {
      if (!confirm("Ein Text mit diesem Namen existiert bereits. Überschreiben?")) return;
    }
    this.gPublicTexts.get(this.name).put({name: this.name, text: this.data})

    this._snackBar.open(`Text ${this.name} wurde gespeichert`);
    this.dialogRef.close()

  }

  textNamen: string[] = []
  name: string = ""
  gPublicTexts = this.gunServie.getPublicTexts()

}
