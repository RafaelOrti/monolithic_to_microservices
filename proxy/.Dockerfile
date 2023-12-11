FROM nginx

RUN rm /etc/nginx/nginx.conf

COPY nginx.conf /etc/nging/nginx.conf