package com.ninos.service.customer.category;

import org.springframework.data.domain.Page;
import com.ninos.model.dto.CategoryDTO;

public interface CategoryService {

    Page<CategoryDTO> getAllCategories(int page, int size);

}
