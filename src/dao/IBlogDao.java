package dao;

import JavaBean.Blog;

import java.util.ArrayList;
import java.util.List;

public interface IBlogDao {
    //1、写一个新文章的方法
    boolean uploadNewArticle(Blog blog);
    //2、对某一个新文章进行修改
    boolean updateArticle(Blog blog);
    //3、获取blogId
    int getblogId(String Title,String content);
    //4、查看一篇文章
    Blog getArticle(int userId,int blogId);
    //5、获取所有文章
    List<Blog> getAllArticles(int userId);
    //6、删除文章
    boolean deleteArticle(int userId,int blogId);
}
