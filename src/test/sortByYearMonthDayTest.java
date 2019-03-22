package test;

import JavaBean.Blog;
import Util.JDBCUtil;

import java.awt.desktop.SystemSleepEvent;
import java.util.ArrayList;
import java.util.List;

public class sortByYearMonthDayTest {
    public static void main(String[] args){
        List<Blog> list = new ArrayList<>();
        Blog blog1 = new Blog();
        blog1.setYear("2018");
        blog1.setMonth("9");
        blog1.setDay("21");
        Blog blog2 = new Blog();
        blog2.setYear("2018");
        blog2.setMonth("9");
        blog2.setDay("22");
        Blog blog3 = new Blog();
        blog3.setYear("2018");
        blog3.setMonth("9");
        blog3.setDay("23");
        /*
        * list.set()和list.add()不同，list.set()改变原位置上的内容。list.add是给这个数组增加内容
        * */
        list.add(0,blog1);
        list.add(1,blog2);
        list.add(2,blog3);
        list = JDBCUtil.sortByYearMonthDay(list);
        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i).getDay());
        }
    }
}
