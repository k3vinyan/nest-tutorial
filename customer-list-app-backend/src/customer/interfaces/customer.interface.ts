import { Document } from 'mongoose';

export interface Customer extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly address: string;
    readonly phone: string;
    readonly descrption: string;
    readonly created_at: string;
}