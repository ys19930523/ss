# 会务系统使用说明

## 项目简介
本会务系统是一个基于H5的会议管理平台，包含两个主要页面：
- `admin.html`：管理员后台，用于导入用户数据和查看用户列表
- `index.html`：用户端，用于登录并查看会议信息、座位安排、餐席和酒店信息

## 本地使用方法

### 直接打开使用（推荐）
1. 直接双击打开 `admin.html` 或 `index.html` 文件
2. 系统会自动使用浏览器的cookie功能存储数据
3. 无需安装任何额外软件

### 管理员使用指南（admin.html）
1. 打开 `admin.html` 文件
2. 在"用户数据导入"区域输入用户数据，格式为：`姓名,电话,酒店标识,坐席,餐席`
   例如：
   ```
   张三,13800138000,酒店A,A区 01,第 1 桌
   李四,13800138001,酒店B,A区 02,第 1 桌
   ```
3. 点击"导入数据"按钮，数据将被保存到浏览器的cookie中
4. 在"用户列表"区域可以查看已导入的所有用户信息

### 用户使用指南（index.html）
1. 打开 `index.html` 文件
2. 在登录页面输入姓名（需与管理员导入的姓名一致）
3. 点击"立即登录"按钮
4. 在会议中心页面可以查看：
   - 会议介绍
   - 会议日程
   - 参会路线
   - 座位/餐席/酒店信息
   - 图文直播（需配置实际链接）

## 服务器部署方案

为了支持扫码访问功能，建议将项目部署到服务器上：

### 1. 准备服务器
- 选择云服务器（如阿里云、腾讯云、华为云等）
- 安装Web服务器软件（如Nginx、Apache）
- 配置域名和HTTPS证书

### 2. 免费测试平台推荐

#### 静态网站托管平台（推荐用于测试）

##### GitHub Pages
- **特点**：完全免费，无需服务器配置，支持自定义域名，可长期使用
- **详细部署指南**：请查看 [GITHUB_DEPLOY_GUIDE.md](GITHUB_DEPLOY_GUIDE.md) 文件

