import { Expose } from "class-transformer";

export class StatusDto {
    @Expose()
    readonly id: string;

    @Expose()
    readonly name: string;

    @Expose()
    readonly description: string;
}
