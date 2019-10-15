1. see ../README.md

docker run --name pg-with-db langtree/pg-with-db
docker run -it --rm --name pg-with-db langtree/pg-with-db


docker exec -it pg-with-db psql <db-name> <user-name> 
docker exec -it pg-with-db psql postgres cj 
docker exec -it pg-with-db psql testing cj 


docker tag langtree/pg-with-db:latest reponame:latest
docker push langtree/pg-with-db:latest

