package com.example.ExamPortal.service.test;

import com.example.ExamPortal.dto.QuestionDTO;
import com.example.ExamPortal.dto.TestDTO;
import com.example.ExamPortal.entities.Question;
import com.example.ExamPortal.entities.Test;
import com.example.ExamPortal.repository.QuestionRepository;
import com.example.ExamPortal.repository.TestRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TestServiceImpl implements TestService{

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public TestDTO createTest(TestDTO dto) {
        Test test = new Test();
        test.setTitle(dto.getTitle());
        test.setDescription(dto.getDescription());
        test.setTime(dto.getTime());

        return testRepository.save(test).getDto();
    }

    public QuestionDTO addQuestionInTest(QuestionDTO dto) {
        Optional<Test> optionalTest = testRepository.findById(dto.getId());

        if (optionalTest.isPresent()) {
            Question question = new Question();
            question.setTest(optionalTest.get());
            question.setQuestionText(dto.getQuestionText());
            question.setOptionA(dto.getOptionA());
            question.setOptionB(dto.getOptionB());
            question.setOptionC(dto.getOptionC());
            question.setOptionD(dto.getOptionD());
            question.setCorrectOption(dto.getCorrectOption());

            return questionRepository.save(question).getDto();
        }

        throw new EntityNotFoundException("Test Not Found");
    }


}