**快速部署步骤**：
1. 访问 [GitHub官网](https://github.com/) 创建账号
2. 创建名为 `conference-system` 的公开仓库
3. 上传 `admin.html` 和 `index.html` 文件
4. 进入仓库 "Settings" → "Pages" 启用 GitHub Pages
5. 使用生成的 URL 访问系统：
   - 管理员界面：`https://username.github.io/conference-system/admin.html`
   - 用户界面：`https://username.github.io/conference-system/index.html`

**提示**：
- GitHub Pages部署可能需要1-2分钟生效
- 如果遇到404错误，请等待几分钟后重试
- 可以通过修改仓库中的文件来更新网站内容，GitHub会自动重新部署

##### Netlify
- **特点**：免费计划包含基本功能，支持自动部署，提供HTTPS
- **使用方法**：
  1. 创建Netlify账号
  2. 直接拖拽项目文件夹到Netlify界面
  3. 等待自动部署完成
  4. 访问生成的URL（如：`https://random-name.netlify.app/`）

##### Vercel
- **特点**：免费计划适合测试，支持自动部署，提供HTTPS
- **使用方法**：
  1. 创建Vercel账号
  2. 导入项目或直接上传文件
  3. 自动部署完成后获取URL

#### 免费云服务器（需要自行配置）

##### 阿里云ECS免费试用
- **特点**：提供1个月免费试用，适合测试完整服务器环境
- **使用方法**：
  1. 注册阿里云账号
  2. 申请免费ECS实例
  3. 配置服务器和安装Web服务器软件
  4. 上传项目文件并配置

##### 腾讯云CVM免费试用
- **特点**：提供免费试用额度，支持各种服务器配置
- **使用方法**：
  1. 注册腾讯云账号
  2. 申请免费CVM实例
  3. 安装Web服务器软件并配置

### 3. 部署步骤
1. 将项目文件（`admin.html`、`index.html`）上传到服务器或托管平台
2. 根据平台要求进行配置
3. 获取访问URL并测试

### 4. Nginx配置示例（适用于自行部署的服务器）
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/conference-system;
    index index.html admin.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

## 扫码访问功能

### 1. 生成QR码
- 为用户端页面(`index.html`)生成QR码
- 可以使用在线工具（如草料二维码、QR Code Generator）
- 或使用代码生成QR码

### 2. 使用方法
1. 访问在线QR码生成工具
2. 输入您的服务器地址（如：`https://your-domain.com/index.html`）
3. 生成QR码并打印
4. 用户使用手机扫码即可访问系统

## 产品经理快速测试指南

作为产品经理，您可以使用以下最简单的方法快速测试扫码访问功能：

### 推荐平台：Netlify（最适合快速测试）

#### 步骤1：准备项目文件
- 确保您的项目文件夹（conference-system-v75）包含 `admin.html` 和 `index.html` 文件

#### 步骤2：访问Netlify
- 打开浏览器，访问 [Netlify官网](https://www.netlify.com/)
- 点击右上角的"Sign Up"按钮注册账号（可以使用GitHub、GitLab或邮箱注册）

#### 步骤3：上传项目
- 登录后，您将看到Netlify的仪表盘
- 找到并点击"Add new site"按钮，然后选择"Deploy manually"
- 拖拽您的项目文件夹（conference-system-v75）到指定区域

#### 步骤4：等待部署完成
- Netlify将自动上传并部署您的项目
- 部署完成后，您将看到一个随机生成的URL（如：`https://random-name.netlify.app/`）

#### 步骤5：测试访问
- 复制生成的URL，在浏览器中打开测试
- 访问 `https://random-name.netlify.app/admin.html` 测试管理员功能
- 访问 `https://random-name.netlify.app/index.html` 测试用户功能

#### 步骤6：生成QR码
- 访问 [草料二维码](https://cli.im/) 或其他在线QR码生成工具
- 输入您的Netlify URL（如：`https://random-name.netlify.app/index.html`）
- 生成QR码后，使用手机扫码测试

### 测试注意事项
- **数据存储**：由于使用的是cookie存储，不同浏览器或设备之间的数据不共享
- **管理员功能**：您需要先访问admin.html导入测试数据，然后才能在index.html中登录测试
- **免费限制**：Netlify免费计划足够用于测试，但有带宽限制（每月100GB）
- **URL稳定性**：免费版URL是随机生成的，重新部署后可能会改变

### 其他快速测试选项
- **GitHub Pages**：如果您熟悉GitHub，可以使用GitHub Pages部署
- **本地服务器**：如果您只是想在局域网内测试，可以使用Node.js的http-server：
  1. 安装Node.js
  2. 打开命令行，进入项目文件夹
  3. 运行 `npx http-server -p 8000`
  4. 在本地访问 `http://localhost:8000/index.html`
  5. 使用手机连接同一WiFi，访问您电脑的IP地址（如：`http://192.168.1.100:8000/index.html`）

## 移动端优化建议

1. **响应式设计**：系统已使用Tailwind CSS实现响应式设计，适配不同屏幕尺寸
2. **触摸优化**：
   - 所有按钮和可点击元素尺寸适中（至少48x48像素）
   - 轮播图支持触摸滑动
3. **加载优化**：
   - 使用CDN加载外部资源
   - 图片使用适当压缩
4. **性能优化**：
   - 减少JavaScript执行时间
   - 避免不必要的DOM操作

## 注意事项

1. **数据存储**：
   - 本地使用时，数据存储在浏览器cookie中，清除浏览器数据会导致数据丢失
   - 服务器部署时，建议使用后端数据库存储用户数据

2. **安全性**：
   - 管理员页面(`admin.html`)应设置访问密码
   - 服务器部署时应使用HTTPS协议

3. **浏览器兼容性**：
   - 推荐使用Chrome、Firefox、Safari、Edge等现代浏览器
   - 不支持IE浏览器

## 维护建议

1. **定期备份**：定期导出和备份用户数据
2. **内容更新**：
   - 更新会议信息、日程安排
   - 更新图片和文字内容
3. **功能扩展**：
   - 添加更多会议功能
   - 集成微信登录
   - 添加报名功能

## 常见问题

### Q: 为什么打开页面后无法正常使用？
A: 请确保使用现代浏览器，并检查是否禁用了cookie功能。

### Q: 如何添加更多用户？
A: 在管理员页面(`admin.html`)中使用正确的格式输入用户数据并点击导入。

### Q: 用户登录时提示"未查到姓名信息"？
A: 请检查输入的姓名是否与管理员导入的姓名完全一致。

## 技术支持
如需技术支持，请联系系统管理员。