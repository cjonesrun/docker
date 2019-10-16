#!/bin/bash

set -x

docker exec -it pg-with-db psql widget_repo cj

# docker exec -it pg-with-db psql widget_repo cj -c "select count(*) from widget;"

