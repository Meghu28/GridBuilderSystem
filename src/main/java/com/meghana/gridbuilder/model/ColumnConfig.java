package com.meghana.gridbuilder.model;

public class ColumnConfig {

    private String columnName;
    
    private String style;

    public ColumnConfig(String columnName, String style) {
        this.columnName = columnName;
        this.style = style;
    }

    public String getColumnName() {
        return columnName;
    }

    public void setColumnName(String columnName) {
        this.columnName = columnName;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }
}
