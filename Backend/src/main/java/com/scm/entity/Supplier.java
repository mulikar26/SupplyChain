package com.scm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="Supplier")
@Data
public class Supplier {
	
	@Id
	@GeneratedValue
	@Column(name="id")
	private int id;
	
private String name ;
private String part_name ;
private String part_id ;
private String email;
private  String phone;
private String location;
private String country;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

public String getPart_name() {
	return part_name;
}
public void setPart_name(String part_name) {
	this.part_name = part_name;
}
public String getPart_id() {
	return part_id;
}
public void setPart_id(String part_id) {
	this.part_id = part_id;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getLocation() {
	return location;
}
public void setLocation(String location) {
	this.location = location;
}
public String getCountry() {
	return country;
}
public void setCountry(String country) {
	this.country = country;
}




}
