package com.newtech;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by piki on 2016-12-27.
 */
@Controller
@EnableAutoConfiguration
@RequestMapping("/test")
public class PostsController {

    @RequestMapping(value="/babel", method = RequestMethod.GET)
    public String babel(){
        return "babel";
    }

    @RequestMapping(value="/error_test", method = RequestMethod.GET)
    public String error_test(){
        return "error_test";
    }

    @RequestMapping(value="/atmosphere", method = RequestMethod.GET)
    public String atmosphere(){
        return "atmosphere";
    }
}
