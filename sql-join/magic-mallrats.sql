select
      "customers"."firstName",
      "customers"."lastName"
from "customers"
join "rentals" USING ("customerId")
join "inventory" USING ("inventoryId")
join "films" USING ("filmId")
where "films"."title" = 'Magic Mallrats';
