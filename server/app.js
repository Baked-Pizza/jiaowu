const express = require('express');
const app = express();

// 中间件配置
app.use(express.json());

// 路由示例
app.get('/api/test', (req, res) => {
  res.json({ status: 'API is working' });
});

// 启动服务
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});