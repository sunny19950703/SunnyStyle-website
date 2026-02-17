// 产品数据模板 - 用于从表格导入
// 填写说明：
// 1. 在表格中填写每个产品的信息
// 2. 图片路径可以是相对路径（如 images/xxx.jpg）或绝对路径
// 3. 多张图片用逗号分隔
// 4. 如果没有图片，留空即可

const productsTemplate = [
    {
        id: 1,
        name: "",  // 产品名称
        category: "",  // 分类
        price: "",  // 价格，如 CAD $699
        
        // 图片配置
        mainImage: "",  // 主图路径（产品卡片显示）
        galleryImages: "",  // 轮播图路径，多张用逗号分隔，如："images/1.jpg,images/2.jpg,images/3.jpg"
        videoPath: "",  // 视频路径，没有则留空
        
        // 产品信息
        shortDesc: "",  // 简短描述（卡片下方显示）
        fullDesc: "",  // 完整描述（详情页顶部）
        
        // 规格 - 按实际情况填写，可以添加或删除
        specs: {
            "规格1名称": "规格1值",
            "规格2名称": "规格2值",
            "规格3名称": "规格3值",
            "规格4名称": "规格4值",
            "规格5名称": "规格5值"
        },
        
        // 特点 - 数组形式
        features: [
            "特点1",
            "特点2",
            "特点3",
            "特点4",
            "特点5",
            "特点6"
        ],
        
        // 服务 - 通常保持一致
        service: {
            warranty: "1 Year Warranty",
            support: "Online Support, Video Technical Support",
            customization: "Logo Customization Available"
        },
        
        // 属性 - 按实际情况填写
        attributes: {
            "属性1名称": "属性1值",
            "属性2名称": "属性2值",
            "属性3名称": "属性3值",
            "属性4名称": "属性4值",
            "属性5名称": "属性5值"
        },
        
        // 详细描述 - 支持HTML格式
        description: `
            <h3>Product Overview</h3>
            <p>产品概述内容...</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>特点1标题：</strong>特点1描述</li>
                <li><strong>特点2标题：</strong>特点2描述</li>
                <li><strong>特点3标题：</strong>特点3描述</li>
            </ul>
            
            <h3>Technical Specifications</h3>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">规格1</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">值1</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">规格2</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">值2</td>
                </tr>
            </table>
            
            <h3>Product Images</h3>
            <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
                <!-- 图片会自动插入这里 -->
            </div>
        `
    }
    // 复制上面的模板，修改id为2,3,4...来添加更多产品
];

// 导出模板
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsTemplate;
}
