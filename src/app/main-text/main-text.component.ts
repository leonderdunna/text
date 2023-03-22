import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SaveComponent} from "../save/save.component";
import {LoadComponent} from "../load/load.component";

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.scss']
})
export class MainTextComponent {

  constructor(public dialog: MatDialog) {
  }

  originalText = localStorage.getItem("text")?? "";

  displayText = this.originalText.trim().replaceAll("\n", " \n ").split(/ +/)
  written = ""
  edit_original = false

  refreshOriginal() {
    setTimeout(() => {
      this.displayText = this.originalText
        .trim()
        .replaceAll("\n", " \n ")
        .split(/ +/)

      this.richtig = []
      localStorage.setItem("text",this.originalText)
    }, 2)
  }

  inp: string[] = []
  richtig: string[] = []
  live = localStorage.getItem("live") == "true"

  comp = false

  compare(set: boolean) {
    this.comp = set

    this.richtig = []
    this.inp = this.written.trim().replaceAll("\n", " \n ").split(/ +/)
    console.log("imp d", this.inp, this.displayText)

    for (let i = 0; i < Math.min(this.inp.length, this.displayText.length); i++) {

      if(this.displayText[i] == "\n" && this.inp[i] != "\n"){
        this.inp.splice(i,0,"\n")
      }

      if (this.inp[i].replaceAll(/[^a-zA-Z0-9!?]+/g,"").toLowerCase() == this.displayText[i].replaceAll(/[^a-zA-Z0-9!?]+/g,"").toLowerCase()
      ) {
        this.richtig.push("richtig")
      } else if (this.inp[i]
        .replaceAll(/[^a-zA-Z0-9!?]+/g,"").toLowerCase() ==
        this.displayText[i]
          .replaceAll(/[^a-zA-Z0-9!?]+/g,"").toLowerCase().substring(0, this.inp[i].length)) {
        this.richtig.push("anfang")
      } else {
        this.richtig.push("falsch")
      }

    }


  }

  autoComp() {

    if (this.live) {
      setTimeout(() => {
        this.compare(false)
      }, 2)
    }
  }

  openDialogSave() {
    const dialogRef = this.dialog.open(SaveComponent,{data:this.originalText})
  }
  openDialogLoad(){
    const dialogRef = this.dialog.open(LoadComponent)
    dialogRef.afterClosed().subscribe(result =>{
      if(result != null)
      this.originalText = result
      this.refreshOriginal()
    })
  }

  setLiveStorage(){
    setTimeout(()=>{
      localStorage.setItem("live",this.live +"")
    },5)
  }

  mode = "all"
}
