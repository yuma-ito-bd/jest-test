import { Name } from './Name';

/* 同じモジュール内でexportしている関数をモック化できるか実験 */
// export function get(): Observable<string> {
//     return of('Taro');
// }

export class Human {
    name = '';

    getName(): void {
        // get().subscribe(this.onNext);
        Name.get().subscribe(this.onNext);
    }

    onNext(name: string): void {
        console.log('onNext');
        this.name = name;
    }
}
