import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Inject} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import GUN from "gun";

@Component({
  selector: 'app-text-menu',
  templateUrl: './text-menu.component.html',
  styleUrls: ['./text-menu.component.html']
})
export class TextMenuComponent {
  constructor(private _snackBar: MatSnackBar,
  ) {

    this.gun.get("texte").map().once((d, k) => {
      console.log(k,d)
      if(d==null) return
      if (!this.texte.map(e => e.name).includes(d.name))
        this.texte.push(d)
    })
    setInterval(()=>{
      this.gun.get("texte").map().once((d, k) => {
        //console.log(k,d)
        if(d==null) return
        if (!this.texte.map(e => e.name).includes(d.name))
          this.texte.push(d)
      })
    },500)
  }




  texte: { name: string, text: string }[] = []
  gun = GUN()


}
