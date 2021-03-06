import { NgbDateAdapter } from './ngb-date-adapter';
import { NgbDateStruct } from '../ngb-date-struct';
/**
 * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
 * native javascript dates as a user date model.
 */
export declare class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
    /**
     * Converts a native `Date` to a `NgbDateStruct`.
     */
    fromModel(date: Date | null): NgbDateStruct | null;
    /**
     * Converts a `NgbDateStruct` to a native `Date`.
     */
    toModel(date: NgbDateStruct | null): Date | null;
    protected _fromNativeDate(date: Date): NgbDateStruct;
    protected _toNativeDate(date: NgbDateStruct): Date;
}
