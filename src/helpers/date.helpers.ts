import moment from 'moment';
import { extendMoment } from 'moment-range';
// eslint-disable-next-line import/no-cycle
import IOption from '../components/molecules/DropdownDual';

export const getFridaysByYear = (year: string): IOption[] => {
    const momentExt = extendMoment(moment);
    const currentYear = String(momentExt().year());
    const yearRange = momentExt().range(
        new Date(`${year}-01-01`),
        year === currentYear ? new Date(momentExt().format('YYYY-MM-DD')) : new Date(`${year}-12-31`)
    );

    const weeks = Array.from(yearRange?.by('week') || {});
    const fridaysByYear: any[] = [];

    if (year !== currentYear) {
        weeks.pop();
    }

    weeks.forEach((week) => {
        const friday = week.day('friday');
        fridaysByYear.push({ label: friday.format('[Fri] DD MMM'), value: `${year}${friday.format('MMDD')}` });
    });

    return fridaysByYear.reverse();
};

export const getReadableDateFormat = (date: string): string => moment(date).format('DD MMM YYYY');
