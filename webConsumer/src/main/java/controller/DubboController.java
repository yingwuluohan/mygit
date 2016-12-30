package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by dongfangnan on 2016/3/24.
 */
@Controller
@RequestMapping(value = "/test" )
public class DubboController {



    @RequestMapping(value = "/getInfo", method = {RequestMethod.GET})
    public void getInfo(HttpServletRequest request , HttpServletResponse response ){

    }

}
