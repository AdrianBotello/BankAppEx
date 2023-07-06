package com.bankexercise.solerabankexercise.transaction;

import com.bankexercise.solerabankexercise.account.Account;

import java.util.Date;

public class Transaction {

    private Account senderAccountNumber;
    private Account receiverAccountNumber;
    private double amount;
    private Date date;

    private long transactionReferenceNumber;
    private enum TransactionStatus {
        PENDING,
        SUCCESSFUL,
        FAILED
    }

    public Transaction(Account senderAccountNumber, Account receiverAccountNumber,
                       double amount, Date date, long transactionReferenceNumber) {
        this.senderAccountNumber = senderAccountNumber;
        this.receiverAccountNumber = receiverAccountNumber;
        this.amount = amount;
        this.date = date;
        this.transactionReferenceNumber = transactionReferenceNumber;
    }

    public Account getSenderAccountNumber() {
        return senderAccountNumber;
    }

    public void setSenderAccountNumber(Account senderAccountNumber) {
        this.senderAccountNumber = senderAccountNumber;
    }

    public Account getReceiverAccountNumber() {
        return receiverAccountNumber;
    }

    public void setReceiverAccountNumber(Account receiverAccountNumber) {
        this.receiverAccountNumber = receiverAccountNumber;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public long getTransactionReferenceNumber() {
        return transactionReferenceNumber;
    }

    public void setTransactionReferenceNumber(long transactionReferenceNumber) {
        this.transactionReferenceNumber = transactionReferenceNumber;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "senderAccountNumber=" + senderAccountNumber +
                ", receiverAccountNumber=" + receiverAccountNumber +
                ", amount=" + amount +
                ", date=" + date +
                ", transactionReferenceNumber=" + transactionReferenceNumber +
                '}';
    }
}

