select
      "films"."releaseYear",
      "genres"."name"
from "films"
join "filmGenre" USING ("filmId")
join "genres" USING ("genreId")
where "films"."title" = 'Boogie Amelie';
