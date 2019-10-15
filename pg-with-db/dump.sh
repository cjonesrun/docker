#!/bin/bash

set -x

docker exec pg-with-db pg_dump -U cj testing > "dump.pgdata"
