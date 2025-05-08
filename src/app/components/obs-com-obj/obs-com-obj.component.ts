import { IUserResponse } from './../../interfaces/user-response.interface';
import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obs-com-obj',
  standalone: false,
  templateUrl: './obs-com-obj.component.html',
  styleUrl: './obs-com-obj.component.scss',
})
export class ObsComObjComponent {
  user$!: Observable<IUserResponse>; // colocar $ no final é Observable
  userId!: number;

  constructor(private readonly _usersService: UsersService) {}

  onBtnClick() {
    if (this.userId) {
      this.user$ = this._usersService.getUserById(this.userId);
    }
  }
}
