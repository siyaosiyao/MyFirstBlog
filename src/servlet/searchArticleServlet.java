package servlet;

import JavaBean.Blog;
import Util.JDBCUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.sun.jdi.IntegerType;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;

import javax.servlet.Servlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class searchArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) {
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        String year = req.getParameter("year");
        String month = req.getParameter("month");
        String day = req.getParameter("day");
        String Title = req.getParameter("Title");
        IBlogDao dao = new BlogDaoImpl();

        List<Blog> list = dao.searchArticle(year, month, day, Title);
        list = JDBCUtil.sortByYearMonthDay(list);
        for (Blog blog : list) {
            JSONObject json = new JSONObject();
            json.put("Title", blog.getTitle());
            json.put("content", blog.getContent());
            json.put("year",blog.getYear());
            json.put("month",blog.getMonth());
            json.put("day",blog.getDay());
            try {
                resp.getWriter().print(JSON.toJSONString(json));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
