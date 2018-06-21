import { Component, OnInit ,HostListener} from '@angular/core';
import {UsersService} from '../services/users/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   public profile: any;
   public repositories: any;
   public detalhes: any;
   public name: '';
   public validacao: any;

  constructor(private _service: UsersService) {

  }

    @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            if(this.name != undefined) {
                document.getElementById("bt").click();
            }
        }
    }

  ngOnInit() {
      this.validacao = true;
  }
  getUsuarios() {
      if(this.name != undefined) {
          this._service.buscarUsuarios(this.name).subscribe(data => {
              this.profile = data;
              console.log(data);
              this.validacao= true;
          },error=>{
            this.validacao = false;
          });
          this.getRepositories(1);
      }
  }

  getRepositories(order) {
    this._service.buscarRepositorios(this.name).subscribe(data => {
        var arr = Array.from(Object.keys(data), k=>data[k]);
        arr.sort( (a,b) => a['stargazers_count'] > b['stargazers_count'] ? -order : (a['stargazers_count'] < b['stargazers_count'] ? (order) : 0));
        var obj = Object.setPrototypeOf(arr, Object.prototype);

        this.repositories = obj;

    });
  }

  getDetalhes(repositorio) {
    this._service.buscarDetalhes(repositorio).subscribe(data => {
        this.detalhes = data;
    });
  }
}
