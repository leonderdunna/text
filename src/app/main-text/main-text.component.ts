import {Component} from '@angular/core';

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.scss']
})
export class MainTextComponent {


  originalText = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et\n" +
    "      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita\n" +
    "      kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n" +
    "      sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n" +
    "      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata\n" +
    "      sanctus est Lorem ipsum dolor sit amet."

  displayText = this.originalText.trim().split(/ +/)
  written = ""
  edit_original= false
  refreshOriginal(){
    setTimeout(()=> {
      this.displayText = this.originalText
        .trim()
        .replace("\n", " \n ")
        .split(/ +/)
    },2)
    }
  inp: string[] = []
  richtig: string[] = []
live = true

  comp = false
  compare(set: boolean) {
    this.comp = set

    this.richtig = []
    this.inp = this.written.trim().replace("\n"," \n ").split(/ +/)
    console.log(this.inp, this.displayText)

    for (let i = 0; i < Math.min(this.inp.length, this.displayText.length); i++) {
      if (this.inp[i] == this.displayText[i]) {
        this.richtig.push("richtig")
      } else if (this.inp[i] == this.displayText[i].substring(0, this.inp[i].length)) {
        this.richtig.push("anfang")
      } else {
        this.richtig.push("falsch")
      }

    }


  }

  autoComp(){

    if(this.live){
      setTimeout(()=>{
      this.compare(false)},2)
    }
  }

  mode = "all"
}
