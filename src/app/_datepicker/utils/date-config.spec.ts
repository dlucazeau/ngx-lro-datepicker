import { CalendarConfig } from './date-config';

describe('CalendarConfig', () =>
{
    it('should run #copyConfig()', async () =>
    {
        // Arrange
        const data = {
            inputDate: new Date(2019, 11, 11),
            minDate: new Date(2019, 8, 1),
            maxDate: new Date(2020, 1, 29),
            format: 'MM/dd/yyyy'
        } as CalendarConfig;

        // Act
        const cfg: CalendarConfig = CalendarConfig.copyConfig(data);

        // Assert
        expect(cfg.format).toEqual('MM/dd/yyyy');
    });

});
