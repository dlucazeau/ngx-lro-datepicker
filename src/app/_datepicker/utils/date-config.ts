export class CalendarConfig
{
    inputDate?: Date = null;
    minDate?: Date = null;
    maxDate?: Date = null;
    format: string = 'dd/MM/yyyy';
    width: number = 168;

    static copyConfig (data: CalendarConfig)
    {
        const cfg = new CalendarConfig();

        Object.assign(cfg, data);

        return cfg;
    }
}
