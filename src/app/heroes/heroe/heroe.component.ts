import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroesComponent{
    nombre : string = 'Ironman';
    edad   : number = 45;

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    get capitalizado():string{
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'SpiderMan';
    }

    cambiarEdad():void{
        this.edad = 31;
    }


}