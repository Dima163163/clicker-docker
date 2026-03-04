FROM jenkins/jenkins:lts-jdk17
USER root
RUN apt-get update && apt-get install -y docker.io && rm -rf /var/lib/apt/lists/*
# change docker group GID to match host
RUN groupmod -g 988 docker \
 && usermod -aG docker jenkins
USER jenkins
