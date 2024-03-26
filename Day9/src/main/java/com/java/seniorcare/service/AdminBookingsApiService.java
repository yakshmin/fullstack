package com.java.seniorcare.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.seniorcare.model.Bookings;
import com.java.seniorcare.repository.BookingsRepo;


@Service

public class AdminBookingsApiService {
    
    @Autowired
    BookingsRepo repository;

    public List<Bookings> getBookings() {
        return repository.findAll();
    }

    public List<Bookings> getBookingsByName(String name)
	{
		return repository.findBookingsByName(name);
    }

    public boolean updateUser(String name, Bookings bookings) {
        Bookings existingUser = repository.findByName(name);
        if (existingUser != null) {
            existingUser.setStatus(bookings.getStatus());
            repository.save(existingUser);
            return true;
        } 
        else {
            return false;
        }
    }

}