import { Utils } from './utils';

describe('Utils', () =>
{
    it('isBefore d1 < d2 should return true', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 21);

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBefore d1 = d2 should return false', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 18);

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isBefore d1 > d2 should return false', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 1);

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfter d1 < d2 should return false', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 21);

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfter d1 = d2 should return false', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 18);

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfter d1 > d2 should return true', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 1);

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBeforeOrEqual d1 <= d2 should return true', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 21);

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBeforeOrEqual d1 = d2 should return true', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 18);

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBeforeOrEqual d1 > d2 should return false', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 1);

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfterOrEqual d1 < d2 should return false', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 21);

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(false);
    });

    it('isAfterOrEqual d1 = d2 should return true', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 18);

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isAfterOrEqual d1 > d2 should return true', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = new Date(2019, 0, 1);

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(true);
    });

    it('isBefore d1 < null should return null', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = null;

        // Act
        const result = Utils.isBefore(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isBeforeOrEqual d1 <= null should return null', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = null;

        // Act
        const result = Utils.isBeforeOrEqual(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isAfter d1 > null should return null', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = null;

        // Act
        const result = Utils.isAfter(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isAfterOrEqual d1 >= null should return null', async () =>
    {
        // Arrange
        const d1 = new Date(2019, 0, 18);
        const d2 = null;

        // Act
        const result = Utils.isAfterOrEqual(d1, d2);

        // Assert
        expect(result).toBe(null);
    });

    it('isInRange since <= d <= until should return true', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);
        const minDate: Date = new Date(2020, 0, 1);
        const maxDate: Date = new Date(2020, 0, 31);

        // Act
        const result = Utils.isBetween(d, minDate, maxDate);

        // Assert
        expect(result).toBe(true);
    });

    it('isInSameMonth should return true', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);
        const otherDate: Date = new Date(2020, 0, 1);

        // Act
        const result = Utils.isInSameMonth(d, otherDate);

        // Assert
        expect(result).toBe(true);
    });

    it('isInSameMonth should return false due to different months', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);
        const otherDate: Date = new Date(2020, 1, 1);

        // Act
        const result = Utils.isInSameMonth(d, otherDate);

        // Assert
        expect(result).toBe(false);
    });

    it('isInSameMonth should return false due to different years', async () =>
    {
        // Arrange
        const d: Date = new Date(2020, 0, 18);
        const otherDate: Date = new Date(2021, 0, 1);

        // Act
        const result = Utils.isInSameMonth(d, otherDate);

        // Assert
        expect(result).toBe(false);
    });

    it('isInputDate / d1 = d2 should return true', async () =>
    {
        // Arrange
        const d1: Date = new Date(2020, 0, 18);
        const inputDate: Date = new Date(2020, 0, 18);

        // Act
        const result = Utils.isInputDate(d1, inputDate);

        // Assert
        expect(result).toBe(true);
    });

    it('isInputDate / d1 <> d2 should return false', async () =>
    {
        // Arrange
        const d1: Date = new Date(2020, 0, 18);
        const inputDate: Date = new Date(2020, 0, 19);

        // Act
        const result = Utils.isInputDate(d1, inputDate);

        // Assert
        expect(result).toBe(false);
    });
});
