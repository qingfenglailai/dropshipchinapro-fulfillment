const fetch = require('node-fetch');
const dotenv = require('dotenv');

// 加载环境变量
dotenv.config();

// 读取环境变量中的API KEY
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable is not set");
}

// 设置API端点
const url = "https://dropshipchinapro.com/orders";

// 设置请求头部，包含API密钥
const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
};

// 发送GET请求到/orders端点
fetch(url, { headers })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Failed to retrieve orders: ${response.status}`);
        }
    })
    .then(orders => {
        console.log("Orders retrieved successfully:");
        console.log(orders);
    })
    .catch(error => {
        console.error("Error retrieving orders:", error.message);
    });