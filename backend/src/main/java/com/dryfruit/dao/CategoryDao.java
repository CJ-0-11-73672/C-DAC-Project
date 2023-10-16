package com.dryfruit.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dryfruit.model.Category;

public interface CategoryDao extends JpaRepository<Category, Integer> {
	

}
