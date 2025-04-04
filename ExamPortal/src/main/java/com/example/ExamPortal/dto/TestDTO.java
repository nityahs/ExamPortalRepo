package com.example.ExamPortal.dto;



public class TestDTO {
    private Long id;

    private String title;

    private String description;

    private Long time;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getTime() {
        return time != null ? time : 0L;
    }

    public void setTime(Long time) {
        this.time = time;
    }
}
