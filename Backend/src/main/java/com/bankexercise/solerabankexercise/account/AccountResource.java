package com.bankexercise.solerabankexercise.account;

import com.bankexercise.solerabankexercise.user.User;
import com.bankexercise.solerabankexercise.errorhandling.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/bankaccounts")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AccountResource {

    private AccountDaoService service;

    public AccountResource(AccountDaoService service) {
        this.service = service;
    }

    @GetMapping("/bankaccounts")
    public List<Account> retrieveAllAccounts(){
        return service.findAll();
    }
    @GetMapping("/bankaccounts/{accountNumber}")
    public Account retrieveAnAccount(@PathVariable int accountNumber){
        Account account =  service.findOneAccount(accountNumber);
        if (account == null){
            throw new UserNotFoundException("id "+ accountNumber);
        }
        return account;
    }

    @CrossOrigin(origins = "https://localhost:3000")
    @GetMapping("/bankAccounts/getbyuser/{userEmail}")
    public List<Account> retireveFromUser(@PathVariable String userEmail){
        List<Account> listAccount = service.findByUser(userEmail);
        if(listAccount.size() ==0) {
            throw new UserNotFoundException("The account "+userEmail+" don't have any accounts");
        }
        return listAccount;

    }

    @DeleteMapping("/bankaccounts/{accountNumber}")
    public void deleteAnAccount(@PathVariable int accountNumber){
        service.deleteByAccountNumber(accountNumber);
    }
    @PostMapping("/bankaccounts")
    public ResponseEntity<User> createUser(@RequestBody Account account){
        Account savedAccount = service.save(account);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{accountNumber}")
                .buildAndExpand(savedAccount.getAccountNumber())
                .toUri();
        return ResponseEntity.created(location).build();

    }
}