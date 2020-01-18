import { isBefore, isAfter, isEqual } from 'date-fns';

export class Utils
{
    /**
     * Compare deux dates au sens strict
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft < dateRight false sinon
     */
    static isBefore (dateLeft: Date, dateRight: Date): boolean
    {
        return isBefore(dateLeft, dateRight);
    }

    /**
     * Compare deux dates au sens large
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft <= dateRight false sinon
     */
    static isBeforeOrEqual (dateLeft: Date, dateRight: Date): boolean
    {
        return isBefore(dateLeft, dateRight) || isEqual(dateLeft, dateRight);
    }

    /**
     * Compare deux dates au sens strict
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft > dateRight false sinon
     */
    static isAfter (dateLeft: Date, dateRight: Date): boolean
    {
        return isAfter(dateLeft, dateRight);
    }

    /**
     * Compare deux dates au sens large
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft >= dateRight false sinon
     */
    static isAfterOrEqual (dateLeft: Date, dateRight: Date): boolean
    {
        return isAfter(dateLeft, dateRight) || isEqual(dateLeft, dateRight);
    }
}
