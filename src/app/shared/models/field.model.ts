import { InputType } from "../enums/field.enum";

export interface FieldAttributes {
    value: string;
    placeholder: string;
    required: boolean;
    minLength: number;
    maxLength: number;
    pattern: string;
    type: InputType;
}