package com.scm.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scm.dao.SupplierDao;
import com.scm.entity.Supplier;
@Service
public class SupplierServiceImple implements SupplierService{

	@Autowired
	private SupplierDao supplierDao;
	
	
	
	@Override
	public void add(Supplier supplier) {
		supplierDao.save(supplier);
	}

	@Override
	public List<Supplier> selectAll() {
		Iterable<Supplier> it = supplierDao.findAll();
		List<Supplier> lst = new ArrayList<>();
		Iterator<Supplier> itr = it.iterator();
		while(itr.hasNext()) {
			lst.add(itr.next());
		}
		return lst;
	}

	@Override
	public void deleteSupplierById(Integer id) {
		supplierDao.deleteById(id);
	}

	@Override
	public void saveOrUpdate(Supplier supplier) {
		supplierDao.save(supplier);		
	}

	@Override
	public Supplier get(int id) {
		Optional<Supplier> ref = supplierDao.findById(id);
		Supplier supplier = ref.get();
		return supplier; 
	}

	@Override
	public Supplier getSupplierById(Integer id) {
		return supplierDao.findById(id).get();
	}

}
