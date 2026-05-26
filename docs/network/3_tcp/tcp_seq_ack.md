# TCP 序列号和确认号

> TCP 通过序列号和确认号实现可靠传输的核心机制。

---

## 🔢 序列号（Sequence Number）

- 标识 TCP 报文段中数据部分的**第一个字节**
- 初始序列号（ISN）随机生成，防止历史连接混淆
- Wireshark 默认显示相对序列号

## ✅ 确认号（Acknowledgment Number）

- 表示**期望收到的下一个字节**的序列号
- 即：已成功接收的数据字节数 + 1
- 累计确认：ACK n 表示 n-1 及之前全收到

---

> 📖 深入：[TCP 三次握手与四次挥手](/network/3_tcp/tcp_interview)
