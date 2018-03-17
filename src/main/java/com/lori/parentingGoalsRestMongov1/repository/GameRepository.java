package com.lori.parentingGoalsRestMongov1.repository;


import com.lori.parentingGoalsRestMongov1.model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game, String> {
}
