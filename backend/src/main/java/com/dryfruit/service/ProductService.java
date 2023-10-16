package com.dryfruit.service;

import org.springframework.web.multipart.MultipartFile;

import com.dryfruit.model.Product;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

}
