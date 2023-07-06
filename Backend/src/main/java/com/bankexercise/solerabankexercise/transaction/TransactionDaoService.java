package com.bankexercise.solerabankexercise.transaction;

import com.bankexercise.solerabankexercise.account.Account;
import com.bankexercise.solerabankexercise.account.AccountDaoService;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;

@Component
public class TransactionDaoService {

    static AccountDaoService accountDaoService = new AccountDaoService();
    private static List<Account> accounts = accountDaoService.findAll();
    private static List<Transaction> transactions = new ArrayList<>();


    static {
        transactions.add(new Transaction(accounts.get(0), accounts.get(2),
                180, new Date(),1));
        transactions.add(new Transaction(accounts.get(1), accounts.get(0),
                12, new Date(),2));
        transactions.add(new Transaction(accounts.get(3), accounts.get(1),
                900, new Date(),3));
        transactions.add(new Transaction(accounts.get(0), accounts.get(2),
                100, new Date(),4));
    }


    public Transaction findOne(long transactionReferenceNumber) {
        Predicate<? super Transaction> predicate = transaction -> transaction.getTransactionReferenceNumber()==transactionReferenceNumber;
        return transactions.stream().filter(predicate).findFirst().orElse(null);
    }

    public List<Transaction> findAll(){
        return transactions;
    }

    public Transaction save(Transaction transaction) {
        transactions.add(transaction);
        return transaction;
    }


}
