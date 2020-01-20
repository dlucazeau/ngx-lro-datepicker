import { VisualDay } from './visual-day';

describe('VisualDay', () =>
{
    it('ctor / simple calendar / should not be a weekend', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), new Date(1970, 0, 1), new Date(1970, 0, 1), null, null);

        // Assert
        expect(vd.day).toEqual(18);
        expect(vd.isWeekend).toBe(true);
    });

    it('ctor / simple calendar / should be a weekend', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 19);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), new Date(1970, 0, 1), new Date(1970, 0, 1), null, null);

        // Assert
        expect(vd.day).toEqual(19);
        expect(vd.isWeekend).toBe(true);
    });

    it('ctor / simple calendar / should be uncheckable', async () =>
    {
        // Arrange
        const d: Date = new Date(2019, 11, 31);
        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(false);
    });

    it('ctor / simple calendar / should be uncheckable', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 1, 18);
        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(false);
    });

    it('ctor / simple calendar / should be checkable', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);
        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / simple calendar / should be checkable', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 1);
        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / simple calendar / should be checkable', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 31);
        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, null, null);

        // Assert
        expect(vd.isCheckable).toBe(true);
    });

    it('ctor / calendar / isInRange should be true', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);

        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        const sinceDate = new Date(2020, 0, 13);
        const untilDate = new Date(2020, 0, 19);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, sinceDate, untilDate);

        // Assert
        expect(vd.isInRange).toBe(true);
    });

    it('ctor / calendar / isInRange should be false', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 31);

        const minDate = new Date(2020, 0, 1);
        const maxDate = new Date(2020, 0, 31);

        const sinceDate = new Date(2020, 0, 13);
        const untilDate = new Date(2020, 0, 19);

        // Act
        const vd = new VisualDay(d, new Date(1970, 0, 1), minDate, maxDate, sinceDate, untilDate);

        // Assert
        expect(vd.isInRange).toBe(false);
    });

    it('ctor / simple calendar / isInputDate should be true', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);
        const inputDate = new Date(2020, 0, 18);

        // Act
        const vd = new VisualDay(d, inputDate, new Date(1970, 0, 1), new Date(1970, 0, 1), new Date(1970, 0, 1), new Date(1970, 0, 1));

        // Assert
        expect(vd.isInputDate).toBe(true);
    });

    it('ctor / simple calendar / isInputDate should be false', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 17);
        const inputDate = new Date(2020, 0, 18);

        // Act
        const vd = new VisualDay(d, inputDate, new Date(1970, 0, 1), new Date(1970, 0, 1), new Date(1970, 0, 1), new Date(1970, 0, 1));

        // Assert
        expect(vd.isInputDate).toBe(false);
    });
});
