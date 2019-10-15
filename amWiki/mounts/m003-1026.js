if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m003']=[{"name":"001-基本操作.md","path":"003-Qt/001-基本操作.md","content":"## 为Release版本更行动态链接库\r\n\r\n1. 新建一个文件夹，将生成的Release版本的可执行文件拷到该目录下\r\n2. 运行Qt自带的命令行窗口，并cd进入该文件夹\r\n   \r\n   ![d](assets/003/001-1557934845674.png)\r\n\r\n3. 运行windeployqt myMdi.exe --qmldir D:\\\\Qt\\\\Qt5.6.3\\\\5.6.3\\\\mingw49_32\\\\qml,如下图:\r\n\r\n   *注意：最后的路径是Qt安装路径里面的qml文件夹。这里根据每个人电脑上面的安装路径可能不尽相同，可能需要做出细小的改动即可*\r\n\r\n   ![](assets/003/001-1557935021359.png)\r\n4. 最终结果如下：\r\n   \r\n   ![](assets/003/001-1557934808169.png)\r\n\r\n## Qt5中文显示问题\r\n\r\n1. 带中文的字符常量用QStringLiteral修饰（Qt5现在一般对中文比较支持）\r\n2. 带中文的字符串变量用QString::fromLocal8Bit修饰\r\n\r\n```c++\r\nconst char *info = \"中文显示\";\r\nQString strInfo = QString::fromLocal8Bit(info);\r\nQString str = QStringLiteral(\"中文显示\");\r\n\r\n```\r\n\r\n## 去掉标题栏,去掉任务栏显示，窗口置顶\r\n\r\n```c++\r\n// 去掉标题栏,去掉任务栏显示，窗口置顶\r\nsetWindowFlags(Qt::FramelessWindowHint | Qt::Tool | Qt::WindowStaysOnTopHint); \r\n```\r\n\r\n","timestamp":1571152866839}]