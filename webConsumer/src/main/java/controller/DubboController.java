package controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by dongfangnan on 2016/3/24.
 */
@Controller
@RequestMapping(value = "/test", method = {RequestMethod.GET, RequestMethod.POST})
public class DubboController {



   /* @RequestMapping(value = "/getInfo", method = {RequestMethod.GET})
    void getInfo(){
        getHttpRequest.getAreaStr();
    }*/

}
