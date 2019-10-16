#!/bin/bash

# this script is run when the docker container is built

echo "------- RUNNING $0"

echo "executing: docker-entrypoint.sh"
docker-entrypoint.sh

echo "executing psql"
psql widget_repo cj -c "select count(*) from widget;"

echo "------- COMPLETE $0"

exit 0;
