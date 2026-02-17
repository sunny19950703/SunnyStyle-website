# 如何接收报价请求通知

## 当前状态

目前表单提交后，报价请求会保存在浏览器的 localStorage 中。您可以通过以下方式查看：

### 方法1：浏览器控制台查看
1. 按 F12 打开开发者工具
2. 切换到 Console 标签
3. 输入以下命令查看所有报价：
   ```javascript
   JSON.parse(localStorage.getItem('quoteSubmissions'))
   ```

### 方法2：Admin 面板查看
1. 滚动到页面底部
2. 点击 "Admin" 链接
3. 或按 `Ctrl + Shift + A` 显示管理按钮
4. 登录后查看所有报价请求

---

## 如何设置邮件通知（推荐）

### 选项1：EmailJS（最简单，无需后端）

1. **注册 EmailJS**
   - 访问 https://www.emailjs.com/
   - 注册免费账户

2. **创建邮件服务**
   - 点击 "Email Services"
   - 添加服务（Gmail、Outlook等）
   - 记下 Service ID

3. **创建邮件模板**
   - 点击 "Email Templates"
   - 创建新模板
   - 使用以下变量：
     ```
     {{email}}
     {{firstName}}
     {{lastName}}
     {{phone}}
     {{company}}
     {{product}}
     {{message}}
     ```
   - 记下 Template ID

4. **获取 Public Key**
   - 点击 "Account" → "General"
   - 找到 Public Key

5. **更新代码**
   在 `js/main.js` 中添加 EmailJS SDK：
   ```html
   <!-- 在 index.html 的 </body> 前添加 -->
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

   修改 `sendQuoteEmailNotification` 函数：
   ```javascript
   function sendQuoteEmailNotification(data) {
       emailjs.init("YOUR_PUBLIC_KEY");
       
       emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
           email: data.email,
           firstName: data.firstName || '',
           lastName: data.lastName || '',
           phone: data.phone || '',
           company: data.company || '',
           product: data.product || '',
           message: data.message || ''
       })
       .then(function(response) {
           console.log("Email sent successfully!", response);
       }, function(error) {
           console.log("Email failed to send:", error);
       });
   }
   ```

---

### 选项2：Formspree（简单表单后端）

1. **注册 Formspree**
   - 访问 https://formspree.io/
   - 注册账户

2. **创建表单**
   - 点击 "New Project"
   - 创建新表单
   - 获取表单 endpoint URL（如：`https://formspree.io/f/YOUR_FORM_ID`）

3. **修改 HTML**
   在 `index.html` 中修改表单：
   ```html
   <form id="quoteForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

4. **禁用 JavaScript 表单处理**
   注释掉 `js/main.js` 中的表单提交代码，或删除 `event.preventDefault()`

---

### 选项3：Netlify Forms（如果使用 Netlify 托管）

1. **修改 HTML**
   ```html
   <form id="quoteForm" name="quote" netlify>
   ```

2. **部署到 Netlify**
   - 将网站部署到 Netlify
   - 在 Netlify 后台查看表单提交

---

### 选项4：自建后端 API（最灵活）

如果您有技术能力，可以创建自己的后端：

**Node.js + Nodemailer 示例：**
```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-app-password'
    }
});

app.post('/api/quote', (req, res) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'kingskywing@gmail.com',
        subject: 'New Quote Request',
        text: generateEmailContent(req.body)
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send('Email sent: ' + info.response);
        }
    });
});
```

---

## 推荐方案

| 方案 | 难度 | 成本 | 适用场景 |
|------|------|------|----------|
| EmailJS | 简单 | 免费（200封/月） | 小型网站 |
| Formspree | 简单 | 免费（50封/月） | 小型网站 |
| Netlify Forms | 简单 | 免费（100封/月） | 使用 Netlify 托管 |
| 自建后端 | 复杂 | 服务器费用 | 大型网站 |

---

## 当前配置的邮箱

在 `js/main.js` 中修改以下配置：
```javascript
const EMAIL_CONFIG = {
    recipientEmail: 'kingskywing@gmail.com', // ← 修改为您的邮箱
};
```

---

**需要帮助设置邮件通知吗？请告诉我您选择哪种方案，我可以提供更详细的指导！**
