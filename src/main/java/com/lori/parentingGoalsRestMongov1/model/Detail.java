package com.lori.parentingGoalsRestMongov1.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Detail {
    @Id
    private String id;
    private String detailPlay;
    private String detailPlayer;

protected Detail (){}

    public Detail(String detailPlay, String detailPlayer) {
        this.detailPlay = detailPlay;
        this.detailPlayer = detailPlayer;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDetailPlay() {
        return detailPlay;
    }

    public void setDetailPlay(String detailPlay) {
        this.detailPlay = detailPlay;
    }

    public String getDetailPlayer() {
        return detailPlayer;
    }

    public void setDetailPlayer(String detailPlayer) {
        this.detailPlayer = detailPlayer;
    }
}

