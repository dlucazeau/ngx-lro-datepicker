import { RangeConfig } from './range-config';

import { Utils } from '.';

describe('RangeConfig', () =>
{
    it('copyConfig / without since & until config / should set sinceDate and untilDate to today', async () =>
    {
        // Arrange
        // ---     min           since          until           max    ---
        // -------- ▼ ------------ ↓ ------------ ↓ ------------ ▼ -------
        // --- 01/01/2019 --- .......... --- .......... --- 31/12/2019 ---
        const data = {
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2019, 1, 31),
            format: 'MM/dd/yyyy'
        } as RangeConfig;

        // Act
        const cfg: RangeConfig = RangeConfig.copyConfig(data);

        // Assert
        expect(cfg.sinceConfig.inputDate).toEqual(Utils.getToday());
    });
});
