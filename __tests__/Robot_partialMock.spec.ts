import { Robot } from 'Robot';

describe('Personのテスト', () => {
    test('クラスの一部だけモックになっているか', () => {
        const helloSpy = jest.spyOn(Robot.prototype, 'hello').mockImplementationOnce(() => {
            return 'piro piro';
        });

        const robot = new Robot();
        expect(helloSpy).not.toHaveBeenCalled();

        expect(robot.name).toBe('C-3PO');
        expect(robot.hello()).toBe('piro piro');
        expect(helloSpy).toHaveBeenCalled();
    });
});
