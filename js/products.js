// Product Data - Industrial Equipment
const products = [
    {
        id: 1,
        name: "JK3200 Electric Handheld Packaging Machine",
        category: "Strapping Equipment",
        price: "CAD $699",
        image: "images/product1-main.jpg",
        images: [
            "images/product1-main.jpg",
            "images/product1-1.jpg",
            "images/product1-2.jpg",
            "images/product1-3.jpg",
            "images/product1-4.jpg",
            "images/product1-5.jpg"
        ],
        video: "images/product1-video.mp4",
        shortDesc: "Portable electric strapping tool for 13-16mm PP/PET straps",
        fullDesc: "The JK3200 is a professional handheld electric strapping machine designed for mobile packaging operations. Features friction welding sealing, adjustable tension (900-3200N), and long-lasting battery for efficient strapping anywhere.",
        specs: {
            "Model": "JK3200",
            "Color": "Green",
            "Strap Width": "13-16mm",
            "Strap Thickness": "0.4-1.2mm",
            "Battery": "4.0A/h 50/60Hz 57.6Wh",
            "Battery Life": "90 minutes for 250-350 cycles",
            "Speed": "100-200mm/s",
            "Sealing Type": "Friction Welding",
            "Tension Force": "900-3200N",
            "Dimensions": "380×130×130mm"
        },
        features: [
            "One-handed operation design",
            "Friction welding sealing technology",
            "Adjustable tension 900-3200N",
            "Long-lasting lithium battery",
            "Lightweight portable design",
            "LED battery indicator"
        ],
        service: {
            warranty: "1 Year Warranty",
            support: "Online Support, Video Technical Support",
            customization: "Logo Customization Available"
        },
        attributes: {
            "Application": "Transportation, Packaging",
            "Packaging Type": "Cartons",
            "Packaging Material": "Plastic",
            "Voltage": "110V-220V",
            "Power Type": "Electric Heat",
            "Automation Degree": "Automatic",
            "Core Components": "PLC, Gear, Bearing",
            "Warranty Period": "1 Year",
            "After-sales Service": "Online Support, Video Technical Support",
            "Machinery Test Report": "Available",
            "Video Outgoing-inspection": "Available",
            "Core Selling Points": "Easy Operation, High Safety, High Productivity, Multi-function",
            "Place of Origin": "Shandong, China",
            "Weight (KG)": "5.5",
            "Brand": "Jike",
            "Dimension (L×W×H)": "38*13*13cm"
        },
        description: `
            <h3>Product Overview</h3>
            <p>The JK3200 Electric Handheld Packaging Machine is a professional-grade portable strapping tool designed for efficient packaging operations. With its lightweight design and powerful battery, you can take this strapping machine anywhere - perfect for warehouses, construction sites, and mobile operations.</p>
            
            <h3>Product Specifications</h3>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Model</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">JK3200</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Color</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">Green</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Strap Width</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">13-16mm</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Strap Thickness</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">0.4-1.2mm</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Battery</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">4.0A/h 57.6Wh</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Endurance</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">90min (250-350 cycles)</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Speed</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">100-200mm/s</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Sealing</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">Friction Welding</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Tension Force</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">900-3200N</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Dimensions</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">380×130×130mm</td>
                </tr>
            </table>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>🔋 Long Battery Life:</strong> 90 minutes continuous operation, 250-350 strapping cycles per charge</li>
                <li><strong>💪 Powerful Tension:</strong> Adjustable from 900-3200N for various package sizes</li>
                <li><strong>🔥 Friction Welding:</strong> Creates strong, reliable seals without additional materials</li>
                <li><strong>👆 One-Handed Operation:</strong> Ergonomic design for easy handling</li>
                <li><strong>⚡ Fast Operation:</strong> 100-200mm/s strapping speed</li>
                <li><strong>🎯 Versatile:</strong> Works with 13-16mm PP and PET straps</li>
            </ul>
            
            <h3>Packaging & Shipping</h3>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%;">Selling Units</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">Single Item</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Single Package Size</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">48×20×30 cm</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Single Gross Weight</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">5.500 kg</td>
                </tr>
            </table>
            
            <h3>Package Contents</h3>
            <ul>
                <li>1 × JK3200 Electric Handheld Strapping Machine</li>
                <li>1 × 4.0Ah Lithium Battery</li>
                <li>1 × Battery Charger (220V)</li>
                <li>1 × User Manual (English)</li>
                <li>1 × Tool Kit</li>
                <li>1 × Carrying Case</li>
            </ul>
            
            <h3>Product Images</h3>
            <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
                <img src="images/详情图片_01.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_02.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_03.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_04.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_05.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_06.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_07.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_08.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_09.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_10.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_11.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/详情图片_12.jpg" style="width: 100%; border-radius: 8px;">
            </div>
            
            <h3>Video Demonstration</h3>
            <video controls style="width: 100%; border-radius: 8px; margin: 20px 0;">
                <source src="images/product1-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `
    },
    {
        id: 2,
        name: "Portable Mini Self-Loading Stacker 1.6m",
        category: "Stacker",
        price: "CAD $999",
        image: "images/主图-1.jpg",
        images: [
            "images/主图-1.jpg",
            "images/主图-2.jpg",
            "images/主图-3.jpg",
            "images/主图-4.jpg",
            "images/主图-5.jpg",
            "images/主图-6.jpg"
        ],
        video: "images/product2-video.mp4",
        detailImages: [
            "images/product2-detail-1.jpg",
            "images/product2-detail-2.jpg",
            "images/product2-detail-3.jpg",
            "images/product2-detail-4.jpg"
        ],
        shortDesc: "Portable mini self-loading stacker with 1.6m lifting height",
        fullDesc: "The FANGGONG Mini Electric Stacker has strong robust and classical designs. Ideal and handy choice for frequent lifting or for load weight maximum 300kg in industrial, laboratory, hospitals, office or other applications need a compact design and effortless lifting.",
        specs: {
            "Load Capacity": "300kg",
            "Max Lifting Height": "1,600mm",
            "Battery Type": "Lead Acid",
            "Terrain Adaptability": "Outdoor Paved, Indoor Floor",
            "Load Center Distance": "800mm",
            "Mast Type": "Two-Stage Mast",
            "Fork Width": "100mm",
            "Fork Length": "600mm",
            "Working Mode": "Standing Operation",
            "Drive Type": "Four-Wheel Drive",
            "Forklift Tire": "Solid Tire",
            "Travel Speed (Full Load)": "8.5 km/h",
            "Gradeability (Full Load)": "0.4",
            "Gradeability (No Load)": "0.4",
            "Wheelbase": "1700mm",
            "Battery Voltage": "12V/20Ah",
            "Self Weight": "71kg"
        },
        features: [
            "Maintenance free batteries",
            "Fully automatic battery charger",
            "Non-marking wheels with wheel stops",
            "Smooth-running castors for medium distances",
            "Compact design for narrow spaces",
            "Easy to operate and nearly maintenance free"
        ],
        service: {
            warranty: "1 Year Warranty",
            support: "Online Support, Video Technical Support",
            customization: "Logo Customization Available"
        },
        attributes: {
            "Condition": "New",
            "Applicable Industries": "Farms, Hotels, Construction Sites, Building Material Shops, Restaurants, Repair Shops, Advertising Companies, Production Workshops, Energy & Mining, Food Shops, Retail",
            "Place of Origin": "China",
            "Brand Name": "FANGGONG",
            "After-sales Service": "Online Support, Video Technical Support",
            "Machinery Test Report": "Available",
            "Video Outgoing-inspection": "Available"
        },
        description: `
            <h3>Product Overview</h3>
            <p>The FANGGONG Mini Electric Stacker is designed for frequent lifting operations with a maximum load capacity of 300kg. Its compact design makes it ideal for use in industrial settings, laboratories, hospitals, offices, and any application requiring effortless lifting in confined spaces.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>🔋 Maintenance Free:</strong> Equipped with maintenance-free batteries and fully automatic battery charger</li>
                <li><strong>🛞 Non-Marking Wheels:</strong> Wheel stops prevent slipping, suitable for clean environments</li>
                <li><strong>🚀 Smooth Operation:</strong> Castors enable medium length distance coverage</li>
                <li><strong>📦 Compact Design:</strong> Perfect for narrow spaces and tight corners</li>
                <li><strong>⚡ Easy to Operate:</strong> Nearly maintenance-free design for hassle-free use</li>
                <li><strong>🛡️ Safe & Clean:</strong> Completely clean operation with safety features</li>
            </ul>
            
            <h3>Technical Specifications</h3>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Load Capacity</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">300kg</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Max Lifting Height</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1,600mm</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Battery Type</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">Lead Acid</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Battery Voltage</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">12V/20Ah</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Self Weight</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">71kg</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Wheelbase</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1700mm</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Fork Length</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">600mm</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Fork Width</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">100mm</td>
                </tr>
            </table>
            
            <h3>Applications</h3>
            <p>Ideal for: Industrial facilities, Laboratories, Hospitals, Offices, Warehouses, Retail stores, Workshops</p>
            
            <h3>Product Images</h3>
            <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
                <img src="images/product2-detail-1.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product2-detail-2.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product2-detail-3.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product2-detail-4.jpg" style="width: 100%; border-radius: 8px;">
            </div>
            
            <h3>Video Demonstration</h3>
            <video controls style="width: 100%; border-radius: 8px; margin: 20px 0;">
                <source src="images/product2-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `
    },
    {
        id: 3,
        name: "Self-Loading Lifting Stacker 1000kg",
        category: "Stacker",
        price: "CAD $1,299",
        image: "images/主图-11.jpg",
        images: [
            "images/主图-11.jpg",
            "images/主图-12.jpg",
            "images/主图-13.jpg",
            "images/主图-14.jpg",
            "images/主图-15.jpg",
            "images/主图-16.jpg"
        ],
        video: "images/product3-video.mp4",
        detailImages: [
            "images/product3-detail-1.jpg",
            "images/product3-detail-2.jpg",
            "images/product3-detail-3.jpg",
            "images/product3-detail-4.jpg",
            "images/product3-detail-5.jpg",
            "images/product3-detail-6.jpg",
            "images/product3-detail-7.jpg"
        ],
        shortDesc: "Semi-electric portable self-loading stacker pallet forklift 1000kg",
        fullDesc: "Small truck forklift with automatic loading electric stacker, lightcase portable climbing forklift. Small and flexible, easy to work in narrow spaces. Self-weight only 71kg, easy to move and store.",
        specs: {
            "Load Capacity": "1000kg",
            "Max Lifting Height": "1,600mm",
            "Battery Type": "Lithium Ion",
            "Load Center Distance": "500mm",
            "Turning Radius": "1950mm",
            "Fork Length": "1000mm, 1150mm",
            "Drive Type": "Rear Drive",
            "Gradeability (Load)": "0.4",
            "Wheelbase": "1700mm",
            "Fork Specifications": "1220×125×50",
            "Model": "1000kg",
            "Battery Voltage": "24V",
            "Terrain Adaptability": "Outdoor Paved",
            "Mast Type": "Two-Stage Mast",
            "Fork Width": "696mm",
            "Working Mode": "Standing Operation",
            "Forklift Tire": "Polyurethane Tire",
            "Gradeability (No Load)": "0.4",
            "Side Shifter": "Electric Side Shifter"
        },
        features: [
            "High-power motor with thickened steel wire rope",
            "Safe lifting operation",
            "Small and flexible for narrow spaces",
            "Self-weight only 71kg for easy moving",
            "Detachable legs for space adaptation",
            "High-strength polyester wheels with brake device"
        ],
        service: {
            warranty: "1 Year Warranty",
            support: "Online Support, Video Technical Support",
            customization: "Logo Customization Available"
        },
        attributes: {
            "Condition": "New",
            "Place of Origin": "Hebei, China",
            "Brand Name": "Chuantian",
            "After-sales Service": "Online Support, Video Technical Support",
            "Machinery Test Report": "Available",
            "Video Outgoing-inspection": "Available"
        },
        description: `
            <h3>Product Overview</h3>
            <p>This semi-electric portable self-loading stacker is designed for efficient material handling with a 1000kg load capacity. Its compact and flexible design makes it perfect for working in narrow spaces, while the lightweight construction ensures easy transportation and storage.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>💪 High Power Motor:</strong> Thickened steel wire rope ensures safe lifting operations</li>
                <li><strong>🎯 Flexible Design:</strong> Small size perfect for narrow space operations</li>
                <li><strong>🚀 Lightweight:</strong> Only 71kg self-weight for easy moving and storage</li>
                <li><strong>🔧 Adjustable Legs:</strong> Can be assembled or disassembled according to space requirements</li>
                <li><strong>🛞 Durable Wheels:</strong> High-strength polyester wheels with brake device prevent slipping</li>
                <li><strong>⚡ Electric Operation:</strong> Semi-electric design for efficient lifting</li>
            </ul>
            
            <h3>Technical Specifications</h3>
            <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Load Capacity</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1000kg</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Max Lifting Height</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1,600mm</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Battery Type</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">Lithium Ion</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Battery Voltage</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">24V</td>
                </tr>
                <tr style="background: #f7fafc;">
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Turning Radius</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1950mm</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Wheelbase</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1700mm</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Fork Length</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">1000mm/1150mm</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Fork Width</td>
                    <td style="padding: 10px; border: 1px solid #e2e8f0;">696mm</td>
                </tr>
            </table>
            
            <h3>Applications</h3>
            <p>Perfect for: Warehouses, Loading docks, Construction sites, Workshops, Retail stores, Manufacturing facilities</p>
            
            <h3>Product Images</h3>
            <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
                <img src="images/product3-detail-1.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product3-detail-2.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product3-detail-3.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product3-detail-4.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product3-detail-5.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product3-detail-6.jpg" style="width: 100%; border-radius: 8px;">
                <img src="images/product3-detail-7.jpg" style="width: 100%; border-radius: 8px;">
            </div>
            
            <h3>Video Demonstration</h3>
            <video controls style="width: 100%; border-radius: 8px; margin: 20px 0;">
                <source src="images/product3-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `
    },
    {
        id: 4,
        name: "Coming Soon - New Product",
        category: "Material Handling",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    },
    {
        id: 5,
        name: "Coming Soon - New Product",
        category: "Material Handling",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    },
    {
        id: 6,
        name: "Coming Soon - New Product",
        category: "Strapping Equipment",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    },
    {
        id: 7,
        name: "Coming Soon - New Product",
        category: "Material Handling",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    },
    {
        id: 8,
        name: "Coming Soon - New Product",
        category: "Strapping Equipment",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    },
    {
        id: 9,
        name: "Coming Soon - New Product",
        category: "Material Handling",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    },
    {
        id: 10,
        name: "Coming Soon - New Product",
        category: "Strapping Equipment",
        price: "CAD $0.00",
        image: "⏳",
        images: [],
        shortDesc: "上新中，敬请期待！",
        fullDesc: "This product is currently in preparation. Stay tuned for the latest updates!",
        specs: {
            "Status": "Coming Soon"
        },
        features: [
            "Coming Soon"
        ],
        service: {
            warranty: "Coming Soon",
            support: "Coming Soon",
            customization: "Coming Soon"
        },
        attributes: {
            "Status": "Coming Soon"
        },
        description: `
            <h3>产品上新中</h3>
            <p style="text-align: center; font-size: 1.5rem; color: var(--accent-color); margin: 40px 0;">
                ⏳ 上新中，敬请期待！<br><br>
                <span style="font-size: 1rem; color: var(--text-light);">This product is currently in preparation.<br>Stay tuned for the latest updates!</span>
            </p>
        `
    }
];
