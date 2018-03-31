package com.lori.parentingGoalsRestMongov1.repository;

import com.lori.parentingGoalsRestMongov1.model.Dance;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface DanceRepository extends MongoRepository<Dance, String> {
}
