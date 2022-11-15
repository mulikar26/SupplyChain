package com.scm.exception;

public class UserNotFoundException extends RuntimeException {
public UserNotFoundException(Long id) {
	super("Could not found the user with id" + id);
}

public UserNotFoundException(int id) {
	// TODO Auto-generated constructor stub
}
}
