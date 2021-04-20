import { InputType } from "../enums/field.enum";

export interface FieldAttributes {
    label: string;
    placeholder: string;
    required: boolean;
    minLength: number;
    maxLength: number;
    pattern: string;
    options: string[];
    type: InputType;
    model: string;
}

export interface FieldOutput {
    value: any;
    model: string;
}