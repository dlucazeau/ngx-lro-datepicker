import { isBefore, isAfter, isEqual } from 'date-fns';

import { bool } from '.';

export class Utils
{
    /**
     * Compare deux dates au sens strict
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft < dateRight false sinon, null si dateRight l'est
     */
    static isBefore (dateLeft: Date, dateRight?: Date): bool
    {
        return dateRight == null ? null : isBefore(dateLeft, dateRight);
    }

    /**
     * Compare deux dates au sens large
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft <= dateRight false sinon, null si dateRight l'est
     */
    static isBeforeOrEqual (dateLeft: Date, dateRight?: Date): bool
    {
        return dateRight == null ? null : isBefore(dateLeft, dateRight) || isEqual(dateLeft, dateRight);
    }

    /**
     * Compare deux dates au sens strict
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft > dateRight false sinon, null si dateRight l'est
     */
    static isAfter (dateLeft: Date, dateRight?: Date): bool
    {
        return dateRight == null ? null : isAfter(dateLeft, dateRight);
    }

    /**
     * Compare deux dates au sens large
     *
     * @param dateLeft : Date à étudier
     * @param dateRight par rapport à celle-ci
     *
     * @returns true si dateLeft >= dateRight false sinon, null si dateRight l'est
     */
    static isAfterOrEqual (dateLeft: Date, dateRight?: Date): bool
    {
        return dateRight == null ? null : isAfter(dateLeft, dateRight) || isEqual(dateLeft, dateRight);
    }
}
