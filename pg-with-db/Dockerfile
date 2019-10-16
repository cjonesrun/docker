# simple postgres database with init script
############################################

FROM postgres:latest
ENV POSTGRES_USER cj
ENV POSTGRES_PASSWORD cj
ENV POSTGRES_DB widget_repo

COPY ./docker-entrypoint-initdb.d/ /docker-entrypoint-initdb.d/
COPY ./run_tests.sh /usr/local/bin

#EXPOSE 5432
#CMD ["postgres"] 
