import { CalendarConfig } from './calendar-config';
import { Utils } from '.';

describe('CalendarConfig', () =>
{
    it('ctor - should be correctly initialized', async () =>
    {
        // Arrange && Act
        const cfg = new CalendarConfig();

        // Assert
        expect(cfg.width).toEqual(168);
        expect(cfg.isRangeSelector).toBe(false);
    });

    it('copyConfig - should ', async () =>
    {
        // Arrange

        // Act
        const cfg: CalendarConfig = CalendarConfig.copyConfig(undefined);

        // Assert
        expect(cfg.format).toEqual('MM/dd/yyyy');
        expect(cfg.width).toEqual(168);
        expect(cfg.isRangeSelector).toBe(false);

        expect(cfg.inputDate).toEqual(Utils.getToday());

        expect(cfg.minDate).toEqual(Utils.getToday());
        expect(cfg.maxDate).toEqual(Utils.getToday());
        expect(cfg.sinceDate).toEqual(Utils.getToday());
        expect(cfg.untilDate).toEqual(Utils.getToday());
    });

    it('copyConfig - should ', async () =>
    {
        // Arrange
        const data = {
        } as CalendarConfig;

        // Act
        const cfg: CalendarConfig = CalendarConfig.copyConfig(data);

        // Assert
        expect(cfg.format).toEqual('MM/dd/yyyy');
        expect(cfg.width).toEqual(168);
        expect(cfg.isRangeSelector).toBe(false);

        expect(cfg.inputDate).toEqual(Utils.getToday());

        expect(cfg.minDate).toEqual(Utils.getToday());
        expect(cfg.maxDate).toEqual(Utils.getToday());
        expect(cfg.sinceDate).toEqual(Utils.getToday());
        expect(cfg.untilDate).toEqual(Utils.getToday());
    });

    it('copyConfig - should ', async () =>
    {
        // Arrange
        // ---     min            max    ---
        // -------- ▼ ------------ ▼ -------
        // --- 01/01/2019 --- 31/12/2019 ---
        const minDate = new Date(2019, 0, 1);
        const maxDate = new Date(2019, 11, 31);
        const data = {
            inputDate: new Date(2019, 11, 11),
            minDate: minDate,
            maxDate: maxDate,
            format: 'MM/dd/yyyy'
        } as CalendarConfig;

        // Act
        const cfg: CalendarConfig = CalendarConfig.copyConfig(data);

        // Assert
        expect(cfg.format).toEqual('MM/dd/yyyy');
        expect(cfg.width).toEqual(168);
        expect(cfg.isRangeSelector).toBe(false);
        expect(cfg.sinceDate).toEqual(minDate);
        expect(cfg.untilDate).toEqual(maxDate);
    });

    it('copyConfig - minDate > maxDate - should set minDate to maxDate', async () =>
    {
        // Arrange
        const maxDate = new Date(2019, 8, 1);
        const minDate = new Date(2020, 1, 29);
        const data = {
            minDate: minDate,
            maxDate: maxDate,
            format: 'MM/dd/yyyy'
        } as CalendarConfig;

        // Act
        const cfg: CalendarConfig = CalendarConfig.copyConfig(data);

        // Assert
        expect(cfg.minDate).toEqual(maxDate);
        expect(cfg.maxDate).toEqual(maxDate);
    });
});
