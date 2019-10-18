#!/bin/bash

set -x

docker build -t langtree/pg-with-db .

docker run -it --rm --name pg-with-db -p 5432:5432 --network mynetwork langtree/pg-with-db

