package com.scm.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.scm.entity.Supplier;

@Repository
public interface SupplierDao extends CrudRepository<Supplier, Integer>{

}
