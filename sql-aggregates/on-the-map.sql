select "countries"."name",
        count("cities". *) as "citiesPerCountry"
from   "countries"
join   "cities" USING ("countryId")
group by "countries"."countryId";
