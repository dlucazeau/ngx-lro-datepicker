import { CalendarConfig } from './date-config';

export class RangeConfig
{
    minDate?: Date = null;
    maxDate?: Date = null;
    format: string = 'dd/MM/yyyy';
    width: number;
    spacing: number = 4;
    sinceConfig: CalendarConfig;
    untilConfig: CalendarConfig;

    static copyConfig (data: RangeConfig)
    {
        const cfg = new RangeConfig();

        Object.assign(cfg, data);
        cfg.sinceConfig = CalendarConfig.copyConfig(data.sinceConfig);
        cfg.untilConfig = CalendarConfig.copyConfig(data.untilConfig);

        return cfg;
    }
}
