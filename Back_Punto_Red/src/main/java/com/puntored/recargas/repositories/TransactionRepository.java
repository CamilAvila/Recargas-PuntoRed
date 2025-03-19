package com.puntored.recargas.repositories;

import com.puntored.recargas.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    // Eliminamos el método findByUserId ya que ya no necesitamos el userId
}
