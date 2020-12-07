FROM ubuntu:20.04

RUN apt-get update && apt-get upgrade
RUN apt-get install -y curl unzip build-essential libssl-dev libevent-dev mysql-client

RUN curl -fL -o /tmp/libprom.deb \
         https://github.com/digitalocean/prometheus-client-c/releases/download/v0.1.1/libprom-dev-0.1.1-Linux.deb

RUN curl -fL -o /tmp/libpromhttp.deb \
         https://github.com/digitalocean/prometheus-client-c/releases/download/v0.1.1/libpromhttp-dev-0.1.1-Linux.deb


RUN apt install -y /tmp/libprom.deb
RUN apt install -y /tmp/libpromhttp.deb


RUN curl https://codeload.github.com/coturn/coturn/zip/master --output master.zip
RUN unzip master.zip
RUN cd coturn-master && ./configure && make

COPY ./turnserver.conf /etc/turnserver.conf

EXPOSE 3478/udp
EXPOSE 3478/tcp
EXPOSE 9641/tcp
EXPOSE 10000-10050

CMD coturn-master/bin/turnserver -v -c /etc/turnserver.conf