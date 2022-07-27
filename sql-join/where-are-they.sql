select
       "addresses"."line1",
       "cities"."name",
       "addresses"."district",
       "countries"."name"
from "addresses"
join "cities" USING ("cityId")
join "countries" USING ("countryId");
