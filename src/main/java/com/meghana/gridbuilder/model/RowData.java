package com.meghana.gridbuilder.model;

import java.time.LocalDateTime;

public class RowData {

    private int id;

    private int temperature;

    private String status;

    private LocalDateTime timestamp;

    public RowData(int id, int temperature, String status, LocalDateTime timestamp) {
        this.id = id;
        this.temperature = temperature;
        this.status = status;
        this.timestamp = timestamp;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTemperature() {
        return temperature;
    }

    public void setTemperature(int temperature) {
        this.temperature = temperature;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
