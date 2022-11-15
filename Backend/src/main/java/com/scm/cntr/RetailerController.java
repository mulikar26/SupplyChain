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

import com.scm.entity.Retailer;
import com.scm.service.RetailerService;




@RestController
@CrossOrigin("http://localhost:3000/")
public class RetailerController {

	@Autowired
	private RetailerService retailerService;


	
	@PostMapping("/retailer")
	public String retailerAdd(@RequestBody Retailer retailer) {
		retailerService.add(retailer);
		return "success";
	}
	
	@GetMapping("/retailer")
	public List<Retailer> retailerList(){
		return retailerService.selectAll();
	}
	
	@DeleteMapping("/retailer/{id}")
	public String retailerDelete(@PathVariable Integer id) {
		retailerService.deleteRetailerById(id);
		return "success";
	}
	
	@PutMapping("/retailer")
	public String retailerUpdate(@RequestBody Retailer retailer) {
		retailerService.saveOrUpdate(retailer);
		return "success";

	}
	
	
	

	
	
	@GetMapping("/retailer/{id}")  
	private Retailer getBooks(@PathVariable("id") Integer id)   
	{  
	return retailerService.getRetailerById(id);  
	} 
	
	
	
	
//	@RequestMapping
//	public Retailer getRetailer(Integer id) {
//		Retailer retailer = retailerService.selectAll().stream()
//			.filter(t -> id.equals(t.getId()))
//			.findFirst()
//			.orElse(null);
//			
//	    return retailer;
//	}
	
	
	
	
	
}
