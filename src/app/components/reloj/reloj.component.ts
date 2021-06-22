import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'Reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})

export class RelojComponent {
  public hour : number;
  public minutes: number;
  public seconds: number;
  public date: string;

  constructor(){
    this.date= "hola" 
    this.hour = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  getDateToday() {
    let today = new Date();
    this.date = `${today.getDate()} / ${today.getMonth() + 1} / ${today.getFullYear()}`;
  }

  ngOnInit(){ 
    setInterval(()=>{
      let date = new Date()
      this.hour = date.getHours()
      this.minutes = date.getMinutes()
      this.seconds = date.getSeconds()
      this.getDateToday()  
    }, 1000)
  }
}