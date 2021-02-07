import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import IOption from '../components/molecules/DropdownDual';

export const getFridaysByYear = (year: string): Array<typeof IOption> => {
    const moment = extendMoment(Moment);
    const currentYear = String(moment().year());
    const yearRange = moment.range(
        `${year}-01-01`,
        year === currentYear ? moment().format('YYYY-MM-DD') : `${year}-12-31`
    );
    const weeks = Array.from(yearRange.by('week'));
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

export const getReadableDateFormat = (date: string): string => Moment(date).format('DD MMM YYYY');
