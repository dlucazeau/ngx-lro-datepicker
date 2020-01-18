import { RangeConfig } from './range-config';

describe('RangeConfig', () =>
{

    it('should run #copyConfig()', async () =>
    {
        // Arrange
        const data =  {
            minDate: new Date(2019, 8, 1),
            maxDate: new Date(2020, 1, 29),
            format: 'MM/dd/yyyy',
            sinceConfig: {
                inputDate: new Date(2019, 11, 11)
            },
            untilConfig: {
                inputDate: new Date()
            }
        } as RangeConfig;

        // Act
        const cfg = RangeConfig.copyConfig(data);

        // Assert
        expect(cfg.sinceConfig.inputDate).toEqual(new Date(2019, 11, 11));
    });

});
