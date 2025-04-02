package com.example.ExamPortal.service.user;

import com.example.ExamPortal.entities.User;

public interface UserService {

    public User createUser (User user);
    public Boolean hasUserWithEmail(String email);
    public User login (User user);
}
