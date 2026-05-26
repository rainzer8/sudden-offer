# 索引下推（ICP）

> Index Condition Pushdown，MySQL 5.6 引入的查询优化特性。

---

## 🎯 什么是索引下推

在联合索引查询时，把部分 WHERE 条件下推到存储引擎层过滤，减少回表次数。

**没有 ICP**：存储引擎查出所有记录 → Server 层过滤
**有 ICP**：存储引擎先过滤 → 只返回符合条件的记录

---

## 📊 举例说明

联合索引 `(name, age)`：

```sql
SELECT * FROM user WHERE name LIKE '张%' AND age = 20;
```

- 无 ICP：查出所有姓张的记录回表，Server 再过滤 age=20
- 有 ICP：存储引擎直接过滤 age=20，减少回表

---

> 📖 更多索引相关内容：[MySQL 索引面试题](/mysql/index/index_interview)
