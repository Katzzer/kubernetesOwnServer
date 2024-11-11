# Kubernetes on own server

## How to run onw K8S
- In Ubuntu install `microk8s`
```
sudo apt update
sudo apt install snapd
sudo snap install microk8s --classic
```
- Edit file `.zshrc` and add (you have to have installed zsh)
```
alias kubectl='microk8s kubectl'
alias k='microk8s kubectl'
```
- Then type:
```
source ~/.zshrc
sudo usermod -a -G microk8s katzz
sudo chown -R katzz ~/.kube
```

## Access service from another PC: 
- To be able to access services from another PC in same network type `microk8s enable metallb`
  - add range `192.168.1.240-192.168.1.250` (should be similar to your network)
  - type `microk8s enable ingress` to enable ingress
  - type `sudo vim /etc/host` and change it to:
  ```
    127.0.0.1       localhost
    127.0.1.1       katzz-HP-ProDesk-600-G3-DM
    192.168.1.16    backend.192.168.1.241.nip.io
    192.168.1.240   frontend.192.168.1.240.nip.io
  ```
  - Then backend will be available at `backend.192.168.1.241.nip.io` or `http://192.168.1.16:30080/`