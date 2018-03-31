package com.lori.parentingGoalsRestMongov1.controller;

import com.lori.parentingGoalsRestMongov1.model.Dance;
import com.lori.parentingGoalsRestMongov1.repository.DanceRepository;
import com.lori.parentingGoalsRestMongov1.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BaseController {

    @Autowired
    private GameRepository gameRepository;
    private DanceRepository danceRepository;

    @RequestMapping("/")
    public String baseRoute(){
        return "main";
    }

    @RequestMapping("/index")
    public String toSoccer(ModelMap modelMap){
        return "index";
    }

    @RequestMapping("/dance")
    public String toDance (ModelMap modelMap){
        return "dance";
    }
}


