# Sử dụng Image Node.js chính thức làm gốc
FROM node:18

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Copy file quản lý thư viện vào trước để tối ưu build
COPY package*.json ./

# Cài đặt các thư viện cần thiết
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000 để truy cập ứng dụng
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["node", "server.js"]