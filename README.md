1. create private repo <repo-name> at https://hub.docker.com/?namespace=langtree
2. login: docker login
3. create a Dockerfile
4. build: docker build -t langtree/<repo-name> .
5. run: docker run langtree/<repo-name>
6. push: docker push langtree/<reponame>

docker inspect <CID>
docker network inspect
docker container inspect

linking:

use --link <container-name>:<internal-container-alias> to link a container into another
eg.
docker run -it --rm -p 8080:8080 --link pg-with-db:main.db --name simple-node langtree/simple-node

this will make the instance of pg-with-db available at host=main.db from within the simple-node instance


