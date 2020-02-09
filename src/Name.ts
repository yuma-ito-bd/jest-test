import { Observable, of } from 'rxjs';

export class Name {
    static get(): Observable<string> {
        return of('Taro');
    }
}
