export class Constants
{
    public static weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 1;
}

export class VisualDay
{
    date: Date;
    day: number;
    today: boolean;
    currMonth: boolean;
    uncheckable: boolean;
    isWeekend: boolean;
}
