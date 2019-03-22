这是一篇博客
实现的功能有
登陆、注册、修改个人信息、写文章、更新文章、查看所有文章、查看一篇文章、删除文章

所有的servlet返回的都是json

//servlet接口
1、/Login
登陆
{
"code":
"userId":
"session":
}
code代表登陆成功或者失败，0是失败，1是成功
userId是用户账号（唯一的）
session代表用户登陆状态，有new，old，false

//2、/Register
注册
{
"code":
userId:""
}
code是1，代表注册成功。code是0，代表注册失败

//3、/MessageComplete
个人信息完善
{
"code":
}

//4、/WriteArticle
写文章
{
"code":
"blogId"
}
blogId是唯一的

//5、/updateArticle
更新文章
{
"code":
}

//6、/getArticle
获取一篇文章
{
"Title":
"content"
}

//7、/getAllArticle
获取所有文章
{
"blogId":
"Title":
"content":
}
循环获得
//8、/deleteArticle
{
"code":
}