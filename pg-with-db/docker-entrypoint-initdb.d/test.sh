#!/bin/bash

# this script is run when the docker container is built

echo "*** RUNNING test.sh ***"

psql widget_repo cj -c "select count(*) from widget;"

echo "*** COMPLETE        ***"
