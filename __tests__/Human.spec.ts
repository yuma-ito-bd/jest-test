import * as HumanModule from 'Human';
import { Observable, Subscription } from 'rxjs';

describe('Humanのテスト', () => {
    it('getNameでsubscribeが呼ばれるか', () => {
        const subscribeSpy = jest
            .spyOn(Observable.prototype, 'subscribe')
            .mockReturnValueOnce(new Subscription());
        const taro = new HumanModule.Human();
        taro.getName();

        expect(subscribeSpy).toHaveBeenCalled();
    });

    it('getName成功時にnameがセットされるか', () => {
        const taro = new HumanModule.Human();
        taro.onNext('Taro');
        expect(taro.name).toBe('Taro');
    });

    /* subscribeをmockImplementationしようとしたけど断念 */
    // it('spyOn subscribe function', () => {
    //     jest.spyOn(Observable.prototype, 'subscribe').mockImplementationOnce(
    //         (observer?: PartialObserver<any>) => {
    //             observer?.next();
    //             return new Subscription();
    //         }
    //     );
    //     const taro = new HumanModule.Human();
    //     taro.getName();
    //     expect(taro.name).toBe('Jiro');
    // });
});
