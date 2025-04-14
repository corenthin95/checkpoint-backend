import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Country, CountryCreateInput} from "../entities/Country";

@Resolver()
export class CountriesResolver {
    @Query(() => [Country])
    async countries(): Promise<Country[]> {
       return await Country.find()
    }

    @Query(() => Country)
    async country(
        @Arg("code") code: string
    ): Promise<Country> {
        return await Country.findOneBy({ code })
    }

    @Mutation(() => Country)
    async createCountry(
        @Arg("data", () => CountryCreateInput) data: CountryCreateInput,
    ): Promise<Country> {
        const newCountry = new Country()
        Object.assign(newCountry, data)

        await newCountry.save()

        return newCountry
    }
}