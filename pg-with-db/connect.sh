#!/bin/bash

set -x

docker exec -it pg-with-db psql testing cj

# docker exec -it pg-with-db psql testing cj -c "select count(*) from widget;"

