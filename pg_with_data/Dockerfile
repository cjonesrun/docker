FROM postgres:latest
ENV POSTGRES_USER cj
ENV POSTGRES_PASSWORD cj
ENV POSTGRES_DB testing
COPY db-init.sql /docker-entrypoint-initdb.d/
