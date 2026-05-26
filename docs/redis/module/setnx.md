# Redis 实现分布式锁

> 用 `SETNX` + Lua 脚本实现可靠的分布式锁。

---

## 🔑 基本实现

```bash
# 加锁（SET key value NX PX timeout）
SET lock_key unique_value NX PX 30000

# 解锁（Lua 保证原子性）
if redis.call("get", KEYS[1]) == ARGV[1] then
    return redis.call("del", KEYS[1])
else
    return 0
end
```

---

## ⚠️ 注意事项

- **设置过期时间**：防止死锁
- **唯一 value**：解锁时验证，防止误删别人的锁
- **Lua 原子解锁**：GET + DEL 必须原子执行

---

> 📖 进阶：[Redlock 算法](/redis/cluster/redlock)
