package com.example.ExamPortal.service.test;

import com.example.ExamPortal.dto.QuestionDTO;
import com.example.ExamPortal.dto.TestDTO;
import com.example.ExamPortal.entities.Test;

import java.util.List;

public interface TestService {


    public TestDTO createTest(TestDTO dto);
    public QuestionDTO addQuestionInTest(QuestionDTO dto);
    public List<Test> getAllTests();
}
