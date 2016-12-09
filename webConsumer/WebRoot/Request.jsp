
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="s"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<script src="/js/jquery/core/jquery-1.8.3.js"></script>
<html>
<head>
    <title></title>
    <script type="text/javascript">
        $(function(){

            $.ajax({
                url:"/test/xdf/student/",
                async: false,
                data:{
                    id : 111
                },
                type:"POST",
                success:function(data){
                    alert( data  );
                    alert( data.list );


                }
            });
        });
    </script>
</head>
<body>
<form>
    <table>
        <tr>
            <td>
                test

            </td>

        </tr>

    </table>


</form>
</body>
</html>

