package com.lori.parentingGoalsRestMongov1.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Game {

    @Id
    private String id;
    private String gameDate;
    private String gameTime;
    private String gameName;
    private String gameLoca;

protected Game (){}

    public Game(String gameDate, String gameTime, String gameName, String gameLoca) {
        this.gameDate = gameDate;
        this.gameTime = gameTime;
        this.gameName = gameName;
        this.gameLoca = gameLoca;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGameDate() {
        return gameDate;
    }

    public void setGameDate(String gameDate) {
        this.gameDate = gameDate;
    }

    public String getGameTime() {
        return gameTime;
    }

    public void setGameTime(String gameTime) {
        this.gameTime = gameTime;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getGameLoca() {
        return gameLoca;
    }

    public void setGameLoca(String gameLoca) {
        this.gameLoca = gameLoca;
    }


}