CREATE DATABASE IF NOT EXISTS `actividad2`;

USE `actividad2`;

CREATE TABLE IF NOT EXISTS `User` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `Cooperative` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `UserCooperative` (
    `UserId` INT,
    `CooperativeId` INT,
    `role` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`UserId`, `CooperativeId`),
    FOREIGN KEY (`UserId`) REFERENCES `User` (`id`) ON DELETE CASCADE,
    FOREIGN KEY (`CooperativeId`) REFERENCES `Cooperative` (`id`) ON DELETE CASCADE,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `SavingAccount` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `userId` INT,
    `balance` DECIMAL(10, 2) DEFAULT 0.00,
    `interestRate` DECIMAL(5, 2) DEFAULT 0.00,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `LoanAccount` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `userId` INT,
    `amount` DECIMAL(10, 2) DEFAULT 0.00,
    `nextPaymentDate` DATE,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE
);
