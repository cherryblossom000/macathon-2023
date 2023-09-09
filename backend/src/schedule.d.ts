import * as E from 'fp-ts/lib/Either.js';
import type { TeachingPeriod, Unit, ScheduleParameters as _ScheduleParameters } from 'shared';
type ScheduleParameters = Omit<_ScheduleParameters, 'wanted_electives'> & {
    wanted_electives: Unit[];
};
type Year = {
    sem1_units: Unit[];
    sem2_units: Unit[];
};
export type Schedule = {
    years: Year[];
};
export declare let can_add: (current: Schedule, unit: Unit, before: Unit[], sem: TeachingPeriod) => boolean;
export declare let get_all_units: (schedule: Schedule) => Unit[];
export declare let construct_schedules: (params: ScheduleParameters) => E.Either<string, Schedule[]>;
export {};
