### 启动 My SQL 数据库

```
cd D:\web\mysql-8.0.16\bin
net start mysql
```


### 登录 My SQL

当MySQL服务已经运行时，可以用下面的命令登录

```
mysql -h 主机名 -u 用户名 -p
```
参数说明：
- -h : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0.1)该参数可以省略;
- -u : 登录的用户名;
- -p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。


参考链接: [菜鸟教程](https://www.runoob.com/mysql/mysql-administration.html)