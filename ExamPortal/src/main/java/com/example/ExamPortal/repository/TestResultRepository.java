package com.example.ExamPortal.repository;

import com.example.ExamPortal.entities.TestResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TestResultRepository extends JpaRepository<TestResult,Long> {
}
