import { isWeekend, getDate } from 'date-fns';

import { Utils, bool } from '.';

export class VisualDay
{
    /**
     * Reference date
     */
    date: Date;

    /**
     * day in the month
     */
    day: number;

    /**
     * Is this day today?
     */
    isToday: boolean;

    /**
     * Is this day in the current month?
     */
    isCurrentMonth: boolean;

    /**
     * Is this day between the min and max dates?
     */
    isCheckable: boolean;

    /**
     * Is this day a saturday or a sunday?
     */
    isWeekend: boolean;

    /**
     * Is this date between since and until?
     */
    isInRange: boolean = false;

    /**
     *
     */
    constructor(d: Date, minDate: Date, maxDate: Date, sinceDate?: Date, untilDate?: Date)
    {
        this.date = d;
        this.day = getDate(d);
        this.isWeekend = isWeekend(d);
        this.isInRange = this.calcIsInRange(d, sinceDate, untilDate);
    }

    private calcIsInRange (d: Date, sinceDate?: Date, untilDate?: Date): bool
    {
        const isAfterSince: bool = Utils.isAfter(d, sinceDate);
        const isBeforeUntil: bool = Utils.isBefore(d, untilDate);

        return isAfterSince && isBeforeUntil;
    }
}
