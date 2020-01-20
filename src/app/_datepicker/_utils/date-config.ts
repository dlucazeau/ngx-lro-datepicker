import { isAfter } from 'date-fns';

import { Config } from './config';
import { Utils } from './utils';
export class DateConfig extends Config

{
    inputDate?: Date = null;
    sinceDate?: Date = null;
    untilDate?: Date = null;

    constructor()
    {
        super();

        this.width = 168;
        this.isRangeSelector = false;
    }

    static copyConfig (data: DateConfig): DateConfig
    {
        const cfg = new DateConfig();

        if (!data)
        {
            Object.assign(cfg, data);
        }

        if (cfg.inputDate === null)
        {
            cfg.inputDate = Utils.getToday();
        }

        if (cfg.minDate === null)
        {
            cfg.minDate = Utils.getToday();
        }

        if (cfg.maxDate === null)
        {
            cfg.maxDate = Utils.getToday();
        }

        if (isAfter(cfg.minDate, cfg.maxDate))
        {
            cfg.minDate = Utils.cloneDate(cfg.maxDate);
        }

        if (cfg.sinceDate === null)
        {
            cfg.sinceDate = cfg.minDate;
        }

        if (cfg.untilDate === null)
        {
            cfg.untilDate = cfg.maxDate;
        }

        return cfg;
    }
}
