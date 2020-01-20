import { DateConfig } from './date-config';
import { Utils } from '.';

describe('DateConfig', () =>
{
    it('ctor - should initialized correctly', async () =>
    {
        // Arrange && Act
        const cfg = new DateConfig();

        // Assert
        expect(cfg.width).toEqual(168);
        expect(cfg.isRangeSelector).toBe(false);
    });

    it('copyConfig - should ', async () =>
    {
        // Arrange

        // Act
        const cfg: DateConfig = DateConfig.copyConfig(undefined);

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
        } as DateConfig;

        // Act
        const cfg: DateConfig = DateConfig.copyConfig(data);

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
        const minDate = new Date(2019, 8, 1);
        const maxDate = new Date(2020, 1, 29);
        const data = {
            inputDate: new Date(2019, 11, 11),
            minDate: minDate,
            maxDate: maxDate,
            format: 'MM/dd/yyyy'
        } as DateConfig;

        // Act
        const cfg: DateConfig = DateConfig.copyConfig(data);

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
        } as DateConfig;

        // Act
        const cfg: DateConfig = DateConfig.copyConfig(data);

        // Assert
        expect(cfg.minDate).toEqual(maxDate);
        expect(cfg.maxDate).toEqual(maxDate);
    });
});
