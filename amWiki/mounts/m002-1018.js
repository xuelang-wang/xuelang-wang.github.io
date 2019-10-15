if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m002']=[{"name":"001-mysql.md","path":"002-web/001-mysql.md","content":"### 启动 My SQL 数据库\r\n\r\n```\r\ncd D:/web/mysql-8.0.16/bin\r\nnet start mysql\r\n```\r\n\r\n\r\n### 登录 My SQL\r\n\r\n当MySQL服务已经运行时，可以用下面的命令登录\r\n\r\n```\r\nmysql -h 主机名 -u 用户名 -p\r\n```\r\n参数说明：\r\n- -h : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0.1)该参数可以省略;\r\n- -u : 登录的用户名;\r\n- -p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。\r\n\r\n\r\n参考链接: [菜鸟教程](https://www.runoob.com/mysql/mysql-administration.html)","timestamp":1571152866839},{"name":"002-jekyll.md","path":"002-web/002-jekyll.md","content":"## 常见问题\r\n\r\n### 使用命令：jekyll serve 启动报错\r\n\r\n```\r\nerror:permission denied -bind(2) for 127.0.0.1:4000\r\n```\r\n\r\n[解决方法]():\r\n1. 找到4000端口被哪个进程占用了\r\n\r\n    ```\r\n    netstat -aon | findstr \"4000\"\r\n    ```\r\n\r\n    ![](assets/002/002-1558239685291.png)\r\n\r\n2. 关闭关闭冲突的进程\r\n\r\n    ![](assets/002/002-1558239720456.png)\r\n","timestamp":1571152866839}]