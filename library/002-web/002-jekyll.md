## 常见问题

### 使用命令：jekyll serve 启动报错

```
error:permission denied -bind(2) for 127.0.0.1:4000
```

[解决方法]():
1. 找到4000端口被哪个进程占用了

    ```
    netstat -aon | findstr "4000"
    ```

    ![](assets/002/002-1558239685291.png)

2. 关闭关闭冲突的进程

    ![](assets/002/002-1558239720456.png)
