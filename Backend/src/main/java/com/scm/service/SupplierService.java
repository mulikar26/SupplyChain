package com.scm.service;

import java.util.List;

import com.scm.entity.Supplier;

public interface SupplierService {
	
	void add(Supplier supplier);
	List<Supplier> selectAll();
	void deleteSupplierById(Integer  id);
	void saveOrUpdate(Supplier supplier);
	Supplier get(int id);
	Supplier getSupplierById(Integer id);
}
