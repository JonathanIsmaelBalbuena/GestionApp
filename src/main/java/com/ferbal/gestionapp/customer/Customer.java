package com.ferbal.gestionapp.customer;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "CUSTOMER")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "ID")
    private int id;

    @Getter @Setter @Column(name = "ID_CUSTOMER")
    private String idCustomer;

    @Getter @Setter @Column(name = "FIRST_NAME")
    private String firstName;

    @Getter @Setter @Column(name = "LAST_NAME")
    private String lastName;

}
