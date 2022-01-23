import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>La base es de : <strong> {{base}} </strong></h3>


        <button (click)="acumulador(base)">+{{base}}</button>
        <span>{{contador}}</span>
        <button (click)="acumulador(-base)">-{{base}}</button>
    `
})
export class ContadorComponent{
    titulo = 'Contador App';
    contador:number = 10;
    base: number = 10;
  
    //Manera inteligente de sumar y restar
    acumulador(valor:number){
      this.contador += valor;
    }
}