package com.bankexercise.solerabankexercise.user;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;


public class User {
    private String firstName;
    private String secondName;
    private  String  email;
    private Integer Id;

    private Integer phone;
    private String password;
    //private float AccountBalance;



    public User(String firstName, String secondName, String  email, int id, String password, int phone) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.Id = id;
        this.password = password;
        this.phone = phone;
        //this.AccountBalance = accountBalance;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getPassword(){
        return password;
    }
//        SecureRandom random = new SecureRandom();
//        byte[] bytes = new byte[16];
//        random.nextBytes(bytes);
//        MessageDigest md = MessageDigest.getInstance("SHA-256");
//        md.update(bytes);
//        byte[] digest = md.digest(password.getBytes(StandardCharsets.UTF_8));
//        return digest;

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "User{" +
                "firstName='" + firstName + '\'' +
                ", secondName='" + secondName + '\'' +
                ", email='" + email + '\'' +
                ", Id=" + Id +
                ", phone=" + phone +
                ", password='" + password + '\'' +
                '}';
    }
}
