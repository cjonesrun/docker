#!/bin/bash

set -x

docker build -t langtree/pg-with-db .

docker run -it --rm --name pg-with-db langtree/pg-with-db

