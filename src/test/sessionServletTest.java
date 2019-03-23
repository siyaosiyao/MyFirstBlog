package test;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.net.http.HttpResponse;

public class sessionServletTest extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp){
        int id = Integer.parseInt(req.getParameter("userId"));
        String password = req.getParameter("password");
        HttpSession session = req.getSession();
        session.setAttribute("userId",id);
        session.setAttribute("password",password);

        int idprint = (int) session.getAttribute("userId");
        System.out.println(idprint);
        String passwordprint = (String) session.getAttribute("password");
        System.out.println(passwordprint);
    }
    @Override
    protected  void doGet(HttpServletRequest req,HttpServletResponse resp){
        doPost(req,resp);
    }
}
