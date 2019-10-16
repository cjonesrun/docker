#!/bin/bash

# this script is run when the docker container is built

echo "------- RUNNING $0"

psql widget_repo cj -c "select count(*) from widget;"

echo "------- COMPLETE $0"

exit 0;
