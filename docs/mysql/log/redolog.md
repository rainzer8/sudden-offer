# redo log（重做日志）

> InnoDB 的 crash-safe 机制核心——保证事务的持久性。

---

## 🔑 为什么需要 redo log？

MySQL 数据在磁盘，每次读写都走磁盘太慢。InnoDB 的做法：

1. 修改先写内存（Buffer Pool）
2. 写 redo log（顺序写，很快）
3. 后台异步刷脏页到磁盘

**崩溃恢复时**：通过 redo log 恢复未刷盘的数据。

---

## 📐 redo log 结构

- **循环写**：固定大小，写满后触发 checkpoint
- **WAL 技术**：Write-Ahead Logging，先写日志再写磁盘
- **刷盘策略**：`innodb_flush_log_at_trx_commit`

---

> 📖 相关阅读：[undo log + redo log + bin log 协作](/mysql/log/how_update)
