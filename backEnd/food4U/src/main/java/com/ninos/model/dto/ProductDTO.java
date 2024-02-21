package com.ninos.model.dto;

import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.util.Date;
import com.ninos.model.entity.Category;

@Getter
@Setter
public class ProductDTO {

    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private BigDecimal price;
    private Date dateCreated;
    private Date lastUpdated;
    private Category category;

}
