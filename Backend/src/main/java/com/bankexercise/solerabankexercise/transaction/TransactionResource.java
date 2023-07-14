package com.bankexercise.solerabankexercise.transaction;

import com.bankexercise.solerabankexercise.errorhandling.UserNotFoundException;
import com.bankexercise.solerabankexercise.user.User;
import jakarta.transaction.TransactionManager;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@RestController
@RequestMapping("/transactions")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TransactionResource {
    private TransactionDaoService service;

    public TransactionResource(TransactionDaoService service) {
        this.service = service;
    }

    @GetMapping("/transactions")
    public List<Transaction> retrieveTransactions(){
        return service.findAll();
    }

    @GetMapping("/transactions/{transactionReferenceNumber}")
    public Transaction retrieveTransaction(@PathVariable long transactionReferenceNumber){
            Transaction transaction =  service.findOne(transactionReferenceNumber);
            if (transaction == null){
                throw new UserNotFoundException("id "+ transactionReferenceNumber);
            }
            return transaction;
        }

    @PostMapping("/transactions")
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction){
        Transaction savedTransaction = service.save(transaction);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{transactionReferenceNumber}")
                .buildAndExpand(((Transaction) savedTransaction).getTransactionReferenceNumber())
                .toUri();
        return ResponseEntity.created(location).build();

    }



}
