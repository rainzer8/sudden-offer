# undo log、redo log、bin log 是怎么协作的？

> 一条更新语句的执行，涉及到 MySQL 三种日志的精密配合。

---

## 📋 三种日志分工

| 日志 | 作用 | 所属 |
|------|------|------|
| undo log | 回滚 + MVCC | InnoDB |
| redo log | 崩溃恢复 | InnoDB |
| binlog | 主从复制 + 数据恢复 | Server 层 |

---

## 🔄 更新语句执行流程

```
1. 执行器找存储引擎取数据
2. InnoDB 查 Buffer Pool，没有则磁盘加载
3. 写入 undo log（旧值），更新内存数据
4. 写入 redo log（prepare 状态）
5. 执行器写 binlog
6. redo log 提交（commit 状态）← 两阶段提交
```

---

> 📖 深入阅读：[undo log、redo log、bin log 详解](/mysql/log/how_update)
