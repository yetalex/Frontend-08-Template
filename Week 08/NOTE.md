学习笔记

Response格式

HTTP/1.1 200 OK      >> status line
Content-Type:text/html
Date:Mon, 23 Dec 2019 06:46:19 GMT
Connection:keep-alive
Transfer-Encoding:chunked
=======这里空一行===以上是headers,以下是chunked body==
26   >> 16进制数字
<html><body>Hello World</body></html>
0    >> 0表示body结束