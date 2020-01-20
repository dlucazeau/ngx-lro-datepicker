import { isBefore, isAfter, isEqual, getMonth, getYear, getDate, startOfToday } from 'date-fns';

import { bool } from './types';

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
    public static isBefore (dateLeft: Date, dateRight?: Date): bool
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
    public static isBeforeOrEqual (dateLeft: Date, dateRight?: Date): bool
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
    public static isAfter (dateLeft: Date, dateRight?: Date): bool
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
    public static isAfterOrEqual (dateLeft: Date, dateRight?: Date): bool
    {
        return dateRight == null ? null : isAfter(dateLeft, dateRight) || isEqual(dateLeft, dateRight);
    }

    public static isBetween (d: Date, infDate?: Date, supDate?: Date): bool
    {
        const isAfterSince: bool = Utils.isAfterOrEqual(d, infDate);
        const isBeforeUntil: bool = Utils.isBeforeOrEqual(d, supDate);

        return isAfterSince && isBeforeUntil;
    }

    public static isStrictlyBetween (d: Date, infDate?: Date, supDate?: Date): bool
    {
        const isAfterSince: bool = Utils.isAfter(d, infDate);
        const isBeforeUntil: bool = Utils.isBefore(d, supDate);

        return isAfterSince && isBeforeUntil;
    }

    /**
     *
     * @param date1 Date to study (current day)
     * @param date2 Input date
     *
     * @returns true if the dates are in the same month and year, false otherwise
     */
    public static isInSameMonth (date1: Date, date2: Date): boolean
    {
        return getMonth(date1) === getMonth(date2) && getYear(date1) === getYear(date2);
    }

    /**
     *
     * @param date1 Date to study (current day)
     * @param date2 Input date
     *
     * @returns true if the dates are equal, false otherwise
     */
    public static isInputDate (date1: Date, date2: Date): boolean
    {
        return isEqual(date1, date2);
    }

    public static cloneDate (date: Date): Date
    {
        return new Date(getYear(date), getMonth(date), getDate(date));
    }

    public static getToday ()
    {
        return Utils.cloneDate(startOfToday());
    }
}
