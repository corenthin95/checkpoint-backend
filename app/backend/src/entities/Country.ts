import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Field, ID, InputType, ObjectType} from "type-graphql";

@Entity()
@ObjectType()
export class Country extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id!: number

    @Column()
    @Field()
    name!: string

    @Column()
    @Field()
    code!: string

    @Column()
    @Field()
    emoji!: string
}

@InputType()
export class CountryCreateInput {
    @Field()
    name!: string

    @Field()
    code!: string

    @Field()
    emoji!: string
}