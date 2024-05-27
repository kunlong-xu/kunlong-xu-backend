# 构建阶段
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --omit=dev  && npm cache clean --force

COPY . .

RUN npm run build

# 运行阶段
FROM node:20-alpine

WORKDIR /usr/src/app

# 复制构建阶段中安装的依赖
COPY --from=build /usr/src/app/node_modules ./node_modules
# 复制构建阶段中打包的文件
COPY --from=build /usr/src/app/dist ./dist

# 复制构建阶段中的 package.json 文件
COPY --from=build /usr/src/app/package*.json ./


EXPOSE 3000

CMD ["npm", "run", "start:prod"]