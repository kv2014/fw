package com.kv.tt.controller;

import com.kv.tt.entity.Person;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @RequestMapping(value = "/{[path:[^\\.]*}")
    public String redirect(){
        return "forward:/";
    }

    @RequestMapping(value = "/search", produces = {MediaType.APPLICATION_JSON_VALUE})
    public Person search(String personName) {

        return new Person(personName, Double.valueOf(Math.random()*30).intValue(), "hefei");
    }
}
