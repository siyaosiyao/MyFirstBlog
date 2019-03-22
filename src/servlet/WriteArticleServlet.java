package servlet;

import JavaBean.Blog;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import dao.IBlogDao;
import daoImpl.BlogDaoImpl;
import javax.servlet.http.*;
import java.io.IOException;

public class WriteArticleServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        //中文字符编码
        resp.setCharacterEncoding("utf8");
        resp.setContentType("application/json;charset=utf-8");

        int userId = 0;
        Cookie[] cookies = req.getCookies();
        for(int i = 0;i<cookies.length;i++){
            if(cookies[i].getName().equals("userId")){
                userId = Integer.parseInt(cookies[i].getValue());
                break;
            }
        }
        System.out.println(userId);

        Blog blog = new Blog();
        String Title = req.getParameter("Title");    //文章标题
        String content = req.getParameter("content");//文章内容
        String year = req.getParameter("year");
        String month = req.getParameter("month");
        String day = req.getParameter("day");

        blog.setUserId(userId);
        blog.setTitle(Title);
        blog.setContent(content);
        blog.setYear(year);
        blog.setMonth(month);
        blog.setDay(day);

        IBlogDao dao = new BlogDaoImpl();
        boolean flag = dao.uploadNewArticle(blog);
        int blogId = dao.getblogId(Title,content);

        JSONObject json = new JSONObject();
        if(flag){
            json.put("code",1);
            json.put("blogId",blogId);
            //json.put("userId",userId);
        }else{
            json.put("code",0);
            json.put("blogId",0);
            //json.put("userId",0);
        }
        try {
            resp.getWriter().write(JSON.toJSONString(json));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    protected void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
