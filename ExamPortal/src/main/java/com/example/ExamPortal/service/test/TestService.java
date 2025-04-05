package com.example.ExamPortal.service.test;

import com.example.ExamPortal.dto.*;
import com.example.ExamPortal.entities.Test;

import java.util.List;

public interface TestService {


    public TestDTO createTest(TestDTO dto);
    public QuestionDTO addQuestionInTest(QuestionDTO dto);
    public List<TestDTO> getAllTests();

    public TestDetailsDTO getAllQuestionsByTest(Long id);

    public TestResultDTO submitTest(SubmitTestDTO request);

    public List<TestResultDTO> getAllTestResults();
}
