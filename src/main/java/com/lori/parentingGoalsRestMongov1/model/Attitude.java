package com.lori.parentingGoalsRestMongov1.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Attitude {
    @Id
    private String id;
    private String attitudeDance;
    private String attitudeDancer;

    protected Attitude (){}

    public Attitude(String attitudeDance, String attitudeDancer) {
        this.attitudeDance = attitudeDance;
        this.attitudeDancer = attitudeDancer;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAttitudeDance() {
        return attitudeDance;
    }

    public void setAttitudeDance(String attitudeDance) {
        this.attitudeDance = attitudeDance;
    }

    public String getAttitudeDancer() {
        return attitudeDancer;
    }

    public void setAttitudeDancer(String attitudeDancer) {
        this.attitudeDancer = attitudeDancer;
    }
}
