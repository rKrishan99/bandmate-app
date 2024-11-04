-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2024 at 09:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bandmate`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `applicationID` int(10) NOT NULL,
  `vacancyID` int(20) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `bandEmail` varchar(50) NOT NULL,
  `price` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`applicationID`, `vacancyID`, `userEmail`, `bandEmail`, `price`) VALUES
(8, 0, 'user1@example.com', 'band1@example.com', 50),
(9, 0, 'user2@example.com', 'band2@example.com', 75),
(10, 0, 'user3@example.com', 'band1@example.com', 100),
(11, 0, 'user4@example.com', 'band3@example.com', 60),
(12, 0, 'user5@example.com', 'band2@example.com', 80);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `type` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `about` varchar(2000) NOT NULL,
  `experience` int(100) NOT NULL,
  `category` varchar(20) NOT NULL,
  `imgpath` varchar(200) NOT NULL,
  `phone` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `type`, `name`, `about`, `experience`, `category`, `imgpath`, `phone`) VALUES
('alice.jones@example.com', 'password789', 'player', 'Alice Jones', 'A skilled drummer with a love for jazz.', 2, 'Jazz', '/images/alicejones.jpg', '345-678-9012'),
('bob.brown@example.com', 'password321', 'band', 'Brown Band', 'An energetic band blending rock and blues.', 4, 'Blues', '/images/bobbrown.jpg', '456-789-0123'),
('charlie.white@example.com', 'password654', 'player', 'Charlie White', 'A vocalist with a passion for folk music.', 6, 'Folk', '/images/charliewhite.jpg', '567-890-1234'),
('jane.smith@example.com', 'password456', 'band', 'Jane Smith Band', 'A dynamic band known for their live performances.', 5, 'Pop', '/images/janesmithband.jpg', '234-567-8901'),
('john.doe@example.com', 'password123', 'player', 'John Doe', 'A passionate guitarist.', 3, 'Rock', '/images/johndoe.jpg', '123-456-7890'),
('newband@example.com', 'secureBandPassword123', 'band', 'The New Band', 'A group of talented musicians ready to perform.', 0, '', '/images/newband.jpg', '098-765-4321');

-- --------------------------------------------------------

--
-- Table structure for table `vacancy`
--

CREATE TABLE `vacancy` (
  `vacancyID` int(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(2000) NOT NULL,
  `bandemail` varchar(200) NOT NULL,
  `priceMin` int(10) NOT NULL,
  `priceMax` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacancy`
--

INSERT INTO `vacancy` (`vacancyID`, `category`, `title`, `description`, `bandemail`, `priceMin`, `priceMax`) VALUES
(11, 'keyboard', 'Keyboardist Needed', 'In need of a keyboardist for various performances.', 'band3@example.com', 85, 125),
(12, 'guitarist', 'Rhythm Guitarist Required', 'Seeking a rhythm guitarist to join our music group.', 'band1@example.com', 90, 130),
(13, 'drummer', 'Session Drummer Wanted', 'Looking for a session drummer for recording sessions.', 'band2@example.com', 75, 115);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`applicationID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `vacancy`
--
ALTER TABLE `vacancy`
  ADD PRIMARY KEY (`vacancyID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `applicationID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `vacancy`
--
ALTER TABLE `vacancy`
  MODIFY `vacancyID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
