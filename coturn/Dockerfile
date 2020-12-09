FROM ubuntu:20.04

# Install build dependencies
RUN export DEBIAN_FRONTEND=noninteractive && \
	apt-get update && \
	apt-get install -y build-essential git debhelper dpkg-dev libssl-dev libevent-dev libmongoc-dev libbson-dev

RUN curl -fL -o /tmp/libprom.deb \
         https://github.com/digitalocean/prometheus-client-c/releases/download/v0.1.1/libprom-dev-0.1.1-Linux.deb

RUN curl -fL -o /tmp/libpromhttp.deb \
         https://github.com/digitalocean/prometheus-client-c/releases/download/v0.1.1/libpromhttp-dev-0.1.1-Linux.deb
RUN apt install -y /tmp/libprom.deb /tmp/libpromhttp.deb

ENV BUILD_PREFIX /usr/local/src

WORKDIR ${BUILD_PREFIX}
RUN git clone https://github.com/coturn/coturn.git

WORKDIR ${BUILD_PREFIX}/coturn
RUN ./configure
RUN make

COPY ./turnserver.conf /etc/turnserver.conf

EXPOSE 3478/udp
EXPOSE 3478/tcp
EXPOSE 9641/tcp
EXPOSE 10000-10005

CMD ${BUILD_PREFIX}/coturn/bin/turnserver -v -c /etc/turnserver.conf