import { isWeekend, getDate } from 'date-fns';

import { Utils } from '../_utils';

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
    isInputDate: boolean;

    /**
     * Is this day in the current month?
     */
    isInCurrentMonth: boolean;

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
    constructor(d: Date, inputDate: Date, minDate: Date, maxDate: Date, sinceDate?: Date, untilDate?: Date)
    {
        this.date = d;
        this.day = getDate(d);
        this.isWeekend = isWeekend(d);
        this.isCheckable = Utils.isBetween(this.date, minDate, maxDate);
        this.isInputDate = Utils.isInputDate(d, inputDate);

        this.isInCurrentMonth = Utils.isInSameMonth(this.date, inputDate);
        if (sinceDate !== null && untilDate !== null)
        {
            this.isInRange = Utils.isStrictlyBetween(this.date, sinceDate, untilDate);
            this.isInputDate = this.isInputDate || Utils.isInputDate(d, sinceDate) || Utils.isInputDate(d, untilDate);
        }
    }
}
