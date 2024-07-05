-- MySQL dump 10.13  Distrib 8.3.0, for Win64 (x86_64)
--
-- Host: localhost    Database: actividad2
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE IF NOT EXISTS `actividad2`;

USE `actividad2`;
--
-- Table structure for table `cooperative`
--

DROP TABLE IF EXISTS `cooperative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooperative` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cooperative`
--

LOCK TABLES `cooperative` WRITE;
/*!40000 ALTER TABLE `cooperative` DISABLE KEYS */;
INSERT INTO `cooperative` VALUES (1,'salvador bermudez','rifas','2024-07-03 15:25:05','2024-07-03 15:25:05');
/*!40000 ALTER TABLE `cooperative` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cooperatives`
--

DROP TABLE IF EXISTS `cooperatives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cooperatives` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cooperatives`
--

LOCK TABLES `cooperatives` WRITE;
/*!40000 ALTER TABLE `cooperatives` DISABLE KEYS */;
INSERT INTO `cooperatives` VALUES (6,'Pablo Troconis','asdsadasdasd','2024-07-04 19:43:27','2024-07-04 19:43:27'),(7,'salvador bermudez','ss','2024-07-04 20:13:43','2024-07-04 20:13:43'),(8,'loco','loquitos','2024-07-04 20:56:57','2024-07-04 20:56:57');
/*!40000 ALTER TABLE `cooperatives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan_accounts`
--

DROP TABLE IF EXISTS `loan_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan_accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` decimal(10,2) NOT NULL,
  `interestRate` decimal(5,2) NOT NULL,
  `nextPaymentDate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `balance` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `loan_accounts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan_accounts`
--

LOCK TABLES `loan_accounts` WRITE;
/*!40000 ALTER TABLE `loan_accounts` DISABLE KEYS */;
INSERT INTO `loan_accounts` VALUES (5,1000.00,0.02,'2024-07-31 00:00:00','2024-07-04 19:12:42','2024-07-04 19:12:42',10,50.00),(6,22.00,21.92,'2024-07-30 00:00:00','2024-07-05 13:41:40','2024-07-05 13:41:40',10,1000.00);
/*!40000 ALTER TABLE `loan_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saving_accounts`
--

DROP TABLE IF EXISTS `saving_accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saving_accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `balance` decimal(10,2) DEFAULT '0.00',
  `interestRate` decimal(5,2) DEFAULT '0.00',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `saving_accounts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saving_accounts`
--

LOCK TABLES `saving_accounts` WRITE;
/*!40000 ALTER TABLE `saving_accounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `saving_accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'salvador bermudez','salvadorjosebermudezbastidas@gmail.com','trucha','admin','2024-07-03 15:34:43','2024-07-03 15:37:35'),(3,'Pablo Troconis','sheintru@gmail.com','conga','editor','2024-07-03 15:39:49','2024-07-03 15:39:49'),(7,'michael morena','salva@gmail.com','$2a$10$XhviuO.Er4PE6g0TbWLvuOAEZl2.ZNERzFxmnKoCObZGPnSoHEE5m','admin','2024-07-03 16:34:11','2024-07-03 16:34:11');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_cooperatives`
--

DROP TABLE IF EXISTS `user_cooperatives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_cooperatives` (
  `role` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int NOT NULL,
  `cooperativeId` int NOT NULL,
  PRIMARY KEY (`userId`,`cooperativeId`),
  KEY `cooperativeId` (`cooperativeId`),
  CONSTRAINT `user_cooperatives_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_cooperatives_ibfk_2` FOREIGN KEY (`cooperativeId`) REFERENCES `cooperatives` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_cooperatives`
--

LOCK TABLES `user_cooperatives` WRITE;
/*!40000 ALTER TABLE `user_cooperatives` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_cooperatives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('viewer','editor','admin') NOT NULL DEFAULT 'viewer',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'mirtha','mirtha@gmail.com','$2a$10$kg3EIk6bB7sgez3hubjQ9OWjsvLeHK7.d0HHtjC9XCFbHLT2Q8i/2','admin','2024-07-04 15:07:28','2024-07-04 15:07:28'),(9,'erica','erica@gmail.com','erica','editor','2024-07-04 16:02:33','2024-07-04 16:02:33'),(10,'anthonella','antho@gmail.com','$2b$10$txV9ZijaoZcHQoE9F75.rex81iYe2QlezdjmzpUFB9MQMS7HcBgpq','editor','2024-07-04 16:40:32','2024-07-04 16:40:32'),(11,'salvador ','salvadorjose32@gmail.com','$2b$10$T985szglBxYobu0PJm3nnODaMKkrcnSybcP7WBBkn7ETmkY6f91Xq','admin','2024-07-05 14:52:00','2024-07-05 14:52:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-05 14:53:02
