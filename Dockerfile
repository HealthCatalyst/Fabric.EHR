FROM centos:centos7
MAINTAINER Health Catalyst <imran.qureshi@healthcatalyst.com>

RUN yum -y update; yum clean all

# Install nvm with node and npm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 6.10.1

# Install nvm with node and npm
RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm --version \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN node --version

RUN mkdir -p /server
# add our project
COPY server/ /server/

# RUN ls -la /server/*

WORKDIR /server

RUN npm install

EXPOSE 3000

# CMD ["sh", "-c", "tail -f /dev/null"]
# CMD ["node", "/server/bin/www"]
CMD [ "npm", "start" ]