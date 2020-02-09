import * as walkModule from '../src/walk';

describe('walk関数のモック化テスト', () => {
    test('モック化できているか', () => {
        const walkSpy = jest.spyOn(walkModule, 'walkFast').mockReturnValueOnce('walk slow');

        expect(walkModule.walkFast()).toBe('walk slow');
        expect(walkSpy).toHaveBeenCalled();
    });
});
