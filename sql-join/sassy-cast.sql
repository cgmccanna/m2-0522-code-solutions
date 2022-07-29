select
      "actors"."firstName",
      "actors"."lastName"
from "actors"
join "castMembers" USING ("actorId")
join "films" USING ("filmId")
where "films"."title" = 'Jersey Sassy';
