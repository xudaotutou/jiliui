export type CalendarDateType =
  | 'prev-month'
  | 'next-month'
  | 'prev-year'
  | 'next-year'
  | 'today'

export interface CalendarMonthDateType {
  year?:number,
  month?:number,
  day?:number
}