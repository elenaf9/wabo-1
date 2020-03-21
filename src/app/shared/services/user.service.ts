import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient,
    ) {
    }

    private dataApiEndpoint = environment.apiUrl + '/user';

    private mockUser: User = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe'
    };

    public getUserById(userId: string): Observable<User> {
        // return this.http.get<User>(this.dataApiEndpoint + '/' + userId);
        return of(this.mockUser);
    }

    public createUser(user: User): Observable<User> {
        return this.http.post<User>(this.dataApiEndpoint, user);
    }

    public updateUser(user: User): Observable<User> {
        return this.http.put<User>(this.dataApiEndpoint + '/' + user.id, user);
    }

    public deleteUser(userId: string): Observable<User> {
        return this.http.delete<User>(this.dataApiEndpoint + '/' + userId);
    }

    public getAllUsers(params?: HttpParams): Observable<User[]> {
        return this.http.get<User[]>(this.dataApiEndpoint, {params});
    }
}