package test;

import JavaBean.Blog;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;

import java.awt.desktop.SystemSleepEvent;
import java.util.ArrayList;
import java.util.List;

public class searchArticleTest {
    public static void main(String[] args){
        IBlogDao dao = new BlogDaoImpl();
        List<Blog> list = new ArrayList<>();
        list = dao.searchArticle("2018","9","21","调查");
        for(Blog blog:list){
            System.out.println(blog.getTitle());
            System.out.println(blog.getContent());
        }
    }
}
