package com.bankexercise.solerabankexercise.account;

import com.bankexercise.solerabankexercise.user.User;

public class Account {
    private User OwnerName;
    private long accountNumber;
    private double balance;

    public Account(User ownerName, long accountNumber, double balance) {
        this.OwnerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
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
}

