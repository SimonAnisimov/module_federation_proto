import { dateLib } from '@shared/lib';

export const getStartAndEndWeekDate = (date: Date): Date[] => {
  const startDate = dateLib.startOfWeek(date, { weekStartsOn: 1 });
  const endDate = dateLib.add(startDate, { days: 6 });

  return [startDate, endDate];
};
