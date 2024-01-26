import { dateLib } from '@shared/lib';

export const getAge = (date: Date) => {
  if (!date) return;

  return dateLib.differenceInYears(new Date(), date);
};

export const getFloorRoundedDate = (minutes: number, d = new Date()) => {
  const ms = 1000 * 60 * minutes || 1;
  return new Date(Math.floor(d.getTime() / ms) * ms);
};

const minutes = 60;

export const timeToMinutes = (time: string): number => {
  const timeArray = time.split(':');

  return Number(timeArray.at(0)) * minutes + Number(timeArray.at(1));
};

export const concatenateDateAndTime = (date: Date, time: string) => {
  if (!date || !time) return;

  const [hours, minutes] = time.split(':');

  return dateLib.set(date, {
    hours: +hours,
    minutes: +minutes,
  });
};

export const dateToTime = (date: Date) => {
  return dateLib.format(date, 'HH:mm:ss');
};

export const today = () => {
  return dateLib.startOfDay(new Date());
};
