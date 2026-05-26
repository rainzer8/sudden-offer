# Redlock 分布式锁算法

> Redis 作者 antirez 提出的分布式锁算法，解决单节点 Redis 锁的可靠性问题。

---

## 🔒 为什么需要 Redlock？

单节点 Redis 锁如果挂了，锁就没了。Redlock 通过**多节点投票**解决：

```
1. 获取当前时间
2. 依次向 N 个独立 Redis 节点请求锁
3. 计算获取锁的耗时
4. 多数节点（≥ N/2+1）获取成功 && 总耗时 < 锁有效期 → 成功
```

---

> ⚠️ 分布式锁需谨慎设计，考虑网络分区、时钟漂移等边界情况。

> 📖 相关：[数据库和缓存一致性](/redis/architecture/mysql_redis_consistency)
