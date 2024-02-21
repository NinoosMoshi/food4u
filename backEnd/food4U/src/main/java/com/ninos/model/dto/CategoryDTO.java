package com.ninos.model.dto;

import lombok.Getter;
import lombok.Setter;
import java.util.Set;
import com.ninos.model.entity.Product;

@Getter
@Setter
public class CategoryDTO {

    private Long id;
    private String name;
    private String description;
    private Set<Product> products;

}
