package com.bankexercise.solerabankexercise.account;

import com.bankexercise.solerabankexercise.user.User;
import com.bankexercise.solerabankexercise.user.UserDaoService;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
@Component
public class AccountDaoService {

    static UserDaoService userDaoService = new UserDaoService();
    private  static List<Account> accounts = new ArrayList<>();
    private static List<User> users = userDaoService.findAll();
    private static int usersCount = 0;

    private static int accCount = 0;

    static User ema = new User("Emmanuel","ortega","emmatega@yahoo.com", (++usersCount),
            "boot2",63254875);

    static {
        accounts.add( new Account(users.get(0),20232,1000.95));
        accounts.add( new Account(users.get(1),20233,1000.95));
        accounts.add( new Account(users.get(2),20234,1000.95));
        accounts.add( new Account(users.get(3),20235,1000.95));

    }

    public Account findOneAccount(int accountNumber) {
        Predicate<? super Account> predicate = account -> account.getAccountNumber()==accountNumber;
        return accounts.stream().filter(predicate).findFirst().orElse(null);
    }

    public List<Account> findAll(){
        return accounts;
    }
    public Account save(Account account){
        accounts.add(account);
        return account;
    }

    public void deleteByAccountNumber(int accountNumber){
        Predicate<? super Account> predicate = account -> account.getAccountNumber()==accountNumber;
        accounts.removeIf(predicate);
    }
}
