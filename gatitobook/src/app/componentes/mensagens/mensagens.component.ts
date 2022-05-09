import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  @Input()
  mensagem ='';

  constructor() { }

  ngOnInit(): void {
  }

}
