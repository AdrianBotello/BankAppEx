package com.bankexercise.solerabankexercise.user;

import com.bankexercise.solerabankexercise.errorhandling.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserResource {

    private UserDaoService service;

    public UserResource(UserDaoService service) {
        this.service = service;
    }

    // GET /Users
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/users")
    public List<User> retrieveAllUsers(){

        return service.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/users/{id}")
    public User retrieveUser(@PathVariable int id){
        User user =  service.findOne(id);
        if (user == null){
            throw new UserNotFoundException("id "+ id);
        }
        return user;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users/login/{email}/{password}")
    public boolean login(@PathVariable String email, @PathVariable String password){
        return service.login(email, password);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/users/settings")
    public List<String> settings(User user){
        List<String> userinfo = new ArrayList<>();
        if(service.login(user.getPassword(), user.getEmail()) == true){
            userinfo.add(user.getFirstName());
            userinfo.add(user.getSecondName());
            userinfo.add(user.getEmail());
            String i = user.getPhone().toString();
            userinfo.add(i);
        }
        return userinfo;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable int id){
        service.deleteById(id);
    }

    //POST /users
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping("/signup")
    public ResponseEntity<User> createUser(@RequestBody User user){
        User savedUser = service.save(user);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedUser.getId())
                .toUri();
        return ResponseEntity.created(location).build();

    }

}