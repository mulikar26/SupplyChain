package com.scm.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.scm.entity.Product;

@Repository
public interface ProductDao extends CrudRepository<Product, Integer> {

}
