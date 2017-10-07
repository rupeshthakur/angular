npm run build:prod
/bin/sh mk_img_repo.sh
docker stack deploy --compose-file=docker-compose.yml angular4_iris
