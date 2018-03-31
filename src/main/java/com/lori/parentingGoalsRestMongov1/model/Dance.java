package com.lori.parentingGoalsRestMongov1.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Dance {
    @Id
    private String id;
    private String danceDate;
    private String danceTime;
    private String danceName;
    private String danceLoca;

    protected Dance (){}

    public Dance(String danceDate, String danceTime, String danceName, String danceLoca) {
        this.danceDate = danceDate;
        this.danceTime = danceTime;
        this.danceName = danceName;
        this.danceLoca = danceLoca;
    }



    public String getId() {
        return id;
    }


    public void setId(String id) {
        this.id = id;
    }

    public String getDanceDate() {
        return danceDate;
    }

    public void setDanceDate(String danceDate) {
        this.danceDate = danceDate;
    }

    public String getDanceTime() {
        return danceTime;
    }

    public void setDanceTime(String danceTime) {
        this.danceTime = danceTime;
    }

    public String getDanceName() {
        return danceName;
    }

    public void setDanceName(String danceName) {
        this.danceName = danceName;
    }

    public String getDanceLoca() {
        return danceLoca;
    }

    public void setDanceLoca(String danceLoca) {
        this.danceLoca = danceLoca;
    }
}
