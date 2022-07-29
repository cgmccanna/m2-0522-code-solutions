select
       "customers"."firstName",
       "customers"."lastName",
       "payments"."amount" as "amounts"
from "customers"
join "payments" USING ("customerId")
order by "amounts" DESC
limit 10;
