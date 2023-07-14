package com.bankexercise.solerabankexercise.account;

import com.bankexercise.solerabankexercise.user.User;

public class Account {
    private User OwnerName;
    private long accountNumber;
    private double balance;
    private String bankName;
    private String bankLocation;

    public Account(User ownerName, long accountNumber, double balance, String bankName, String bankLocation) {
        this.OwnerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.bankName = bankName;
        this.bankLocation = bankLocation;
    }

    public User getOwnerName() {
        return OwnerName;
    }

    public void setOwnerName(User ownerName) {
        OwnerName = ownerName;
    }

    public long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankLocation() {
        return bankLocation;
    }

    public void setBankLocation(String bankLocation) {
        this.bankLocation = bankLocation;
    }

    @Override
    public String toString() {
        return "Account{" +
                "OwnerName=" + OwnerName +
                ", accountNumber=" + accountNumber +
                ", balance=" + balance +
                ", bankName='" + bankName + '\'' +
                ", bankLocation='" + bankLocation + '\'' +
                '}';
    }
}

