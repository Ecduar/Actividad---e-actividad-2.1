-- Creación de la base de datos
CREATE DATABASE IF NOT EXISTS `actividad2`;

-- Usar la base de datos creada
USE `actividad2`;

-- Definición de la tabla User
CREATE TABLE IF NOT EXISTS `User` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE
);

-- Definición de la tabla Cooperative
CREATE TABLE IF NOT EXISTS `Cooperative` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

-- Definición de la tabla UserCooperative (relación muchos a muchos entre User y Cooperative)
CREATE TABLE IF NOT EXISTS `UserCooperative` (
    `UserId` INT,
    `CooperativeId` INT,
    `role` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`UserId`, `CooperativeId`),
    FOREIGN KEY (`UserId`) REFERENCES `User` (`id`) ON DELETE CASCADE,
    FOREIGN KEY (`CooperativeId`) REFERENCES `Cooperative` (`id`) ON DELETE CASCADE
);

-- Definición de la tabla SavingAccount
CREATE TABLE IF NOT EXISTS `SavingAccount` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `userId` INT,
    `balance` DECIMAL(10, 2) DEFAULT 0.00,
    `interestRate` DECIMAL(5, 2) DEFAULT 0.00,
    FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE
);

-- Definición de la tabla LoanAccount
CREATE TABLE IF NOT EXISTS `LoanAccount` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `userId` INT,
    `amount` DECIMAL(10, 2) DEFAULT 0.00,
    `nextPaymentDate` DATE,
    FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE
);
