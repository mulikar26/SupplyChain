package com.scm.cntr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.scm.entity.Supplier;
import com.scm.service.SupplierService;

@RestController
@CrossOrigin("http://localhost:3000/")
public class SupplierController {
	
	@Autowired
	private SupplierService supplierService ;
	
	
	@PostMapping("/supplier")
	public String supplierAdd(@RequestBody Supplier supplier) {
		supplierService.add(supplier);
		return "Success" ;
	}
	

	
	
	@GetMapping("/supplier")
	public List<Supplier> supplierList(){
		return supplierService.selectAll();
	}
	
	@DeleteMapping("/supplier/{id}")
	public String deleteSupplier(@PathVariable Integer id) {
		supplierService.deleteSupplierById(id);
		return "success";
	}
	
	@PutMapping("/supplier")
	public String supplierUpdate(@RequestBody Supplier supplier) {
		supplierService.saveOrUpdate(supplier);
		return "success";

	}
	
	
	@GetMapping("/supplier/{id}")  
	private Supplier getBooks(@PathVariable("id") Integer id)   
	{  
	return supplierService.getSupplierById(id);  
	} 
	
	
	

	
	
}
