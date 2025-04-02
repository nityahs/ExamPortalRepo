package com.example.ExamPortal.service.test;

import com.example.ExamPortal.dto.QuestionDTO;
import com.example.ExamPortal.dto.TestDTO;

public interface TestService {


    public TestDTO createTest(TestDTO dto);
    public QuestionDTO addQuestionInTest(QuestionDTO dto);
}
