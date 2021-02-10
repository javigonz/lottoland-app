import moment from 'moment';
import { extendMoment } from 'moment-range';
import { IOption } from '../types/types';

export const getFridaysByYear = (year: string): IOption[] => {
    const momentExt = extendMoment(moment as any);
    const currentYear = String(momentExt().year());
    const yearRange = momentExt().range(
        new Date(`${year}-01-01`),
        year === currentYear ? new Date(momentExt().format('YYYY-MM-DD')) : new Date(`${year}-12-31`)
    );

    const weeks = Array.from(yearRange?.by('week') || {});
    const fridaysByYear: IOption[] = [];

    if (year !== currentYear) {
        weeks.pop();
    }

    weeks.forEach((week: any) => {
        const friday = week.day('friday');
        fridaysByYear.push({ label: friday.format('[Fri] DD MMM'), value: `${year}${friday.format('MMDD')}` });
    });

    return fridaysByYear.reverse();
};

export const getReadableDateFormat: any = (date: string): string => moment(date).format('DD MMM YYYY');
