import { DateConfig } from './date-config';
import { Config } from './config';

export class RangeConfig extends Config
{
    spacing: number = 4;
    sinceConfig: DateConfig;
    untilConfig: DateConfig;

    static copyConfig (data: RangeConfig): RangeConfig
    {
        const cfg = new RangeConfig();

        Object.assign(cfg, data);

        if (!data.sinceConfig)
        {
            data.sinceConfig = DateConfig.copyConfig(new DateConfig());
        }

        cfg.sinceConfig = DateConfig.copyConfig(data.sinceConfig);
        cfg.sinceConfig.minDate = data.sinceConfig.sinceDate;
        cfg.sinceConfig.maxDate = data.sinceConfig.untilDate;

        if (data.untilConfig)
        {
            data.sinceConfig = DateConfig.copyConfig(new DateConfig());
        }

        cfg.untilConfig = DateConfig.copyConfig(data.untilConfig);
        cfg.untilConfig.minDate = data.untilConfig.sinceDate;
        cfg.untilConfig.maxDate = data.untilConfig.untilDate;

        return cfg;
    }
}
