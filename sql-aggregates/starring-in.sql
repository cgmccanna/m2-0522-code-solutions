select "genres"."name" as "genres",
       count("films". *) as "monroeFilms"
from "genres"
join "filmGenre" USING ("genreId")
join "films" USING ("filmId")
join "castMembers" USING ("filmId")
join "actors" USING ("actorId")
where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
group by "genres";
