import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado:string = '';
  heroes:string[] = ['Spiderman', 'Thor', 
  'Pedro Picappiedras', 'Pablo marmol', 
  'Ironman', 'American Captain'];


  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
