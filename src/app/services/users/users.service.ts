import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }


    buscarUsuarios(users) {
       return this.http.get('https://api.github.com/users/' + users);
    }
    buscarRepositorios(users) {
        return this.http.get('https://api.github.com/users/' + users + '/repos');
    }
    buscarDetalhes(repositorio) {
        return this.http.get('https://api.github.com/repos/' + repositorio );
    }

}
