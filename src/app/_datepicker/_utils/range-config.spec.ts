import { RangeConfig } from './range-config';

import { Utils } from '.';

describe('RangeConfig', () =>
{

    it('copyConfig / without since & until config / should set sinceDate and untilDate to today', async () =>
    {
        // Arrange
        const data = {
            minDate: new Date(2019, 8, 1),
            maxDate: new Date(2020, 1, 29),
            format: 'MM/dd/yyyy',
            sinceConfig: {
                inputDate: new Date(2019, 11, 11)
            },
            untilConfig: {
                inputDate: Utils.getToday()
            }
        } as RangeConfig;

        // Act
        const cfg: RangeConfig = RangeConfig.copyConfig(data);

        // Assert
        expect(cfg.sinceConfig.inputDate).toEqual(Utils.getToday());
    });

    it('copyConfig / withouts since & until config / should set sinceDate and untilDate to today', async () =>
    {
        // Arrange
        const data = {
            minDate: new Date(2019, 8, 1),
            maxDate: new Date(2020, 1, 29),
            format: 'MM/dd/yyyy'
        } as RangeConfig;

        // Act
        const cfg: RangeConfig = RangeConfig.copyConfig(data);

        // Assert
        expect(cfg.sinceConfig.inputDate).toEqual(new Date(2019, 11, 11));
    });
});
