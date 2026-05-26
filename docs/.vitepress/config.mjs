import { defineConfig } from 'vitepress'

// 侧边栏配置 - 完全匹配小林的站点结构
const sidebar = {
  '/network/': [
    { text: '图解网络', items: [
      { text: '概述', link: '/network/' },
    ]},
    { text: '基础篇', collapsed: false, items: [
      { text: 'TCP/IP 网络模型', link: '/network/1_base/tcp_ip_model' },
      { text: '键入网址到网页显示', link: '/network/1_base/what_happen_url' },
      { text: 'Linux 系统是如何收发网络包的？', link: '/network/1_base/how_os_deal_network_package' },
    ]},
    { text: 'HTTP 篇', collapsed: false, items: [
      { text: 'HTTP 常见面试题', link: '/network/2_http/http_interview' },
      { text: 'HTTP/1.1 如何优化？', link: '/network/2_http/http_optimize' },
      { text: 'HTTPS RSA 握手解析', link: '/network/2_http/https_rsa' },
      { text: 'HTTPS ECDHE 握手解析', link: '/network/2_http/https_ecdhe' },
      { text: 'HTTPS 如何优化？', link: '/network/2_http/https_optimize' },
      { text: 'HTTP/2 详解', link: '/network/2_http/http2' },
      { text: 'HTTP/3 详解', link: '/network/2_http/http3' },
      { text: 'WebSocket 详解', link: '/network/2_http/http_websocket' },
      { text: 'RPC 详解', link: '/network/2_http/http_rpc' },
    ]},
    { text: 'TCP 篇', collapsed: false, items: [
      { text: 'TCP 三次握手与四次挥手', link: '/network/3_tcp/tcp_interview' },
      { text: 'TCP 重传、滑动窗口、流量控制、拥塞控制', link: '/network/3_tcp/tcp_feature' },
      { text: 'TCP 实战抓包分析', link: '/network/3_tcp/tcp_tcpdump' },
      { text: 'TCP 半连接队列和全连接队列', link: '/network/3_tcp/tcp_queue' },
      { text: 'TCP 序列号和确认号', link: '/network/3_tcp/tcp_seq_ack' },
      { text: 'TCP 优化策略', link: '/network/3_tcp/tcp_optimize' },
      { text: 'TCP 和 TLS 握手', link: '/network/3_tcp/tcp_tls' },
      { text: 'TCP 连接异常情况分析', link: '/network/3_tcp/tcp_problem' },
      { text: 'TCP 内核参数', link: '/network/3_tcp/tcp_no_accpet' },
      { text: 'SYN 报文丢弃', link: '/network/3_tcp/syn_drop' },
      { text: '已建立连接的 TCP 收到 SYN', link: '/network/3_tcp/challenge_ack' },
      { text: '四次挥手收到乱序 FIN', link: '/network/3_tcp/out_of_order_fin' },
      { text: 'TCP 和 HTTP Keep-Alive', link: '/network/3_tcp/tcp_http_keepalive' },
      { text: 'TCP 端口号', link: '/network/3_tcp/port' },
      { text: 'TCP 服务端挂了和崩溃', link: '/network/3_tcp/tcp_down_and_crash' },
      { text: '拔掉网线后 TCP 连接', link: '/network/3_tcp/tcp_unplug_the_network_cable' },
      { text: 'TCP 丢包', link: '/network/3_tcp/tcp_drop' },
      { text: 'TIME_WAIT 状态', link: '/network/3_tcp/tcp_tw_reuse_close' },
      { text: 'TIME_WAIT 收到 SYN', link: '/network/3_tcp/time_wait_recv_syn' },
      { text: 'QUIC 协议', link: '/network/3_tcp/quic' },
      { text: 'TCP 序列号与安全', link: '/network/3_tcp/isn_deff' },
    ]},
    { text: 'IP 篇', collapsed: false, items: [
      { text: 'IP 基础知识', link: '/network/4_ip/ip_base' },
      { text: 'ping 的工作原理', link: '/network/4_ip/ping' },
      { text: '断网了还能 ping 通 127.0.0.1？', link: '/network/4_ip/ping_lo' },
    ]},
    { text: '学习心得', items: [
      { text: '如何学习计算机网络？', link: '/network/5_learn/learn_network' },
      { text: '画图工具', link: '/network/5_learn/draw' },
    ]},
  ],

  '/os/': [
    { text: '图解系统', items: [
      { text: '概述', link: '/os/' },
    ]},
    { text: '硬件结构', collapsed: false, items: [
      { text: 'CPU 是如何执行程序的？', link: '/os/1_hardware/how_cpu_run' },
      { text: 'CPU 缓存一致性', link: '/os/1_hardware/cpu_mesi' },
      { text: 'CPU 是如何处理任务的？', link: '/os/1_hardware/how_cpu_deal_task' },
      { text: '如何让CPU跑的更快？', link: '/os/1_hardware/how_to_make_cpu_run_faster' },
      { text: '软中断', link: '/os/1_hardware/soft_interrupt' },
      { text: '浮点数', link: '/os/1_hardware/float' },
      { text: '存储器的层次结构', link: '/os/1_hardware/storage' },
    ]},
    { text: '操作系统结构', items: [
      { text: 'Linux 内核 vs Windows 内核', link: '/os/2_os_structure/linux_vs_windows' },
    ]},
    { text: '内存管理', collapsed: false, items: [
      { text: '虚拟内存', link: '/os/3_memory/vmem' },
      { text: 'malloc 是如何分配内存的？', link: '/os/3_memory/malloc' },
      { text: '内存满了会发生什么？', link: '/os/3_memory/alloc_mem' },
      { text: '在 4GB 物理内存的机器上申请 8G 内存', link: '/os/3_memory/linux_mem' },
      { text: '如何避免预读失效和缓存污染？', link: '/os/3_memory/cache_lru' },
      { text: '深入理解 Linux 虚拟内存管理', link: '/os/3_memory/linux_mem2' },
      { text: '内存回收', link: '/os/3_memory/mem_reclaim' },
    ]},
    { text: '进程管理', collapsed: false, items: [
      { text: '进程、线程基础知识', link: '/os/4_process/process_base' },
      { text: '进程间通信', link: '/os/4_process/process_commu' },
      { text: '多线程同步', link: '/os/4_process/multithread_sync' },
      { text: '死锁', link: '/os/4_process/deadlock' },
      { text: '悲观锁与乐观锁', link: '/os/4_process/pessim_and_optimi_lock' },
      { text: '一个进程最多可以创建多少线程？', link: '/os/4_process/create_thread_max' },
      { text: '线程崩溃了进程也会崩溃吗？', link: '/os/4_process/thread_crash' },
    ]},
    { text: '调度算法', items: [
      { text: '进程调度算法', link: '/os/5_schedule/schedule' },
    ]},
    { text: '文件系统', collapsed: false, items: [
      { text: '文件系统全家桶', link: '/os/6_file_system/file_system' },
      { text: '进程写文件时，进程崩溃了数据会丢吗？', link: '/os/6_file_system/pagecache' },
    ]},
    { text: '设备管理', items: [
      { text: '键盘敲入 A 字母时操作系统发生了什么？', link: '/os/7_device/device' },
    ]},
    { text: '网络系统', collapsed: false, items: [
      { text: '什么是零拷贝？', link: '/os/8_network_system/zero_copy' },
      { text: 'I/O 多路复用：select/poll/epoll', link: '/os/8_network_system/selete_poll_epoll' },
      { text: '高性能网络模式：Reactor 和 Proactor', link: '/os/8_network_system/reactor' },
      { text: '什么是一致性哈希？', link: '/os/8_network_system/hash' },
    ]},
    { text: 'Linux 命令', items: [
      { text: '如何查看网络的性能指标？', link: '/os/9_linux_cmd/linux_network' },
      { text: 'PV 和 UV', link: '/os/9_linux_cmd/pv_uv' },
    ]},
    { text: '学习心得', items: [
      { text: '如何学习操作系统？', link: '/os/10_learn/learn_os' },
      { text: '画图工具', link: '/os/10_learn/draw' },
    ]},
  ],

  '/mysql/': [
    { text: '图解MySQL', items: [
      { text: '概述', link: '/mysql/' },
    ]},
    { text: '基础篇', items: [
      { text: 'SQL 查询语句的执行流程', link: '/mysql/base/how_select' },
      { text: 'MySQL 行格式', link: '/mysql/base/row_format' },
    ]},
    { text: '索引篇', collapsed: false, items: [
      { text: '索引常见面试题', link: '/mysql/index/index_interview' },
      { text: '从数据页的角度看 B+ 树', link: '/mysql/index/page' },
      { text: '为什么 MySQL 采用 B+ 树作为索引？', link: '/mysql/index/why_index_chose_bpuls_tree' },
      { text: '索引失效有哪些？', link: '/mysql/index/index_lose' },
      { text: 'MySQL 使用 like "%x" 索引一定会失效吗？', link: '/mysql/index/index_issue' },
      { text: 'count(*) 和 count(1) 有什么区别？', link: '/mysql/index/count' },
      { text: 'MySQL 单表不要超过 2000W 行？', link: '/mysql/index/2000w' },
      { text: '索引下推', link: '/mysql/index/limit' },
    ]},
    { text: '事务篇', items: [
      { text: '事务隔离级别是怎么实现的？', link: '/mysql/transaction/mvcc' },
      { text: '幻读是怎么被解决的？', link: '/mysql/transaction/phantom' },
    ]},
    { text: '锁篇', collapsed: false, items: [
      { text: 'MySQL 有哪些锁？', link: '/mysql/lock/mysql_lock' },
      { text: 'MySQL 是怎么加锁的？', link: '/mysql/lock/how_to_lock' },
      { text: 'update 语句加锁分析', link: '/mysql/lock/how_update' },
      { text: 'MySQL 记录锁+间隙锁可以防止删除操作而导致的幻读吗？', link: '/mysql/lock/lock_phantom' },
      { text: 'MySQL 死锁了怎么办？', link: '/mysql/lock/deadlock' },
      { text: '字节面试：加了什么锁导致死锁？', link: '/mysql/lock/show_lock' },
      { text: 'update 没加索引会锁全表？', link: '/mysql/lock/update_index' },
    ]},
    { text: '日志篇', items: [
      { text: 'undo log、redo log、bin log', link: '/mysql/log/how_update' },
      { text: 'redo log', link: '/mysql/log/redolog' },
    ]},
    { text: '内存篇', items: [
      { text: '揭开 Buffer_Pool 的面纱', link: '/mysql/buffer_pool/buffer_pool' },
    ]},
    { text: '架构篇', items: [
      { text: 'MySQL 架构', link: '/mysql/architecture/mysql_architecture' },
    ]},
  ],

  '/redis/': [
    { text: '图解Redis', items: [
      { text: '概述', link: '/redis/' },
    ]},
    { text: '基础篇', items: [
      { text: 'Redis 是什么？', link: '/redis/base/wath_is_redis' },
      { text: 'Redis 常见面试题', link: '/redis/base/redis_interview' },
    ]},
    { text: '数据结构篇', items: [
      { text: 'Redis 数据结构', link: '/redis/data_struct/data_struct' },
      { text: 'Redis 常用命令', link: '/redis/data_struct/command' },
    ]},
    { text: '持久化篇', items: [
      { text: 'AOF 持久化', link: '/redis/storage/aof' },
      { text: 'RDB 快照', link: '/redis/storage/rdb' },
      { text: '大key对持久化的影响', link: '/redis/storage/bigkey_aof_rdb' },
    ]},
    { text: '集群篇', collapsed: false, items: [
      { text: '主从复制', link: '/redis/cluster/master_slave_replication' },
      { text: '哨兵机制', link: '/redis/cluster/sentinel' },
      { text: '切片集群', link: '/redis/cluster/cluster' },
      { text: '缓存雪崩、击穿、穿透', link: '/redis/cluster/cache_problem' },
      { text: 'Redlock', link: '/redis/cluster/redlock' },
    ]},
    { text: '架构篇', items: [
      { text: '数据库和缓存如何保证一致性？', link: '/redis/architecture/mysql_redis_consistency' },
    ]},
    { text: '实战篇', items: [
      { text: 'Redis 实现分布式锁', link: '/redis/module/setnx' },
      { text: 'Redis 过期删除与内存淘汰', link: '/redis/module/strategy' },
    ]},
  ],
}

export default defineConfig({
  lang: 'zh-CN',
  title: '小林coding',
  description: '图解计算机网络、操作系统、MySQL、Redis，覆盖后端技术面试，让天下没有难懂的八股文！',
  
  head: [
    ['link', { rel: 'icon', href: '/icon.webp' }],
  ],

  themeConfig: {
    logo: '/icon.webp',
    
    nav: [
      { text: '首页', link: '/' },
      { text: '图解网络', link: '/network/' },
      { text: '图解系统', link: '/os/' },
      { text: '图解MySQL', link: '/mysql/' },
      { text: '图解Redis', link: '/redis/' },
      { text: '面试八股题', link: '/interview/' },
      { text: '大厂面经', link: '/backend_interview/' },
      { text: '学习心得', link: '/cs_learn/' },
      { text: '读者心得', link: '/reader_nb/' },
      { text: '校招薪资', link: '/salary/' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaolincoder/CS-Base' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2020-2026 小林coding 版权所有'
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: '目录',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    lastUpdated: {
      text: '最后更新',
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },

  ignoreDeadLinks: true,

  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '注意',
      dangerLabel: '警告',
      infoLabel: '信息',
      detailsLabel: '详情',
    },
  },
})
