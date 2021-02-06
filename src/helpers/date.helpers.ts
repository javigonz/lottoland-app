import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import IOption from '../molecules/DropdownDual';

const getFridaysByYear = (year: string): Array<IOption> => {
    const moment = extendMoment(Moment);
    const currentYear = String(moment().year());
    const yearRange = moment.range(
        `${year}-01-01`,
        year === currentYear ? moment().format('YYYY-MM-DD') : `${year}-12-31`
    );
    const weeks = Array.from(yearRange.by('week'));
    const fridaysByYear = [];

    if (year !== currentYear) {
        weeks.pop();
    }

    weeks.forEach((week) => {
        const friday = week.day('friday');
        fridaysByYear.push({ label: friday.format('[Fri] DD MMM'), value: `${year}${friday.format('MMDD')}` });
    });

    return fridaysByYear.reverse();
};

export default getFridaysByYear;