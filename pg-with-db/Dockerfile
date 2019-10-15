FROM postgres:latest
ENV POSTGRES_USER cj
ENV POSTGRES_PASSWORD cj
ENV POSTGRES_DB testing

COPY ./docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/
COPY ./run_test.sh /
