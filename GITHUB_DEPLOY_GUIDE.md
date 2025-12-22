# GitHub Pages 部署指南

本指南将帮助您通过 GitHub 网页界面完成会务系统的部署，无需在本地安装 Git。

## 步骤 1：创建 GitHub 账号

1. 打开浏览器，访问 [GitHub 官网](https://github.com/)
2. 点击右上角的 "Sign up" 按钮
3. 输入您的邮箱地址、密码和用户名
4. 完成验证步骤并创建账号
5. 前往您的邮箱，点击验证链接激活账号

## 步骤 2：创建新仓库

1. 登录 GitHub 账号后，点击右上角的 "+" 号图标
2. 选择 "New repository"
3. 在 "Repository name" 字段中输入仓库名称（如：`conference-system`）
4. 在 "Description" 字段中可选择输入仓库描述（如："会务系统 - 会议管理平台"）
5. 确保仓库可见性设置为 "Public"（公开仓库）
6. 无需勾选其他选项，直接点击 "Create repository" 按钮

## 步骤 3：上传项目文件

1. 进入刚创建的仓库页面
2. 点击 "Add file" 按钮，选择 "Upload files"
3. 找到您的项目文件夹（`conference-system-v75`）
4. 选择以下文件并拖拽到上传区域：
   - `admin.html`
   - `index.html`
   - `README.md`（可选，如需要可一并上传）
5. 滚动到页面底部，在 "Commit changes" 区域输入提交信息（如："Initial commit"）
6. 点击 "Commit changes" 按钮完成上传

## 步骤 4：启用 GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 点击左侧菜单中的 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - 在 "Branch" 部分，选择 "main" 分支
   - 在 "Folder" 部分，选择 "/root"
4. 点击 "Save" 按钮
5. 等待几秒钟，页面会显示 "Your site is live at https://[your-username].github.io/[repository-name]/"

## 步骤 5：访问部署后的网站

1. 复制生成的 URL（如：`https://your-username.github.io/conference-system/`）
2. 在浏览器中访问：
   - 管理员界面：`https://your-username.github.io/conference-system/admin.html`
   - 用户界面：`https://your-username.github.io/conference-system/index.html`

## 步骤 6：生成扫码访问的 QR 码

1. 访问在线 QR 码生成工具（如：[草料二维码](https://cli.im/) 或 [QR Code Generator](https://www.qrcode-generator.com/)）
2. 输入您的用户界面 URL（如：`https://your-username.github.io/conference-system/index.html`）
3. 生成 QR 码并保存
4. 用户使用手机扫码即可访问系统

## 注意事项

1. **部署时间**：GitHub Pages 部署可能需要 1-2 分钟生效，请耐心等待
2. **404 错误**：如果遇到 404 错误，请等待几分钟后重试
3. **更新内容**：如需更新网站内容，只需在 GitHub 仓库中修改相应文件，GitHub 会自动重新部署
4. **数据存储**：系统使用浏览器 cookie 存储数据，不同浏览器或设备之间的数据不共享
5. **管理员功能**：首次使用时，请先访问 `admin.html` 页面导入测试数据

## 示例数据

如果您需要测试数据，可以使用以下格式在 `admin.html` 中导入：

```
张三,13800138000,酒店A,A区 01,第 1 桌
李四,13800138001,酒店B,A区 02,第 1 桌
王五,13800138002,酒店A,B区 01,第 2 桌
赵六,13800138003,酒店C,B区 02,第 2 桌
```

## 技术支持

如果您在部署过程中遇到任何问题，请参考：
- [GitHub Pages 官方文档](https://docs.github.com/cn/pages)
- 或联系您的系统管理员寻求帮助
