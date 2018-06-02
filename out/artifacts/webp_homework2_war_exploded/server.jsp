<%@ page import="java.io.File" %>
<%@ page import="java.io.FileWriter" %><%--
  Created by IntelliJ IDEA.
  User: trly1
  Date: 2018-06-01
  Time: 오후 10:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>
  <%
    request.setCharacterEncoding("UTF-8");
    String day = request.getParameter("day");
    String title = request.getParameter("title");
    String content = request.getParameter("content");

    String dst = "C:/Users/trly1/Desktop/웹프텍스트목록/"+ title + ".txt";

    File file = new File(dst);
    FileWriter fileWriter = new FileWriter(file);

    fileWriter.write(day + "\r\n");
    fileWriter.write(title + "\r\n");
    fileWriter.write(content + "\r\n");

    fileWriter.close();
  %>
  </body>
</html>
