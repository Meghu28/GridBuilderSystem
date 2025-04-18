package com.meghana.gridbuilder.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meghana.gridbuilder.model.ColumnConfig;
import com.meghana.gridbuilder.model.RowData;

@RestController
@RequestMapping("/grid")
@CrossOrigin(origins = "*")
public class GridController {

    @GetMapping("/rowData")
        public List<RowData> getGridData() {
            List<RowData> rowList = new ArrayList<>();
            rowList.add(new RowData(1, 12, "Chill", LocalDateTime.now().minusDays(5)));
            rowList.add(new RowData(2, 25, "Normal", LocalDateTime.now()));
            rowList.add(new RowData(3, 40, "Hot", LocalDateTime.now().plusDays(5)));
            rowList.add(new RowData(4, 50, "Extreme Hot", LocalDateTime.now().plusDays(10)));
            return rowList;
        }

        @GetMapping("/configData")
        public List<ColumnConfig> getConfigData() {
            List<ColumnConfig> configList = new ArrayList<>();
            configList.add(new ColumnConfig("temperature", "heatmap"));
            configList.add(new ColumnConfig("timestamp", "highlight"));
            return configList;
        }
}
