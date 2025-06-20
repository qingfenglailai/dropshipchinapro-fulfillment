import os
import requests

# 读取环境变量中的API KEY
api_key = os.getenv('API_KEY')
if not api_key:
    raise ValueError("API_KEY environment variable is not set")

# 设置API端点
url = "https://dropshipchinapro.com/orders"

# 设置请求头部，包含API密钥
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# 发送GET请求到/orders端点
response = requests.get(url, headers=headers)

# 检查响应状态码
if response.status_code == 200:
    print("Orders retrieved successfully:")
    print(response.json())
else:
    print("Failed to retrieve orders:")
    print(response.status_code, response.text)