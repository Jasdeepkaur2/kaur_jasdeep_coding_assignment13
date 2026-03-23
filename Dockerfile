FROM node:18-alpine AS build

WORKDIR /kaur_jasdeep_ui_garden_build_checks

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /kaur_jasdeep_ui_garden_build_checks/build /usr/share/nginx/html

RUN echo 'server { \
    listen 8018; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
