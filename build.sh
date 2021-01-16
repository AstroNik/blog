#! /bin/sh

cd client
npm run build
cd ..

docker build . -t astronik/nkblog:latest

docker login --username=astronik --password=510020Nikhil!
docker push astronik/nkblog

kubectl delete deploy nkblog
kubectl delete svc nkblog-service

kubectl apply -f ./k8/deploy.yaml
kubectl apply -f ./k8/service.yaml
