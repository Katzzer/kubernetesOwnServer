# Kubernetes on own server

## How to run onw K8S
- In Ubuntu install `microk8s`
- edit file `.zshrc` and add
  - alias kubectl='microk8s kubectl'
  - alias k='microk8s kubectl'
- To be able to access services from another PC in same network type `microk8s enable metallb`
  - add range `192.168.1.240-192.168.1.250`
