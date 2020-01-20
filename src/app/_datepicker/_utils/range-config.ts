import { CalendarConfig } from './calendar-config';

export class RangeConfig extends CalendarConfig
{
    spacing: number = 4;
    sinceConfig: CalendarConfig;
    untilConfig: CalendarConfig;

    constructor()
    {
        super();

        this.isRangeSelector = true;
        this.sinceConfig = new CalendarConfig();
        this.sinceConfig.isRangeSelector = true;
        this.untilConfig = new CalendarConfig();
        this.untilConfig.isRangeSelector = true;
    }

    static copyConfig (data: RangeConfig): RangeConfig
    {
        const cfg = new RangeConfig();

        Object.assign(cfg, data);

        if (!data.sinceConfig)
        {
            data.sinceConfig = CalendarConfig.copyConfig(new CalendarConfig());
        }

        cfg.sinceConfig = CalendarConfig.copyConfig(data.sinceConfig);
        cfg.sinceConfig.minDate = cfg.minDate;
        cfg.sinceConfig.maxDate = cfg.maxDate;
        cfg.sinceConfig.sinceDate = cfg.sinceDate;
        cfg.sinceConfig.untilDate = cfg.untilDate;
        cfg.sinceConfig.inputDate = cfg.sinceDate;

        if (!data.untilConfig)
        {
            data.untilConfig = CalendarConfig.copyConfig(new CalendarConfig());
        }

        cfg.untilConfig = CalendarConfig.copyConfig(data.untilConfig);
        cfg.untilConfig.minDate = cfg.minDate;
        cfg.untilConfig.maxDate = cfg.maxDate;
        cfg.untilConfig.sinceDate = cfg.sinceDate;
        cfg.untilConfig.untilDate = cfg.untilDate;
        cfg.untilConfig.inputDate = cfg.untilDate;

        return cfg;
    }
}
