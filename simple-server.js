const http = require('http');
const fs = require('fs');
const path = require('path');

// 定义MIME类型映射
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// 创建HTTP服务器
const server = http.createServer((req, res) => {
    console.log(`[${new Date().toLocaleTimeString()}] 请求: ${req.url}`);
    
    // 处理跨域请求
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // 解析请求的文件路径 - 处理查询参数和单页应用路径
    let urlPath = req.url.split('?')[0]; // 去除查询参数
    let filePath;
    
    if (urlPath === '/' || !path.extname(urlPath)) {
        // 如果是根路径或没有扩展名的路径，返回index.html（单页应用处理）
        filePath = path.join(__dirname, 'index.html');
    } else {
        // 否则尝试请求具体文件
        filePath = path.join(__dirname, urlPath);
    }
    
    // 检查文件是否存在
    fs.exists(filePath, (exists) => {
        if (exists) {
            // 确定文件的MIME类型
            const extname = path.extname(filePath).toLowerCase();
            const contentType = mimeTypes[extname] || 'application/octet-stream';
            
            // 读取并发送文件
            fs.readFile(filePath, (error, content) => {
                if (error) {
                    console.error(`[错误] 读取文件 ${filePath} 失败:`, error);
                    res.writeHead(500);
                    res.end('服务器内部错误');
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf-8');
                }
            });
        } else {
            console.error(`[错误] 文件未找到: ${filePath}`);
            res.writeHead(404);
            res.end('文件未找到');
        }
    });
});

// 监听端口
const PORT = 8000;
server.listen(PORT, () => {
    console.log('====================================');
    console.log(`本地服务器已启动！`);
    console.log(`请在浏览器中访问: http://localhost:${PORT}`);
    console.log('====================================');
    console.log('服务器正在运行...');
    console.log(`按 Ctrl+C 停止服务器`);
    console.log('====================================');
});

// 处理服务器错误
server.on('error', (error) => {
    console.error('[服务器错误]', error);
    if (error.code === 'EADDRINUSE') {
        console.error(`端口 ${PORT} 已被占用，请关闭占用该端口的程序后重试。`);
    }
});

// 处理进程终止
process.on('SIGINT', () => {
    console.log('\n服务器已停止。');
    process.exit(0);
});