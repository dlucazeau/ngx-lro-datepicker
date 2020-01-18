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
});
