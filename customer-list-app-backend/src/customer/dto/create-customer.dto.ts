export class CreateCustomerDTO {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone: string;
    readonly adress: string;
    readonly description: string;
    readonly created_at: Date;
}