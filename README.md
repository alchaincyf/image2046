# 图像魔方 img2046.com

图像魔方是一个强大的在线图像处理工具集，基于 Next.js 14 开发，提供多种图像处理功能和 AI 创意工具。

## 功能

1. AI 文生图
   - 通过文字描述生成独特的AI图像
   - 适用于各种创作场景，激发创意灵感

2. 文字卡片生成
   - 创建精美的文字卡片
   - 自定义字体、颜色和背景
   - 支持 Markdown 格式
   - 适合社交媒体分享和营销使用

3. 图片压缩
   - 高效压缩图片文件大小
   - 保持画质的同时优化加载速度
   - 提升网站性能

4. 调整大小
   - 快速调整图片尺寸
   - 保持比例或自定义大小
   - 适应各种平台要求

5. 图片格式转换
   - 支持 JPG、PNG、WEBP、GIF 等格式之间的转换
   - 满足不同场景需求

6. SVG 编辑器
   - 在线创建和编辑 SVG 图形
   - 设计可缩放的矢量图像
   - 适用于各种设计需求

7. 极简 Logo 设计
   - 使用 AI 技术快速生成简洁现代的 logo 设计
   - 为品牌打造独特标识

8. SVG 转 PPT 生成器
   - 将 SVG 代码转换为精美的 PPT 幻���片
   - 支持多张幻灯片生成
   - 提供预览和导出功能
   - 适用于快速创建专业演示文稿

9. 人物主体背景文字
   - 在照片中人物主体背后添加大型文字水印
   - 使用 remove.bg API 智能识别并分离人物主体
   - 自定义文字内容、大小、颜色和透明度
   - 支持调整文字位置和旋转角度
   - 提供多种预设文字样式模板
   - 适用于创意摄影、社交媒体内容、品牌营销等场景

实现方式：
1. 前端使用 React 和 Material-UI 构建用户界面
2. 用户上传图片并输入文字内容
3. 将图片发送到后端 API
4. 后端调用 remove.bg API 去除图片背景
5. 前端接收去除背景后的图片
6. 使用 Canvas API 在前端绘制背景、文字水印和人物主体
7. 用户可以实时调整文字样式和位置
8. 生成最终图片并提供下载

从审美角度的优化建议：
1. 提供多种字体选择，包括经典衬线字体和现代无衬线字体
2. 实现文字渐变色效果，增加视觉吸引力
3. 添加文字阴影或描边选项，提高在不同背景上的可读性
4. 支持多行文字排版，并提供对齐选项（左对齐、居中、右对齐）
5. 引入图层概念，允许用户调整文字、背景和人物主体的层级关系
6. 提供预设的配色方案，帮助用户快速创建协调的视觉效果
7. 支持添加简单的图形元素（如线条、形状）来增强设计感
8. 实现文字蒙版效果，让人物可以部分遮挡文字，增加深度感
9. 添加滤镜选项，统一调整整体图片的色调和氛围
10. 提供画布尺寸预设，适应不同社交媒体平台的图片尺寸要求

## 使用方法

1. 访问 https://www.img2046.com/
2. 从左侧菜单选择所需功能
3. 按照页面提示上传图片或输入所需信息
4. 点击相应按钮进行处理或生成
5. 下载或保存处理结果

## 技术栈

- Next.js 14 (App Router)
- React
- TypeScript
- Material-UI (MUI)
- Framer Motion
- React Markdown
- TensorFlow.js
- BodyPix

## 环境变量

请确保在 .env.local 文件中设置以下环境变量：

- SILICONFLOW_API_KEY: 硅基流动 API 密钥（用于 AI 图片生成）

## 开发

1. 克隆仓库
2. 安装依赖: `npm install`
3. 运行开发服务器: `npm run dev`
4. 在浏览器中打开 http://localhost:3000

## 部署

本项目已部署在 Vercel 上。如需自行部署，请确保正确设置环境变量。

## SEO 优化

项目已包含以下 SEO 优化措施：
- 元数据设置（标题、描述）
- 结构化数据
- 响应式设计，适配移动端和桌面端

## 性能优化

- 使用 Next.js 的图像组件进行图片优化
- 使用 Framer Motion 实现平滑的页面过渡效果
- 响应式设计，确保在各种设备上的良好体验

## 下一步规划

1. 增加更多 AI 驱动的图像处理功能，如图像修复、风格迁移等
2. 实现用户账户系统，支持保存和管理处理历史
3. 添加批量处理功能，提高工作效率
4. 集成更多第三方 AI 服务，提供更丰富的创意工具
5. 优化移动端体验，开发移动应用版本
6. 增加多语言支持，扩大用户群体
7. 实现图像处理 API，方便开发者集成到自己的应用中
8. 优化"人物主体背景文字"功能：
   - 集成更多高质量字体
   - 添加文字特效（如霓虹灯效果、金属质感等）
   - 支持上传自定义背景图片
   - 引入 AI 辅助排版功能，自动推荐文字位置和样式
   - 开发模板系统，允许用户保存和分享自己的设计
   - 集成社交媒体直接分享功能

## 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目。您可以通过 GitHub 项目页面参与贡献。

## 联系方式

如有任何问题或建议，请通过以下方式联系作者：
- 微信：alchain
- 邮箱：alchaincyf@gmail.com

## 许可证

[MIT License](LICENSE)
