import { Robot } from '../src/Robot';

jest.mock('Robot');
const RobotMock = Robot as jest.Mock;

describe('Robotのテスト', () => {
    test('クラス丸ごとモックになっているか', () => {
        RobotMock.mockImplementationOnce(() => {
            return {
                name: 'R2-D2',
                hello: (): string => {
                    return 'piro piro';
                },
            };
        });

        const robot = new Robot();
        expect(RobotMock).toHaveBeenCalled();
        expect(robot.name).toBe('R2-D2');
        expect(robot.hello()).toBe('piro piro');
    });
});
