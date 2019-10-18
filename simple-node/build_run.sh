#!/bin/bash

set -x

docker build -t langtree/simple-node .

docker run -it --rm --name=simple-node -p 8080:8080 langtree/simple-node
# docker run -it --rm --name=simple-node -p 8080:8080 --network mynetwork langtree/simple-node

