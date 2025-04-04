package com.example.ExamPortal.service.test;

import com.example.ExamPortal.dto.*;
import com.example.ExamPortal.entities.Question;
import com.example.ExamPortal.entities.Test;
import com.example.ExamPortal.entities.TestResult;
import com.example.ExamPortal.entities.User;
import com.example.ExamPortal.repository.QuestionRepository;
import com.example.ExamPortal.repository.TestRepository;
import com.example.ExamPortal.repository.TestResultRepository;
import com.example.ExamPortal.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TestServiceImpl implements TestService{

    @Autowired
    private TestRepository testRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private TestResultRepository testResultRepository;

    @Autowired
    private UserRepository userRepository;


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
//    public List<TestDTO> getAllTests() {
//        return testRepository.findAll().stream().peek(test -> {
//                    int questionCount = (test.getQuestions() != null) ? test.getQuestions().size() : 0;
//                    long time = (test.getTime() != null) ? test.getTime() : 0L;
//
//                    test.setTime(questionCount * time);  // Avoid null multiplication
//                }).map(Test::getDto)  // Convert to DTO
//                .collect(Collectors.toList());
//    }

    public List<TestDTO> getAllTests() {
        return testRepository.findAll().stream()
                .peek(test -> test.setTime(test.getQuestions().size() * test.getTime())) // Assuming multiplication
                .map(Test::getDto)
                .collect(Collectors.toList());
    }




    public TestDetailsDTO getAllQuestionsByTest(Long id) {
        Optional<Test> optionalTest = testRepository.findById(id);
        TestDetailsDTO testDetailsDTO = new TestDetailsDTO();

        if (optionalTest.isPresent()) {
            TestDTO testDTO = optionalTest.get().getDto();
            testDTO.setTime(optionalTest.get().getTime() * optionalTest.get().getQuestions().size());
            testDetailsDTO.setTestDTO(testDTO);
            testDetailsDTO.setQuestions(optionalTest.get().getQuestions().stream()
                    .map(Question::getDto)
                    .toList());
            return testDetailsDTO;
        }

        return testDetailsDTO;
    }

    public TestResultDTO submitTest(SubmitTestDTO request) {
        Test test = testRepository.findById(request.getTestId())
                .orElseThrow(() -> new EntityNotFoundException("Test not found"));
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("User not found"));

        int correctAnswers = 0;

        for (QuestionResponse response : request.getResponses()) {
            Question question = questionRepository.findById(response.getQuestionId())
                    .orElseThrow(() -> new EntityNotFoundException("Question not found"));

            if (question.getCorrectOption().equals(response.getSelectedOption())) {
                correctAnswers++;
            }
        }

        int totalQuestions = test.getQuestions().size();
        double percentage = ((double) correctAnswers / totalQuestions) * 100;

        TestResult testResult = new TestResult();
        testResult.setTest(test);
        testResult.setUser(user);
        testResult.setTotalQuestions(totalQuestions);
        testResult.setCorrectAnswers(correctAnswers);
        testResult.setPercentage(percentage);

        return testResultRepository.save(testResult).getDto();
    }


}
